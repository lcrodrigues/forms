import { NativeBaseProvider } from "native-base";
import SignUp from "./screens/SignUp";

export default function App() {
  return (
    <NativeBaseProvider>
      <SignUp />
    </NativeBaseProvider>
  );
}
