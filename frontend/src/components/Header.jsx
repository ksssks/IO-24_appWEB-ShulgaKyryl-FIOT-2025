import React from 'react'
import {assets} from "../assets/assets.js";

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
            {/*Left side*/}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
                <p className='text-2xl md:text-3xl lg:text-4xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Ваше здоров&#39;я чекає тут!</p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                    <img className='w-48' src={assets.group_profile} alt='Group image'/>
                    <p >Ми готові допомогти Вам у вирішенні будь-яких медичних питань, <br className='hidden sm:block'/> від профілактичних оглядів до спеціалізованих консультацій.

                    </p>
                </div>
                <a href='#speciality' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                    Забронювати зустріч <img src={assets.arrow_icon} alt=''/>
                </a>
            </div>
            {/*Right side*/}
            <div className='md:w-1/2 relative'>
                <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt='Header image'/>
            </div>
        </div>
    )
}
export default Header
