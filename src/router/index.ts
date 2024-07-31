import About from "../pages/about/About";
import Home from "../pages/home/Home";
import { ComponentType, ReactNode } from "react";

export interface IRoute {
  path: string;
  element: ReactNode;
}

export enum RouteNames {
  HOME = "/home",
  ABOUT = "/about",
}

export const allRoutes: IRoute[] = [
  { path: RouteNames.HOME, element: <Home /> },
  { path: RouteNames.ABOUT, element: <About /> },
];
