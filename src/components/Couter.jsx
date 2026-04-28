import { useState } from "react"

export default function Couter() {
    const [coute, setCount] = useState(0)

    const innreceHandler = () => {
        if (coute < 10) {
            setCount(c => c + 1)
        }
    }

    const degreHandler = () => {
        if (coute > 0) {
            setCount(c => c - 1)
        }
    }



    return (
        <>
            <div className="min-h-screen bg-gray-700 flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-xl p-6">

                    {/* Title */}
                    <h1 className="text-2xl font-bold text-white mb-4 text-center">
                        Couter
                    </h1>
                    <h2 className="text-2xl font-bold text-white mb-4 text-center">
                        {coute}
                    </h2>
                    <div className="flex justify-center items-center gap-4">
                        <button
                            className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-400 transition"
                            onClick={innreceHandler}>
                            +
                        </button>
                        <button
                            className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-400 transition"
                            onClick={degreHandler}>
                            -
                        </button>
                    </div>
                    {coute === 10 && (
                        <p className="text-amber-400 font-medium animate-bounce">Достигнахте лимита от {coute}!</p>
                    )}

                    {coute === 0 && (
                        <p className="text-gray-400 text-sm italic">Броячът е на нула.</p>
                    )}
                </div>
            </div>

        </>
    )
}