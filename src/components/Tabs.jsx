import { useState } from "react"

export default function Tabs() {

    const [activeTab, setActiveTab] = useState(1)

   const tabs = [
                { id: 1, title: "Tab 1", content: "Първи таб: Добре дошли в началото!" },
                { id: 2, title: "Tab 2", content: "Втори таб: Тук има малко повече информация." },
                { id: 3, title: "Tab 3", content: "Трети таб: Това е финалната секция." }
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

