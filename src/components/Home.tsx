import { useState } from "react";
import { useSearchPostsQuery } from "../features/apiSlice";
import Navbar from "./Nav/Navbar";
import ResultsCard from "./Card/ResultsCard";
import "./styles.css";
import TitleSection from "./TitleSection";
import Loader from "./Loader";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading } = useSearchPostsQuery(searchTerm);
  const [showSearch, setShowSearch] = useState(false);
  const [sortValue, setSortValue] = useState("newest");

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        hasSearch
        setShowSearch={setShowSearch}
      />
      {showSearch ? (
        <>
          <TitleSection title="Search Results" />
          <ResultsCard hasSearchResults searchData={data} />
        </>
      ) : null}
      <TitleSection
        title="Top Stories"
        hasFilter
        onChange={(e: any) => setSortValue(e.target.value)}
      />
      <ResultsCard isTopSection sortValue={sortValue} />

      <TitleSection
        title="Sport"
        onChange={(e: any) => setSortValue(e.target.value)}
      />
      <ResultsCard sortValue={sortValue} />
    </>
  );
};

export default Home;
