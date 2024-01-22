import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

import { Layout } from "./components";
import { useCoins } from "./hooks";

const App = () => {
  const { isFetching, coins, handleFetchCoins } = useCoins();

  const menuItems = useMemo(() => {
    return coins.map((item) => ({ id: item.id, name: item.name }));
  }, [coins]);

  useEffect(() => {
    handleFetchCoins();
  }, []);

  const renderMenu = () => {
    if (isFetching) return <div>Fetching coins...</div>;
    return (
      <nav className="menu">
        {menuItems.map(({ id, name }) => (
          <Link to={id}>
            <div className="menu__item" key={id}>
              {name}
            </div>
          </Link>
        ))}
      </nav>
    );
  };

  return (
    <Layout>
      {renderMenu()}
      <hr />
    </Layout>
  );
};
export default App;
