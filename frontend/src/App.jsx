import React from 'react'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Doctors from "./pages/Doctors.jsx";
import Login from "./pages/Login.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import MyProfile from "./pages/MyProfile/MyProfile.jsx";
import MyAppointments from "./pages/MyAppointments.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Appointment from "./pages/Appointment.jsx";



const App = () => {
    return (
        <div className='mx-4 sm:mx-[10%]'>
            <Navbar/>
            <Routes>
                <Route path='/IO-24_appWEB-ShulgaKyryl-FIOT-2025' element={<Home/>}/>
                <Route path='/IO-24_appWEB-ShulgaKyryl-FIOT-2025/doctors' element={<Doctors/>}/>
                <Route path='/IO-24_appWEB-ShulgaKyryl-FIOT-2025/doctors/:speciality' element={<Doctors/>}/>
                <Route path='/IO-24_appWEB-ShulgaKyryl-FIOT-2025/login' element={<Login/>}/>
                <Route path='/IO-24_appWEB-ShulgaKyryl-FIOT-2025/about' element={<About/>}/>
                <Route path='/IO-24_appWEB-ShulgaKyryl-FIOT-2025/contact' element={<Contact/>}/>
                <Route path='/IO-24_appWEB-ShulgaKyryl-FIOT-2025/my-profile' element={<MyProfile/>}/>
                <Route path='/IO-24_appWEB-ShulgaKyryl-FIOT-2025/my-appointments' element={<MyAppointments/>}/>
                <Route path='/IO-24_appWEB-ShulgaKyryl-FIOT-2025/appointment/:docId' element={<Appointment/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}
export default App
