import { useState } from "react"

const Register = () => {

    const [useRegister, setuseRegister] = useState('')

  return (
    <div>
        <div className='flex flex-col justify-center gap-5 items-center p-3'>
        <Link to={"/"} className='flex '>
          <img src={image} alt="amazon" className="h-[2rem]" />
          <span className="text-xs pl-1 pt-1 select-none">.com.br</span>
        </Link>

        <div className='flex flex-col border border-gray-300 rounded-lg p-6 w-[365px]'>
              <h2 className='text-xl'>Faça login ou crie uma conta</h2>
              <form onSubmit={handleSubmit} className='flex flex-col'>
                <label htmlFor='login/register' className='font-bold text-sm mt-4'>
                  Insira um número de celular ou e-mail
                </label>
                <input
                  type="email"
                  id='login/register'
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
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
        </div>
      </div>
    </div>
  )
}

export default Register
