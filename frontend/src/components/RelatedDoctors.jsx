import React, {useContext, useEffect} from 'react'
import {AppContext} from "../context/AppContext.jsx";
import {useNavigate} from "react-router-dom";

const RelatedDoctors = ({speciality, docId}) => {

    const {doctors} = useContext(AppContext)
    const navigate = useNavigate()

    const [relDoc, setRelDocs] = React.useState([])
    useEffect(()=>{
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc)=> doc.speciality === speciality && doc._id !== docId)
            setRelDocs(doctorsData)
        }
    }, [doctors, speciality, docId])
    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-medium'>Схожі лікарі</h1>
            <p className='sm:w-2/3 text-center text-sm'>Передайте Ваше здоров&#39;я у надійні руки</p>
            <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {relDoc.slice(0, 5).map((item, index) => (
                    <div onClick={() => {navigate(`/IO-24_appWEB-ShulgaKyryl-FIOT-2025/appointment/${item._id}`); scrollTo(0,0)}}
                         className='border border-gray-400 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
                         key={index}>
                        <img className='bg-primary ' src={item.image} alt="image of doctor"/>
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                                <p>Вільний</p>
                            </div>
                            <p className='text-lg text-gray-900 font-medium'>{item.name}</p>
                            <p className='text-sm text-gray-600'>{item.ukr_speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={() => {
                navigate('/IO-24_appWEB-ShulgaKyryl-FIOT-2025/doctors');
                scroll(0, 0)
            }}
                    className='bg-primary text-white px-16 py-3 rounded-full mt-10 hover:scale-105 transition-all duration-300'>Більше
            </button>
        </div>
    )
}
export default RelatedDoctors
