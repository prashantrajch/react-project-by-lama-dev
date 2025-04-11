import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 30px;
  background-color: teal;
  color: white;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
      <marquee behavior="alternate" direction="right">
        Super Deal! Free Shipping on Orders Over ₹50
      </marquee>
    </Container>
  );
};

export default Announcement;
