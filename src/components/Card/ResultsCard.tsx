import { FC, useState } from "react";
import { useGetPostsQuery, useGetNewsQuery } from "../../features/apiSlice";
import "./styles.css";
import TopSection from "./TopSection";

interface ResultsCardProps {
  isTopSection?: boolean;
  hasSearchResults?: boolean;
  searchData?: any;
  sortValue?: string;
}

const ResultsCard: FC<ResultsCardProps> = ({
  isTopSection,
  hasSearchResults,
  searchData,
  sortValue,
}) => {
  const { data } = useGetPostsQuery(sortValue);
  const { data: newsData } = useGetNewsQuery(sortValue);

  const firstElement = newsData?.response?.results?.slice(0, 1);
  const secondElement = newsData?.response?.results?.slice(1, 2);
  const thirdElement = newsData?.response?.results?.slice(2, 3);
  const fourthElement = newsData?.response?.results?.slice(3, 4);
  const fifthElement = newsData?.response?.results?.slice(4, 5);

  return (
    <>
      <div className="top">
        {isTopSection && (
          <>
            <TopSection
              firstElement={firstElement}
              secondElement={secondElement}
              thirdElement={thirdElement}
              fourthElement={fourthElement}
              fifthElement={fifthElement}
            />
          </>
        )}
      </div>

      <div className="results">
        {hasSearchResults ? (
          <>
            {searchData?.response?.results?.map((item: any) => (
              <div
                className="card"
                key={item?.id}
                style={{
                  backgroundImage: `url(${item?.fields?.thumbnail})`,
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
          </>
        ) : null}

        {data?.response?.results?.map((item: any) => (
          <>
            {!isTopSection && (
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
            )}
          </>
        ))}
      </div>
    </>
  );
};

export default ResultsCard;
