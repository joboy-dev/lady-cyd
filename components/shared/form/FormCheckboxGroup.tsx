import React from "react"
import { useController, useFormContext, type FieldError } from "react-hook-form"

interface CheckboxOption {
  label: string
  value: string
}

interface FormCheckboxGroupProps {
  name: string
  label?: string
  description?: string
  options: CheckboxOption[]
  required?: boolean
  className?: string
}

/** Multi-select ("select all that apply"). The field value is a string[] of the checked option values. */
const FormCheckboxGroup: React.FC<FormCheckboxGroupProps> = ({
  name,
  label,
  description,
  options,
  required = false,
  className = "",
}) => {
  const { control, formState: { errors } } = useFormContext()
  const { field } = useController({ name, control, defaultValue: [] })
  const selected: string[] = Array.isArray(field.value) ? field.value : []
  const error = errors[name] as FieldError | undefined

  const toggle = (value: string) => {
    field.onChange(
      selected.includes(value) ? selected.filter((v) => v !== value) : [...selected, value]
    )
  }

  return (
    <fieldset className={`w-full mb-4 ${className}`}>
      {label && (
        <legend className="block text-sm font-medium text-foreground mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </legend>
      )}
      {description && <p className="text-sm text-muted-foreground mb-2">{description}</p>}
      <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
        {options.map((opt) => {
          const id = `${name}-${opt.value}`
          return (
            <label key={opt.value} htmlFor={id} className="flex items-start gap-2 cursor-pointer">
              <input
                id={id}
                type="checkbox"
                checked={selected.includes(opt.value)}
                onChange={() => toggle(opt.value)}
                onBlur={field.onBlur}
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

export default FormCheckboxGroup
