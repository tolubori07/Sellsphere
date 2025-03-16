// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { getItems, reset } from "../Auth/itemSlice";
// import Card from '../components/Card'
// import Loadingscreen from "../components/Loadingscreen";
// const FilteredCategories = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.auth);
//   const { items, isLoading, isError, message } = useSelector(
//     (state) => state.items,
//   );
//   useEffect(() => {
//     if (isError) {
//       console.error(message);
//     }
//     if (!user) {
//       navigate("/login");
//     }
//     dispatch(getItems());
//     return () => {
//       dispatch(reset());
//     };
//   }, [user, navigate, isError, message, dispatch]);
//   if (isLoading) {
//     return <Loadingscreen/>;
//   }
  
//    return (
//     <div className="grid lg:grid-cols-4 gap-4 m-5 md:grid-cols-3 sm:grid-cols-1">
//       {filteredItems.map((item)=>(
//       <Card key={item._id} item={item} id={item._id}/>
//       ))}
//     </div>
//   )
// }

// export default FilteredCategories
