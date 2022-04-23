import { queryExample } from "./lens/test";
import { authenticate } from "./lens/variables";

function App() {
  console.log(
    authenticate(
      "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
      "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
    )
  );
  return <div className="text-xl text-red-500">Test</div>;
}

export default App;
