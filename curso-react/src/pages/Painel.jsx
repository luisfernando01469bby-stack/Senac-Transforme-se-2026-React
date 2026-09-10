import { useState, useEffect } from "react";

function Painel() {
    const [modal, setModal] = useState(false) //bollean
    const [users, setUsers] = useState([]) //vetor
    const [user, setUser] = useState({})  //objeto 
    const [logado, setLogado] = useState({})

    useEffect(
        () => {
            const logado = JSON.parse(localStorage.getItem('logado'))
            setLogado(logado)
        },
        []
    );

    useEffect(() => {
        const usersTemp = JSON.parse(localStorage.getItem('users'))
        if (usersTemp) setUsers(usersTemp)
    }, [])


    function updateUser(pUser){
        setModal(true)
        setUser(pUser)
    }


    function handleRegister() {
        const newUsers = [...users, user]
        setUsers(newUsers)
        localStorage.setItem('users', JSON.stringify(newUsers))
        setUser({})
        setModal(false)
    }

    return (<>
        <h3>Bem vindo, {logado?.nome}</h3>

        {modal && (

            <div
                className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black-50 z-50">
                <div className="relative max-w-md w-full p-5 bg-about rounded-lg shadow-md flex flex-col">
                    <a onClick={() => setModal(false)} className="bg-red-500 absolute top-0 text-white px-2 py-2 right-0 rounded-full">X</a>
                    <h2>Meu formulário</h2>
                    <p>Preencha as informações abaixo</p>
                    <form className="gap">
                        Nome:
                        <input value={user.nome} onChange={(e) => setUser({ ...user, nome: e.target.value })} type="text" placeholder="Digite seu nome completo" />
                        Email: <input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="Digite seu melhor email" />
                        Senha: <input onChange={(e) => setUser({ ...user, senha: e.target.value })} placeholder="Letra maiuscula e números" />
                        Data de nascimento: <input value={user.nascimento} onChange={(e) => setUser({ ...user, nascimento: e.target.value })} type="date" />
                        <a onClick={handleRegister} >Salvar</a>
                    </form>

                </div>
            </div>
        )}

        <h2>Resposta</h2>

        <table>
            <thead>
                <th>Nome</th>
                <th>Email</th>
                <th>Ações</th>
            </thead>
            <tbody className="font-secondary">
                {users.map(u => (
                    <tr>
                        <td>{u.nome}</td>
                        <td>{u.email}</td>
                        <td>
                            <a className="cursor-pointer px-3 mx-4 hover:shadow shadow-md text-white rounded-full bg-green-500" onClick={() => updateUser(u)}>V</a>
                            <a className="cursor-pointer px-3 mx-4 hover:shadow shadow-md text-white rounded-full bg-red-500">X</a>
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>

        <a onClick={() => setModal(true)} className="rounded-full bg-primary text-white px-4 py-3 fixed bottom-0 right-0"> + </a>

    </>)
}

export default Painel;