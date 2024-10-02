import * as React from "react";
import { ThemeProvider } from "@emotion/react";
import Autocomplete from "./components/Autocomplete";
import Button from "./components/Button";

const theme = {
  palette: {
    primary: "#007AFF",
    text: "#fff",
    background: "#fff",
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button sx={{ m: 16 }}>Create Repository</Button>
      <div style={{ margin: "0 256px" }}>
        <Autocomplete />
      </div>
    </ThemeProvider>
  );
}

