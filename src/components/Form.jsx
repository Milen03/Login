import { useState } from "react"

export default function Form(){
  
    const [form,setForm] = useState({
        fullName: "",
        email: "",
        password: "",
    })

    const handlerChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handlerSubmite = (e) =>{
        e.preventDefault()
        console.log(form);
        
    }


    return(<>
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">Create Account</h2>
    <form onSubmit={handlerSubmite}>
        <label className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
        name="fullName"
        value={form.fullName}
        onChange={handlerChange} 
        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        type="text" />

        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
        name="email"
        value={form.email}
        onChange={handlerChange} 
        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        type="email" />

        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
        name="password"
        value={form.password}
        onChange={handlerChange} 
        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        type="password" />

         <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Register
          </button>
    </form>
    </div>
    </div>
    </>)
}