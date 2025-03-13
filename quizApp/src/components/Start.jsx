import { useEffect, useRef } from "react";

function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form action="" className="start" onSubmit={handleClick}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter you name"
        className="startInput"
      />
      <button className="startBtn">Start</button>
    </form>
  );
}

export default Start;
