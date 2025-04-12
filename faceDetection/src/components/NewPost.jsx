import { useEffect, useState } from "react";
import { useRef } from "react";
import * as faceApi from "face-api.js";

const NewPost = ({ image }) => {
  const { url, width, height } = image;
  const [faces, setFaces] = useState([]);
  const [friends, setFriends] = useState([]);

  const imgRef = useRef();
  const canvasRef = useRef();

  //   const handleImage = async () => {
  //     const detections = await faceApi
  //       .detectAllFaces(imgRef.current, new faceApi.TinyFaceDetectorOptions())
  //       .withFaceLandmarks()
  //       .withFaceExpressions();

  //     canvasRef.current.innerHtml = faceApi.createCanvasFromMedia(imgRef.current);

  //     faceApi.matchDimensions(canvasRef.current, {
  //       width,
  //       height,
  //     });
  //     const resized = faceApi.resizeResults(detections, {
  //       width,
  //       height,
  //     });

  //     faceApi.draw.drawDetections(canvasRef.current, resized);
  //     faceApi.draw.drawFaceExpressions(canvasRef.current, resized);
  //     faceApi.draw.drawFaceLandmarks(canvasRef.current, resized);
  //   };

  const handleImage = async () => {
    const detections = await faceApi.detectAllFaces(
      imgRef.current,
      new faceApi.TinyFaceDetectorOptions()
    );
    setFaces(detections.map((d) => Object.values(d.box)));
  };

  const handleMouseEnter = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.lineWidth = 5;
    ctx.strokeStyle = "yellow";
    faces.map((face) => ctx.strokeRect(...face));
    console.log(ctx);
  };

  useEffect(() => {
    const loadModels = () => {
      Promise.all([
        faceApi.nets.tinyFaceDetector.loadFromUri("./models"),
        faceApi.nets.faceLandmark68Net.loadFromUri("./models"),
        faceApi.nets.faceExpressionNet.loadFromUri("./models"),
        // faceApi.nets.faceRecognitionNet.loadFromUri("./models"),
      ])
        .then(handleImage)
        .catch((e) => console.log(e));
    };

    imgRef.current && loadModels();
  }, []);

  const addFriend = (e) => {
    setFriends((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(friends);

  return (
    <div className="container">
      <div className="left" style={{ width, height }}>
        <img ref={imgRef} crossOrigin="anonymous" src={url} alt="" />
        <canvas
          onMouseEnter={handleMouseEnter}
          ref={canvasRef}
          width={width}
          height={height}
        />
        {faces.map((face, i) => (
          <input
            name={`input${i}`}
            style={{ left: [face[0]], top: face[1] + face[3] + 5 }}
            placeholder="Tag a friend"
            key={i}
            className="friendInput"
            onChange={addFriend}
          />
        ))}
      </div>
      <div className="right">
        <h1>Share you post</h1>
        <input
          type="text"
          placeholder="What's on  your mind?"
          className="rightInput"
        />
        {friends && (
          <span className="friends">
            with <span className="name">{Object.values(friends) + " "}</span>
          </span>
        )}
        <button className="rightButton">Send</button>
      </div>
    </div>
  );
};

export default NewPost;
