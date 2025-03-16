import{useState, useEffect} from "react"
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate,Link} from 'react-router-dom'
import Loadingscreen from '../components/Loadingscreen'
import {login,reset} from '../Auth/Authslice'

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {user,isLoading,isError,isSuccess,message} = useSelector((state)=>state.auth)
  useEffect(()=>{
  if(isError){
    console.log(message)
    }
    if(isSuccess || user){
      navigate('/')
    }
    dispatch(reset())
  },[user,isError,isLoading,isSuccess,message,navigate,dispatch])
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { email, password } = formData;
   
  const onChange = (e) => {
    setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password
    };
    dispatch(login(userData)) 
  };
  if(isLoading){ 
    return <Loadingscreen/>
  }
 
  return (
    
  <form action="" className="flex flex-col gap-y-5 w-full mt-5" onSubmit={onSubmit}>
<div className="flex justify-center w-full">
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        id="email"
        placeholder="Email"
        className="rounded-md border-2 border-black p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none w-2/5"
      />
</div>
<div className="flex justify-center w-full">
      <input
        type="password"
        name="password"
        value={password} 
        onChange={onChange}
        placeholder="password"
        id="password"
        className="rounded-md border-2 border-black p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none w-2/5"
      />
      </div>
      <div className="flex justify-center w-full">
    <input type="submit" value="Submit" className="cursor-pointer items-center rounded-md border-2 border-black bg-other px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none w-1/3"/>
    </div>
    <h5 className="text-xl text-center">Don't have an account?<Link to={'/register'} className="text-other"> Sign-up</Link></h5>
  </form>



  );
};

export default Login;
