import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import Navbar from "./Nav/Navbar";

const AllBookmarks = () => {
  const bookmark = useSelector((state: RootState) => state.bookmark);

  return (
    <>
      <Navbar />
      {/* <ResultsCard data={bookmark} /> */}
    </>
  );
};

export default AllBookmarks;
