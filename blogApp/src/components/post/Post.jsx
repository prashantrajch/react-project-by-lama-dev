export default function Post() {
  return (
    <div className="w-[385px] mx-6 mb-10 ">
      <img
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        className="w-full h-[280px] object-cover rounded-[7px] "
      />
      <div className="flex flex-col items-center ">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="font-josefin text-2xl font-bold mt-3.5 cursor-pointer  ">
          Lorem ipsum dolor sit amet
        </span>
        <hr />
        <span className="postDate font-lora italic text-[#999] mt-3.5 ">
          1 hour ago
        </span>
        <p className="font-varela text-sm text-[#444] leading-6 mt-3.5 line-clamp-4  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sunt
          porro minus ea omnis rem odio earum fuga, nostrum eos possimus
          architecto dolores sit saepe suscipit, dolorem corrupti natus facere?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sunt
          porro minus ea omnis rem odio earum fuga, nostrum eos possimus
          architecto dolores sit saepe suscipit, dolorem corrupti natus facere?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sunt
          porro minus ea omnis rem odio earum fuga, nostrum eos possimus
          architecto dolores sit saepe suscipit, dolorem corrupti natus facere?
        </p>
      </div>
    </div>
  );
}
