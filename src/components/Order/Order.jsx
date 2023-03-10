import styles from "./Order.module.scss";
import pizza from "../../image/pizza.jpg";
import { CloseIcon } from "../../utils/icons";
import { Button, Paper } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewOrderAC } from "../../redux/productsReducer";

export default function Order({ product, onCloseClick }) {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.products.orders);

  const onDec = () => {
    if (count > 1) setCount(count - 1);
  };
  const onInc = () => {
    setCount(count + 1);
  };

  const onAddButtonClick = (product, count) => {
    const newOrder = {
      ...product,
      count,
      totalSum: product.price * count,
      orderId: product.title + count,
    };
    dispatch(addNewOrderAC(newOrder));
    onCloseClick();
  };
  console.log(orders);
  return (
    <Paper>
      <div className={styles.order}>
        <img className={styles.order__image} src={pizza} />

        <div className={`${styles.content}`}>
          <div onClick={onCloseClick} className={styles.content__button}>
            <CloseIcon />
          </div>
          <div className={`${styles.content__title} title`}>
            {product.title}
          </div>
          <div className={`${styles.content__description} text`}>
            {product.description}
          </div>
          <div className={styles.content__buttons}>
            <div className={styles.content__counter}>
              <Button
                onClick={onDec}
                sx={{
                  borderRadius: "50%",
                  width: "48px",
                  height: " 48px",
                  background: "#F5F5F5",
                  color: "black",
                  fontSize: "24px",
                  "&:hover": {
                    backgroundColor: "#F5F5F5",
                    borderColor: "#0062cc",
                    boxShadow: "none",
                  },
                }}
                size="large"
                variant="contained"
              >
                -
              </Button>
              <span className={styles.content__count}>{count}</span>
              <Button
                onClick={onInc}
                sx={{
                  borderRadius: "50%",
                  width: "48px",
                  height: " 48px",
                  background: "#F5F5F5",
                  color: "black",
                  fontSize: "24px",
                  "&:hover": {
                    backgroundColor: "#F5F5F5",
                    borderColor: "#0062cc",
                    boxShadow: "none",
                  },
                }}
                size="large"
                variant="contained"
              >
                +
              </Button>
            </div>
            <div className={styles.content__add}>
              <Button
                onClick={() => {
                  onAddButtonClick(product, count);
                }}
                sx={{
                  background: "#EC8D1E",
                  borderRadius: 100,
                  height: " 48px",
                  "&:hover": {
                    backgroundColor: "#EC8D1E",
                    borderColor: "#0062cc",
                    boxShadow: "none",
                  },
                }}
                size="large"
                variant="contained"
                startIcon={"????????????????"}
                endIcon={`${product.price * count} sum`}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
}
