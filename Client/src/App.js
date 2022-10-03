import ProviderRoutes from "./Components/ProviderRoutes";
import ContextUser from "./Components/ContextUser";

import { theme } from "./Components/theme";
import { ThemeProvider } from "@mui/material/styles";

const App = () => {
  return (
    <ContextUser>
      <ThemeProvider theme={theme}>
        <ProviderRoutes />
      </ThemeProvider>
    </ContextUser>
  );
};

export default App;
