'use client';

import { z } from "zod";
import { useZodForm } from "@/lib/hooks/useZodForm";
import { clarityCallSchema } from "@/lib/validators/general";
import type { Option } from "@/lib/interfaces/general";
import FormWrapper from "@/components/shared/form/Form";
import FormInput from "@/components/shared/form/FormInput";
import TextAreaInput from "@/components/shared/form/TextAreaInput";
import SelectField from "@/components/shared/form/SelectField";
import { submitClarityCall } from "@/app/actions/clarity-call";
import toast from "react-hot-toast";

type ClarityCallData = z.infer<typeof clarityCallSchema>;

const heardViaOptions: Option[] = [
  { key: 1, label: "Instagram", value: "instagram" },
  { key: 2, label: "Threads", value: "threads" },
  { key: 3, label: "Friend / Referral", value: "referral" },
  { key: 4, label: "Eden Life Design™ Community", value: "eden-life-design" },
  { key: 5, label: "Blog / The Journal", value: "blog" },
  { key: 6, label: "Search / Google", value: "search" },
  { key: 7, label: "Other", value: "other" },
];

export default function ClarityCallForm() {
  const methods = useZodForm<ClarityCallData>(clarityCallSchema, {
    name: "",
    email: "",
    heard_via: "",
    current_place: "",
    desired_outcome: "",
    readiness: "",
  });

  const onSubmit = methods.handleSubmit(async (data: ClarityCallData) => {
    const result = await submitClarityCall(data);
    if (result.success) {
      toast.success("Application received. Lady Cyd will be in touch within 3–5 business days.");
      methods.reset();
    } else {
      toast.error(result.error ?? "Something went wrong. Please try again.");
    }
  });

  return (
    <FormWrapper
      methods={methods}
      onSubmit={onSubmit}
      submitLabel="Submit My Application"
      submittingLabel="Sending…"
      isSubmitting={methods.formState.isSubmitting}
      className="shadow-none! rounded-none! bg-transparent!"
      afterButtonContent={
        <p
          className="font-sans text-xs text-center leading-relaxed mt-3"
          style={{ color: "var(--muted-foreground)" }}
        >
          Applications are reviewed personally by Lady Cyd. You will receive a response
          within 3–5 business days.
        </p>
      }
    >
      <div className="grid sm:grid-cols-2 gap-0 sm:gap-4">
        <FormInput
          name="name"
          label="Full Name"
          placeholder="e.g. Adaeze Okafor"
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

      <SelectField
        label="How did you find Lady Cyd?"
        register={methods.register("heard_via")}
        error={methods.formState.errors.heard_via}
        options={heardViaOptions}
      />

      <TextAreaInput
        name="current_place"
        label="Where are you on your journey right now?"
        placeholder="Share a little about what you've been going through, what you've tried, and where you feel stuck or unclear…"
        rows={4}
        required
      />

      <TextAreaInput
        name="desired_outcome"
        label="What do you most want to focus on or shift?"
        placeholder="What is the core thing you want clarity, freedom, or transformation around? Be as honest as you can…"
        rows={4}
        required
      />

      <TextAreaInput
        name="readiness"
        label="Why do you feel ready for this work now?"
        placeholder="What has brought you to this point? What tells you this is your season?…"
        rows={3}
        required
      />
    </FormWrapper>
  );
}
