import React, { useState } from 'react';

const Login = () => {
    const [state, setState] = useState('Увійти');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const onSubmitHandler = async (event) => {
        event.preventDefault();
    };

    return (
        <form className='min-h-[80vh] flex items-center'>
            <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-sm shadow-lg'>
                <p className='text-2xl font-semibold'>{state === 'Зареєструватися' ? "Створити акаунт" : "Увійти"}</p>
                <p>Будь ласка, {state === 'Зареєструватися' ? 'зареєструйтеся' : 'увійдіть'}, щоб забронювати запис</p>
                {
                    state === 'Зареєструватися' && <div className='w-full'>
                        <p>Ім&#39;я</p>
                        <input className='border rounded w-full p-2 mt-1' type="text"
                               onChange={(e) => setName(e.target.value)} value={name} required/>
                    </div>
                }
                <div className='w-full'>
                    <p>Електронна пошта</p>
                    <input className='border rounded w-full p-2 mt-1' type="text"
                           onChange={(e) => setEmail(e.target.value)} value={email} required/>
                </div>
                <div className='w-full'>
                    <p>Пароль</p>
                    <input className='border rounded w-full p-2 mt-1' type="password" onChange={(e) => setPassword(e.target.value)} value={password} required/>
                </div>
                <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === 'Зареєструватися' ? 'Створити акаунт' : 'Увійти'}</button>
                {
                    state === 'Зареєструватися'
                        ? <p>Вже маєте акаунт? <span onClick={() => setState('Увійти')} className='text-primary underline cursor-pointer'>Увійдіть тут</span></p>
                        : <p>Створити новий акаунт? <span onClick={() => setState('Зареєструватися')} className='text-primary underline cursor-pointer'>Натисніть тут</span></p>
                }
            </div>
        </form>
    );
};

export default Login;