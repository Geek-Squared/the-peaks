import { FC } from "react";
import { Link } from "react-router-dom";
import BookmarkButton from "./BookmarkButton";
import "./styles.css";

interface TitleSectionProps {
  hasFilter?: boolean;
  title?: string;
  value?: string;
  onChange?: any;
}

const TitleSection: FC<TitleSectionProps> = ({
  hasFilter,
  title,
  value,
  onChange,
}) => {
  return (
    <div className="topSection">
      <h4 className="title">{title}</h4>

      {hasFilter && (
        <div className="button-container">
          <Link to={`bookmark/all`}>
            <BookmarkButton title="VIEW BOOKMARK" />
          </Link>
          <select className="dropdown" value={value} onChange={onChange}>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default TitleSection;
