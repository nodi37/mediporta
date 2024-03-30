import { NavigationListProps } from "../NavigationList/component.types";

export type NavigationDrawerProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
} & NavigationListProps;
