import "./post.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const PF = "http://localhost:4000/images/";
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}

      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((category) => {
            return (
              <span key={category.name} className="postCat">
                {category.name}
              </span>
            );
          })}
        </div>
        <Link className="link" to={`/post/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>

      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Post;
