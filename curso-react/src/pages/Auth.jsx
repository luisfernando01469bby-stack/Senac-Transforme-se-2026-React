import { useState } from 'react';
import {Link} from 'react-router'

function Auth() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    
    return (
        <>
            <nav className=" p-3 shadow-md">
                <Link className="p-2 mr-2 hover:bg-primary" to="/">Voltar</Link>
            </nav>


            <div className="max-w-lg mx-auto p-6 bg-blue-100   ">
                <form className='flex flex-col gap-[20]'>
                    <h2 className="font-size">Login</h2>

                    Email: <input type="email" value={email} placeholder="Digite seu email cadastrado" onChange={(e) => setEmail(e.target.value)} /> {email}

                    Senha: <input type="senha" value={senha} placeholder="Digite sua senha cadastrada" onChange={(e) => setSenha(e.target.value)} /> {senha}

                    <a id="formLogin">Entrar</a>
                </form>
            </div>
        </>
    )
}

export default Auth;