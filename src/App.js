import { data } from "autoprefixer";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {
  useGetMeMutation,
  useGetMeQuery,
  useGetViewBasketQuery,
} from "./api/apiSlice";
import { getViewBasket } from "./api/endpoints/auth";
import "./App.css";
import BasketPage from "./components/basket/BasketPage";
import BookingPage from "./components/bookingPage/BookingPage";
import Categories from "./components/categories/Categories";
import NotFoundPage from "./components/errorPage/NotFoundPage";
import HomePage from "./components/homePage/HomePage";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="App flex flex-col min-h-[100vh]">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="menu" element={<Categories />} />
          <Route path="basket" element={<BasketPage />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
