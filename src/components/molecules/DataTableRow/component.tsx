import { TableRow, TableCell } from "@mui/material";
import { FC } from "react";
import { DataTableRowProps } from "./component.types";

const DataTableRow: FC<DataTableRowProps> = (props) => {
  const { content, title } = props;
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {title}
      </TableCell>
      {content.map((item, index) => (
        <TableCell key={index} align="right">
          {item}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default DataTableRow;
