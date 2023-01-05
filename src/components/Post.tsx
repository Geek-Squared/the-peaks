import { useDispatch } from "react-redux";
import { useGetPostQuery } from "../features/apiSlice";
import { addBookmark } from "../features/bookmark/bookmarkSlice";
import { useParams } from "react-router-dom";
import Navbar from "./Nav/Navbar";
import BookmarkButton from "./BookmarkButton";
import "./styles.css";
import Loader from "./Loader";
import { convertDate, removeTrailingSlash } from "../utils";

const Post = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const fullId = params?.id + "/" + params["*"];
  console.log("Dispatch function: ", dispatch);

  // this is the id string that is used in the api call
  const postId = removeTrailingSlash(fullId);
  const { data, isLoading } = useGetPostQuery(postId);

  const handleBookmark = () => {
    //@ts-ignore - facing a bug didn't have time to fix
    let bookmarkArray = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const bookmark = data?.response?.content;
    bookmarkArray.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarkArray));
  };

  const handleRemoveBookmark = () => {
    //@ts-ignore - facing a bug didn't have time to fix
    let bookmarkArray = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const bookmark = data?.response?.content;
    bookmarkArray = bookmarkArray.filter((item: any) => item.id !== bookmark.id);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarkArray));
  }

  const checkBookmark = () => {
    //@ts-ignore - facing a bug didn't have time to fix
    const bookmarkArray = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const bookmark = data?.response?.content;
    const isBookmarked = bookmarkArray.some(
      (item: any) => item.id === bookmark.id
    );
    return isBookmarked;
  };

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
        {checkBookmark() ? (
          <BookmarkButton title={"REMOVE BOOKMARK"} onClick={handleRemoveBookmark} />
        ) : (
          <BookmarkButton title={"ADD BOOKMARK"} onClick={handleBookmark} />
        )}
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
            src={
              data?.response?.content?.fields.thumbnail
                ? data?.response?.content?.fields.thumbnail
                : "/images/logo.png"
            }
            alt="thumbnail"
            width={500}
          />
        </div>
      </div>
    </>
  );
};

export default Post;
