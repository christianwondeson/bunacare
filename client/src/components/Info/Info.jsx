import React from "react";
import "./Info.css";

const Info = () => {
  return (
    <div className="info">
      {" "}
      <h1>text formatting</h1>
      <p>
        This text is styled with some of the text formatting properties. The
        heading uses the text-align, text-transform, and color properties. The
        paragraph is indented, aligned, and the space between characters is
        specified. The underline is removed from this colored
        <a target="_blank" href="tryit.asp?filename=trycss_text">
          "Try it Yourself"
        </a>{" "}
        link.
      </p>
    </div>
  );
};

export default Info;
