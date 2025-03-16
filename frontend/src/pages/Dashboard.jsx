/* eslint-disable react/no-unescaped-entities */
import { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserItems, reset } from "../Auth/itemSlice";
import Card from '../components/Card';
import Loadingscreen from "../components/Loadingscreen";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { items, isLoading, isError, message } = useSelector((state) => state.items);

  useEffect(() => {
    if (isError) {
      console.error(message);
    }
    if (!user) {
      navigate("/login");
    }

    dispatch(getUserItems());
    return () => {
      dispatch(reset());
    };
  }, [user, isError, message, dispatch, navigate]);


  if (isLoading) {
    return <Loadingscreen />;
  }

  return (
    <>
    <div className="header">
        <h3 className="text-2xl">Hi{user.username}, These are your items that you've uploaded</h3>
      </div>
    <div className="grid lg:grid-cols-4 gap-4 m-5 md:grid-cols-3 sm:grid-cols-1">
      {
        items.map((item) => (
          <Card key={item._id} item={item} id={item._id} category={item.Category} />
        ))
       }
    </div>
    </>
  );
}

export default Dashboard;
