import React from 'react';

const products = [
  {
    name: "Jack  American Single Malt Whiskey 1L",
    price: 8690,
    image: "https://images.pexels.com/photos/3858809/pexels-photo-3858809.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Jack  Bottled-In-Bond, 1L, 100 Proof",
    price: 30890,
    image: "https://images.pexels.com/photos/20320313/pexels-photo-20320313/free-photo-of-glass-and-bottle-of-wine.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Jack  Gentleman Jack Tennessee Whiskey, 1L, 80 Proof",
    price: 45090,
    image: "https://images.pexels.com/photos/15261585/pexels-photo-15261585/free-photo-of-expensive-wristwatches-by-white-wine-bottles.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Jack Gentleman Jack Tennessee Whiskey",
    price: 60190,
    image: "https://images.pexels.com/photos/15916905/pexels-photo-15916905/free-photo-of-bottle-of-the-macallan-scotch-whiskey.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Jack  Tennessee Apple Whiskey",
    price: 30390,
    image: "https://images.pexels.com/photos/27819451/pexels-photo-27819451/free-photo-of-a-bottle-of-wine-and-a-glass-sitting-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Jack  Tennessee Fire",
    price: 36090,
    image: "https://images.pexels.com/photos/9202892/pexels-photo-9202892.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Jack  Tennessee Fire, 1L, 70 Proof",
    price: 40690,
    image: "https://images.pexels.com/photos/20320313/pexels-photo-20320313/free-photo-of-glass-and-bottle-of-wine.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Jack  Tennessee Whiskey  1L, 80 Proof",
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


