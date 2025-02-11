import React from 'react'
import {specialityData} from "../assets/assets.js";
import {Link} from "react-router-dom";

const SpecialityMenu = () => {
    return (
        <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
            <h1 className='text-3xl font-medium text-center'>Знайти за спеціальністю</h1>
            <p className='sm:w-2/3 text-sm text-center'>У нашій клініці Ви можете знайти лікарів різних кваліфікацій,
                які готові надати професійну допомогу у
                будь-яких питаннях, пов&#39;язаних із Вашим здоров’ям. Ми пропонуємо консультації від загальних терапевтів
                до вузькопрофільних спеціалістів, таких як кардіологи, ендокринологи, гастроентерологи, неврологи,
                ортопеди та багато інших.</p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-5 w-full overflow-scroll">
                {specialityData.map((item, index) => (
                    <Link onClick={()=>scrollTo(0,0)} key={index} to={`doctors/${item.speciality}`} className="flex flex-col items-center text-xs cursor-pointer flex-schrink-0 hover:translate-y-[-10px] transition-all duration-500">
                        <img
                            className="w-64 h-auto object-cover rounded-xl border border-gray-400"
                            src={item.image}
                            alt="image of doctor"
                        />
                        <p className='py-3 text-sm'>{item.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default SpecialityMenu
