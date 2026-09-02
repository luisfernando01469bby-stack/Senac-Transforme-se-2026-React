import {Link} from 'react-router'

function Auth() {
    return (
        <>
            <nav className=" p-3 shadow-md">
                <Link className="p-2 mr-2 hover:bg-primary" to="/">Voltar</Link>
            </nav>
            <div className="max-w-lg mx-auto p-6 bg-blue-100 ">
                <form className='flex flex-col gap-[20]'>
                    <h2 className="font-size">Login</h2>

                    Email: <input id="iEmailLogin" placeholder="Digite seu email cadastrado" />

                    Senha: <input className="mb-4" id="iLoginpass" placeholder="Digite sua senha cadastrada" />

                    <a id="formLogin">Entrar</a>
                </form>
            </div>
        </>
    )
}

export default Auth;