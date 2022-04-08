import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./context";
import { BottomTabs, StackMenu } from "./routes";
import { Provider as PaperProvider } from "react-native-paper";
export default function App() {
  return (
    <PaperProvider>
      <AuthProvider>
        <NavigationContainer>
          <StackMenu />
        </NavigationContainer>
      </AuthProvider>
    </PaperProvider>
  );
}
