import Modal from "@mui/material/Modal";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../redux/productsReducer";
import Order from "../Order/Order";
import Products from "../Products/Products";

export default function Home() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.data);
  const [currentProduct, setCurrentProduct] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onProductButtonClick = (id) => {
    const products = categories.reduce((t, v) => [...t, ...v.products], []);
    setCurrentProduct(products.find((v) => v.id === id));
    handleOpen();
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        // console.log("then=>>>", response.data);
        dispatch(setData(response.data));
      })
      .catch((error) => {
        console.log("catch=>>>>", error);
      })
      .finally(() => {
        console.log("finally=>>>");
      });
  }, []);
  const formatCategories = (arr) => {
    const categories = arr.reduce(
      (total, v, i, array) =>
        total.includes(v.category) ? total : [...total, v.category],
      []
    );
    return categories.reduce((total, category) => {
      return [
        ...total,
        { category, products: arr.filter((e) => e.category === category) },
      ];
    }, []);
  };
  const formattedCategories = formatCategories(categories);
  console.log("formattedCategories===>>>", formattedCategories);
  return (
    <>
      {formattedCategories.map((v) => (
        <Products
          onButtonClick={onProductButtonClick}
          category={v.category}
          products={v.products}
        />
      ))}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Order product={currentProduct} onCloseClick={handleClose} />
      </Modal>
    </>
  );
}
