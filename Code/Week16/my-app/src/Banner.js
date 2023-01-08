import React from "react";
import "./Banner.css";
import MyImage from "./pattern1.jpg";

const Banner = () => {
  return (
    <div>
      <div className="Banner">
        <div className="BannerParagraph">
          <p>
            <b>Nemo enim ipsam voluptatem quia voluptas</b>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="Title">
          <h1>Todays Technology </h1>
        </div>
      </div>
      <article className="FirstArticle">
        <div className="FirstArtSectionWrapper">
          <div className="FirstArtSections">
            <p>
              <b>Finibus Bonorum et Malorum</b>
            </p>
            <img src={MyImage} />
            <p>
              Quis nostrum exercitationem ullam corporis suscipit laboriosam,
              nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
              reprehenderit qui in ea voluptate velit esse quam nihil molestiae
              consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
              pariatur?
            </p>
            <a href="">Read More </a>
          </div>
        </div>
        <div className="FirstArtSectionWrapper">
          <div className="FirstArtSections">
            <p>
              <b>Accusantium doloremque laudantium</b>
            </p>
            <img src={MyImage} />
            <p>
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat facere possimus, omnis
              voluptas assumenda est, omnis dolor repellendus.
            </p>
            <a href="">Read More </a>
          </div>
        </div>
        <div className="FirstArtSectionWrapper">
          <div className="FirstArtSections">
            <p>
              <b>Ut enim ad minima veniam</b>
            </p>
            <img src={MyImage} />
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi
            </p>
            <a href="">Read More </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Banner;
