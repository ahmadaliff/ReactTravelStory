import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavbarWrap from "./components/Navbar/NavbarWrap.jsx";
import HomePage from "./pages/Home/index.jsx";
import LoginPage from "./pages/Login/index.jsx";
import RegisterPage from "./pages/Register/index.jsx";
import ProfilePage from "./pages/Profile/index.jsx";
import NewJourney from "./pages/New Journey/index.jsx";
import BookmarkPage from "./pages/Bookmark/index.jsx";
import DetailPage from "./pages/Detail/index.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrap />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/add", element: <NewJourney /> },
      { path: "/bookmark", element: <BookmarkPage /> },
      { path: "/detail/:id", element: <DetailPage /> },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
