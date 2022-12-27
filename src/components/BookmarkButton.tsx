import { FC } from "react";
import "./styles.css";

interface BookmarkButtonProps {
  onClick?: () => void;
  title?: string;
}

const BookmarkButton: FC<BookmarkButtonProps> = ({
  onClick,
  title
}) => {
  return (
    <>
      <button className="btn" onClick={onClick}>
        <img src={"/images/bookmark_on.svg"} alt="icon" className="icon" />
        {title}
      </button>
    </>
  );
};

export default BookmarkButton;
