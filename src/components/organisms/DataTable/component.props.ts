import { DataTableRowProps } from "@/components/molecules/DataTableRow/component.types";

export type DataTableProps = {
  title: {
    main: string;
    data: Array<string>;
  };
  rows: Array<DataTableRowProps>;
};
