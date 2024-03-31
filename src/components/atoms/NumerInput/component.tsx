import { ChangeEvent, FC } from "react";
import { NumberInputProps } from "./component.types";
import { TextField } from "@mui/material";

// This component should be improved
// MUI Doesn't have a stable number input
// MUI TextField with type number doesn't trigger onChange event if received value is not a number
// I will not create complete validation for this component but it should be improved
const NumberInput: FC<NumberInputProps> = (props) => {
  const { onChange, positive, defaultValue, ...rest } = props;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (positive && value < 1) {
      defaultValue && onChange(defaultValue);
      alert("Wrong value, the number should be positive.");
      return;
    }
    onChange(value);
  };
  return <TextField type="number" {...rest} onChange={handleChange} />;
};

export default NumberInput;
