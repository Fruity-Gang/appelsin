import { useState } from 'react'

const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 

const onSubmit = (e) => {
    e.preventDefault() 

    if(!Text) {
        alert('Please add your email')
        return
    }

    onLogin({ email, password })
    
    setEmail('')
    setPassword('')
}

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Email</label>
            <input
             type='text'
             placeholder='email'
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             />
        </div>
        <div className='form-control'>
            <label>Password</label>
            <input 
            type='password' 
            placeholder='******'
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>

        <input type='submit' value='login'
        className='btn' />
    </form>
  )
}

export default LoginForm