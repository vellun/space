import { Layout } from "App/components/";
import { useQueryParamsStoreInit } from "store/RootStore/hooks";
import { queryStore } from "store/RootStore/QueryParamsStore/instance";

function App() {
  useQueryParamsStoreInit(queryStore);
  
  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
