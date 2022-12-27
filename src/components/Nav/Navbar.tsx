import { FC, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

interface NavbarProps {
  searchTerm?: string;
  setSearchTerm?: any;
  hasSearch?: boolean;
  setShowSearch?: any;
}

const Navbar: FC<NavbarProps> = ({
  searchTerm,
  setSearchTerm,
  hasSearch,
  setShowSearch,
}) => {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (e: any) => {
    setSearchTerm(e.target.value);
    setShowSearch(true);
    if (e.target.value === "") {
      setShowSearch(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/images/logo.png" alt="logo" width="150px" />
          </Link>
        </div>
      </div>

      {focused && hasSearch ? (
        <div className="nav-elements">
          <input
            ref={inputRef}
            type="search"
            placeholder="Search all news"
            onChange={handleChange}
            value={searchTerm}
          />
        </div>
      ) : (
        <div
          className="nav-elements"
          onClick={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        >
          <img src="/images/search.svg" alt="Search all news" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
