
import { Link } from 'react-router-dom';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card group">
      <div className="product-card-image">
        <img src={product.image} alt={product.name} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-patisserie-purple-dark">{product.name}</h3>
        <p className="mb-2 text-sm text-gray-600">{product.description.slice(0, 60)}...</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold text-patisserie-purple">
            {product.price.toFixed(2)}€
          </span>
          
          <div className="flex space-x-2">
            <button className="rounded bg-gray-100 p-2 text-patisserie-purple-dark transition-colors hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                <path d="M20 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </button>
            
            <Link
              to={`/product/${product.id}`}
              className="rounded bg-patisserie-purple p-2 text-white transition-all hover:bg-patisserie-purple-medium hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
