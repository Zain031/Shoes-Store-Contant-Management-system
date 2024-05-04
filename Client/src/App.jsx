import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Sweper from "./Components/Sweper";
import HomePage from "./Components/HomePage";
import ProductDetailComponent from "./Components/Detail";
import Login from "./Components/Login";
import HomePageCMS from "./Components/HompageCMS";
import AddProducts from "./Components/AddProducts";
import NavbarCms from "./Components/NavbarCms";
import AddUser from "./Components/AddUser";
import Category from "./Components/Category";
import EditProduct from "./Components/EditProducts";
import UpdateImage from "./Components/UpdateImage";
import AddCategory from "./Components/AddCategory";




const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Sweper />
        <HomePage />
      </>
    ),
  },
  {
    path: "/product/:id",
    element: <ProductDetailComponent />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: (
      <>
        <NavbarCms />
        <HomePageCMS />
      </>
    ),
    loader: async () => {
      if (!localStorage.getItem("access_token")) {
        throw redirect("/login");
      }
      return null
    },
  },
  {
    path: "/product/add",
    element: <AddProducts />,
    loader: async () => {
      if (!localStorage.getItem("access_token")) {
        throw redirect("/login");
      }
      return null
    },
  },
  {
    path: "/addUser",
    element: <AddUser />,
    loader: async () => {
      if (!localStorage.getItem("access_token")) {
        throw redirect("/login");
      }
      return null
    },
  },
  {
    path: "/categories",
    element: (
      <>
        <NavbarCms />
        <Category />
      </>
    ),
    loader: async () => {
      if (!localStorage.getItem("access_token")) {
        throw redirect("/login");
      }
      return null
    },
  },
  {
    path: "/editProduct/:id",
    element: (
      <>
        <EditProduct />
      </>
    ),
    loader: async () => {
      if (!localStorage.getItem("access_token")) {
        throw redirect("/login");
      }
      return null
    },
  },
  {
    path: "/updateImage/:id",
    element: (
      <>
        {" "}
        <UpdateImage />
      </>
    ),
    loader: async () => {
      if (!localStorage.getItem("access_token")) {
        throw redirect("/login");
      }
      return null
    },
  },
  {
    path: "/addCategory",
    element: (
      <>
        <AddCategory />
      </>
    ),
    loader: async () => {
      if (!localStorage.getItem("access_token")) {
        throw redirect("/login");
      }
      return null
    },
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
