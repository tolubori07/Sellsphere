/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import {useAtom } from "jotai";
//import { userAuth } from '../AuthServices/Atoms';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getItems } from "../Auth/itemSlice";
import Loadingscreen from "../components/Loadingscreen";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getItems());
    if (user == null) {
      navigate("/login");
    }
  }, [user, navigate,dispatch]);
  return (
    <>
      <div className="container-home">
        <div>
          <h1 className="text-center text-6xl">
            Sell Your Stuff; Don't Waste <span>{user && user.username}</span>
            {/*{user ? user.username : <span> you</span>}😉*/}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
