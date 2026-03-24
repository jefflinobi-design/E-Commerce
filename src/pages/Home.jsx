import { useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard.jsx";


const Home = ({ search }) => {

  const products = useSelector(state => state.products.items);

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="products">
      {filteredProducts.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default Home;