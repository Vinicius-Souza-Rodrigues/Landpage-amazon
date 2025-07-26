import { Link } from "react-router-dom";

import logo from '../assets/img/amazon_logo.png'

const Footer = () => {
  return (
    <footer className="flex flex-col text-white ">
      <div className="py-4 text-center darkblue-subheader darkblue-subheader:hover ">
        <p>Voltar ao Início</p>
      </div>

      <div className="flex flex-wrap md:flex-no-wrap md:justify-around py-10 px-10 md:px-20 darkblue">
        <div className="w-1/2 md:w-auto mb-4 md:mb-0">
          <h4 className="font-bold mb-2">Conheça-nos</h4>
          <ul className="text-xs w-3/4">
            <li className="rodape">
              <Link to=''>Informações Corporativas</Link>
            </li>
            <li className="rodape">
              <Link to=''>Carreiras</Link>
            </li>
            <li className="rodape">
              <Link to=''>Comunicados à imprensa</Link>
            </li>
            <li className="rodape">
              <Link to=''>Comunidade</Link>
            </li>
          </ul>
        </div>

        <div className="w-1/2 md:w-auto mb-4 md:mb-0">
          <h4 className="font-bold mb-2">Ganhe Dinheiro Conosco</h4>
          <ul className="text-xs w-3/4">
            <li className="rodape">
              <Link to=''>Publique Seus Livros</Link>
            </li>
            <li className="rodape">
              <Link to=''>Ser Um Associado</Link>
            </li>
            <li className="rodape">
              <Link to=''>Venda na Amazon</Link>
            </li>
          </ul>
        </div>

        <div className="w-1/2 md:w-auto mb-4 md:mb-0">
          <h4 className="font-bold mb-2">Ajuda e Atendimento</h4>
          <ul className="text-xs w-3/4">
            <li className="rodape">
              <Link to=''>Suas Compras</Link>
            </li>
            <li className="rodape">
              <Link to=''>Frete e Prazo de Entrega</Link>
            </li>
            <li className="rodape">
              <Link to=''>Devoluções e Reembolsos</Link>
            </li>
            <li className="rodape">
              <Link to=''>Gerencie seu conteúdo e dispositivos</Link>
            </li>
            <li className="rodape">
              <Link to=''>Ajuda</Link>
            </li>
          </ul>
        </div>

        <div className="w-1/2 md:w-auto mb-4 md:mb-0">
          <h4 className="font-bold mb-2">Pagamentos</h4>
          <ul className="text-xs w-3/4">
            <li className="rodape">
              <Link to=''>Amazon</Link>
            </li>
            <li className="rodape">
              <Link to=''>Cartões de Crédito e Boleto</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden md:flex flex-col items-center darkblue border-t border-gray-700 pt-6 pb-4">
        <img src={logo} alt="logo" className="w-20"/>
        <ul className="flex flex-wrap justify-center text-xs pt-4 text-gray-400 w-3/4">
          <li className="px-2 border-r border-gray-600 hover:underline">
            <Link to='/'>Austrália</Link>
          </li>

          <li className="px-2 border-r border-gray-600 hover:underline">
            <Link to='/'>Alemanha </Link>
          </li>

          <li className="px-2 border-r border-gray-600 hover:underline">
            <Link to='/'>Canadá</Link>
          </li>

          <li className="px-2 border-r border-gray-600 hover:underline">
            <Link to='/'>China</Link>
          </li>

          <li className="px-2 border-r border-gray-600 hover:underline">
            <Link to='/'>Cingapura</Link>
          </li>

          <li className="px-2 border-r border-gray-600 hover:underline">
            <Link to='/'>Espanha</Link>
          </li>

          <li className="px-2 border-r border-gray-600 hover:underline">
            <Link to='/'>Estados Unidos</Link>
          </li>

          <li className="px-2 border-r border-gray-600 hover:underline">
            <Link to='/'>França</Link>
          </li>

          <li className="px-2 border-r border-gray-600 hover:underline">
            <Link to='/'>Holanda</Link>
          </li>

          <li className="px-2 border-r border-gray-600 hover:underline">
            <Link to='/'>India</Link>
          </li>

          <li className="px-2 border-r border-gray-600 hover:underline">
            <Link to='/'>Ìtalia</Link>
          </li>

          <li className="px-2 border-r border-gray-600 hover:underline">
            <Link to='/'>Japão</Link>
          </li>

          <li className="px-2 border-r border-gray-600 hover:underline">
            <Link to='/'>México</Link>
          </li>

          <li className="px-2 border-r border-gray-600 hover:underline">
            <Link to='/'>Emirados Árabes Unidos</Link>
          </li>

          <li className="px-2 border-r border-gray-600 hover:underline">
            <Link to='/'>Reino Unido</Link>
          </li>

          <li className="px-2 border-r border-gray-600 hover:underline">
            <Link to='/'>Turquia</Link>
          </li>
        </ul>

        <div className="felx text-xs mt-2">
          <span className="text-gray-600 mr-2">E não se esqueça:</span>
          <Link to='/' className="text-gray-400 hover:underline">Amazon Web Services</Link>
        </div>
      </div>

      <div className="flex flex-col items-center darkblue-extra text-xs pt-8 md:pt-2">
        <div className="flex flex-col md:flex-row mb-10 pt-3">
          <ul className="flex">
            <li className="px-2 boder-none md:border-r text-center md:text-left border-gray-600 hover:underline">
              <Link to='/'>Condições de Uso</Link>
            </li>

            <li className="px-2 boder-none md:border-r text-center md:text-left border-gray-600 hover:underline">
              <Link to='/'>Notificação de Privacidade</Link>
            </li>

            <li className="px-2 boder-none md:border-r text-center md:text-left border-gray-600 hover:underline">
              <Link to='/'>Cookies</Link>
            </li>

            <li className="px-2 boder-none md:border-r text-center md:text-left border-gray-600 hover:underline">
              <Link to='/'>Anúncios Baseados em Interesses</Link>
            </li>
          </ul>

          <span className="text-center md:text-left mt-8 md:mt-0 ml-4 text-gray-600">&copy; Amazon.com, Inc. Ou suas Afiliadas</span>
        </div>
        <p className="hidden md:block mb-10 text-gray-600">Amazon Serviços de Varejo do Brasil Ltda. | CNPJ 15.436.940/0001-03</p>
        <p className="hidden md:block mb-10 text-gray-600">Av. Juscelino Kubischeck, 2041, Torre E, 18* andar - São Paulo <Link to='/' className="text-blue-800 hover:text-red-500">Fale Conosco</Link></p>
        <p className="hidden md:block mb-10 text-gray-600">Formas de Pagamento aceito: Cartões de Crédito (Visa, Mastercard, Elo e American Express) e boleto.</p>
      </div>
    </footer>
  );
};

export default Footer;
