import { Link } from 'react-router'

export function Template({children}){
    return(
        <>
         <nav className=" flex items-center fixed w-full bg-purple-800 shadow-md">
            <a className="p-2 mr-2 text-white rounded hover:shadow-inner hover:bg-purple-500" href="#prices">Preços</a>
            <a className="p-2 mr-2 text-white rounded hover:shadow-inner hover:bg-purple-500" href="#features">Benefícios</a>
            <Link className="p-2 bg-purple-800 rounded text-white ml-auto mr-5 hover:shadow-inner hover:bg-purple-500" to="/auth">Acessar</Link> 
        </nav>
        {children}
        <footer>
        site criado por Luís
        </footer>
        </>
    );

}