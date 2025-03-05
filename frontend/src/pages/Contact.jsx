import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <div className="w-11/12 max-w-5xl h-auto min-h-[90vh] flex flex-col justify-center items-center bg-primary shadow-2xl rounded-3xl border border-white/30 p-6 sm:p-10 mx-auto">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-xl text-center">Зв'яжіться з нами</h2>
            <p className="text-lg sm:text-xl leading-relaxed text-white/95 text-center max-w-3xl mt-4">
                Маєте питання, пропозиції чи бажаєте приєднатися до нашої команди? Залиште свій запит, і ми обов'язково відповімо!
            </p>

            <div className="space-y-5 w-full max-w-lg mt-8">
                <div className="flex flex-col sm:flex-row items-center bg-white/25 p-4 sm:p-5 rounded-2xl shadow-lg backdrop-blur-lg">
                    <Mail className="text-white mb-2 sm:mb-0 sm:mr-4" size={24} />
                    <span className="text-lg sm:text-xl font-medium text-white text-center sm:text-left">vitalpath.support@gmail.com</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center bg-white/25 p-4 sm:p-5 rounded-2xl shadow-lg backdrop-blur-lg">
                    <Phone className="text-white mb-2 sm:mb-0 sm:mr-4" size={24} />
                    <span className="text-lg sm:text-xl font-medium text-white text-center sm:text-left">+38 (050) 777-77-77</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center bg-white/25 p-4 sm:p-5 rounded-2xl shadow-lg backdrop-blur-lg">
                    <MapPin className="text-white mb-2 sm:mb-0 sm:mr-4" size={24} />
                    <span className="text-lg sm:text-xl font-medium text-white text-center sm:text-left">м. Київ, вул. Хрещатик, 1</span>
                </div>
            </div>

            <button className="mt-8 px-6 sm:px-10 py-4 sm:py-5 bg-white text-primary font-bold rounded-2xl shadow-xl flex items-center gap-3 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-2xl">
                Приєднатися до команди <ArrowRight size={20} sm:size={22} />
            </button>
        </div>
    );
};

export default Contact;