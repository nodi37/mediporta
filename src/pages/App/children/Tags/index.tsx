import TagsPage from "./page";
import { ChildrenPageData } from "..";
import { Tag } from "@mui/icons-material";

const tagsPageConfig: ChildrenPageData = {
  route: {
    path: "tags",
    element: <TagsPage />,
  },
  navigation: {
    text: "Tags",
    icon: <Tag />,
  },
};

export default tagsPageConfig;
