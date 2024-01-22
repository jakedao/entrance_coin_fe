import { FaGithub } from "react-icons/fa";
import { useLocation } from "react-router-dom";

import { useCoins } from "../../hooks";

import { TLinks } from "@/models";
import "./CoinDetail.scss";

const CoinDetail = () => {
  const location = useLocation();
  const currentCoin = location.pathname.slice(1, location.pathname.length);
  const { coins } = useCoins();

  const currentData = coins.find((coin) => coin.id === currentCoin);

  if (!currentData) {
    return <div>No coin found</div>;
  }

  const { name, symbol, description, links, image, current_price } =
    currentData;

  const renderSocialLinks = (links: TLinks) => {
    return (
      <>
        <div className="details__social card">
          <span className="site">
            <a href={links.homepage} target="_blank">
              {links.homepage}
            </a>
          </span>
        </div>
        <div className="details__social card">
          <FaGithub />
          <span className="site">
            <a href={links.github} target="_blank">
              {links.github}
            </a>
          </span>
        </div>
      </>
    );
  };

  const renderCoinInfo = () => {
    return (
      <>
        <div className="coin__info__item">
          <div>Symbol</div>
          <div>{symbol}</div>
        </div>
        <div className="coin__info__item">
          <div>Currency</div>
          <div>USD</div>
        </div>
        <div className="coin__info__item">
          <div>Current Price</div>
          <div>{`$ ${current_price}`}</div>
        </div>
      </>
    );
  };

  return (
    <div className="details">
      {/* LEFT COL */}
      <div className="details__main">
        <div className="image-wrapper">
          <img src={image} alt={name} />
        </div>
        <h1>{name}</h1>
        <div className="card coin__info">{renderCoinInfo()}</div>
      </div>

      {/* RIGHT COL */}
      <div className="details__desc">
        <h2>{name}</h2>
        <div
          className="card"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {links && renderSocialLinks(links)}
      </div>
      <div></div>
    </div>
  );
};
export default CoinDetail;
