'use client';

import { z } from 'zod';
import { useZodForm } from '@/lib/hooks/useZodForm';
import { harbourJoinSchema } from '@/lib/validators/general';
import FormWrapper from '@/components/shared/form/Form';
import FormInput from '@/components/shared/form/FormInput';
import { subscribe } from '@/app/actions/subscribe';
import toast from 'react-hot-toast';
import { useState } from 'react';

type SubscribeData = z.infer<typeof harbourJoinSchema>;

interface Props {
  /** Passed as the source tag to ConvertKit — tracks where sign-ups came from */
  source?: string;
}

export default function SubscribeForm({ source }: Props) {
  const [done, setDone] = useState(false);

  const methods = useZodForm<SubscribeData>(harbourJoinSchema, {
    name: '',
    email: '',
  });

  const onSubmit = methods.handleSubmit(async (data: SubscribeData) => {
    const result = await subscribe({ name: data.name, email: data.email, source });
    if (result.success) {
      setDone(true);
      toast.success("You're in. Watch your inbox.");
      methods.reset();
    } else {
      toast.error(result.error ?? 'Something went wrong. Please try again.');
    }
  });

  if (done) {
    return (
      <div className="flex flex-col items-center gap-3 py-6 text-center">
        <span
          className="font-cinzel text-xs tracking-widest uppercase"
          style={{ color: 'var(--gold)' }}
        >
          ✦ You&apos;re in
        </span>
        <p
          className="font-cormorant italic text-xl"
          style={{ color: 'var(--foreground)' }}
        >
          Watch your inbox — something good is coming.
        </p>
      </div>
    );
  }

  return (
    <FormWrapper
      methods={methods}
      onSubmit={onSubmit}
      submitLabel="Subscribe — Always Free"
      submittingLabel="Subscribing…"
      isSubmitting={methods.formState.isSubmitting}
      className="shadow-none! rounded-none! bg-transparent!"
      afterButtonContent={
        <p
          className="font-sans text-xs text-center leading-relaxed mt-2"
          style={{ color: 'var(--muted-foreground)' }}
        >
          Bi-weekly · Always free · No spam · Unsubscribe anytime
        </p>
      }
    >
      <div className="grid sm:grid-cols-2 gap-0 sm:gap-4">
        <FormInput
          name="name"
          label="Your Name"
          placeholder="e.g. Adaeze"
          required
        />
        <FormInput
          name="email"
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          required
        />
      </div>
    </FormWrapper>
  );
}
