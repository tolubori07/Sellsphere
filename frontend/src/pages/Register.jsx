/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { useNavigate,Link } from "react-router-dom";
import { register } from "../Auth/Authservices";
import { useDispatch } from "react-redux";
//import {userAuth} from '../AuthServices/Atoms'
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // useEffect(() => {
  //   if (user) {
  //     navigate("/");
  //   }
  // }, [user, navigate]);
  const { username, email, password,password2 } = formData;
  const onSubmit = async (e) => {
    e.preventDefault();
    if(password != password2){ 
      alert('Passwords do not match')
    }else{
    const userData = {
      username,
      email,
      password
      }
     dispatch(register(userData))
    } 
  };

  return (
      <form onSubmit={onSubmit} className="flex flex-col gap-y-5 w-full justify-center mt-5" >
      <div className="flex justify-center w-full">
        <input
          type="text"
          name="username"
          id=""
          placeholder="username"
          className="rounded-md border-2 border-black p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none w-2/5"
          onChange={onChange}
        />
        </div>
        <div className="flex justify-center w-full">
        <input
          type="email"
          name="email"
          id=""
          placeholder="email"
          className="rounded-md border-2 border-black p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none w-2/5"
          onChange={onChange}
        />
        </div>
        <div className="flex justify-center w-full">
        <input
          type="password"
          name="password"
          id=""
          placeholder="password"
          className="rounded-md border-2 border-black p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none w-2/5"
          onChange={onChange}
        />
        </div>
        <div className="flex justify-center w-full">
<input type="password" className="rounded-md border-2 border-black p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none w-2/5" id="password2" name="password2" value={password2} placeholder="password confirmation" onChange={onChange}/>
</div>
<div className="flex justify-center w-full">
<input type="submit" value="Submit" className="flex cursor-pointer items-center rounded-md border-2 border-black bg-other px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none w-1/3"/>
</div>
<h5 className="text-xl text-center">Already have an account?<Link to={'/login'} className="text-other"> Login</Link></h5>
      </form>
  );
};

export default Register;
