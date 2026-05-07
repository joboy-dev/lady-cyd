'use client'

import { useZodForm } from "@/lib/hooks/useZodForm";
import { harbourJoinSchema } from "@/lib/validators/general";
import { z } from "zod";
import FormWrapper from "./form/Form";
import FormInput from "./form/FormInput";

type HarbourJoinData = z.infer<typeof harbourJoinSchema>;

export default function HarbourJoinForm() {
  const methods = useZodForm<HarbourJoinData>(harbourJoinSchema, {
    name: "",
    email: "",
  });

  function handleSubmit(data: HarbourJoinData) {
    // TODO: wire to mailing list provider (e.g. Mailchimp, ConvertKit)
    console.log(data);
  }

  return (
    <div
      className="w-full max-w-md"
      style={{
        background: "var(--secondary)",
        border: "1px solid rgba(197,75,140,0.15)",
      }}
    >
      <FormWrapper
        methods={methods}
        onSubmit={methods.handleSubmit(handleSubmit)}
        submitLabel="I Am Ready to Enter"
        buttonVariant="primary"
        className="shadow-none! rounded-none!"
        afterButtonContent={
          <p
            className="font-sans text-xs text-center leading-relaxed mt-3"
            style={{ color: "var(--muted-foreground)", opacity: 0.7 }}
          >
            Free to join. No spam, ever. Unsubscribe at any time.
          </p>
        }
      >
        <FormInput
          name="name"
          label="Your Name"
          placeholder="What shall we call you?"
          autoComplete="name"
          required
        />
        <FormInput
          name="email"
          label="Email Address"
          type="email"
          placeholder="Your email address"
          autoComplete="email"
          required
        />
      </FormWrapper>
    </div>
  );
}
