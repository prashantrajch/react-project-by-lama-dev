import { MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";
import styled from "styled-components";
import { sliderItems } from "../data";
import { useState } from "react";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 99;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.activeSlide * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;
const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setActiveSlide(
        activeSlide > 0 ? activeSlide - 1 : sliderItems.length - 1
      );
    } else {
      setActiveSlide(
        activeSlide < sliderItems.length - 1 ? activeSlide + 1 : 0
      );
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <MdOutlineArrowLeft size={30} />
      </Arrow>

      <Wrapper activeSlide={activeSlide}>
        {sliderItems?.map((item) => (
          <Slide bg={item?.bg} key={item?.id}>
            <ImgContainer>
              <Img src={item?.img} />
            </ImgContainer>
            <InfoContainer>
              <Title> {item?.title} </Title>
              <Desc>{item?.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick()}>
        <MdOutlineArrowRight size={30} />
      </Arrow>
    </Container>
  );
};

export default Slider;
