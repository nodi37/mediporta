import { TableRow as MuiTableRow, TableCell } from "@mui/material";
import { FC } from "react";
import { TableRowProps } from "./component.types";

const TableRow: FC<TableRowProps> = (props) => {
  const { rowContent, rowTitle } = props;
  return (
    <MuiTableRow>
      <TableCell component="th" scope="row">
        {rowTitle}
      </TableCell>
      {rowContent.map((item, index) => (
        <TableCell key={index} align="right">
          {item}
        </TableCell>
      ))}
    </MuiTableRow>
  );
};

export default TableRow;
