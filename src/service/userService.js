const baseUrl = 'http://localhost:3030/users/register'

export default{
    async register(userData) {
        const response = await fetch(baseUrl,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(userData)
    })
    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.message || 'Registration failed')
    }

    return result

    }
}