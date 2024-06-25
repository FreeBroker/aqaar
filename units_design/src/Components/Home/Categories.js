import React from "react";
import CategoriesTabs from "./CategoriesTabs";
import CategoryBody from "./CategoryBody";

export default function Categories() {
  const categoris = [
    { text: "Category" },
    { text: "Category" },
    { text: "Category" },
    { text: "Category" },
    { text: "Category" },
    { text: "Category" },
    { text: "Category" },
    { text: "Category" },
    { text: "Category" },
    { text: "Category" },
    { text: "Category" },
    { text: "Category" },
    { text: "Category" },
    { text: "Category" },
    { text: "Category" },
    { text: "Category" },
    { text: "Category" },
    { text: "Category" },
    { text: "Category" },
    { text: "Category" },
    { text: "Category" },
    { text: "Category" },
    { text: "Category" },
    { text: "Category" },
    { text: "Category" },
  ];
  return (
    <div>
      <CategoriesTabs
        config={[
          {
            header: "Real estate",
            content: <CategoryBody categoris={categoris} />,
          },
          {
            header: "Houses for sale",
            content: <CategoryBody categoris={categoris} />,
          },
          {
            header: "Apartment for sale",
            content: <CategoryBody categoris={categoris} />,
          },
          {
            header: "Settlements",
            content: <CategoryBody categoris={categoris} />,
          },
          {
            header: "Subleases",
            content: <CategoryBody categoris={categoris} />,
          },
          {
            header: "Residential Parks",
            content: <CategoryBody categoris={categoris} />,
          },
          { header: "Credit", content: <CategoryBody categoris={categoris} /> },
        ]}
      />
    </div>
  );
}
