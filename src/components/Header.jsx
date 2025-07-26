import image from '../assets/img/amazon_logo.png'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="grid text-white">
        <div className="flex flex-wrap md:flex-nowrap darkblue px-2 py-3 items-center">
          <div className="flex items-center py-1 px-1 border borda-escura hover:border-white rounded">
            <i className="fas fa-bars text-2xl"></i>
          </div>

          <div className="flex mx-2 py-2 p-1 border border-transparent hover:border-white">
            <img src={image} alt="amazon" className="h-[1.7rem]" />
            <span className="text-xs pl-1 pt-1">.com.br</span>
          </div>

          <div className="w-full md:w-auto flex-grow md:ml-3 pt-1 order-2 md:order-none">
            <form className="flex">
              <select className="hidden md:block p-2 text-xs text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-tl rounded-bl border-r">
                <option value="">Livros</option>
              </select>
              <input type="text" className="p-2 flex-grow rounded-l md:rounded-none bg-gray-100" />
              <button className="px-4 bg-orange-400 hover:bg-orange-200 rounded-tr rounded-br">
                <i className="fas fa-search text-darkblue text-xl mt-1"></i>
              </button>
            </form>
          </div>

          <div className="hidden md:block ml-1 pb-1 text-xs border border-transparent hover:border-white rounded-sm p-2">
            <p className="leading-3">Olá, Faça seu login</p>
            <p className="font-extrabold">
              Contas e Listas <i className="fas fa-chevron-down"></i>
            </p>
          </div>

          <div className="hidden md:block pb-1 text-xs border border-transparent hover:border-white rounded-sm p-2">
            <p className="leading-3">Devoluções</p>
            <p className="font-extrabold">
              e Pedidos <i className="fas fa-chevron-down"></i>
            </p>
          </div>

          <div className="hidden md:block pb-1 text-xs border border-transparent hover:border-white rounded-sm p-2">
            <p className="leading-3">Experimente</p>
            <p className="font-extrabold">
              Prime <i className="fas fa-chevron-down"></i>
            </p>
          </div>

          <div className="p-2 border border-transparent hover:border-white rounded-sm absolute right-0 top-0 mr-2 mt-2 md:mr-0 md:relative order-1 md:order-none md:flex">
            <i className="fas fa-shopping-cart flex text-2xl md:mr-2"></i>
            <span className="bold text-yellow-500 text-base absolute top-0 left-0 -mt-1 ml-5 text-center w-6 h-6 darkblue-contagem rounded-full">
              0
            </span>
            <span className="hidden md:flex text-xs font-extrabold items-end">Carrinho</span>
          </div>
        </div>
      </div>

      <div className="flex darkblue-subheader text-sm px-2 py-1.5 items-center">
        <div className="flex items-center border border-transparent hover:border-white rounded-sm px-2 py-2 md:py-0">
          <div className="mr-1">
            <i className="fas fa-map-marker-alt text-xl text-white"></i>
          </div>

          <div className="block md:block leading-tight text-xs">
            <p className="mx-1 md:mx-0 text-white">Olá</p>
            <p className="px-1 font-bold text-white md:px-0">Selecione o endereço</p>
          </div>
        </div>

        <nav>
          <ul className="flex ml-9 text-sm">
            <li className="item-nav-mid">
              <Link to="/" className="text-white hover:underline">Mais Vendidos</Link>
            </li>
            <li className="item-nav-mid">
              <Link to="/" className="text-white hover:underline">Livros</Link>
            </li>
            <li className="item-nav-mid">
              <Link to="/" className="text-white hover:underline">Ofertas do Dia</Link>
            </li>
            <li className="item-nav-mid">
              <Link to="/" className="text-white hover:underline">Atendimento ao Cliente</Link>
            </li>
            <li className="item-nav-mid">
              <Link to="/" className="text-white hover:underline">Eletrônicos</Link>
            </li>
            <li className="item-nav-mid">
              <Link to="/" className="text-white hover:underline">Ideias para Presente</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className='flex text-black px-4 text-xs border-b border-gray-300 bg-gray-100 pt 1'>
        <Link to='/' className='block md:hidden py-2 font-bold '>
            <i className='fas fa-chevron-left '></i> 
            <span>Todos os Departamentos</span>
        </Link>

        <ul className='hidden md:flex'>
            <li className='hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600 py-2 px-3'><Link to='/'>Livros</Link></li>
            <li className='hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600 py-2 px-3'><Link to='/'>Pesquisa Avançada</Link></li>
            <li className='hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600 py-2 px-3'><Link to='/'>Mais Vendidos</Link></li>
            <li className='hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600 py-2 px-3'><Link to='/'>Pré-venda e Lançamentos</Link></li>
            <li className='hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600 py-2 px-3'><Link to='/'>Livros em Ofertas</Link></li>
            <li className='hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600 py-2 px-3'><Link to='/'>Inglês e Outras Línguas</Link></li>
            <li className='hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600 py-2 px-3'><Link to='/'>Loja Geek</Link></li>
            <li className='hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600 py-2 px-3'><Link to='/'>Universitários e Acadêmicos</Link></li>
            <li className='hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600 py-2 px-3'><Link to='/'>Didáticos e Escolares</Link></li>
            <li className='hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600 py-2 px-3'><Link to='/'>Loja Infantil</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
