import React, {useContext, useEffect, useState} from 'react'
import {useNavigate, useParams} from "react-router-dom";
import {AppContext} from "../context/AppContext.jsx";


const Doctors = () => {
    const navigate = useNavigate();
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
            <p className='text-gray-600'>Знаходьте свого спеціаліста</p>
            <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
                <div className='flex flex-col gap-4 text-sm text-gray-600'>
                    <p onClick={() => speciality === 'general_physician' ? navigate('/IO-24_appWEB-ShulgaKyryl-FIOT-2025/doctors/') : navigate('/IO-24_appWEB-ShulgaKyryl-FIOT-2025/doctors/general_physician')}
                       className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "general_physician" ? "bg-primary text-black": ""}`}>Лікар
                        загальної практики</p>
                    <p onClick={() => speciality === 'gynecologist' ? navigate('/IO-24_appWEB-ShulgaKyryl-FIOT-2025/doctors/') : navigate('/IO-24_appWEB-ShulgaKyryl-FIOT-2025/doctors/gynecologist')}
                       className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "gynecologist" ? "bg-primary text-black": ""}`}>Гінеколог</p>
                    <p onClick={() => speciality === 'surgeon' ? navigate('/IO-24_appWEB-ShulgaKyryl-FIOT-2025/doctors/') : navigate('/IO-24_appWEB-ShulgaKyryl-FIOT-2025/doctors/surgeon')}
                       className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "surgeon" ? "bg-primary text-black": ""}`}>Хірург</p>
                    <p onClick={() => speciality === 'pediatrician' ? navigate('/IO-24_appWEB-ShulgaKyryl-FIOT-2025/doctors/') : navigate('/IO-24_appWEB-ShulgaKyryl-FIOT-2025/doctors/pediatrician')}
                       className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "pediatrician" ? "bg-primary text-black": ""}`}>Педіатр</p>
                    <p onClick={() => speciality === 'rehabilitation' ? navigate('/IO-24_appWEB-ShulgaKyryl-FIOT-2025/doctors/') : navigate('/IO-24_appWEB-ShulgaKyryl-FIOT-2025/doctors/rehabilitation')}
                       className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "rehabilitation" ? "bg-primary text-black": ""}`}>Реабілітолог</p>
                    <p onClick={() => speciality === 'cardiologist' ? navigate('/IO-24_appWEB-ShulgaKyryl-FIOT-2025/doctors/') : navigate('/IO-24_appWEB-ShulgaKyryl-FIOT-2025/doctors/cardiologist')}
                       className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "cardiologist" ? "bg-primary text-black": ""}`}>Кардіолог</p>
                    <p onClick={() => speciality === 'psychologist' ? navigate('/IO-24_appWEB-ShulgaKyryl-FIOT-2025/doctors/') : navigate('/IO-24_appWEB-ShulgaKyryl-FIOT-2025/doctors/psychologist')}
                       className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "psychologist" ? "bg-primary text-black": ""}`}>Психолог</p>
                    <p onClick={() => speciality === 'dentist' ? navigate('/IO-24_appWEB-ShulgaKyryl-FIOT-2025/doctors/') : navigate('/IO-24_appWEB-ShulgaKyryl-FIOT-2025/doctors/dentist')}
                       className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "dentist" ? "bg-primary text-black": ""}`}>Дантист</p>
                </div>

                <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
                    {
                        filterDoc.map((item, index) => (
                            <div onClick={() => navigate(`/IO-24_appWEB-ShulgaKyryl-FIOT-2025/appointment/${item._id}`)}
                                 className='border border-gray-400 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
                                 key={index}>
                                <img className='bg-primary' src={item.image} alt="image of doctor"/>
                                <div className='p-4'>
                                    <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                        <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                                        <p>Вільний</p>
                                    </div>
                                    <p className='text-lg text-gray-900 font-medium'>{item.name}</p>
                                    <p className='text-sm text-gray-600'>{item.ukr_speciality}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Doctors
