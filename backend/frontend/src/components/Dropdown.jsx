import { FaChevronDown } from 'react-icons/fa';
import { logout } from '../Auth/Authslice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { GiSpanner } from 'react-icons/gi';

export default function Dropdown() {
    const [isActiveDropdown, setIsActiveDropdown] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <div className="relative sm:hidden lg:inline xl:inline">
            <button
                aria-haspopup="listbox"
                aria-expanded={isActiveDropdown}
                onClick={() => {
                    setIsActiveDropdown(!isActiveDropdown);
                }}
                className="flex w-[225px] cursor-pointer items-center rounded-md border-2 border-black bg-other px-7 py-3 font-bold transition-all  p-[10px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none "
            >
                <div className="mx-auto flex items-center">
                    Utilities <GiSpanner />
                    <FaChevronDown
                        style={{
                            transform: `rotate(${isActiveDropdown ? '180deg' : '0'})`,
                        }}
                        className={'ml-3 h-4 w-4 transition-transform ease-in-out'}
                    />
                </div>
            </button>
            <div
                role="listbox"
                style={{
                    top: isActiveDropdown ? 'calc(100% + 10px)' : '100%',
                    opacity: isActiveDropdown ? '1' : '0',
                    visibility: isActiveDropdown ? 'visible' : 'hidden',
                }}
                className="absolute left-0 z-10 w-[225px] border-2 border-black rounded-md bg-white text-black font-bold transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
                <button
                    role="button"
                    aria-label="Click to logout"
                    onClick={handleClick}
                    className="block w-full border-b-2 border-black bg-other px-7 py-3 no-underline first:rounded-t-md last:rounded-b-md hover:bg-otherAccent"
                >
                    <h3 className="text-center">Logout</h3>
                </button>
                <a
                    href="/dashboard"
                    aria-label="Click to go to your dashboard"
                    className="block w-full border-b-2 border-black bg-other px-7 py-3 no-underline first:rounded-t-md last:rounded-b-md hover:bg-otherAccent"
                >
                    <h3 className="text-center">Dashboard</h3>
                </a>
            </div>
        </div>
    );
}
