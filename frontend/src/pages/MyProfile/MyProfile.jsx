import React, { useState } from 'react';
import { assets } from "../../assets/assets.js";
import './MyProfile.css';

const MyProfile = () => {
    const [userData, setUserData] = useState({
        name: "Соломко Вадим",
        image: assets.profile_img,
        email: "solomko_vad@gmail.com",
        phone: "+380501230899",
        address: {
            line1: "Визволителів 10, Боярка",
            line2: "Жмишенка 8, Київ",
        },
        gender: "Чоловік",
        dob: '1998-03-02'
    });

    const [isEdit, setIsEdit] = useState(false);

    return (
        <div className="profile">
            <div className="profile__image">
                <img src={userData.image} alt="profile" />
            </div>

            <div className="profile__info">
                <p className="profile__email">{userData.email}</p>

                {isEdit ? (
                    <input type="text" value={userData.name}
                           onChange={e => setUserData(prev => ({...prev, name: e.target.value}))}/>
                ) : (
                    <h2>{userData.name}</h2>
                )}

                {isEdit ? (
                    <input type="text" value={userData.phone}
                           onChange={e => setUserData(prev => ({...prev, phone: e.target.value}))}/>
                ) : (
                    <p>{userData.phone}</p>
                )}

                {isEdit ? (
                    <>
                        <input type="text" value={userData.address.line1} onChange={e => setUserData(prev => ({
                            ...prev,
                            address: {...prev.address, line1: e.target.value}
                        }))}/>
                        <input type="text" value={userData.address.line2} onChange={e => setUserData(prev => ({
                            ...prev,
                            address: {...prev.address, line2: e.target.value}
                        }))}/>
                    </>
                ) : (
                    <p>{userData.address.line1} <br/> {userData.address.line2}</p>
                )}

                {isEdit ? (
                    <select onChange={(e) => setUserData(prev => ({...prev, gender: e.target.value}))}
                            value={userData.gender}>
                        <option value="Чоловік">Чоловік</option>
                        <option value="Жінка">Жінка</option>
                    </select>
                ) : (
                    <p>{userData.gender}</p>
                )}

                {isEdit ? (
                    <input type="date" value={userData.dob}
                           onChange={(e) => setUserData(prev => ({...prev, dob: e.target.value}))}/>
                ) : (
                    <p>{userData.dob}</p>
                )}
            </div>

            <div className="profile__actions">
            {isEdit ? (
                    <button className="profile__button" onClick={() => setIsEdit(false)}>Зберегти</button>
                ) : (
                    <button id="profile__button" onClick={() => setIsEdit(true)}>Редагувати</button>
                )}
            </div>
        </div>
    );
};

export default MyProfile;
