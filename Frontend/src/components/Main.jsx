import { Link } from "react-router-dom";

import image from '../assets/img/banner_promo.jpg';
import cat from '../assets/img/cat1.jpg';
import cat1 from '../assets/img/cat2.jpg';
import cat2 from '../assets/img/cat3.jpg';
import cat3 from '../assets/img/cat4.jpg';
import cat4 from '../assets/img/cat5.jpg';
import cat5 from '../assets/img/cat6.jpg';
import cat6 from '../assets/img/cat7.jpg';
import cat7 from '../assets/img/cat8.jpg';

//possivel remoção
import img_livro from '../assets/img/livro1.jpg'

const Main = () => {

    const resultado_limitado = 31
    const resultados_totais = 131

  return (
    <div className="col-span-6 md:col-span-5 p-2 md:mx-1">
      <div className="flex flex-col">
        <div className="text-center shadow-lg p-4 rounded-b-sm">
          <h2 className="text-2xl font-bold md:text-3xl md:font-normal py-2 md:py-3">Loja de Livros</h2>
          <ul className="flex flex-wrap md:flex-no-wrap justify-center text-sm px-4 md:px-0 pb-2">
            <li>
              <Link to='/' className='text-blue-500 underline hover:text-orange-600 px-1 border-r border-black'>Livros em Oferta</Link>
            </li>
            <li>
              <Link to='/' className='text-blue-500 underline hover:text-orange-600 px-1 border-r border-black'>Importados</Link>
            </li>
            <li>
              <Link to='/' className='text-blue-500 underline hover:text-orange-600 px-1 border-r border-black'>Lançamentos</Link>
            </li>
            <li>
              <Link to='/' className='text-blue-500 underline hover:text-orange-600 px-1 border-r border-black'>Universitários</Link>
            </li>
            <li>
              <Link to='/' className='text-blue-500 underline hover:text-orange-600 px-1 border-r border-black'>Didáticos e Escolares</Link>
            </li>
            <li>
              <Link to='/' className='text-blue-500 underline hover:text-orange-600 px-1 border-r border-black'>HQs e Mangás</Link>
            </li>
            <li>
              <Link to='/' className='text-blue-500 underline hover:text-orange-600 px-1 border-r border-black'>Mais Vendidos</Link>
            </li>
            <li>
              <Link to='/' className='text-blue-500 underline hover:text-orange-600 px-1 border-r border-black'>Livros Infantis</Link>
            </li>
            <li>
              <Link to='/' className='text-blue-500 underline hover:text-orange-600 px-1'>Indicações</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden md:block my-6">
        <img src={image} alt="Promoções" className="rounded-sm" />
      </div>

      <div className="flex flex-col md:flex-row items-center my-8 py-1">
        <p className="font-bold md:w-3/4 text-center md:border-r-2 border-r border-gray-300 leading-5 pr-2 mt-10 md:mt-0">
          Assine o Amazon Prime para ter benefícios de leitura com o Prime Reading,
          frete GRÀTIS sem valor mínimo de compra e muito mais. Apenas R$ 9,90/mês.
        </p>
        <Link to='/' className="text-sm md:text-xs bg-yellow-300 border border-yellow-700 rounded px-3 py-3 md:py-0 md:ml-10 h-12 md:h-8 block md:flex items-center w-full md:w-auto text-center">
          Teste GRÀtis por 30 dias
        </Link>
      </div>

      <div className="flex flex-col px-6 pb-8 border-b border-gray-300">
        <h3 className="text-center md:text-left text-xl font-bold mb-4">Encontre ofertas por categoria</h3>
        <ul className="flex flex-wrap md:flex-no-wrap px-2 text-xs font-bold justify-center">
          <li className="text-center mx-3 mb-4 md:mb-0">
            <img src={cat} alt="Todas as Ofertas" className="itens-click" />
            <Link to="/">Todas as Ofertas</Link>
          </li>
          <li className="text-center mx-3 mb-4 md:mb-0">
            <img src={cat1} alt="Ofertas Relâmpagos" className="itens-click" />
            <Link to="/">Ofertas Relâmpagos</Link>
          </li>
          <li className="text-center mx-3 mb-4 md:mb-0">
            <img src={cat2} alt="Literatura" className="itens-click" />
            <Link to="/">Literatura</Link>
          </li>
          <li className="text-center mx-3 mb-4 md:mb-0">
            <img src={cat3} alt="HQs e Mangás" className="itens-click" />
            <Link to="/">HQs e Mangás</Link>
          </li>
          <li className="text-center mx-3 mb-4 md:mb-0">
            <img src={cat4} alt="Ficção" className="itens-click" />
            <Link to="/">Ficção</Link>
          </li>
          <li className="text-center mx-3 mb-4 md:mb-0">
            <img src={cat5} alt="Autoajuda" className="itens-click" />
            <Link to="/">Autoajuda</Link>
          </li>
          <li className="text-center mx-3 mb-4 md:mb-0">
            <img src={cat6} alt="Infantil" className="itens-click" />
            <Link to="/">Infantil</Link>
          </li>
          <li className="text-center mx-3 mb-4 md:mb-0">
            <img src={cat7} alt="Negócios" className="itens-click" />
            <Link to="/">Negócios</Link>
          </li>
        </ul>
      </div>

      <div className="flex justify-between py-2 px-4 text-sm">
        <p>Mostrando {resultado_limitado} de {resultados_totais} Resultados </p>
        <div className="flex md:flex-none">
            <span>Ordenar por</span>
            <select className="bg-gray-300 pr-4 md:pr-12 ml-3 rounded-sm border border-gray-600 text-xs px-1">
                <option>Destaques</option>
            </select>
        </div>
      </div>

      <div className="flex flex-wrap border border-gray-300 divide-x divide-gray-300 mb-10">
        <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b-border-gray-300">
            <img src={img_livro} alt="livro" className="h-210px place-self-center p-2"/>
            <p className="text-red-700 mt-10">R$ 26,30</p>
            <p className="text-sm mb-2 ">De: <span className="line-through">R$ 63,60</span> (58% off)</p>
            <p className="text-xs text-gray-400">Termina em 2:09:46</p>
            <Link to='/' className="text-md pt-2 font-bold text-blue-600 hover:underline hover:text-orange-600 mb-2">Em busca de sentido</Link>
            <p className="text-sm mb-8 ">Está oferta é exclusiva para membros do <Link to='/' className="text-xs text-blue-600 hover:underline hover:text-orange-600">Amazon Prime</Link>.</p>

            <button className="text-xs bg-gray-200 border border-gray-600 py-1">Saiba mais</button>
        </div>

        <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b-border-gray-300">
            <img src={img_livro} alt="livro" className="h-210px place-self-center p-2"/>
            <p className="text-red-700 mt-10">R$ 26,30</p>
            <p className="text-sm mb-2 ">De: <span className="line-through">R$ 63,60</span> (58% off)</p>
            <p className="text-xs text-gray-400">Termina em 2:09:46</p>
            <Link to='/' className="text-md pt-2 font-bold text-blue-600 hover:underline hover:text-orange-600 mb-2">Em busca de sentido</Link>
            <p className="text-sm mb-8 ">Está oferta é exclusiva para membros do <Link to='/' className="text-xs text-blue-600 hover:underline hover:text-orange-600">Amazon Prime</Link>.</p>

            <button className="text-xs bg-gray-200 border border-gray-600 py-1">Saiba mais</button>
        </div>

        <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b-border-gray-300">
            <img src={img_livro} alt="livro" className="h-210px place-self-center p-2"/>
            <p className="text-red-700 mt-10">R$ 26,30</p>
            <p className="text-sm mb-2 ">De: <span className="line-through">R$ 63,60</span> (58% off)</p>
            <p className="text-xs text-gray-400">Termina em 2:09:46</p>
            <Link to='/' className="text-md pt-2 font-bold text-blue-600 hover:underline hover:text-orange-600 mb-2">Em busca de sentido</Link>
            <p className="text-sm mb-8 ">Está oferta é exclusiva para membros do <Link to='/' className="text-xs text-blue-600 hover:underline hover:text-orange-600">Amazon Prime</Link>.</p>

            <button className="text-xs bg-gray-200 border border-gray-600 py-1">Saiba mais</button>
        </div>

        <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b-border-gray-300">
            <img src={img_livro} alt="livro" className="h-210px place-self-center p-2"/>
            <p className="text-red-700 mt-10">R$ 26,30</p>
            <p className="text-sm mb-2 ">De: <span className="line-through">R$ 63,60</span> (58% off)</p>
            <p className="text-xs text-gray-400">Termina em 2:09:46</p>
            <Link to='/' className="text-md pt-2 font-bold text-blue-600 hover:underline hover:text-orange-600 mb-2">Em busca de sentido</Link>
            <p className="text-sm mb-8 ">Está oferta é exclusiva para membros do <Link to='/' className="text-xs text-blue-600 hover:underline hover:text-orange-600">Amazon Prime</Link>.</p>

            <button className="text-xs bg-gray-200 border border-gray-600 py-1">Saiba mais</button>
        </div>

        <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b-border-gray-300">
            <img src={img_livro} alt="livro" className="h-210px place-self-center p-2"/>
            <p className="text-red-700 mt-10">R$ 26,30</p>
            <p className="text-sm mb-2 ">De: <span className="line-through">R$ 63,60</span> (58% off)</p>
            <p className="text-xs text-gray-400">Termina em 2:09:46</p>
            <Link to='/' className="text-md pt-2 font-bold text-blue-600 hover:underline hover:text-orange-600 mb-2">Em busca de sentido</Link>
            <p className="text-sm mb-8 ">Está oferta é exclusiva para membros do <Link to='/' className="text-xs text-blue-600 hover:underline hover:text-orange-600">Amazon Prime</Link>.</p>

            <button className="text-xs bg-gray-200 border border-gray-600 py-1">Saiba mais</button>
        </div>

        <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b-border-gray-300">
            <img src={img_livro} alt="livro" className="h-210px place-self-center p-2"/>
            <p className="text-red-700 mt-10">R$ 26,30</p>
            <p className="text-sm mb-2 ">De: <span className="line-through">R$ 63,60</span> (58% off)</p>
            <p className="text-xs text-gray-400">Termina em 2:09:46</p>
            <Link to='/' className="text-md pt-2 font-bold text-blue-600 hover:underline hover:text-orange-600 mb-2">Em busca de sentido</Link>
            <p className="text-sm mb-8 ">Está oferta é exclusiva para membros do <Link to='/' className="text-xs text-blue-600 hover:underline hover:text-orange-600">Amazon Prime</Link>.</p>

            <button className="text-xs bg-gray-200 border border-gray-600 py-1">Saiba mais</button>
        </div>

        <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b-border-gray-300">
            <img src={img_livro} alt="livro" className="h-210px place-self-center p-2"/>
            <p className="text-red-700 mt-10">R$ 26,30</p>
            <p className="text-sm mb-2 ">De: <span className="line-through">R$ 63,60</span> (58% off)</p>
            <p className="text-xs text-gray-400">Termina em 2:09:46</p>
            <Link to='/' className="text-md pt-2 font-bold text-blue-600 hover:underline hover:text-orange-600 mb-2">Em busca de sentido</Link>
            <p className="text-sm mb-8 ">Está oferta é exclusiva para membros do <Link to='/' className="text-xs text-blue-600 hover:underline hover:text-orange-600">Amazon Prime</Link>.</p>

            <button className="text-xs bg-gray-200 border border-gray-600 py-1">Saiba mais</button>
        </div>

        <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b-border-gray-300">
            <img src={img_livro} alt="livro" className="h-210px place-self-center p-2"/>
            <p className="text-red-700 mt-10">R$ 26,30</p>
            <p className="text-sm mb-2 ">De: <span className="line-through">R$ 63,60</span> (58% off)</p>
            <p className="text-xs text-gray-400">Termina em 2:09:46</p>
            <Link to='/' className="text-md pt-2 font-bold text-blue-600 hover:underline hover:text-orange-600 mb-2">Em busca de sentido</Link>
            <p className="text-sm mb-8 ">Está oferta é exclusiva para membros do <Link to='/' className="text-xs text-blue-600 hover:underline hover:text-orange-600">Amazon Prime</Link>.</p>

            <button className="text-xs bg-gray-200 border border-gray-600 py-1">Saiba mais</button>
        </div>

        <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b-border-gray-300">
            <img src={img_livro} alt="livro" className="h-210px place-self-center p-2"/>
            <p className="text-red-700 mt-10">R$ 26,30</p>
            <p className="text-sm mb-2 ">De: <span className="line-through">R$ 63,60</span> (58% off)</p>
            <p className="text-xs text-gray-400">Termina em 2:09:46</p>
            <Link to='/' className="text-md pt-2 font-bold text-blue-600 hover:underline hover:text-orange-600 mb-2">Em busca de sentido</Link>
            <p className="text-sm mb-8 ">Está oferta é exclusiva para membros do <Link to='/' className="text-xs text-blue-600 hover:underline hover:text-orange-600">Amazon Prime</Link>.</p>

            <button className="text-xs bg-gray-200 border border-gray-600 py-1">Saiba mais</button>
        </div>

        <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b-border-gray-300">
            <img src={img_livro} alt="livro" className="h-210px place-self-center p-2"/>
            <p className="text-red-700 mt-10">R$ 26,30</p>
            <p className="text-sm mb-2 ">De: <span className="line-through">R$ 63,60</span> (58% off)</p>
            <p className="text-xs text-gray-400">Termina em 2:09:46</p>
            <Link to='/' className="text-md pt-2 font-bold text-blue-600 hover:underline hover:text-orange-600 mb-2">Em busca de sentido</Link>
            <p className="text-sm mb-8 ">Está oferta é exclusiva para membros do <Link to='/' className="text-xs text-blue-600 hover:underline hover:text-orange-600">Amazon Prime</Link>.</p>

            <button className="text-xs bg-gray-200 border border-gray-600 py-1">Saiba mais</button>
        </div>
      </div>

      
    </div>
  );
};

export default Main;
