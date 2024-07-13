import React from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  images: string[];
}

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="border p-4 rounded-md shadow-md transform transition duration-500 hover:scale-105 hover:shadow-lg">
      <img src={product.images[0]} alt={product.title} className="w-full h-48 object-cover rounded-md" />
      <h2 className="mt-2 text-lg font-bold">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
      <p className="text-sm text-gray-500">{product.description}</p>
    </div>
  );
};

export default ProductCard;
