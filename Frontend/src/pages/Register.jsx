import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createRegister, reset } from '../slices/UserSlice'
import image from '../assets/img/amazon_logo.svg.png'

const Register = () => {

  const [login, setLogin] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, userEmail, error } = useSelector(state => state.user)

  const user = {
    "login" : login,
    "password": password,
    "role" : "USER"
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createRegister(user))
  }

  useEffect(() => {
    if (userEmail) {
      navigate('/login')
    }
  }, [userEmail, navigate])

  return (
    <div>
        <div className='flex flex-col justify-center gap-5 items-center p-3'>
        <Link to={"/"} className='flex '>
          <img src={image} alt="amazon" className="h-[2rem]" />
          <span className="text-xs pl-1 pt-1 select-none">.com.br</span>
          {userEmail || 'null'}
        </Link>

        <div className='flex flex-col border border-gray-300 rounded-lg p-6 w-[365px]'>
              <h2 className='text-2xl font-bold mb-4'>Criar conta</h2>

              <p className=''>Já é cliente? <Link to={'/login'} className='text-blue-800 hover:underline hover:text-blue-900'>Fazer login</Link></p>

              <form onSubmit={handleSubmit} className='flex flex-col'>
                <label htmlFor='login/register' className='font-bold text-sm mt-4'>
                  Insira um número de celular ou um endereço de e-mail
                </label>
                <input
                  type="email"
                  id='login/register'
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  className='border border-gray-400 rounded py-4 px-2 mt-1 h-[20px] focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none'
                  required
                />

                <label htmlFor='name' className='font-bold text-sm mt-4'>
                  Seu nome
                </label>
                <input
                  type="text"
                  id='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='border border-gray-400 rounded py-4 px-2 mt-1 h-[20px] focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none'
                  required
                />

                <label htmlFor='password' className='font-bold text-sm mt-4'>
                  Senha (pelo menos 6 caracteres)
                </label>
                <input
                  type="password"
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='border border-gray-400 rounded py-4 px-2 mt-1 h-[20px] focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none'
                  required
                />

                <label htmlFor='confirm-password' className='font-bold text-sm mt-4'>
                  Insira a senha nova mais uma vez
                </label>
                <input
                  type="password"
                  id='confirm-password'
                  value={confirmpassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className='border border-gray-400 rounded py-4 px-2 mt-1 h-[20px] focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none'
                  required
                />

                <button
                  type="submit"
                  className='bg-yellow-300 rounded-2xl p-1 mt-3 hover:bg-amber-300 active:bg-amber-400'
                >
                  {login != '' && (
                    "Verificar e-mail"
                  )}

                  {login == '' && (
                    "Continuar"
                  )}
                </button>
              </form>

              <p className='mt-3 text-sm'>
            Ao continuar, você concorda com as
            <span>
              <Link to={'/canto-nenhum'} className='text-blue-800 underline hover:text-gray-900'> Condições de Uso </Link>
            </span>
            e a
            <span>
              <Link to={'/canto-nenhum'} className='text-blue-800 underline hover:text-gray-900'> Notificação de privacidade </Link>
            </span>
            da Amazon.
          </p>

          <span className='mt-3'>
            <Link to={"/algo"} className='text-sm text-blue-800 hover:underline hover:text-gray-900'>
              Precisa de ajuda?
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Register
