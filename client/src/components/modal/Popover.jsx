import React from "react";
import { useMount } from "../../hooks/useMount";
import Portal from "../portal/Portal";
import { Layout } from "./Layouts/popover/PopoverLayout";

export const Popover =({ opened, onClose, parent, children }) => {
  const { mounted } = useMount({ opened });

  if (!mounted) {
    return null;
  }

  return (
    <Portal parent = {parent}>
      <Layout onClose={onClose} opened={opened}>
        {children}
      </Layout>
    </Portal>
  );
};