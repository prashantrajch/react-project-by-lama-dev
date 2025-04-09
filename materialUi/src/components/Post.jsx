import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { theme } from "../theme";

export default function Post({ img, title }) {
  return (
    <Card sx={{ marginBottom: theme.spacing(5) }}>
      <CardActionArea>
        <CardMedia
          sx={{
            height: 250,
            [theme.breakpoints.down("sm")]: {
              height: 150,
            },
          }}
          image={img}
          title="MY Post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            consectetur earum est.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
