const asyncHandler = (fn) => {
  console.log("------------------asyncHandler function called--------------------");
  return (req, res, next) => {
    console.log("------------------asyncHandler return function called--------------------");
    fn(req, res, next).catch((err) => {
      console.log("------------------asyncHandler return function catch called--------------------");
      console.log(err);
      next(err);
    });
  };
};

module.exports = asyncHandler;
