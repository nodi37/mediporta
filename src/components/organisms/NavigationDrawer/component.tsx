import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Drawer } from "@mui/material";
import NavigationList from "../NavigationList/component";
import { NavigationDrawerProps } from "./component.types";

const NavigationDrawer: FC<NavigationDrawerProps> = (props) => {
  const { items, isOpen, setIsOpen } = props;
  const location = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
      <NavigationList items={items} />
    </Drawer>
  );
};

export default NavigationDrawer;
