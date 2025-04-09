import {
  Link,
  Avatar,
  Container,
  ImageList,
  ImageListItem,
  Typography,
  Divider,
  AvatarGroup,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  position: "sticky",
  top: 0,
}));

const Title = styled(Typography)({
  fontSize: 16,
  fontWeight: 500,
  color: "#555",
});

const StyledLink = styled(Link)(({ theme }) => ({
  marginRight: theme.spacing(2),
  color: "#555",
  fontSize: 16,
  textDecoration: "none",
}));

const Rightbar = () => {
  return (
    <StyledContainer>
      <Title gutterBottom>Online Friends</Title>
      <AvatarGroup max={6} sx={{ marginBottom: 2 }}>
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://material-ui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://material-ui.com/static/images/avatar/3.jpg"
        />
        <Avatar alt="Agnes Walker" src="" />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/6.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/7.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/8.jpg"
        />
      </AvatarGroup>

      <Title gutterBottom>Gallery</Title>
      <ImageList sx={{ marginBottom: 2 }} cols={2} rowHeight={100}>
        {[
          "breakfast.jpg",
          "burgers.jpg",
          "camera.jpg",
          "morning.jpg",
          "hats.jpg",
          "vegetables.jpg",
        ].map((image) => (
          <ImageListItem key={image}>
            <img
              src={`https://material-ui.com/static/images/image-list/${image}`}
              alt={image}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Title gutterBottom>Categories</Title>
      {["Sport", "Food", "Music"].map((category) => (
        <StyledLink href="#" key={category} variant="body2">
          {category}
        </StyledLink>
      ))}

      <Divider flexItem sx={{ marginBottom: 1 }} />

      {["Movies", "Science", "Life"].map((category) => (
        <StyledLink href="#" key={category} variant="body2">
          {category}
        </StyledLink>
      ))}
    </StyledContainer>
  );
};

export default Rightbar;
