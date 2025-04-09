import {
  Bookmark,
  ExitToApp,
  Home,
  List,
  Person,
  PhotoCamera,
  PlayCircleOutline,
  Settings,
  Storefront,
  TabletMac,
} from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { theme } from "../theme";

export default function Leftbar() {
  return (
    <Container
      sx={{
        height: "100vh",
        color: "white",
        paddingTop: theme.spacing(10),
        backgroundColor: theme.palette.primary.main,
        position: "sticky",
        top: 0,
        [theme.breakpoints.up("sm")]: {
          backgroundColor: "white",
          color: "#555",
          border: "1px solid #ece7e7",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: theme.spacing(4),
          [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(3),
            cursor: "pointer",
          },
        }}
      >
        <Home
          sx={{
            marginRight: theme.spacing(1),
            [theme.breakpoints.up("sm")]: {
              fontSize: "18px",
            },
          }}
        />
        <Typography
          sx={{
            fontWeight: 500,
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
          }}
        >
          HomePage
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: theme.spacing(4),
          [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(3),
            cursor: "pointer",
          },
        }}
      >
        <Person
          sx={{
            marginRight: theme.spacing(1),
            [theme.breakpoints.up("sm")]: {
              fontSize: "18px",
            },
          }}
        />
        <Typography
          sx={{
            fontWeight: 500,
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
          }}
        >
          Friends
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: theme.spacing(4),
          [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(3),
            cursor: "pointer",
          },
        }}
      >
        <List
          sx={{
            marginRight: theme.spacing(1),
            [theme.breakpoints.up("sm")]: {
              fontSize: "18px",
            },
          }}
        />
        <Typography
          sx={{
            fontWeight: 500,
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
          }}
        >
          Lists
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: theme.spacing(4),
          [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(3),
            cursor: "pointer",
          },
        }}
      >
        <PhotoCamera
          sx={{
            marginRight: theme.spacing(1),
            [theme.breakpoints.up("sm")]: {
              fontSize: "18px",
            },
          }}
        />
        <Typography
          sx={{
            fontWeight: 500,
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
          }}
        >
          Camera
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: theme.spacing(4),
          [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(3),
            cursor: "pointer",
          },
        }}
      >
        <PlayCircleOutline
          sx={{
            marginRight: theme.spacing(1),
            [theme.breakpoints.up("sm")]: {
              fontSize: "18px",
            },
          }}
        />
        <Typography
          sx={{
            fontWeight: 500,
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
          }}
        >
          Videos
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: theme.spacing(4),
          [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(3),
            cursor: "pointer",
          },
        }}
      >
        <TabletMac
          sx={{
            marginRight: theme.spacing(1),
            [theme.breakpoints.up("sm")]: {
              fontSize: "18px",
            },
          }}
        />
        <Typography
          sx={{
            fontWeight: 500,
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
          }}
        >
          Apps
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: theme.spacing(4),
          [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(3),
            cursor: "pointer",
          },
        }}
      >
        <Bookmark
          sx={{
            marginRight: theme.spacing(1),
            [theme.breakpoints.up("sm")]: {
              fontSize: "18px",
            },
          }}
        />
        <Typography
          sx={{
            fontWeight: 500,
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
          }}
        >
          Collections
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: theme.spacing(4),
          [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(3),
            cursor: "pointer",
          },
        }}
      >
        <Storefront
          sx={{
            marginRight: theme.spacing(1),
            [theme.breakpoints.up("sm")]: {
              fontSize: "18px",
            },
          }}
        />
        <Typography
          sx={{
            fontWeight: 500,
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
          }}
        >
          Market Place
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: theme.spacing(4),
          [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(3),
            cursor: "pointer",
          },
        }}
      >
        <Settings
          sx={{
            marginRight: theme.spacing(1),
            [theme.breakpoints.up("sm")]: {
              fontSize: "18px",
            },
          }}
        />
        <Typography
          sx={{
            fontWeight: 500,
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
          }}
        >
          Settings
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: theme.spacing(4),
          [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(3),
            cursor: "pointer",
          },
        }}
      >
        <ExitToApp
          sx={{
            marginRight: theme.spacing(1),
            [theme.breakpoints.up("sm")]: {
              fontSize: "18px",
            },
          }}
        />
        <Typography
          sx={{
            fontWeight: 500,
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
          }}
        >
          Logout
        </Typography>
      </Box>
    </Container>
  );
}
