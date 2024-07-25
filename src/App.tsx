import { MainRoutes } from "./routers/routes";
import { RootLayout } from "./layouts";

function App() {
  return (
    <RootLayout>
      <MainRoutes />
    </RootLayout>
  );
}

export default App;
