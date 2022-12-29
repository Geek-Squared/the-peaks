import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import ResultsCard from "./Card/ResultsCard";
import Footer from "./Footer";
import Navbar from "./Nav/Navbar";

const AllBookmarks = () => {
  const bookmark = useSelector((state: RootState) => state.bookmark);
  const dispatch = useDispatch();

  console.log("bookmark", bookmark);
  return (
    <>
      <Navbar />
      {/* <ResultsCard data={bookmark} /> */}
    </>
  );
};

export default AllBookmarks;
