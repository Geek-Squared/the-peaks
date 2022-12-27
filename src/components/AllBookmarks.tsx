import { useSelector } from "react-redux";
import { RootState } from "../store";
import ResultsCard from "./Card/ResultsCard";
import Navbar from "./Nav/Navbar";

const AllBookmarks = () => {
  const bookmark = useSelector((state: RootState) => state.bookmark);
  

  console.log("bk", bookmark);

  return (
    <>
      <Navbar />
      <ResultsCard />
    </>
  );
};

export default AllBookmarks;
