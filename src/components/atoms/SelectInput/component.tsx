import { InputLabel, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FC } from "react";
import { SelectInputProps } from "./component.types";

const SelectInput: FC<SelectInputProps> = (props) => {
  const labelId = "select-label";
  const { label, value, onChange, items } = props;
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string);
  };

  return (
    <div>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select labelId={labelId} value={value} onChange={handleChange}>
        {items.map((data, index) => (
          <MenuItem key={index} value={data.value}>
            {data.title}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectInput;
