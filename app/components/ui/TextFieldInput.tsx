import { TextField } from "@mui/material";
import { TextFieldType } from "../types/ui";

export default function TextFieldInput({
  label,
  name,
  onChange,
  value,
  ...props
}: TextFieldType) {
  return (
    <TextField
      label={label}
      className={props.className}
      name={name}
      value={value}
      variant="outlined"
      onChange={onChange}
      type={props.type}
    />
  );
}
