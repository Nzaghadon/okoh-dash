"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { SaasProvider } from "@saas-ui/react";
import React from "react";

export type Props = {
  children?: React.ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <CacheProvider>
      <SaasProvider>{children}</SaasProvider>
    </CacheProvider>
  );
};
