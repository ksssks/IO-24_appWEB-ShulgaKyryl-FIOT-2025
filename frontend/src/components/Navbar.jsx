import React, {useState} from 'react'
import {assets} from "../assets/assets.js";
import {NavLink, useNavigate} from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
            <img onClick={()=>navigate('/')} className='w-20 h-20 cursor-pointer' src={assets.logo} alt=''/>
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to={'/'}>
                    <li className='py-1'>Домашня</li>
                    <hr className='border-none outine-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
                </NavLink>
                <NavLink to={'/doctors'}>
                    <li className='py-1'>Усі лікарі</li>
                    <hr className='border-none outine-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
                </NavLink>
                <NavLink to={'/about'}>
                    <li className='py-1'>Про нас</li>
                    <hr className='border-none outine-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
                </NavLink>
                <NavLink to={'/contact'}>
                    <li className='py-1'>Контакти</li>
                    <hr className='border-none outine-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
                </NavLink>
            </ul>
            <div className='flex items-center gap-4'>
                {
                    token
                        ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                        <img src={assets.profile_img} className='w-14 rounded' alt='Profile image'/>
                        <img src={assets.dropdown} className='w-6' alt='Dropdown icon'/>
                        <div className='absolute top-8 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                            <div className='min-w-48 bg-stone-200 rounded flex flex-col gap-4 p-4'>
                                <p onClick={()=>navigate('/my-profile')} className='hover:text-black'>Мій профіль</p>
                                <p onClick={()=>navigate('/my-appointments')} className='hover:text-black'>Мої сеанси</p>
                                <p onClick={()=>setToken(false)} className='hover:text-black'>Вийти</p>
                            </div>
                        </div>
                        </div> : <button onClick={() => navigate('/login')}
                                                className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Створити
                            акаунт
                        </button>
                }

            </div>
        </div>
    )
}
export default Navbar
