import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getItem, reset } from "../Auth/itemSlice";
import { addToBag } from '../Auth/bagSlice'
import Loadingscreen from "../components/Loadingscreen";
import Alert from '../components/Alert'
const ItemDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { item, isLoading, isError, message } = useSelector(
    (state) => state.items
  );
  const [showAlert, setShowAlert] = useState(false)

  const addBag = async () => {

    try {
      dispatch(addToBag({ item: id }))
    } catch (error) {
      console.error(error)
       }
  }

  const closeAlert =()=>{ 
    setShowAlert(false)
  }
  if(showAlert){
    setTimeout(()=>closeAlert(),3000)
  }

  useEffect(() => {
    dispatch(getItem(id));
    return () => {
      dispatch(reset());
    };
  }, [id, dispatch]);



  if (isLoading) {
    return <Loadingscreen />;
  }

  if (isError) {
    return <div>Error: {message}</div>;
  }

  return (
    <div className="flex justify-between mt-3 mx-5">
  <div className="flex justify-between mt-3 mx-5">
    <figure className="w-1/3 overflow-hidden rounded-md border-4 border-black bg-[#96E6B3] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ">
      <img className="w-full" src={item.Image} alt="image" />
      <figcaption className="border-t-2 border-black p-4">
        <h1 className="text-black text-2xl">{item.Name}</h1>
        <p className="text-black font-bold text-lg">{item.Description}</p>
        <h2 className="text-black text-2xl">£{item.Price}</h2>
        <button onClick={() => { addBag(); setShowAlert(true) }} className="flex cursor-pointer items-center rounded-md border-2 border-black bg-main px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none text-black" >Add to bag</button>
      </figcaption>
      <div className="w-min rounded-full border-2 border-black bg-main px-3 py-1.5 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
        {item.Category}
      </div>
    </figure>
  </div>
  <div className="relative">
    {showAlert && <Alert message="Item added to bag" onClick={()=>closeAlert()} />}
  </div>
</div>

  );
};

export default ItemDetail;
