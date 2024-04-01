import { InfoOutlined } from "@mui/icons-material";
import SecondPage from "./Second";
import { RouteObject } from "react-router-dom";
import { ReactNode } from "react";
import { NavigationListItemProps } from "@/components/molecules/NavigationListItem/component.types";
import tagsPageConfig from "./Tags";

export type ChildrenPageData = {
  route: RouteObject;
  navigation: {
    text: string;
    icon: ReactNode;
  };
};

// I would move all the configs to page index files
// Like the tags page
const children: Array<ChildrenPageData> = [
  tagsPageConfig,
  {
    route: {
      path: "second",
      element: <SecondPage />,
    },
    navigation: {
      text: "Second page",
      icon: <InfoOutlined />,
    },
  },
];

const appRoutes = children.map((childData) => childData.route);
const navigationMenuItems: Array<NavigationListItemProps> = children.map(
  (childData, index) => {
    const { route, navigation } = childData;

    // This will throw only under development
    if (!route.path) {
      throw new Error(
        `All child routes needs to have a path. Please check @/pages/App/children/index.ts => children[${index}]`
      );
    }
    return {
      ...navigation,
      href: route.path,
    };
  }
);

// To test 404
// navigationMenuItems.push({
//   text: "Non-existent",
//   icon: "X",
//   href: "/non-existent",
// });

export { appRoutes, navigationMenuItems };
