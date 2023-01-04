import React from "react";
import HomePage from "./HomePage";

// import { Routes, Route } from "react-router-dom";

// import HomePage from "./features/pages/HomePage";
// import LoginPage from "./features/pages/LoginPage";
// import RegisterUser from "./features/pages/RegisterUser";
// import Layout from "./features/components/Layout";
// import ViewProduct from "./features/product/ViewProduct";
// import EditProductInfo from "./features/product/EditProductInfo";
// import AddNewProduct from "./features/product/AddNewProduct";
// import CartPage from "./features/product/CartPage";
// import CartShow from "./features/pages/CartShow";
// import PageNoteFound from "./features/components/PageNoteFound";

//import UploadImage from "./features/product/UploadImage";

// import NavBar from "./features/Components/NavBar";
// <NavBar />;

// import Registration from "./Registration";

function App() {
  return (
    <React.Fragment>
      <HomePage />
      {/* <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterUser />} />
        <Route path="*" element={<PageNoteFound />} />
        <Route element={<Layout />}>
          <Route exact path="/" element={<HomePage />} />
          <Route path="cartshow" element={<CartShow />} />
          <Route path="viewproduct/:id" element={<ViewProduct />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="addnewproduct" element={<AddNewProduct />} />
          <Route path="/editinfo/:id" element={<EditProductInfo />} />
        </Route>
      </Routes> */}
    </React.Fragment>
  );
}

export default App;

