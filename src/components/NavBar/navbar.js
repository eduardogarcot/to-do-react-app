import React,{ useState } from 'react';
import auth from 'services/auth';
import { useSelector, useDispatch } from 'react-redux';
import { logOut, selectIsLogged } from 'redux/slices/isLogged';
import { useLocation, useNavigate} from 'react-router-dom';
import unknowUser from 'assets/images/unknown-user.svg';
import { toast } from 'react-toastify';
import Logo from 'components/Logo';


const NavBar = () => {
    const noNavbar = ['/login'];
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const isLogged = useSelector(selectIsLogged);
    const [toogleUserMenu, setToogleUsermenu] = useState(false);

    const handleClickLogin = () => {
        navigate('/login');
    }
    const handleClickEditProfile = () => {
        toast.info("Not released feature. We are working on it");
    }
    const handleClickLogOut = () => {
        dispatch(logOut());
        auth.logOut();
    }
    
    const elementsMenu = [
        {label: 'Log Out', handle: handleClickLogOut},
        {label: 'Edit Profile', handle: handleClickEditProfile},
    ];


    if (noNavbar.includes(location.pathname)) return <></>;
    
    return (<>
        <nav className='flex flex-row sticky top-0 z-50 items-center p-4 w-full min-h-[10vh] border-b border-slate-400 border-solid bg-sky-300 '>
            <div className='flex w-3/4 '>
                <Logo theme='navbar'/>
            </div>
            <div className='flex w-1/4 mr-4 justify-end'>
                {!isLogged && <button 
                        className='hidden md:block w-1/2 p-2 border border-solid bg-white border-slate-400 rounded hover:bg-blue-200 hover:border-white' 
                        onClick={handleClickLogin}
                    >
                        Login
                    </button>}
                {isLogged && <>
                    <div 
                        className="flex h-12 w-12 rounded-full border-2 border-white bg-slate-300"
                        onMouseOver={() => setToogleUsermenu(true)}
                        onMouseLeave={() => setToogleUsermenu(false)}
                    >
                        <img className='p-2' src={unknowUser} alt='unknown-user' />
                        {toogleUserMenu && <>
                        <div className='absolute border-2 rounded-b-lg rounded-l-lg bg-white border-gray-500 mt-4 bottom-0 translate-x-[-90%] translate-y-[40%] md:translate-y-3/4' >
                            <ol>
                                {elementsMenu.map((item, index)=>
                                  <li className='p-1 cursor-pointer hover:bg-slate-200' onClick={item.handle} key={index}>{item.label}</li>
                                )}
                            </ol>
                        </div>
                    </>}
                    </div>
                    
                </>}
            </div>
        </nav>
    </>);
}
 
export default NavBar;