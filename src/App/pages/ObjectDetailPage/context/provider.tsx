import { ObjectStore } from "store/ObjectStore";
import { ObjectContext } from "./context";

export const ObjectProvider = ({
  objectName,
  children,
}: {
  objectName: string;
  children: React.ReactNode;
}) => {
  const store = new ObjectStore();
  store.init(objectName);
  return <ObjectContext.Provider value={{ store }}>{children}</ObjectContext.Provider>;
};
