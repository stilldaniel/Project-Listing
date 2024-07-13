import { useState, useEffect } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  images: string[];
}

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useProducts;
