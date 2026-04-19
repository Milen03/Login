import { useState } from "react"

export default function Tabs() {

    const [activeTab, setActiveTab] = useState(1)


   const tabs = [
                { id: 1, title: "Virtual DOM",  content: 'Virtual DOM е леко JavaScript представяне на реалния DOM Когато има промяна в state или props, React създава нов Virtual DOM и го сравнява със стария чрез процес, наречен reconciliation.След това React обновява само променените части в реалния DOM, което прави приложението по-бързо и ефективно.' },
                { id: 2, title: "Controlled VS Uncontrolled", content: "Controlled components са такива, при които form данните се управляват от React state. Стойността на input-а идва от state и се обновява чрез onChange handler.Uncontrolled components използват директно DOM-а за съхранение на стойности, като обикновено се достъпват чрез ref.Controlled компонентите дават повече контрол и са по-предпочитани, защото позволяват лесна валидация и управление на формата." },
                { id: 3, title: "useEffect", content: "useEffect е hook в React, който се използва за странични ефекти като fetch заявки, работа с DOM или subscriptions.Той се изпълнява след render на компонента.Dependency array определя кога ще се изпълни: ако е празен [] → изпълнява се само при mountако има стойности → се изпълнява при промяна на тези стойностиако няма dependency array → се изпълнява при всеки renderМоже да върне cleanup функция, която се изпълнява при unmount или преди следващия effect." },
                {id:4,title:'Key',content:'Key е специален prop в React, който се използва за идентифициране на елементи в списъци.Той помага на React при процеса на reconciliation да разбере кои елементи са променени, добавени или премахнати.Key трябва да е уникален за всеки елемент, за да може React да оптимизира render-а и да избегне грешки.'},
            ];

    return (
                <div className="min-h-screen flex items-center justify-center p-4">
                    <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
                        
                        {/* Tab Headers */}
                        <div className="flex bg-gray-850 border-b border-gray-700">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex-1 py-4 text-sm font-bold transition-all duration-300
                                        ${activeTab === tab.id 
                                            ? "text-blue-400 border-b-2 border-blue-400 bg-gray-700" 
                                            : "text-gray-500 hover:text-gray-300 hover:bg-gray-750"}`}
                                >
                                    {tab.title}
                                </button>
                            ))}
                        </div>

                        {/* Content Area */}
                        <div className="p-8 text-center animate-fadeIn">
                            {tabs.map((tab) => (
                                activeTab === tab.id && (
                                    <div key={tab.id}>
                                        <h2 className="text-2xl font-bold mb-4 text-blue-400">
                                            {tab.title}
                                        </h2>
                                        <p className="text-gray-300 leading-relaxed">
                                            {tab.content}
                                        </p>
                                    </div>
                                )
                            ))}
                        </div>

                    </div>
                </div>
            );
}

