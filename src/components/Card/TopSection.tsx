import { FC } from "react";
import "./styles.css";
interface TopSectionProps {
  firstElement?: any;
  secondElement?: any;
  thirdElement?: any;
  fourthElement?: any;
  fifthElement?: any;
}

const TopSection: FC<TopSectionProps> = ({
  firstElement,
  secondElement,
  thirdElement,
  fourthElement,
  fifthElement
}) => {
  
  // initialize to empty array if undefined
  firstElement = firstElement || [];
  secondElement = secondElement || [];
  thirdElement = thirdElement || [];
  fourthElement = fourthElement || [];
  fifthElement = fifthElement || [];

  return (
    <>
      <div className="top-section">
        <div
          className="card-top"
          key={firstElement[0]?.id}
          style={{
            backgroundImage: `url(${
              firstElement[0]?.fields?.thumbnail
                ? firstElement[0]?.fields?.thumbnail
                : `/images/logo.png`
            })`,
            backgroundSize: firstElement[0]?.fields?.thumbnail
              ? "cover"
              : "contain",
            backgroundPosition: firstElement[0]?.fields?.thumbnail
              ? "center"
              : "top",
            backgroundRepeat: "no-repeat",
            borderBottom: "3px solid #D32F2F",
          }}
        >
          <a href={`/post/${firstElement[0]?.id}/`}>
            <div className="textSection">
              <h4 className="cardTitle">{firstElement[0]?.fields?.headline}</h4>
              <p className="cardDesc">{firstElement[0]?.fields?.trailText}</p>
            </div>
          </a>
        </div>

        <div className="right-cards">
          <div className="top-cards">
            <div
              className="card-top"
              key={secondElement[0]?.id}
              style={{
                backgroundImage: `url(${
                  secondElement[0]?.fields?.thumbnail
                    ? secondElement[0]?.fields?.thumbnail
                    : `/images/logo.png`
                })`,
                backgroundSize: secondElement[0]?.fields?.thumbnail
                  ? "cover"
                  : "contain",
                backgroundPosition: secondElement[0]?.fields?.thumbnail
                  ? "center"
                  : "top",
                backgroundRepeat: "no-repeat",
                height: "300px",
                width: "360px",
                borderBottom: "3px solid #FFC007",
              }}
            >
              <a href={`/post/${secondElement[0]?.id}/`}>
                <div className="textSection">
                  <h4 className="cardTitle">
                    {secondElement[0]?.fields?.headline}
                  </h4>
                  <p className="cardDesc">
                    {secondElement[0]?.fields?.trailText}
                  </p>
                </div>
              </a>
            </div>
            <div
              className="card-top"
              key={thirdElement[0]?.id}
              style={{
                backgroundImage: `url(${
                  thirdElement[0]?.fields?.thumbnail
                    ? thirdElement[0]?.fields?.thumbnail
                    : `/images/logo.png`
                })`,
                backgroundSize: thirdElement[0]?.fields?.thumbnail
                  ? "cover"
                  : "contain",
                backgroundPosition: thirdElement[0]?.fields?.thumbnail
                  ? "center"
                  : "top",
                backgroundRepeat: "no-repeat",
                height: "300px",
                width: "360px",
                borderBottom: "3px solid #2196F3",
              }}
            >
              <a href={`/post/${thirdElement[0]?.id}/`}>
                <div className="textSection">
                  <h4 className="cardTitle">
                    {thirdElement[0]?.fields?.headline}
                  </h4>
                  <p className="cardDesc">
                    {thirdElement[0]?.fields?.trailText}
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="bottom-cards">
            <div
              className="card-top"
              key={fourthElement[0]?.id}
              style={{
                height: "200px",
                width: "360px",
                borderBottom: "3px solid #D32F2F",
              }}
            >
              <a href={`/post/${fourthElement[0]?.id}/`}>
                <div className="textSection">
                  <h4 className="cardTitle">
                    {fourthElement[0]?.fields?.headline}
                  </h4>
                  <p className="cardDesc">
                    {fourthElement[0]?.fields?.trailText}
                  </p>
                </div>
              </a>
            </div>
            <div
              className="card-top"
              key={fifthElement[0]?.id}
              style={{
                height: "200px",
                width: "360px",
                borderBottom: "3px solid #388E3C",
              }}
            >
              <a href={`/post/${fifthElement[0]?.id}/`}>
                <div className="textSection">
                  <h4 className="cardTitle">
                    {fifthElement[0]?.fields?.headline}
                  </h4>
                  <p className="cardDesc">
                    {fifthElement[0]?.fields?.trailText}
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
