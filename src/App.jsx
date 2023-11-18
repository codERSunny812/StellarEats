import Header from "./Components/header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Help from "./Components/Help/Help";
import Error from "./Components/Error/Error";
import SignIn from "./Components/SignIn/SignIn";
import Cart from "./Components/Cart/Cart";
import Menu from "./Components/Restaurant Menu/Menu";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    //now we want that our header and footer still shown if we route to other  page ,for that we create the child.
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <Menu />,
      },
    ],
  },
]);

export default AppRouter;
