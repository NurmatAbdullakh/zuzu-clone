import ProductCard from "../ProductCard/ProductCard";
import styles from "./Products.module.scss";

export default function Products({ onButtonClick, category, products, id }) {
  return (
    <div className={styles.products} id={id}>
      <div className={`${styles.products__container} container`}>
        <div className={`${styles.products__title} title`}>{category}</div>

        <div className={styles.products__items}>
          {products?.map((product) => (
            <ProductCard
              onButtonClick={() => {
                onButtonClick(product.id);
              }}
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
