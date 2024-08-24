import React, { useState } from "react";
import Card from "./Card";
import AddtoCart from "./AddtoCart";
import "../index.css";

function Ecommerce({}) {
  const [showBox, setShowBox] = useState(false);
  const [getData, setGetData] = useState({
    category: "",
    title: "",
    image: "",
    price: 0,
  });

  const items = [
    {
      title: "Air Tag",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmosuWmLY18SK53w7YK4fisFJpcY0aAKLZ1Q&s",
      category: "Location",
      price: 299,
      id: 1,
    },
    {
      title: "MacBook",
      image:
        "https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png",
      category: "Laptop",
      price: 1799,
      id: 2,
    },
    {
      title: "Apple TV",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuKjeR8SltgHkylLcndB8ky2ytJ2lrGRCKAg&s",
      category: "Mobile Phones",
      price: 599,
      id: 899,
    },
    {
      title: "Smart Watch",
      image:
        "data:image/jpeg;base64,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",
      category: "Watch",
      price: 399,
      id: 4,
    },
    {
      title: "Iphone",
      image:
        "https://www.apple.com/v/iphone/home/bv/images/overview/essentials/magsafe__bfji5hb1mqsy_large.jpg",
      category: "Mobile",
      price: 1899,
      id: 5,
    },
    {
      title: "HomePod",
      image:
        "https://www.apple.com/v/tv-home/n/images/overview/hero__dbphk49ymi2q_large.jpg",
      category: "Sound",
      price: 355,
      id: 6,
    },
  ];

  function openProduct(category, title, image, price) {
    setGetData({
      category: category,
      title: title,
      image: image,
      price: price,
    });
    setShowBox(true);
  }

  function closeWindow() {
    setShowBox(false);
  }

  return (
    <>
      <section className="lg: w-5/6 m-auto text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {items.map((data) => (
              <Card
                onPress={() =>
                  openProduct(data.category, data.title, data.image, data.price)
                }
                category={data.category}
                title={data.title}
                image={data.image}
                price={data.price}
                key={data.id}
              />
            ))}
          </div>
        </div>
      </section>
      {showBox  && (
        <AddtoCart
          hideModal={() => closeWindow()}
          category={getData.category}
          title={getData.title}
          image={getData.image}
          price={getData.price}
        />
      )}
    </>
  );
}

export default Ecommerce;
