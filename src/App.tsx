import { InitSwAuth } from "@skill-wallet/auth";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    InitSwAuth();
  }, []);
  return (
    <div className="text-xl text-red-500">
      {/* @ts-ignore */}
      <sw-auth
        partner-key="d2af0de3d704460251bb855baa51f84280dbbc65"
        use-dev="true"
        use-button-options="true"
      />
    </div>
  );
};

export default App;
