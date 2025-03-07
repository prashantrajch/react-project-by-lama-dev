import { MoreVert } from "@mui/icons-material";
import { heart, like } from "../../assets";
import "./post.css";
import { Users } from "../../dummyData";
import { useState } from "react";

const Post = ({ post }) => {

  const [liked,setLiked] = useState(post?.like);
  const[isLiked,setIsLiked] =  useState(false);


  const user = Users.filter((u) => u.id === post?.userId)[0];

  const likeHandler = () =>{
    setLiked(isLiked ? liked - 1 : liked + 1)
    setIsLiked(!isLiked)
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={post?.photo} alt="" className="postProfileImg" />
            <span className="postUsername">{user?.username} </span>
            <div className="postDate">{post?.date}</div>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc} </span>
          <img src={post?.photo} alt="Post Image" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={heart} onClick={likeHandler} alt="Heart Image" />
            <img className="likeIcon" src={like} onClick={likeHandler} alt="Heart Image" />
            <span className="postlikeCounter">
              {liked} people liked it
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post?.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
