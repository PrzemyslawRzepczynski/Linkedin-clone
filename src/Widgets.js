import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_left">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets_right">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newArticle("React is awesome !", "Top news - 10000 new users")}
      {newArticle("Tesla hits new highs", "Cars & auto - 300 readers")}
      {newArticle("Bitcoin Breaks $22k", "Crypto - 8000 readers")}
    </div>
  );
}

export default Widgets;
