import Navbar from "./Nav/Navbar";
import "./Card/styles.css";

const AllBookmarks = () => {
  // get the bookmarks from local storage
  //@ts-ignore - facing a bug didn't have time to fix
  const bookmark = JSON.parse(localStorage.getItem("bookmarks"));

  return (
    <>
      <Navbar />
      <div className="bookmark-results">
        {bookmark?.map((item: any) => (
          <div
            className="card"
            key={item?.id}
            style={{
              backgroundImage: `url(${
                item?.fields?.thumbnail
                  ? item?.fields?.thumbnail
                  : `/images/logo.png`
              })`,
            }}
          >
            <a href={`/post/${item?.id}/`}>
              <div className="textSection">
                <h4 className="cardTitle">{item?.fields?.headline}</h4>
                <p className="cardDesc">{item?.fields?.trailText}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllBookmarks;
