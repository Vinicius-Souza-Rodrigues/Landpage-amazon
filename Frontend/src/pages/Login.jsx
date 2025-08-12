import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkLoginExists, loginPrime, reset } from '../slices/UserSlice'
import image from '../assets/img/amazon_logo.svg.png'

const Login = () => {

  const [precaucao, setPrecaucao] = useState('')

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, userEmail, token, error } = useSelector(state => state.user)

  const logim = {
    "login": login,
    "password": password,
    "role": "USER"
  }

  useEffect(() => {
    if (token != null) {
      console.log(token)
      navigate('/')
    }
  }, [token, navigate])

  useEffect(() => {
    dispatch(reset())
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(checkLoginExists(login))
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    dispatch(loginPrime(logim))
  }

  return (
    <div>
      <div className='flex flex-col justify-center gap-5 items-center p-3'>
        <Link to={"/"} className='flex '>
          <img src={image} alt="amazon" className="h-[2rem]" />
          <span className="text-xs pl-1 pt-1 select-none">.com.br</span>
        </Link>

        <div className='flex flex-col border border-gray-300 rounded-lg p-6 w-[365px]'>

          {userEmail == null && (
            <>
              <h2 className='text-xl'>Faça login ou crie uma conta</h2>
              <form onSubmit={handleSubmit} className='flex flex-col'>
                <label htmlFor='login/register' className='font-bold text-sm mt-4'>
                  Insira um número de celular ou e-mail
                </label>
                <input
                  type="email"
                  id='login/register'
                  value={login}
                  onChange={(e) => {setLogin(e.target.value), setPrecaucao(e.target.value)}}
                  className='border border-gray-400 rounded py-4 px-2 mt-1 h-[20px] focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none'
                  required
                />

                <button
                  type="submit"
                  className='bg-yellow-300 rounded-2xl p-1 mt-3 hover:bg-amber-300 active:bg-amber-400'
                  disabled={loading}
                >
                  {loading ? 'Verificando...' : 'Continuar'}
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
            </>
          )}

          {userEmail == 'not-found' && (
            <>
              <h2 className='text-xl mb-4'>Parece que você é novo na <br/>Amazon</h2>

              <p className='flex gap-6 mb-4'>{precaucao} <span className='text-blue-500 hover:underline hover:text-blue-900 cursor-pointer'>Alterar</span></p>

              <p className='mb-2'>Vamos criar uma conta usando seu e-mail</p>
              <Link to={"/register"} className='bg-yellow-300 rounded-2xl text-sm p-1 pt-2 pb-2 hover:bg-amber-300 active:bg-amber-400 text-center'>Prossiga com a criação de uma conta</Link>
              
              <div className='mt-5 border-t-2 border-gray-200'>
                <h3 className='font-bold text-sm mt-4 mb-2'>Já é cliente?</h3>

                <Link to={"/"} className='text-blue-500 hover:underline hover:text-blue-900 '>Faça login com outro e-mail ou celular</Link>
              </div>
            </>
          )}

          {userEmail != 'not-found' && userEmail != null && (
            <>
              <h2 className='text-2xl font-bold mb-3 ml-1'>Fazer Login</h2>

              <p className=''>{userEmail || 'null'} <span className='text-blue-500 cursor-pointer hover:underline'>Alterar</span></p>
              
              <form onSubmit={handleLoginSubmit} className='flex flex-col'>
                <label htmlFor='password' className='flex gap-40 font-bold text-sm mt-4'>
                  Senha

                  <span className='text-blue-500 font-normal cursor-pointer hover:underline hover:text-blue-900'>Esqueci a senha</span>
                </label>
                <input
                  type="password"
                  id='login/register'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='border border-gray-400 rounded py-4 px-2 mt-1 h-[20px] focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none'
                  required
                />
                <button
                  type="submit"
                  className='bg-yellow-300 rounded-2xl p-1 mt-3 hover:bg-amber-300 active:bg-amber-400 cursor-pointer'
                >
                  Fazer login
                </button>
              </form>
            </>
          )}

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
      </div>

      <footer className='border-t-2 border-gray-300 mt-8 p-7'>
        <ul className='flex space-x-6 justify-center'>
          <li className='text-sm text-blue-800 hover:underline hover:text-gray-900'><Link to={"/"}>Condições de uso</Link></li>
          <li className='text-sm text-blue-800 hover:underline hover:text-gray-900'><Link to={"/"}>Notificação de privacidade</Link></li>
          <li className='text-sm text-blue-800 hover:underline hover:text-gray-900'><Link to={"/"}>Ajuda</Link></li>
          <li className='text-sm text-blue-800 hover:underline hover:text-gray-900'><Link to={"/"}>Aviso de cookies</Link></li>
          <li className='text-sm text-blue-800 hover:underline hover:text-gray-900'><Link to={"/"}>Anúncios baseados em interesses</Link></li>
        </ul>
        <p className='text-xs text-gray-500 text-center mt-6'>
          &copy; 1996 — 2025, Amazon.com, Inc. ou suas afiliadas
        </p>
      </footer>
    </div>
  )
}

export default Login
