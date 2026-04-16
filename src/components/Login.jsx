import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router';
export function Login(){
   const navigation = useNavigate()

  const [form,setForm] = useState({
    email: '',
    password: ''
  })

  

  const [error,setError] = useState({})

  const validate = () =>{
    const newError = {}

    if(!form.email){
      newError.email = 'Името е задължително'
    }

    if(!form.email.includes('@')){
      newError.email = 'Email е НЕ валиден'
    }

    if(!form.email){
    
      newError.email = 'Email трябва да е поне с 6 синвола'
    }

    if(form.password < 6){
     newError.password = 'Паролата трябва да е поне с 6 синвола'
    }

    setError(newError)

    return Object.keys(newError).length === 0
  }

  const handlerChange = (e) => {
    setForm({...form,[e.target.name]:e.target.value})
    if (error[e.target.name]) {
      setError({ ...error, [e.target.name]: '' });
    }
  }
  
  

 const handlerForSubmite = (e) =>{
  const baseUrl = 'http://localhost:3030/users/login'
    e.preventDefault();

    if(!validate()){
      return
    }

    fetch(baseUrl,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(form)
    })
    .then(res => res.json())
    .then(data => {
      console.log('Успешно',data)
      navigation('/')
    })
    .catch(err => {
        setErrors({ server: err.message }); // Показваме и грешки от сървъра
        console.error(err);
      });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-xl rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800">Вход</h2>
        <p className="text-center text-gray-500">Добре дошли отново!</p>
        
        <form className="space-y-4" onSubmit={handlerForSubmite}>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Имейл адрес</label>
            <input
              name='email'
              value={form.email}
              onChange={handlerChange}
              type="email"
              placeholder="name@company.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              required
            />
            {error.email && <p className="mt-1 text-xs text-red-500">{error.email}</p>}
          </div>
          
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Парола</label>
            <input
              name='password'
              value={form.password}
              onChange={handlerChange}
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              required
            />
            {error.password && <p className='mt-1 text-xs text-red-500'>{error.password}</p>}
          </div>

          <div className="flex items-center justify-end">
            <a href="#" className="text-sm text-blue-600 hover:underline">Забравена парола?</a>
          </div>

          <button className="w-full py-3 font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transform transition-transform active:scale-95">
            Влез в профила
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Нямате профил?{' '}
          
        <Link to={'/register'} className='font-semibold text-blue-600 hover:underline'>Регистрирайте се</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;