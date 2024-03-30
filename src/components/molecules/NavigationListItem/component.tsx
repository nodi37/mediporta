import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavigationListItemProps } from "./component.types";

const NavigationListItem: FC<NavigationListItemProps> = (props) => {
  const { icon, text, href } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const isSelected = location.pathname == href;
  const handleClick = () => {
    if (isSelected) return;
    navigate(href);
  };

  return (
    <ListItemButton selected={isSelected} onClick={handleClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
};

export default NavigationListItem;
