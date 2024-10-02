import * as React from "react";
import { ThemeProvider } from "@emotion/react";
import { borderRadius, height, styled, width } from "@mui/system";
import { Button } from "@mui/base/Button";
import UseAutocomplete from "./Autocomplete";

const theme = {
  palette: {
    primary: "#007AFF",
    text: "#fff",
    background: "#fff",
  },
};

const GitHubButton = styled(Button)(
  ({ theme }) => `
    background-color: ${theme.palette.primary};
    background-image: linear-gradient(180deg, rgb(255 255 255 / 17%), transparent);
    box-shadow: 0 1px 2.5px 0 rgba(0, 122, 255, 24%), 0 0 0 0.5px rgb(0 122 255 / 12%);
    border: none;
    border-radius: 5px;
    padding: 6px 12px;
    color: white;
    cursor: pointer;
    font-size: 13px;
    line-height: 16px;

    &:active {
    background-image: linear-gradient(0deg, rgb(0 0 0 / 17%), transparent);
    }
  `
);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GitHubButton sx={{ m: 16 }}>Create Repository</GitHubButton>
      <div style={{ margin: "0 256px" }}>
        <UseAutocomplete />
      </div>
    </ThemeProvider>
  );
}

