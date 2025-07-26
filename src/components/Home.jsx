import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <div className="grid grid-cols-6">
        <div className="col-span-1 bg-white min-h-screen hidden md:block pl-2 py-3 border-r border-gray-300 text-xs">
          <h3 className="font-bold">Destaque em livros</h3>
          <ul className="pl-2 mb-2">
            <li className="itens-search">
              <Link to=''>Indicações Amazon</Link>
            </li>
            <li className="itens-search">
              <Link to=''>Inglês e Outras Línguas</Link>
            </li>
            <li className="itens-search">
              <Link to=''>Livros em Oferta</Link>
            </li>
            <li className="itens-search">
              <Link to=''>Mas Vendidos do Mês</Link>
            </li>
            <li className="itens-search">
              <Link to=''>Pré-venda e Lançamentos</Link>
            </li>
            <li className="itens-search">
              <Link to=''>Livros Exclusivos Amazon</Link>
            </li>
          </ul>

          <h3 className="font-bold">Páginas Especiais</h3>
          <ul className="pl-2 mb-2">
            <li className="itens-search">
              <Link to=''>Livros Clássicos</Link>
            </li>
            <li className="itens-search">
              <Link to=''>Livros que Viraram Filmes</Link>
            </li>
            <li className="itens-search">
              <Link to=''>Livros Infantis</Link>
            </li>
            <li className="itens-search">
              <Link to=''>Loja Geek</Link>
            </li>
          </ul>

          <h3 className="font-bold">Livros Educacionais</h3>
          <ul className="pl-2 mb-2">
            <li className="itens-search">
              <Link to=''>Didáticos e Escolares</Link>
            </li>
            <li className="itens-search">
              <Link to=''>Estudo e Ensino de Idiomas</Link>
            </li>
            <li className="itens-search">
              <Link to=''>Examos e Concursos</Link>
            </li>
            <li className="itens-search">
              <Link to=''>Importados para Exames</Link>
            </li>
            <li className="itens-search">
              <Link to=''>Universitários e Acâdemicos</Link>
            </li>
          </ul>

          <h3 className="font-bold">Kindle</h3>
          <ul className="pl-2 mb-2">
            <li className="itens-search">
              <Link to='/teste'>Acessorios Kindle</Link>
            </li>
            <li className="itens-search">
              <Link to='/teste'>Comprar Kindle</Link>
            </li>
            <li className="itens-search">
              <Link to='/teste'>Livros em Oferta</Link>
            </li>
            <li className="itens-search">
              <Link to='/teste'>eBooks em Inglês</Link>
            </li>
            <li className="itens-search">
              <Link to='/teste'>eBooks em Oferta</Link>
            </li>
            <li className="itens-search">
              <Link to='/teste'>Kindle Unlimited</Link>
            </li>
            <li className="itens-search">
              <Link to='/teste'>Todos os eBooks</Link>
            </li>
          </ul>
        </div>

        <>
          <Outlet />
        </>
      </div>
    </main>
  );
};

export default Home;
