import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createItem, reset } from '../Auth/itemSlice';
const AddItems = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { items, isLoading, isSuccess, isError, message } = useSelector((state) => state.items);
  const {user} = useSelector((state)=>state.auth)
  useEffect(()=>{
    if(!user){
    navigate('/login')
    }
    if(isError){
      console.log(message) 
    }
    dispatch(reset())
  },[user,navigate,isError,message,dispatch])

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    image: ''
  });

  const { name, description, category, price, image } = formData;

  const onChange = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prevState) => ({
        ...prevState,
        image: reader.result // Update state with the base64 string
      }));
    };
    reader.readAsDataURL(file); // Convert file to base64 string
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const itemData = { name, description, category, price, image };
    dispatch(createItem(itemData));
    navigate('/all')
  };
  return (
    <div className="container h-full ">
        <form action="" className="flex flex-col gap-y-5 w-full mt-5" onSubmit={onSubmit} encType="multipart/form-data">
          <div className="flex justify-center w-full">
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              id="name"
              className="rounded-md border-2 border-black p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none w-3/5"
              placeholder="Name"
            />
          </div>
          <div className="flex justify-center w-full">
            <textarea
              name="description"
              value={description}
              onChange={onChange}
              id="description"
              className="h-[150px] w-3/5 resize-none rounded-md border-2 border-black p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none text-black"
              placeholder="Item description"
            />
          </div>
          <div className="flex justify-center w-full">
            <input
              type="text"
              name="category"
              value={category}
              onChange={onChange}
              id="category"
              className="rounded-md border-2 border-black p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none w-3/5"
              placeholder="category"
            />
          </div>
          <div className="flex justify-center w-full">
            <input
              type="number"
              name="price"
              value={price}
              onChange={onChange}
              id="price"
              className="rounded-md border-2 border-black p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none w-3/5"
              placeholder="price"
            />
          </div>
          <div className="flex justify-center w-full">
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              id="image"
              className="rounded-md border-2 border-black p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none  file:flex file:cursor-pointer file:items-center file:rounded-md  file:border-black file:bg-other file:px-10 file:py-3 file:font-bold file:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:file:transition-all file:hover:translate-x-[3px] hover:file:translate-y-[3px] hover:file:shadow-none bg-white w-3/5"
              placeholder="image"
            />
          </div>
          <div className="flex justify-center w-full">
          <input type="submit" value="Submit" className="flex cursor-pointer items-center rounded-md border-2 border-black bg-other px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none w-2/5" />
          </div>
        </form>
      </div>
  );
};

export default AddItems;

