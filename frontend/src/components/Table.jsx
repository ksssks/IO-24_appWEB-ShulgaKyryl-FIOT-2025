import React from "react";

const Table = () => {
    return (
        <div className="p-6">
            <h2 className="text-3xl font-semibold mb-6 text-center">
                Ключові переваги VitalPath
            </h2>
            <div className="overflow-x-auto rounded-lg shadow-md">
                <table className="w-full text-left border-collapse hidden sm:table">
                    <thead>
                    <tr className="bg-primary text-white">
                        <th className="px-6 py-4 font-medium">Перевага</th>
                        <th className="px-6 py-4 font-medium">Опис</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="odd:bg-white even:bg-gray-50 hover:bg-gray-100">
                        <td className="border-t border-gray-200 px-6 py-4">Доступність 24/7</td>
                        <td className="border-t border-gray-200 px-6 py-4">
                            Пацієнти можуть отримати медичну консультацію у будь-який час доби.
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 hover:bg-gray-100">
                        <td className="border-t border-gray-200 px-6 py-4">Відсутність черг</td>
                        <td className="border-t border-gray-200 px-6 py-4">
                            Можливість записатися на прийом без тривалого очікування.
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 hover:bg-gray-100">
                        <td className="border-t border-gray-200 px-6 py-4">Доступ до спеціалістів</td>
                        <td className="border-t border-gray-200 px-6 py-4">
                            Консультації від провідних медичних експертів незалежно від місцезнаходження.
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 hover:bg-gray-100">
                        <td className="border-t border-gray-200 px-6 py-4">Електронні рецепти</td>
                        <td className="border-t border-gray-200 px-6 py-4">
                            Отримання та зберігання рецептів у цифровому форматі.
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 hover:bg-gray-100">
                        <td className="border-t border-gray-200 px-6 py-4">
                            Інтеграція з лабораторіями
                        </td>
                        <td className="border-t border-gray-200 px-6 py-4">
                            Швидкий доступ до результатів аналізів та обстежень.
                        </td>
                    </tr>
                    </tbody>
                </table>
                {/* Mobile View */}
                <div className="sm:hidden">
                    <div className="space-y-4">
                        <div className="bg-white rounded-lg shadow p-4 border">
                            <p className="font-medium text-primary">Доступність 24/7</p>
                            <p className="text-gray-600">
                                Пацієнти можуть отримати медичну консультацію у будь-який час доби.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow p-4 border">
                            <p className="font-medium text-primary">Відсутність черг</p>
                            <p className="text-gray-600">
                                Можливість записатися на прийом без тривалого очікування.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow p-4 border">
                            <p className="font-medium text-primary">Доступ до спеціалістів</p>
                            <p className="text-gray-600">
                                Консультації від провідних медичних експертів незалежно від місцезнаходження.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow p-4 border">
                            <p className="font-medium text-primary">Електронні рецепти</p>
                            <p className="text-gray-600">
                                Отримання та зберігання рецептів у цифровому форматі.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow p-4 border">
                            <p className="font-medium text-primary">Інтеграція з лабораторіями</p>
                            <p className="text-gray-600">
                                Швидкий доступ до результатів аналізів та обстежень.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;
