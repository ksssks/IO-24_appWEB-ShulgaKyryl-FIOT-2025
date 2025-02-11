import React, {useContext, useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {AppContext} from "../context/AppContext.jsx";


const Doctors = () => {

    const {speciality} = useParams()
    const [filterDoc, setFilterDoc] = useState([])
    const {doctors} = useContext(AppContext)
    const applyFilter = () => {
        if (speciality) {
            setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
        } else {
            setFilterDoc(doctors)
        }
    }

    useEffect(() => {
        applyFilter()
    }, [doctors, speciality])

    return (
        <div>
            <p>Знаходьте свого спеціаліста</p>
            <div>
                <div>
                    <p>Лікар загальної практики</p>
                    <p>Гінеколог</p>
                    <p>Хірург</p>
                    <p>Педіатр</p>
                    <p>Реабілітолог</p>
                    <p>Кардіолог</p>
                    <p>Психолог</p>
                    <p>Дантист</p>
                </div>
            </div>
            <div>
                {
                    filterDoc.map((item, index) => (
                        <div onClick={() => navigate(`/appointment/${item._id}`)}
                             className='border border-gray-400 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
                             key={index}>
                            <img className='bg-primary ' src={item.image} alt="image of doctor"/>
                            <div className='p-4'>
                                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                    <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                                    <p>Вільний</p>
                                </div>
                                <p className='text-lg text-gray-900 font-medium'>{item.name}</p>
                                <p className='text-sm text-gray-600'>{item.speciality}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Doctors
