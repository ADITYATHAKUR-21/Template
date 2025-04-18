import React from 'react';

const products = [
  {
    name: " Moët & Chandon ",
    price: 8690,
    image: "https://images.pexels.com/photos/3858809/pexels-photo-3858809.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: " Casillero del Diablo",
    price: 30890,
    image: "https://images.pexels.com/photos/20320313/pexels-photo-20320313/free-photo-of-glass-and-bottle-of-wine.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "The Macallan",
    price: 45090,
    image: "https://images.pexels.com/photos/15261585/pexels-photo-15261585/free-photo-of-expensive-wristwatches-by-white-wine-bottles.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "The Macallan",
    price: 60190,
    image: "https://images.pexels.com/photos/15916905/pexels-photo-15916905/free-photo-of-bottle-of-the-macallan-scotch-whiskey.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Bell's ",
    price: 30390,
    image: "https://images.pexels.com/photos/263006/pexels-photo-263006.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Jack  Tennessee Fire",
    price: 36090,
    image: "https://images.pexels.com/photos/9202892/pexels-photo-9202892.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Chivas Regal",
    price: 40690,
    image: "https://images.pexels.com/photos/2767734/pexels-photo-2767734.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Bacardi, Jameson, Chivas, and others",
    price: 30690,
    image: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

];

const ProductCard = ({ product }) => (
  <div className="bg-white shadow-md rounded-2xl overflow-hidden flex flex-col justify-between">
    <img src={product.image} alt={product.name} className="h-60 w-full object-contain p-4" />
    <div className="p-4 flex-grow">
      <h3 className="text-sm font-semibold">{product.name}</h3>
      <p className="text-lg font-bold mt-2">₹{product.price.toLocaleString()}</p>
    </div>
    <button className="bg-gray-800 text-white py-2 px-4 w-full text-sm font-semibold hover:bg-gray-700 transition-all duration-200 cursor-pointer">
      🛒 ADD TO CART
    </button>
  </div>
);

const ProductCards = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};

export default  ProductCards;


