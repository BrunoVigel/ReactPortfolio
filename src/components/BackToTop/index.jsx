import React from "react";
import "./style.css";

export function BackToTop() {
  const [y, setY] = React.useState(window.scrollY);


  const handleNavigation = React.useCallback(
    (e) => {
      const window = e.currentTarget;
      setY(window.scrollY);
    },
    [y]
  );

  function handleClick(e) {
      e.preventDefault();
      window.scrollTo(0, 0);
  }


  React.useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <>
        {y ? <button className="back-to-top" onClick={handleClick}>
      <span className="fa fa-arrow-up"></span>
    </button> : null}
    </>
  );
}
