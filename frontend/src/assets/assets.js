import logo from './svg/logo.svg'
import profile from './svg/profile.svg'
import dropdown from './svg/dropdown.svg'
import arrow_icon from './svg/arrow_icon.svg'
import verify_icon from './svg/verify_icon.svg'
import info_icon from './svg/info_icon.svg'

import profile_img from './img/profile.png'
import group_profile from './img/group_profile.png'
import header_img from './img/header_img.png'
import pointing_doctor from './img/pointing_doctor.png'
import man_check from './img/man_check.jpg'


import General_physician from './img/doctor_vectors/General_physician.png'
import Hirurg from './img/doctor_vectors/Hirurg.png'
import Gynecologist from './img/doctor_vectors/Gynecologist.png'
import Reabilitolog from './img/doctor_vectors/Reabilitolog.png'
import Pediatrician from './img/doctor_vectors/Pediatrician.png'
import Cardiolog from './img/doctor_vectors/Cardiolog.png'
import Psiholog from './img/doctor_vectors/Psiholog.png'
import Dentist from './img/doctor_vectors/Dentist.png'


import twitter from './svg/twitter-x.svg'
import facebook from './svg/facebook.svg'
import instagram from './svg/instagram.svg'

import doc1 from './img/doctors/doc1.jpg'
import doc2 from './img/doctors/doc2.jpg'
import doc3 from './img/doctors/doc3.jpg'
import doc4 from './img/doctors/doc4.jpg'
import doc5 from './img/doctors/doc5.jpg'
import doc6 from './img/doctors/doc6.jpg'
import doc7 from './img/doctors/doc7.jpg'
import doc8 from './img/doctors/doc8.jpg'
import doc9 from './img/doctors/doc9.jpg'
import doc10 from './img/doctors/doc10.jpg'
import doc11 from './img/doctors/doc11.jpg'
import doc12 from './img/doctors/doc12.jpg'
import doc13 from './img/doctors/doc13.jpg'
import doc14 from './img/doctors/doc14.jpg'
import doc15 from './img/doctors/doc15.jpg'
import doc16 from './img/doctors/doc16.jpg'
import doc17 from './img/doctors/doc17.jpg'
import doc18 from './img/doctors/doc18.jpg'
import doc19 from './img/doctors/doc19.jpg'
import doc20 from './img/doctors/doc20.jpg'

export const assets = {
    logo,
    profile,
    dropdown,
    profile_img,
    group_profile,
    arrow_icon,
    header_img,
    pointing_doctor,
    twitter,
    instagram,
    facebook,
    verify_icon,
    info_icon,
    man_check
}

