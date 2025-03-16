import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getItems, reset } from "../Auth/itemSlice";
import Card from '../components/Card';
import Loadingscreen from "../components/Loadingscreen";

const AllItems = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { items, isLoading, isError, message } = useSelector((state) => state.items);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (isError) {
      console.error(message);
    }
    if (!user) {
      navigate("/login");
    }

    dispatch(getItems());
    return () => {
      dispatch(reset());
    };
  }, [user, isError, message, dispatch, navigate]);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category !== null && category !== undefined) {
      const filtered = items.filter((item) => item.Category.toLowerCase() === category.toLowerCase());
      setFilteredItems(filtered);
    } else {
      // If no category parameter, render all items
      setFilteredItems(items);
    }
  }, [searchParams, items]);

  if (isLoading) {
    return <Loadingscreen />;
  }

  return (
    <div className="grid lg:grid-cols-4 gap-4 m-5 md:grid-cols-3 sm:grid-cols-1">
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <Card key={item._id} item={item} id={item._id} category={item.Category} />
        ))
      ) : (
        <h1 className="text-6xl">No Items Match Your Selected Category</h1>
      )}
    </div>
  );
}

export default AllItems;
