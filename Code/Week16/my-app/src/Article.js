import React from "react";
import "./Article.css";
import MyImage from "./Bottompatterns.jpg";
import MySecondImage from "./pattern2.jpg";

const Article = () => {
  return (
    <div>
      <article className="SecondArticle">
        <div className="SecondArtWrapper">
          <div className="SecondArtBorder">
            <img src={MySecondImage} />
            <div className="SecondArtTextWrapper">
              <h2>Vel illum qui dolorem eum</h2>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness. No one rejects, dislikes, or avoids pleasure
                itself, because it is pleasure, but because those who do not
                know how to pursue pleasure rationally encounter consequences
                that are extremely painful.
              </p>
              <a href="">Continue Reading </a>
            </div>
          </div>
          <div class="SecondArtList">
            <h2>Categories</h2>
            <a href="">Link text goes here</a>
            <a href="">Link text goes here</a>
            <a href="">Link text goes here</a>
            <a href="">Link text goes here</a>
            <a href="">Link text goes here</a>
          </div>
        </div>
      </article>
      <div className="ImageRow">
        <img src={MyImage} />
        <img src={MyImage} />
        <img src={MyImage} />
        <img src={MyImage} />
        <img src={MyImage} />
      </div>
    </div>
  );
};

export default Article;
