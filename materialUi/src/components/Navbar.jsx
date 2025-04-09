import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import { alpha } from "@mui/system";
import { Cancel, Mail, Notifications, Search } from "@mui/icons-material";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          Prash Dev
        </Typography>
        <Typography
          variant="h6"
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        >
          Prash
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: (theme) => alpha(theme.palette.common.white, 0.15),
            "&:hover": {
              backgroundColor: (theme) =>
                alpha(theme.palette.common.white, 0.25),
            },
            borderRadius: 1,
            width: { xs: open ? "70%" : "0%", sm: "50%" },
            overflow: "hidden",
            transition: "width 0.3s ease",
            paddingX: open ? 1 : 0,
          }}
        >
          <Search sx={{ marginLeft: 1 }} />
          <InputBase
            placeholder="Search..."
            sx={{ color: "white", marginLeft: 1, flex: 1 }}
          />
          <Cancel
            sx={{
              display: { xs: "block", sm: "none" },
              cursor: "pointer",
            }}
            onClick={() => setOpen(false)}
          />
        </Box>

        <Box
          sx={{
            display: { xs: open ? "none" : "flex", sm: "flex" },
            alignItems: "center",
          }}
        >
          <Search
            sx={{
              marginRight: 2,
              cursor: "pointer",
              display: { xs: "flex", sm: "none" },
            }}
            onClick={() => setOpen(true)}
          />
          <Badge badgeContent={4} color="secondary" sx={{ marginRight: 2 }}>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="secondary" sx={{ marginRight: 2 }}>
            <Notifications />
          </Badge>
          <Avatar
            alt="User Avatar"
            src="https://images.pexels.com/photos/8647814/pexels-photo-8647814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
