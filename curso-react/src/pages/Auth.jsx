import { useState } from 'react';
import {Link, useNavigate} from 'react-router'

function Auth() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [mensagem, setmensagens] = useState('')

    const nav = useNavigate()

    function handleLogin(){
        const users = JSON.parse(localStorage.getItem('users'))
        let user = users.find(u => {
            return u.email ==email
        }) 

        if(!user){
        setmensagens("Usuario não encontrado")                       //os estudantes irão fazer uma useSTate de mensagem 
            return
        }

        if(user.senha == senha){
        console.log("usuario logado")
            localStorage.setItem("logado", JSON.stringify(user))
            nav("/painel")
        
        }else{
        setmensagens("Senha incorreta")                                   //outra mensagem usando a mesma useState de mensagem
        }
    }
    
    return (
        <>
            <nav className=" shadow-md flex items-center fixed w-full bg-purple-800 shadow-md">
                <Link className="p-2 bg-purple-800 rounded text-white ml-auto mr-5 hover:shadow-inner hover:bg-purple-500" to="/">Voltar</Link>
            </nav>


            <div className="rounded max-w-lg mx-auto p-6 bg-purple-300 mt-20 gap-5  ">
                <form className='flex flex-col gap-5 p-5 text-white'>
                    <h2 className="font-size text-white">Login</h2>

                    Email: <input className='rounded p-2' type="email" value={email} placeholder="Digite seu email cadastrado" onChange={(e) => setEmail(e.target.value)} /> {email}

                    Senha: <input className='rounded p-2' type="senha" value={senha} placeholder="Digite sua senha cadastrada" onChange={(e) => setSenha(e.target.value)} /> {senha}

                    <a className="p-2 bg-purple-800 rounded text-white hover:shadow-inner hover:bg-purple-500" to="/Painel" onClick={handleLogin}>Entrar</a>
                </form>
            </div>
        </>
    )
}

export default Auth;