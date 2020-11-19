import React from "react";
import ContentLoader from "react-content-loader";

const PizzaLoader = () => (
  <ContentLoader
    speed={2}
    width={288}
    height={458}
    viewBox="0 0 288 458"
    backgroundColor="#ddd3d0"
    foregroundColor="#ecebeb"
    className="catalog__item"
  >
    <circle cx="140" cy="125" r="125" />
    <rect x="15" y="254" rx="5" ry="5" width="257" height="34" />
    <rect x="15" y="295" rx="5" ry="5" width="257" height="101" />
    <rect x="15" y="411" rx="5" ry="5" width="58" height="22" />
    <rect x="103" y="412" rx="5" ry="5" width="168" height="41" />
  </ContentLoader>
);

export default PizzaLoader;
