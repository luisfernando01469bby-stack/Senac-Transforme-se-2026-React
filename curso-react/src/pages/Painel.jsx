import { useState, useEffect } from "react";

function Painel() {
    const [modal, setModal] = useState(false) //bollean
    const [users, setUsers] = useState([]) //vetor
    const [user, setUser] = useState({})  //objeto 
    const [logado, setLogado] = useState({})
    const [isEdit, setIsEdit] = useState(false)
    const [index, setIndex] = useState(-1)

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


    function updateUser(indice){
        setModal(true)
        setUser(users[indice])
        setIndex(indice)

    }

    function deleteUser(index){
        const newUsers = users.filter((u,i) => {
            return i != index
        })

        setUsers(newUsers)
        localStorage.setItem('users', JSON.stringify(newUsers))
    }

    function handleRegister() {
        let newUsers = []
        if(index != -1 ){
            newUsers = [... users]
            newUsers[index] = user;
        }else{
            newUsers = [...users, user]
        }
       
        setUsers(newUsers)
        localStorage.setItem('users', JSON.stringify(newUsers))

        setUser({})
        setModal(false)
        setIndex(-1)
        setIsEdit(false)
    }

    return (<>
        <h3>Bem vindo, {logado?.nome}</h3>

        {modal && (

            <div
                className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black-50 z-50">
                <div className="relative max-w-md w-full p-5 bg-about rounded-lg shadow-md flex flex-col">
                    <a onClick={() => {
                        setModal(false)
                        setIsEdit(false)
                        setUser({})
                        setIndex(-1)
                    }}

                     className="bg-red-500 absolute top-0 text-white px-2 py-2 right-0 rounded-full">X</a>
                    <h2>Meu formulário</h2>
                    <p>Preencha as informações abaixo</p>

                    {isEdit ? (
                    <form className=" flex flex-col gap">
                        Nome:
                        <input value={user.nome} onChange={(e) => setUser({ ...user, nome: e.target.value })} type="text" placeholder="Digite seu nome completo" />
                        Email: <input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="Digite seu melhor email" />
                        Senha: <input onChange={(e) => setUser({ ...user, senha: e.target.value })} placeholder="Letra maiuscula e números" />
                        Data de nascimento: <input value={user.nascimento} onChange={(e) => setUser({ ...user, nascimento: e.target.value })} type="date" />
                        <a onClick={handleRegister} className="bg-green-500 rounded-full">Salvar</a>
                        {index != -1 && (<a onClick={() => setIsEdit(false)} className="bg-red-500 rounded-full ">Cancelar</a>)}

                    </form>): //else 
                    (
                        <>
                        <p>Nome:  {user.nome}</p>
                         <p>Email:  {user.email}</p>
                          <p>Data de Nascimento:  {user.nascimento}</p>
                           <a onClick={() => setIsEdit(true)} className="bg-yellow-500" >Editar</a>
                        </>
                    )
                    }
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
                {users.map( (u,i) => (
                    <tr>
                        <td>{u.nome}</td>
                        <td>{u.email}</td> 
                        <td>
                            <a className="cursor-pointer px-3 mx-4 hover:shadow shadow-md text-white rounded-full bg-green-500" onClick={() => updateUser(i)}>V</a>
                            <a className="cursor-pointer px-3 mx-4 hover:shadow shadow-md text-white rounded-full bg-red-500" onClick={() => deleteUser(i)}>X</a>
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>

        <a onClick={() => {
            setModal(true)
            setIsEdit(true)
        }} 
    className="rounded-full bg-primary text-white px-4 py-3 fixed bottom-0 right-0"> + </a>

    </>)
}

export default Painel;