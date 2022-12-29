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
import Footer from "./Footer";
import { convertDate, removeTrailingSlash } from "../utils";

const Post = () => {
  const dispatch = useDispatch();
  const bookmark = useSelector((state: RootState) => state.bookmark);
  const [isBookmark, setIsBookmark] = useState(true);
  const [bookmarkIsAvailable, setBookmarkIsAvailable] = useState(false);
  const params = useParams();

  const fullId = params?.id + "/" + params["*"];

  // this is the id string that is used in the api call
  const postId = removeTrailingSlash(fullId);
  const { data, isLoading } = useGetPostQuery(postId);

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
        <BookmarkButton
          title={"ADD BOOKMARK"}
          onClick={() => dispatch(addBookmark(data?.response?.content))}
        />
       
      </div>
      <div className="container">
        <div className="content">
          <p>{convertDate(data?.response?.content?.webPublicationDate)}</p>
          <h1>{data?.response?.content?.webTitle}</h1>
          <h4>{data?.response?.content?.fields.trailText}</h4>
          <hr />
          <p>{data?.response?.content?.fields.bodyText.split(`\n`)}</p>
        </div>
        <div className="thumbnail">
          <img
            src={data?.response?.content?.fields.thumbnail ? data?.response?.content?.fields.thumbnail : "/images/logo.png"}
            alt="thumbnail"
            width={500}
          />
        </div>
      </div>
    
    </>
  );
};

export default Post;