export const specialityData = [
    {
        speciality: 'general_physician',
        name: 'Лікар загальної практики',
        image: General_physician
    },
    {
        speciality: 'gynecologist',
        name: 'Гінеколог',
        image: Gynecologist
    },
    {
        speciality: 'surgeon',
        name: 'Хірург',
        image: Hirurg
    },
    {
        speciality: 'pediatrician',
        name: 'Педіатр',
        image: Pediatrician
    },
    {
        speciality: 'rehabilitation',
        name: 'Реабілітолог',
        image: Reabilitolog
    },
    {
        speciality: 'cardiologist',
        name:'Кардіолог',
        image: Cardiolog
    },
    {
        speciality: 'psychologist',
        name:'Психолог',
        image: Psiholog
    },
    {
        speciality: 'dentist',
        name: 'Дантист',
        image: Dentist
    }
]
export const doctors =
    [
        {
            _id: 'doc1',
            name: 'Егор Шульга',
            image: doc1,
            speciality: 'dentist',
            ukr_speciality: 'Дантист',
            degree: 'Кандидат медичних наук',
            experience: '10 років',
            about: 'Спеціалізується на лікуванні зубних захворювань та естетичній стоматології.',
            fees: '500',
            address: {
                line1: 'м. Київ, вул. Миру, 15',
                line2: 'м. Харків, вул. Наукова, 12'
            }
        },
        {
            _id: 'doc2',
            name: 'Олена Коваль',
            image: doc2,
            speciality: 'general_physician',
            ukr_speciality: 'Лікар загальної практики',
            degree: 'Доктор медичних наук',
            experience: '15 років',
            about: 'Надає консультації та медичну допомогу для пацієнтів будь-якого віку.',
            fees: '400',
            address: {
                line1: 'м. Львів, вул. Грушевського, 20',
                line2: 'м. Одеса, вул. Приморська, 5'
            }
        },
        {
            _id: 'doc3',
            name: 'Василь Дорошенко',
            image: doc3,
            speciality: 'cardiologist',
            ukr_speciality: 'Кардіолог',
            degree: 'Магістр медичних наук',
            experience: '8 років',
            about: 'Фахівець у сфері лікування серцево-судинних захворювань.',
            fees: '550',
            address: {
                line1: 'м. Дніпро, вул. Центральна, 10',
                line2: 'м. Київ, вул. Базарна, 3'
            }
        },
        {
            _id: 'doc4',
            name: 'Наталія Ткачук',
            image: doc4,
            speciality: 'pediatrician',
            ukr_speciality: 'Педіатр',
            degree: 'Доктор медичних наук',
            experience: '12 років',
            about: 'Фахівець з лікування дитячих захворювань.',
            fees: '300',
            address: {
                line1: 'м. Вінниця, вул. Лесі Українки, 45',
                line2: 'м. Полтава, вул. Сумська, 7'
            }
        },
        {
            _id: 'doc5',
            name: 'Іван Мельник',
            image: doc5,
            speciality: 'surgeon',
            ukr_speciality: 'Хірург',
            degree: 'Кандидат медичних наук',
            experience: '9 років',
            about: 'Виконує складні хірургічні операції.',
            fees: '700',
            address: {
                line1: 'м. Запоріжжя, вул. Перемоги, 22',
                line2: 'м. Чернівці, вул. Богдана Хмельницького, 9'
            }
        },
        {
            _id: 'doc6',
            name: 'Марія Степаненко',
            image: doc6,
            speciality: 'gynecologist',
            ukr_speciality: 'Гінеколог',
            degree: 'Магістр медичних наук',
            experience: '11 років',
            about: 'Спеціаліст з жіночого здоров\'я.',
            fees: '450',
            address: {
                line1: 'м. Тернопіль, вул. Київська, 8',
                line2: 'м. Рівне, вул. Шевченка, 14'
            }
        },
        {
            _id: 'doc7',
            name: 'Андрій Пономаренко',
            image: doc7,
            speciality: 'rehabilitation',
            ukr_speciality: 'Реабілітолог',
            degree: 'Магістр медичних наук',
            experience: '7 років',
            about: 'Допомагає пацієнтам з фізичною реабілітацією після травм.',
            fees: '600',
            address: {
                line1: 'м. Черкаси, вул. Гоголя, 6',
                line2: 'м. Суми, вул. Пушкіна, 2'
            }
        },
        {
            _id: 'doc8',
            name: 'Юлія Богдан',
            image: doc8,
            speciality: 'psychologist',
            ukr_speciality: 'Психолог',
            degree: 'Кандидат психологічних наук',
            experience: '10 років',
            about: 'Займається психологічним консультуванням та терапією.',
            fees: '500',
            address: {
                line1: 'м. Київ, вул. Франка, 30',
                line2: 'м. Львів, вул. Шота Руставелі, 17'
            }
        },
        {
            _id: 'doc9',
            name: 'Павло Зінченко',
            image: doc9,
            speciality: 'cardiologist',
            ukr_speciality: 'Кардіолог',
            degree: 'Доктор медичних наук',
            experience: '14 років',
            about: 'Проводить лікування та профілактику серцевих захворювань.',
            fees: '650 грн за консультацію',
            address: {
                line1: 'м. Кривий Ріг, вул. Гагаріна, 11',
                line2: 'м. Одеса, вул. Дерибасівська, 5'
            }
        },
        {
            _id: 'doc10',
            name: 'Світлана Гаврилюк',
            image: doc10,
            speciality: 'dentist',
            ukr_speciality: 'Дантист',
            degree: 'Магістр медичних наук',
            experience: '6 років',
            about: 'Проводить лікування зубів та займається профілактикою стоматологічних захворювань.',
            fees: '400',
            address: {
                line1: 'м. Ужгород, вул. Незалежності, 4',
                line2: 'м. Івано-Франківськ, вул. Січових Стрільців, 21'
            }
        },
        {
            _id: 'doc11',
            name: 'Олександр Романюк',
            image: doc11,
            speciality: 'general_physician',
            ukr_speciality: 'Лікар загальної практики',
            degree: 'Кандидат медичних наук',
            experience: '12 років',
            about: 'Проводить загальну діагностику та профілактичні огляди.',
            fees: '450',
            address: {
                line1: 'м. Київ, вул. Хрещатик, 19',
                line2: 'м. Дніпро, вул. Січеславська, 2'
            }
        },
        {
            _id: 'doc12',
            name: 'Тетяна Левчук',
            image: doc12,
            speciality: 'pediatrician',
            ukr_speciality: 'Педіатр',
            degree: 'Магістр медичних наук',
            experience: '8 років',
            about: 'Спеціалізується на лікуванні та профілактиці дитячих хвороб.',
            fees: '400',
            address: {
                line1: 'м. Харків, вул. Свободи, 21',
                line2: 'м. Одеса, вул. Князівська, 14'
            }
        },
        {
            _id: 'doc13',
            name: 'Максим Василенко',
            image: doc13,
            speciality: 'surgeon',
            ukr_speciality: 'Хірург',
            degree: 'Доктор медичних наук',
            experience: '15 років',
            about: 'Виконує оперативне втручання з метою лікування різних захворювань.',
            fees: '800',
            address: {
                line1: 'м. Львів, вул. Дорошенка, 8',
                line2: 'м. Чернівці, вул. Кармелюка, 5'
            }
        },
        {
            _id: 'doc14',
            name: 'Ірина Снігур',
            image: doc14,
            speciality: 'rehabilitation',
            ukr_speciality: 'Реабілітолог',
            degree: 'Кандидат медичних наук',
            experience: '10 років',
            about: 'Займається відновленням функцій після травм.',
            fees: '500',
            address: {
                line1: 'м. Вінниця, вул. Космонавтів, 11',
                line2: 'м. Житомир, вул. Перемоги, 16'
            }
        },
        {
            _id: 'doc15',
            name: 'Сергій Задорожний',
            image: doc15,
            speciality: 'cardiologist',
            ukr_speciality: 'Кардіолог',
            degree: 'Доктор медичних наук',
            experience: '18 років',
            about: 'Спеціаліст у сфері кардіології, займається лікуванням серцево-судинних захворювань.',
            fees: '600',
            address: {
                line1: 'м. Полтава, вул. Шевченка, 9',
                line2: 'м. Чернігів, вул. Гетьмана, 4'
            }
        },
        {
            _id: 'doc16',
            name: 'Ольга Мельник',
            image: doc16,
            speciality: 'gynecologist',
            ukr_speciality: 'Гінеколог',
            degree: 'Магістр медичних наук',
            experience: '14 років',
            about: 'Фахівець у сфері жіночого здоров\'я.',
            fees: '450',
            address: {
                line1: 'м. Тернопіль, вул. Пушкіна, 10',
                line2: 'м. Хмельницький, вул. Гончара, 7'
            }
        },
        {
            _id: 'doc17',
            name: 'Анна Гончар',
            image: doc17,
            speciality: 'psychologist',
            ukr_speciality: 'Психолог',
            degree: 'Кандидат психологічних наук',
            experience: '9 років',
            about: 'Надає психологічну підтримку та консультації.',
            fees: '500',
            address: {
                line1: 'м. Київ, вул. Лесі Українки, 5',
                line2: 'м. Львів, вул. Зеленська, 3'
            }
        },
        {
            _id: 'doc18',
            name: 'Віктор Поліщук',
            image: doc18,
            speciality: 'cardiologist',
            ukr_speciality: 'Кардіолог',
            degree: 'Магістр медичних наук',
            experience: '7 років',
            about: 'Проводить діагностику та лікування серцево-судинних захворювань.',
            fees: '600',
            address: {
                line1: 'м. Суми, вул. Покровська, 2',
                line2: 'м. Миколаїв, вул. Кузнецова, 9'
            }
        },
        {
            _id: 'doc19',
            name: 'Інна Василюк',
            image: doc19,
            speciality: 'pediatrician',
            ukr_speciality: 'Педіатр',
            degree: 'Магістр медичних наук',
            experience: '10 років',
            about: 'Педіатр з великим досвідом роботи з дітьми різного віку.',
            fees: '400',
            address: {
                line1: 'м. Івано-Франківськ, вул. Мазепи, 22',
                line2: 'м. Ужгород, вул. Сагайдачного, 13'
            }
        },
        {
            _id: 'doc20',
            name: 'Богдан Шевченко',
            image: doc20,
            speciality: 'surgeon',
            ukr_speciality: 'Хірург',
            degree: 'Доктор медичних наук',
            experience: '20 років',
            about: 'Досвідчений хірург з високими професійними навичками.',
            fees: '800',
            address: {
                line1: 'м. Запоріжжя, вул. Січових Стрільців, 12',
                line2: 'м. Дніпро, вул. Набережна, 6'
            }
        }
    ]