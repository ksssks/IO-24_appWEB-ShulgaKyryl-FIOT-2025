import React from 'react'
import {assets} from "../assets/assets.js";

const Footer = () => {
    return (
        <div className="md:mx-10">
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                {/*Left*/}
                <div>
                    <img className='mb-5 w-20' src={assets.logo} alt='logo'/>
                    <p className='w-full md:w-2/3 text-gray-600 leading-600'>VitalPath — це сучасний медичний заклад, який спеціалізується на наданні високоякісних медичних
                        послуг для підтримки здоров'я і благополуччя пацієнтів будь-якого віку. Ми об'єднуємо команду
                        досвідчених лікарів та спеціалістів, які надають комплексні послуги, включаючи діагностику,
                        лікування та реабілітацію.</p>
                </div>
                {/*Center*/}
                <div>
                    <p className='text-xl font-medium mb-5'>Компанія</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Домашня</li>
                        <li>Про нас</li>
                        <li>Контакти</li>
                        <li>Політика конфіденційності</li>
                    </ul>
                </div>
                {/*Right*/}
                <div>
                    <p className='text-xl font-medium mb-5'>Зв&#39;яжіться з нами</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>050 777 77 77</li>
                        <li>vitalpath.support@gmail.com</li>
                    </ul>
                    <div className='flex gap-3 mt-5'>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
                           aria-label="Instagram">
                            <img src={assets.instagram} alt="Instagram" className="w-6 h-6 dark:invert dark:bg-white"/>
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                           aria-label="Facebook">
                            <img src={assets.facebook} alt="Facebook" className="w-6 h-6 dark:invert dark:bg-white"/>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"
                           aria-label="X (Twitter)">
                            <img src={assets.twitter} alt="X (Twitter)" className="w-6 h-6 dark:invert dark:bg-white"/>
                        </a>
                    </div>
                </div>
            </div>
            {/*Copyright*/}
            <div>
                <hr/>
                <p className='py-5 text-sm text-center'>© 2025 VitalPath. Всі права захищені.</p>
            </div>
        </div>
    )
}
export default Footer
