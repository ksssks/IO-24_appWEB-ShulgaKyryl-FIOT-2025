import React from 'react'
import Header from "../components/Header.jsx";
import SpecialityMenu from "../components/SpecialityMenu.jsx";
import TopDoctors from "../components/TopDoctors.jsx";
import Banner from "../components/Banner.jsx";
import Table from "../components/Table.jsx";

const Home = () => {
    return (
        <div>
            <Header/>
            <SpecialityMenu/>
            <TopDoctors/>
            <Table/>
            <Banner/>
        </div>
    )
}
export default Home
