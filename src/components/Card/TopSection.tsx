import { FC } from "react";
import "./styles.css";
interface TopSectionProps {
  firstElement?: any;
  secondElement?: any;
  thirdElement?: any;
  fourthElement?: any;
  fifthElement?: any;
  sortValue?: string;
}

const TopSection: FC<TopSectionProps> = ({
  firstElement,
  secondElement,
  thirdElement,
  fourthElement,
  fifthElement,
  sortValue,
}) => {
  const [firstElementData] = firstElement;
  const [secondElementData] = secondElement;
  const [thirdElementData] = thirdElement;
  const [fourthElementData] = fourthElement;
  const [fifthElementData] = fifthElement;

  return (
    <>
      <div className="top-section">
        <div
          className="card-top"
          key={firstElementData?.id}
          style={{
            backgroundImage: `url(${
              firstElementData?.fields?.thumbnail
                ? firstElementData?.fields?.thumbnail
                : `/images/logo.png`
            })`,
            backgroundSize: firstElementData?.fields?.thumbnail
              ? "cover"
              : "contain",
            backgroundPosition: firstElementData?.fields?.thumbnail
              ? "center"
              : "top",
            backgroundRepeat: "no-repeat",
            borderBottom: "3px solid #D32F2F",
          }}
        >
          <a href={`/post/${firstElementData?.id}/`}>
            <div className="textSection">
              <h4 className="cardTitle">
                {firstElementData?.fields?.headline}
              </h4>
              <p className="cardDesc">{firstElementData?.fields?.trailText}</p>
            </div>
          </a>
        </div>

        <div className="right-cards">
          <div className="top-cards">
            <div
              className="card-top"
              key={secondElementData?.id}
              style={{
                backgroundImage: `url(${
                  secondElementData?.fields?.thumbnail
                    ? secondElementData?.fields?.thumbnail
                    : `/images/logo.png`
                })`,
                backgroundSize: secondElementData?.fields?.thumbnail
                  ? "cover"
                  : "contain",
                backgroundPosition: secondElementData?.fields?.thumbnail
                  ? "center"
                  : "top",
                backgroundRepeat: "no-repeat",
                height: "300px",
                width: "360px",
                borderBottom: "3px solid #FFC107",
              }}
            >
              <a href={`/post/${secondElementData?.id}/`}>
                <div className="textSection">
                  <h4 className="cardTitle">
                    {secondElementData?.fields?.headline}
                  </h4>
                  <p className="cardDesc">
                    {secondElementData?.fields?.trailText}
                  </p>
                </div>
              </a>
            </div>
            <div
              className="card-top"
              key={thirdElementData?.id}
              style={{
                backgroundImage: `url(${
                  thirdElementData?.fields?.thumbnail
                    ? thirdElementData?.fields?.thumbnail
                    : `/images/logo.png`
                })`,
                backgroundSize: thirdElementData?.fields?.thumbnail
                  ? "cover"
                  : "contain",
                backgroundPosition: thirdElementData?.fields?.thumbnail
                  ? "center"
                  : "top",
                backgroundRepeat: "no-repeat",
                height: "300px",
                width: "360px",
                borderBottom: "3px solid #2196F3",
              }}
            >
              <a href={`/post/${thirdElementData?.id}/`}>
                <div className="textSection">
                  <h4 className="cardTitle">
                    {thirdElementData?.fields?.headline}
                  </h4>
                  <p className="cardDesc">
                    {thirdElementData?.fields?.trailText}
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="bottom-cards">
            <div
              className="card-top"
              key={fourthElementData?.id}
              style={{
                height: "200px",
                width: "360px",
                borderBottom: "3px solid #D32F2F",
              }}
            >
              <a href={`/post/${fourthElementData?.id}/`}>
                <div className="textSection">
                  <h4 className="cardTitle">
                    {fourthElementData?.fields?.headline}
                  </h4>
                  <p className="cardDesc">
                    {fourthElementData?.fields?.trailText}
                  </p>
                </div>
              </a>
            </div>
            <div
              className="card-top"
              key={fifthElementData?.id}
              style={{
                height: "200px",
                width: "360px",
                borderBottom: "3px solid #388E3C",
              }}
            >
              <a href={`/post/${fifthElementData?.id}/`}>
                <div className="textSection">
                  <h4 className="cardTitle">
                    {fifthElementData?.fields?.headline}
                  </h4>
                  <p className="cardDesc">
                    {fifthElementData?.fields?.trailText}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSection;
