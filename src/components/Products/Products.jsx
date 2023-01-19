import ProductCard from "../ProductCard/ProductCard";
import styles from "./Products.module.scss";

export default function Products({ category, products }) {
  return (
    <div className={styles.products}>
      <div className={`${styles.products__container} container`}>
        <div className={`${styles.products__title} title`}>{category}</div>

        <div className={styles.products__items}>
          {products.map((product) => (
            <ProductCard
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
