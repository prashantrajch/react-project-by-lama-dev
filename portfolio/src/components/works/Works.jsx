import "./Works.scss";
import { useState } from "react";

const data = [
  {
    id: "1",
    icon: "./assets/mobile.png",
    title: "Web Design",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
  },
  {
    id: "2",
    icon: "./assets/globe.png",
    title: "Mobile Application",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
  },
  {
    id: "3",
    icon: "./assets/writing.png",
    title: "Branding",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
  },
];

const Works = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setCurrentSlider((prev) => (prev > 0 ? prev - 1 : 2));
    } else {
      setCurrentSlider((prev) => (prev < data.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <section className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {data.map((item) => (
          <div key={item.id} className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={item.icon} alt="" />
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={item.img} alt={item.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="./assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="./assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </section>
  );
};

export default Works;
