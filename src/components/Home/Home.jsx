import { useSelector } from "react-redux";
import Products from "../Products/Products";

export default function Home() {
  const categories = useSelector((state) => state.products.data);

  return (
    <>
      {categories.map((v) => (
        <Products category={v.category} products={v.products} />
      ))}
    </>
  );
}
