import React from "react";
import { pizzaData } from "../../product/product";
import "./Home.css"
import { useDispatch } from 'react-redux';
import { addItems} from "../../slices/cartSlice";
import { toast, ToastContainer } from "react-toastify"; // Import the necessary components and styles
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const dispatch = useDispatch()

  const handleAdd=(items)=>{
    dispatch(addItems(items))
    toast.success(`${items.name} added to cart!`, {
      position: "bottom-right", 
      autoClose: 2000,
      hideProgressBar: true, 
      closeOnClick: true, 
      pauseOnHover: true, 
      draggable: true, 
      progress: undefined, 
    });
  }

  return (
    <div className="pizza-grid">
      {pizzaData.map((item) => {
        return (
          <div className="pizza-card" key={item.id}>
            <img className="pizza-image" src={item.image} alt={item.name} />
            <h2 className="pizza-name">{item.name}</h2>
            <p className="pizza-price">₹{item.price}</p>
            <button className="add-to-cart-button" onClick={()=>handleAdd(item)}>
              Add to Cart
            </button>
            <p className="pizza-description">{item.description}</p>
          </div>
        );
      })}
      <ToastContainer />
    </div>
  );
};

export default Home;
