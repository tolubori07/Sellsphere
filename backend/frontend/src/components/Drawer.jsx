/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { logout } from "../Auth/Authslice";
import { useAtom } from "jotai"
import { darkMode } from "../Auth/Atoms"
import { Link } from "react-router-dom";
export default function Drawer({ active, setActive }) {
    const [darkmode, setDarkmode] = useAtom(darkMode);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(logout());
        navigate("/");
    };
 
    const [isVisible, setIsVisible] = useState(false);

    const closeDrawer = () => {
        setIsVisible(false);
        setTimeout(() => {
            setActive(false);
        }, 300);
    };

    useEffect(() => {
        if (active) {
            setIsVisible(true);
        }
    }, [active]);

    if (!active) return null;

    return (
        <div
            role="dialog"
            aria-modal="true"
            style={{
                opacity: isVisible ? '1' : '0',
                visibility: isVisible ? 'visible' : 'hidden',
            }}
            onClick={closeDrawer}
            className=" shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]  fixed left-0 top-0 z-50 flex h-[100vh] w-screen items-start justify-start bg-gray-500/50 transition-all duration-300"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    transform: `translateX(${isVisible ? '0' : '-300px'})`,
                }}
                className="z-10 h-full w-[300px] border-2 border-black bg-main font-bold transition-transform duration-300"
            >
                 <div className="flex justify-center items-center py-3">
                <label className="relative inline-flex cursor-pointer items-center">
      <input type="checkbox" value="" className="peer sr-only" onClick={() => setDarkmode(!darkmode)} defaultChecked={darkmode}/>
      <div className="peer h-8 w-[70px] rounded-full border-2 border-black bg-white after:absolute after:start-[6px] after:top-[6px] after:h-5 after:w-5 after:rounded-full after:border-2 after:border-black after:bg-white after:transition-all after:content-[''] peer-checked:bg-main peer-checked:after:translate-x-[37px] peer-focus:outline-none rtl:peer-checked:after:-translate-x-[37px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] "></div>
      <h3 className="pl-3">{darkmode?"dark-mode":"Light-mode"}</h3>
    </label>
                </div>
                <button
                    role="button"
                    aria-label="Click to logout"
                    onClick={handleClick}
                    className="block w-full border-b-2 border-black bg-other px-7 py-3 no-underline first:rounded-t-md last:rounded-b-md hover:bg-otherAccent"
                >
                    <h3 className='text-center'>Logout</h3>
                </button>
                <Link to={'/all'}><button
                    role="button"
                    className="block w-full border-b-2 border-black bg-other px-7 py-3 no-underline first:rounded-t-md last:rounded-b-md hover:bg-otherAccent"
                >
                    <h3 className='text-center'>Market</h3>
                </button>
                </Link>
                <Link to={'/uploaditem'}><button
                    role="button"
                    className="block w-full border-b-2 border-black bg-other px-7 py-3 no-underline first:rounded-t-md last:rounded-b-md hover:bg-otherAccent"
                >
                    <h3 className='text-center'>Upload An Item</h3>
                </button>
                </Link>
                <Link to={'/cart'}><button
                    role="button"
                    className="block w-full border-b-2 border-black bg-other px-7 py-3 no-underline first:rounded-t-md last:rounded-b-md hover:bg-otherAccent"
                >
                    <h3 className='text-center'>Bag</h3>
                </button>
                </Link>
                <Link to={'/all/?category=shirts'}><button
                    role="button"
                    className="block w-full border-b-2 border-black bg-other px-7 py-3 no-underline first:rounded-t-md last:rounded-b-md hover:bg-otherAccent"
                >
                    <h3 className='text-center'>Shirts</h3>
                </button>
                </Link>
                <Link to={'/all/?category=sports'}><button
                    role="button"
                    className="block w-full border-b-2 border-black bg-other px-7 py-3 no-underline first:rounded-t-md last:rounded-b-md hover:bg-otherAccent"
                >
                    <h3 className='text-center'>Sports</h3>
                </button>
                </Link> 
                <Link to={'/all/?category=trousers'}><button
                    role="button"
                    className="block w-full border-b-2 border-black bg-other px-7 py-3 no-underline first:rounded-t-md last:rounded-b-md hover:bg-otherAccent"
                >
                    <h3 className='text-center'>Trousers</h3>
                </button>
                </Link>
            </div>
        </div>
    );
}
