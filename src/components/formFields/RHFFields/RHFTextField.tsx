import { useFormContext } from "react-hook-form";

import { getFieldError } from "./helpers";
import { FieldError } from "../FieldError";
import { FieldLabel } from "../FieldLabel";
import { TextField, TextFieldProps } from "../TextField";

export type RHFTextFieldProps = {
  name: string;
  label: string;
} & TextFieldProps;

export const RHFTextField = ({
  name,
  label,
  required,
  ...props
}: RHFTextFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = getFieldError(errors, name);

  return (
    <div>
      <FieldLabel htmlFor={name} required={required} hasError={!!error}>
        {label}
      </FieldLabel>
      <TextField id={name} hasError={!!error} {...register(name)} {...props} />
      <FieldError show={!!error}>{error}</FieldError>
    </div>
  );
};
