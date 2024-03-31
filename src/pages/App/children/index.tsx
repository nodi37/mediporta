import { InfoOutlined, Tag } from "@mui/icons-material";
import SecondPage from "./Second";
import TagsPage from "./Tags";
import { RouteObject } from "react-router-dom";
import { ReactNode } from "react";
import { NavigationListItemProps } from "@/components/molecules/NavigationListItem/component.types";

type ChildrenData = {
  route: RouteObject;
  navigation: {
    text: string;
    icon: ReactNode;
  };
};

const children: Array<ChildrenData> = [
  {
    route: {
      path: "tags",
      element: <TagsPage />,
    },
    navigation: {
      text: "Tags",
      icon: <Tag />,
    },
  },
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
