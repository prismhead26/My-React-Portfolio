import App from "./App";

// mui.com for dark mode
import { GlobalStyles, Switch } from "@mui/material";
import Paper from "@mui/material/Paper";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import { amber, blue, deepOrange, grey } from "@mui/material/colors";
import FormControlLabel from "@mui/material/FormControlLabel";

function Darkmode() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(prefersDarkMode); // ['light', 'dark']
  const appTheme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
      primary: {
        main: mode ? amber[700] : deepOrange[700],
      },
      text: {
        primary: mode ? amber[50] : grey[900],
      },
      background: {
        paper: mode ? grey[900] : grey[50],
      },
    },
  });
  // console.log(mode);

  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyles
        styles={{
          body: { backgroundColor: mode ? grey[900] : blue[50],
            height: "100vh",
          },
        }}
      />
      <Paper elevation={0} sx={{ height: "100vh" }} square>
        <App style={{backgroundColor: mode ? grey[900]: '#186e08'}}/>
        <FormControlLabel
          control={
            <Switch
              checked={mode}
              onChange={() => setMode(!mode)}
              inputProps={{ "aria-label": "controlled" }}
              className="switch"
            />
          }
          label="Dark Mode Toggle"
        />
      </Paper>
    </ThemeProvider>
  );
}

export default Darkmode;
