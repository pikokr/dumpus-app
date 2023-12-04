import { Link } from "./types";
import {
  ArrowTrendingUpIcon,
  ChartBarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import packageJson from "../package.json";
import { Capacitor } from "@capacitor/core";

const { version } = packageJson;

export const links = [
  {
    name: "overview",
    href: "/overview",
    active: (str) => str.startsWith("/overview"),
    icon: ChartPieIcon,
  },
  {
    name: "top",
    href: "/top/dms",
    active: (str) => str.startsWith("/top"),
    icon: ArrowTrendingUpIcon,
  },
  {
    name: "stats",
    href: "/stats",
    active: (str) => str.startsWith("/stats"),
    icon: ChartBarIcon,
  },
  {
    name: "settings",
    href: "/settings",
    active: (str) => str.startsWith("/settings"),
    icon: Cog6ToothIcon,
    desktop: true,
  },
] satisfies (Link & { desktop?: boolean })[];

export const DEFAULT_PACKAGE_API_URL = "https://dumpus-api.paring.moe";

export const DEFAULT_REMOTION_API_URL = "https://remotion-api.sys.dumpus.app";

export const DEFAULT_WIDGET_API_URL = "https://widget.dumpus.app";

export const SQL_DEFAULT_LIMIT = 20;

export const BASE_URL = "https://dumpus.paring.moe";

export const SITE_NAME = "Dumpus hosted by paring";

export const ESTIMATED_QUEUE_DURATION = 60 * 2 * 1000; // 2m in ms

const _nodeEnv = (() => {
  switch (process.env.NODE_ENV) {
    case "development":
      return "dev";
    case "production":
      return "prod";
    default:
      return process.env.NODE_ENV;
  }
})();

export const VERSION = `v${version}-${process.env.NEXT_PUBLIC_DEPLOY_ENV} (${_nodeEnv})`;

export const OS = Capacitor.getPlatform() as "android" | "ios" | "web";
