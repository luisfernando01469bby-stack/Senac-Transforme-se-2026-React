import { useState } from "react";

function Painel () {
    const [modal, setModal ] = useState(false) //bollean
    const [users, setUsers] = useState([]) //vetor
    const [user, setUser] = useState({})  //objeto 


    function handleRegister(){
        const newUsers = [...users, user]
        setUsers(newUsers)
        localStorage.setItem('users', JSON.stringify(newUsers))
        setUser({})
        setModal(false)
    }

    return(<>
    <h2 id="Bemvindo"></h2>

    {modal && (

    <div 
        className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black-50 z-50">
        <div className="relative max-w-md w-full p-5 bg-about rounded-lg shadow-md flex flex-col">
            <a id="btClose" className="bg-red absolute top-0 text-white px-2 py-2 right-0 rounded-full">X</a>
            <h2>Meu formulário</h2>
            <p>Preencha as informações abaixo</p>
            <form className="gap">
                Nome:
                <input onChange={ (e) => setUser({...user, nome: e.target.value }) } type="text" placeholder="Digite seu nome completo" />
                Email: <input onChange={ (e) => setUser({...user, email: e.target.value }) } placeholder="Digite seu melhor email" />
                Senha: <input onChange={ (e) => setUser({...user, senha: e.target.value }) } placeholder="Letra maiuscula e números" />
                Data de nascimento: <input onChange={ (e) => setUser({...user, nascimento: e.target.value }) } type="date" />
                <a onClick={handleRegister} >Salvar</a>
            </form>

        </div>
    </div>
    )}

    <h2>Resposta</h2>
    <table>
        <thread>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
        </thread>
        <tbody className="font-secondary" id="listausuarios">

        </tbody>
    </table>

    <a onClick={() => setModal(true)} className="rounded-full bg-primary text-white px-4 py-3 fixed bottom-0 right-0"> + </a>

</>)
}

export default Painel;