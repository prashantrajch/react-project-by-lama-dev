import {
  Alert,
  Box,
  Button,
  Container,
  Fab,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Tooltip,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import React, { useState } from "react";
import { theme } from "../theme";

export default function Add() {
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  return (
    <>
      <Tooltip title="Add" aria-label="add">
        <Fab
          sx={{ position: "fixed", bottom: 20, right: 20 }}
          onClick={() => setOpen(true)}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container
          sx={{
            width: 500,
            height: 550,
            backgroundColor: "white",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            margin: "auto",
            [theme.breakpoints.down("sm")]: {
              width: "100vw",
              height: "100vh",
            },
          }}
        >
          <form action="" style={{ padding: "16px" }}>
            <Box sx={{ marginBottom: theme.spacing(3) }}>
              <TextField
                id="standard-basic"
                label="Title"
                size="small"
                style={{ width: "100%" }}
              />
            </Box>
            <Box sx={{ marginBottom: theme.spacing(3) }}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                defaultValue="Tell your story..."
                variant="outlined"
                label="Description"
                size="small"
                style={{ width: "100%" }}
              />
            </Box>
            <Box sx={{ marginBottom: theme.spacing(3) }}>
              <TextField select label="Visibility" value="Public">
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
              </TextField>
            </Box>
            <Box sx={{ marginBottom: theme.spacing(3) }}>
              <FormLabel component="legend">Who can comment?</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Everybody"
                  control={<Radio size="small" />}
                  label="Everybody"
                />
                <FormControlLabel
                  value="My Friends"
                  control={<Radio size="small" />}
                  label="My Friends"
                />
                <FormControlLabel
                  value="Nobody"
                  control={<Radio size="small" />}
                  label="Nobody"
                />
                <FormControlLabel
                  value="Custom"
                  disabled
                  control={<Radio size="small" />}
                  label="Custom (Premium)"
                />
              </RadioGroup>
            </Box>
            <Box sx={{ marginBottom: theme.spacing(3) }}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => setOpenAlert(true)}
                style={{ marginRight: 20 }}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Close
              </Button>
            </Box>
          </form>
        </Container>
      </Modal>
      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
}
