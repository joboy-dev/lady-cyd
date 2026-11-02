'use client';

import { useState } from 'react';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { useZodForm } from '@/lib/hooks/useZodForm';
import { harbourJoinSchema } from '@/lib/validators/general';
import FormWrapper from '@/components/shared/form/Form';
import FormInput from '@/components/shared/form/FormInput';
import { joinGatheringWaitlist } from '@/app/actions/waitlist';

type WaitlistData = z.infer<typeof harbourJoinSchema>;

export default function GatheringWaitlist({ label }: { label: string }) {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);

  const methods = useZodForm<WaitlistData>(harbourJoinSchema, { name: '', email: '' });

  const onSubmit = methods.handleSubmit(async (data: WaitlistData) => {
    const result = await joinGatheringWaitlist(data);
    if (result.success) {
      setDone(true);
      methods.reset();
    } else {
      toast.error(result.error ?? 'Something went wrong. Please try again.');
    }
  });

  if (done) {
    return (
      <div className="flex flex-col gap-2 py-4 text-center">
        <span className="font-cinzel text-xs tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
          ✦ You&apos;re on the waitlist
        </span>
        <p className="font-cormorant italic text-xl" style={{ color: 'var(--foreground)' }}>
          You will hear from us when the next cohort opens.
        </p>
      </div>
    );
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center w-full font-cinzel text-xs tracking-widest uppercase px-6 py-3 cursor-pointer transition-colors duration-200 hover:opacity-90"
        style={{ background: 'var(--primary)', color: 'white' }}
      >
        {label}
      </button>
    );
  }

  return (
    <FormWrapper
      methods={methods}
      onSubmit={onSubmit}
      submitLabel="Join the Waitlist"
      submittingLabel="Joining…"
      isSubmitting={methods.formState.isSubmitting}
      className="shadow-none! rounded-none! bg-transparent! p-0! md:p-0!"
    >
      <FormInput name="name" label="Your Name" placeholder="e.g. Adaeze" required />
      <FormInput name="email" label="Email Address" type="email" placeholder="you@example.com" required />
    </FormWrapper>
  );
}
