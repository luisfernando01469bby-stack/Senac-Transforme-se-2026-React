import { useState, useEffect } from "react";
import { supabase } from '../../utils/supabase';

function Painel() {
    const [modal, setModal] = useState(false) //bollean
    const [users, setUsers] = useState([]) //vetor
    const [user, setUser] = useState({})  //objeto 
    const [logado, setLogado] = useState({})
    const [isEdit, setIsEdit] = useState(false)
    const [index, setIndex] = useState(-1)
    const [spiner, setSpiner] = useState(false)
    const [msg, setMsg] = useState('')

    useEffect(
        () => {
            const logado = JSON.parse(localStorage.getItem('logado'))
            setLogado(logado)
        },
        []
    );

    useEffect(() => {
        loadUsers()
    }, [])

    async function loadUsers() {
        const { data, error } = await supabase.from('profiles').select('*')
        if (error) {
            setMsg(error.mesage)
            return;
        }
        setUsers(data)
    }


    function updateUser(user) {
        setModal(true)
        setUser(user)
        setIndex(user.id)

    }

     async function editUser(){
        setSpiner(true)
        const { data, error } = await supabase
            .from('profiles')
            .update(user)
            .eq('id', index);

        if(error){
            setMsg(error.message)
            setSpiner(false)
            return;
        }

        setMsg("Usuario editado")
        setSpiner(false)
        loadUsers()
    }

    async function deleteUser(index) {
        const { error } = await supabase
            .from('profiles')
            .delete(user)
            .eq('id', index)

        if (error) {
            setMsg(error.message)
            return
        }

        setMsg("Usuario apagado")
        loadUsers()
    }

    


async function handleRegister() {
    setMsg('')
    setSpiner(true)
    const { data: authData, error: authError } = await supabase.auth.signUp({
        email: user.email,
        password: user.senha
    });

    if (authError) {
        console.log(authError.message)
        setMsg(authError.message)
        setSpiner(false)
        return;
    }

    if (!authData) {
        setMsg("Não foi possivel cadastrar, verifique a internet")
        setSpiner(false)
        return;
    }

    const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: user.senha
    });

    const { error: profileError } = await supabase
        .from('profiles')
        .insert({
            ...user,
            user_id: loginData.user.id
        });

    if (profileError) {
        setMsg(profileError.message)
        setSpiner(false)
        return;
    }


    setMsg('cadastrado com suceesso!')
    setSpiner(false)
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
                        {index == -1 && (<>Email: <input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="Digite seu melhor email" />
                            Senha: <input onChange={(e) => setUser({ ...user, senha: e.target.value })} placeholder="Letra maiuscula e números" /></>)}
                        Data de nascimento: <input value={user.nascimento} onChange={(e) => setUser({ ...user, nascimento: e.target.value })} type="date" />
                        CPF:<input value={user.cpf} onChange={(e) => setUser({ ...user, cpf: e.target.value })} type="text" placeholder="Digite seu CPF completo" />
                        <a onClick={() => {
                            if (index == -1)
                                handleRegister()
                            else
                                editUser()
                        }}

                            className="bg-green-500 rounded-full">{spiner ? '...' : 'Salvar'}</a> {msg}
                        {index != -1 && (<a onClick={() => setIsEdit(false)} className="bg-red-500 rounded-full ">Cancelar</a>)}

                    </form>) : //else 
                    (
                        <>
                            <p>  Nome:  {user.name}</p>
                            <p> Data de Nascimento: {user.birth}</p>
                            <p> CPF: {user.cpf}</p>
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
            <th>Data de nascimento</th>
            <th>CPF</th>
            <th>Cargo</th>
        </thead>
        <tbody className="font-secondary">
            {users.map((u, i) => (
                <tr key={u.id}>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.birth}</td>
                    <td>{u.cpf}</td>
                    <td>{u.position}</td>
                    <td>
                        <a className="cursor-pointer px-3 mx-4 hover:shadow shadow-md text-white rounded-full bg-green-500" onClick={() => updateUser(u)}>V</a>
                        <a className="cursor-pointer px-3 mx-4 hover:shadow shadow-md text-white rounded-full bg-red-500" onClick={() => deleteUser(u)}>X</a>
                    </td>
                </tr>
            ))}

        </tbody>
    </table>

    <a onClick={() => {
        setModal(true)
        setIsEdit(true)
        setMsg('')
    }}
        className="rounded-full bg-primary text-white px-4 py-3 fixed bottom-0 right-0"> + </a>

</>
)
}

export default Painel;