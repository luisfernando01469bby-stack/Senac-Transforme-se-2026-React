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

        if(user.senha == pass){
        console.log("usuario logado")
            localStorage.setItem("logado", JSON.stringify(user))
            nav("/painel")
        
        }else{
        setmensagens("Senha incorreta")                                   //outra mensagem usando a mesma useState de mensagem
        }
    }
    
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

                    <a onClick={handleLogin}>Entrar</a>
                </form>
            </div>
        </>
    )
}

export default Auth;