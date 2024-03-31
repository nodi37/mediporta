import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { FC } from "react";
import DataTableRow from "../../molecules/DataTableRow";
import { DataTableProps } from "./component.props";

const DataTable: FC<DataTableProps> = (props) => {
  const { title, rows } = props;
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{title.main}</TableCell>
            {title.data.map((title, index) => (
              <TableCell key={`title-${index}`} align="right">
                {title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <DataTableRow key={`row-${index}`} {...row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
