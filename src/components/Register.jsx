import { useState } from "react"
import { Link,useNavigate } from "react-router"

export default function Register(){

const [form,setForm] = useState({
  username:'',
  email:'',
  password:''
})

const navigation = useNavigate()

const handlerForSubmite = (e) =>{
  const baseUrl = 'http://localhost:3030/users/register'
    e.preventDefault();

    fetch(baseUrl,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(form)
    })
    .then(res => res.json())
    .then(data => {
      console.log('Успешно',data)
      navigation('/login')
    })
    .catch(err => console.error(err))
  }
    return(     
       <>
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-xl rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800">Регистрация</h2>
        <p className="text-center text-gray-500">Създайте своя безплатен профил</p>
        
        <form className="space-y-4" onSubmit={handlerForSubmite}>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Пълно име</label>
            <input
              name="username"
              onChange={(e) =>{
                setForm({...form,[e.target.name]:e.target.value})
              }}            
              type="text"
              placeholder="Иван Иванов"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Имейл адрес</label>
            <input
              name="email"
              onChange={(e) =>{
                setForm({...form,[e.target.name]:e.target.value})
              }}            
              type="email"
              placeholder="name@company.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              required
            />
          </div>
          
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Парола</label>
            <input
              name="password"
              onChange={(e) =>{
                setForm({...form,[e.target.name]:e.target.value})
              }}            
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              required
            />
          </div>

          <button className="w-full py-3 font-semibold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transform transition-transform active:scale-95">
            Създай профил
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Вече имате профил?{' '}
          <Link to={'/login'} className="font-semibold text-blue-600 hover:underline">Влезте тук</Link>
        </p>
      </div>
    </div>
        </>
    )
}