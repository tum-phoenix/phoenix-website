import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Apply from "./pages/apply/Apply";
import NavigationBar from "./components/navigationBar/NavigationBar";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contact/Contact";
import Drive from "./pages/drive/Drive";
import FutureMobilityChallenge from "./pages/futureMobilityChallenge/FutureMobilityChallenge";
import Flight from "./pages/flight/Flight";

export default function Routes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavigationBar />
          <Outlet />
          <Footer />
        </>
      ),
      children: [
        {
          path: "",
          element: <Navigate replace to="/home" />,
        },
        {
          path: "/home",
          element: <Home />,
          children: [],
        },
        {
          path: "/flight",
          element: <Flight />,
          children: [],
        },
        {
          path: "/drive",
          element: <Drive />,
          children: [],
        },
        {
          path: "/team",
          element: <Outlet />,
          children: [
            { path: "", element: <h1>Team</h1> },
            { path: ":id", element: <h1>Dynamic Segment: Team</h1> },
          ],
        },
        {
          path: "/apply",
          element: <Apply />,
          children: [],
        },
        {
          path: "/contact",
          element: <Contact />,
          children: [],
        },
        {
          path: "/future-mobility-challenge",
          element: <FutureMobilityChallenge />,
          children: [],
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
