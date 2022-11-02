import { useMount } from "../../hooks/useMount";
import Portal from "../portal/Portal";
import { Layout } from "./Layout/Layout";

export const Modal = ({ opened, onClose, children }) => {
  const { mounted } = useMount({ opened });

  if (!mounted) {
    return null;
  }

  return (
    <Portal>
      <Layout onClose={onClose} opened={opened}>
        {children}
      </Layout>
    </Portal>
  );
};