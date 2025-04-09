import { Grid } from "@mui/material";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import { theme } from "./theme";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Add from "./components/Add";

export default function App() {
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid size={2}>
          <Leftbar />
        </Grid>
        <Grid size={{ xs: 10, sm: 7 }}>
          <Feed />
        </Grid>
        <Grid
          size={3}
          sx={{
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
          }}
        >
          <Rightbar />
        </Grid>
      </Grid>
      <Add />
    </div>
  );
}
