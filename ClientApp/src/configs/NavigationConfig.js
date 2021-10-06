import { DashboardOutlined } from "@ant-design/icons";

import { APP_PREFIX_PATH } from "configs/AppConfig";

const dashBoardNavTree = [
  {
    key: "Güncel Durum",
    path: `${APP_PREFIX_PATH}/dashboard`,
    title: "Güncel Durum",
    icon: DashboardOutlined,
    submenu: [],
  },
];

const navigationConfig = [...dashBoardNavTree];

export default navigationConfig;
