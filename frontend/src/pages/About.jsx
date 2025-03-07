import React from 'react'
import {assets} from "../assets/assets.js";

const About = () => {
    return (
        <div>
            <div className='text-center text-2xl pt-10'>
                <p>Про Нас</p>
            </div>

            <div className='my-10 flex flex-col md:flex-row gap-12'>
                <img className='w-full md:max-w-[600px]' src={assets.man_check} alt='About image'/>
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm '>
                    <b>Наша мета</b>
                    <p> VitalPath є сучасною інформаційною системою, яка створена для автоматизації та
                        оптимізації процесів надання медичних послуг. Основною метою застосунку є забезпечення зручного,
                        безпечного та ефективного зв&#39;язку між пацієнтами, лікарями та адміністрацією медичного
                        закладу.
                        Цей
                        застосунок дозволяє значно спростити процеси бронювання візитів, управління медичними даними та
                        забезпечення безперервного доступу до важливої інформації як для медичного персоналу, так і для
                        пацієнтів.
                    </p>
                    <b>Ваші можливості</b>
                    <p> Ви отримуєте можливість реєструватися у системі та створювати персональні кабінети, де
                        зберігаються їх медичні записи, історія візитів та результати обстежень. Легко обирайте
                        необхідного лікаря, переглядайте доступні часові слоти в інтерактивному календарі та бронюйте
                        візити
                        онлайн. Також доступна функція скасування або перенесення запису.</p>
                    <b>Конфіденційність</b>
                    <p>
                        Особливу увагу приділено безпеці даних. Вся інформація про пацієнтів та лікарів зберігається у
                        захищеній
                        базі даних із використанням сучасних алгоритмів шифрування. Доступ до системи надається лише
                        після
                        автентифікації та авторизації користувачів, що забезпечує конфіденційність інформації.</p>
                </div>
            </div>
        </div>
    )
}
export default About
