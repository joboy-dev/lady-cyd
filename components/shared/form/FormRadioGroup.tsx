import React from "react"
import { useFormContext, type FieldError } from "react-hook-form"

interface RadioOption {
  label: string
  value: string
}

interface FormRadioGroupProps {
  name: string
  label?: string
  description?: string
  options: RadioOption[]
  required?: boolean
  className?: string
}

/** Single-choice group. The field value is the selected option's value ("" when nothing is chosen). */
const FormRadioGroup: React.FC<FormRadioGroupProps> = ({
  name,
  label,
  description,
  options,
  required = false,
  className = "",
}) => {
  const { register, formState: { errors } } = useFormContext()
  const error = errors[name] as FieldError | undefined

  return (
    <fieldset className={`w-full mb-4 ${className}`}>
      {label && (
        <legend className="block text-sm font-medium text-foreground mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </legend>
      )}
      {description && <p className="text-sm text-muted-foreground mb-2">{description}</p>}
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {options.map((opt) => {
          const id = `${name}-${opt.value}`
          return (
            <label key={opt.value} htmlFor={id} className="flex items-start gap-2 cursor-pointer">
              <input
                id={id}
                type="radio"
                value={opt.value}
                {...register(name)}
                className="h-4 w-4 mt-0.5 shrink-0 accent-(--primary)"
              />
              <span className="text-[14px] text-foreground leading-snug">{opt.label}</span>
            </label>
          )
        })}
      </div>
      {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}
    </fieldset>
  )
}

export default FormRadioGroup
