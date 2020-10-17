import React from "react";
import { isMobile } from "react-device-detect";
import { Layout } from "../../components/layouts";
import { DesktopView } from "./DesktopView";
import { MobileView } from "./MobileView";

export const Inicio = () => {
  return !isMobile ? (
    <Layout>
      <DesktopView />
    </Layout>
  ) : (
    <Layout>
      <MobileView />
    </Layout>
  );
};
