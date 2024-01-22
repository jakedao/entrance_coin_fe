import { Outlet } from "react-router-dom";

import "../index.scss";

type TOwnProps = {
  children?: React.ReactNode;
};
const Layout = (props: TOwnProps) => {
  const { children } = props;
  return (
    <>
      <div id="container">
        {children}
        <Outlet />
      </div>
    </>
  );
};
export default Layout;
