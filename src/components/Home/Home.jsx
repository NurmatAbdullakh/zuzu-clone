import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useSelector } from "react-redux";
import Order from "../Order/Order";
import Products from "../Products/Products";

export default function Home() {
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

  return (
    <>
      {categories.map((v) => (
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
