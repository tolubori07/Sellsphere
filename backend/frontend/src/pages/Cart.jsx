import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBag } from "../Auth/bagSlice";
import { getItems, reset } from "../Auth/itemSlice";
import Card from "../components/Card";
import Loadingscreen from "../components/Loadingscreen";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { bag, isLoading, isError, message } = useSelector((state) => state.bag);
  const { items, isLoading: itemsLoading } = useSelector((state) => state.items);
  const [total, setTotal] = useState(0);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (isError) {
      console.error(message);
    }
    if (!user) {
      navigate("/login");
    }
    dispatch(getBag());
    dispatch(getItems());
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, dispatch, message]);

  useEffect(() => {
    // Calculate total price when items or bag change
    let totalPrice = 0;
    const itemIdsInBag = bag.length > 0 ? bag[0].items.map((bagItem) => bagItem.item) : [];
    const filtered = items.filter((item) => itemIdsInBag.includes(item._id));
    setFilteredItems(filtered);
    filtered.forEach((item) => {
      totalPrice += item.Price;
    });
    setTotal(totalPrice);
  }, [bag, items]);

  if (isLoading || itemsLoading) {
    return <Loadingscreen />;
  }

  return (
    <div className="grid lg:grid-cols-4 gap-4 m-5 md:grid-cols-3 sm:grid-cols-1">
      {filteredItems.length > 0 ? (
        filteredItems.map((filteredItem) => (
          <Card key={filteredItem._id} item={filteredItem} id={filteredItem._id} category={filteredItem.Category}/>
        ))
      ) : (
        <h1>You have no items in your cart</h1>
      )}
      <h2 className="text-4xl">Total: £{total.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
