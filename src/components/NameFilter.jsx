import { useState } from "react";

export default function NameFilter() {

    const names = ["Александър", "Борис", "Виктория", "Георги", "Димитър", "Елена", "Мария"];

    const [searchTerm, setSearchTerm] = useState('')

    const filteredNames = names.filter((name) => {
    return name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    })

    const changeHandler = (e) =>{
        setSearchTerm(e.target.value)
    }

    return (<>

        <div className="min-h-screen bg-gray-700 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-xl p-6">

                {/* Title */}
                <h1 className="text-2xl font-bold text-white mb-4 text-center">
                    Търсене на име
                </h1>

                <div className="flex gap-2 mb-4">
                    <input
                        value={searchTerm}
                        onChange={changeHandler}
                        type="text"
                        placeholder="Добави на ново име..."
                        className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                 <ul className="space-y-2">
                    {filteredNames.map((name,index) => (
                        <li key={index}
                        className={`flex items-center justify-between bg-gray-700 p-3 rounded-lg`}
                        >{name}</li>
                    ))}
                 </ul>


                 {filteredNames.length === 0 && <p className="text-center">Няма намерени</p>}
            </div>
        </div>

    </>)
}