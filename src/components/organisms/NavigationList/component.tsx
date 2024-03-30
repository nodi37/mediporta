import { List } from "@mui/material";
import { NavigationListProps } from "./component.types";
import { FC } from "react";
import NavigationListItem from "../../molecules/NavigationListItem";
import styles from "./component.module.css";

const NavigationList: FC<NavigationListProps> = (props) => {
  const { items } = props;
  return (
    <nav>
      <List className={styles["list"]}>
        {items.map((item, index) => (
          <NavigationListItem key={index} {...item} />
        ))}
      </List>
    </nav>
  );
};

export default NavigationList;
