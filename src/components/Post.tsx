import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { useGetPostQuery } from "../features/apiSlice";
import {
  addBookmark,
  removeBookmark,
} from "../features/bookmark/bookmarkSlice";
import { useParams } from "react-router-dom";
import Navbar from "./Nav/Navbar";
import BookmarkButton from "./BookmarkButton";
import "./styles.css";
import Loader from "./Loader";

const Post = () => {
  const bookmark = useSelector((state: RootState) => state.bookmark);
  const dispatch = useDispatch();
  const [isBookmark, setIsBookmark] = useState(true);
  const [bookmarkIsAvailable, setBookmarkIsAvailable] = useState(false);
  const params = useParams();

  const fullId = params?.id + "/" + params["*"];

  // this is a function to remove the trailing slash from the id string so that it can be used in the api call
  const removeTrailingSlash = (str: string) => {
    return str.replace(/\/$/, "");
  };

  // this is the id string that is used in the api call
  const postId = removeTrailingSlash(fullId);
  const { data, isLoading } = useGetPostQuery(postId);

  const addPostsToBookmark = () => {
    addBookmark(data?.response?.content);
  };

  const removePostsFromBookmark = () => {
    removeBookmark(data?.response?.content);
  };

  console.log("bookmark", bookmark);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <div
        className="container"
        style={{
          marginTop: 20,
        }}
      >
        <BookmarkButton title={"ADD BOOKMARK"} onClick={addPostsToBookmark} />
        <BookmarkButton
          title={"REMOVE BOOKMARK"}
          onClick={removePostsFromBookmark}
        />
      </div>
      <div className="container">
        <div className="content">
          <h1>{data?.response?.content?.webTitle}</h1>
          <h4>{data?.response?.content?.fields.trailText}</h4>
          <hr />
          <p>{data?.response?.content?.fields.bodyText.split(`\n`)}</p>
        </div>
        <div className="thumbnail">
          <img
            src={data?.response?.content?.fields.thumbnail}
            alt="thumbnail"
            width={500}
          />
        </div>
      </div>
    </>
  );
};

export default Post;
