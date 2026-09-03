function Painel () {
    return(<>
    <h2 id="Bemvindo"></h2>


    <div id="modalRegister"
        className="fixed top-0 right-0 bottom-0 left-0 hidden items-center justify-center bg-black-50 z-50">
        <div className="relative max-w-md w-full p-5 bg-about rounded-lg shadow-md flex column">
            <a id="btClose" className="bg-red absolute top-0 text-white px-2 py-2 right-0 rounded-full">X</a>
            <h2>Meu formulário</h2>
            <p>Preencha as informações abaixo</p>
            <form>


                Nome:
                <input id="iName" type="text" placeholder="Digite seu nome completo" />
                Email: <input id="iEmail" placeholder="Digite seu melhor email" />
                Senha: <input id="iPass" placeholder="Letra maiuscula e números" />
                Data de nascimento: <input id="iBirth" type="date" />
                <a id="formRegister">Salvar</a>
            </form>

        </div>
    </div>

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
    <a id="AddUser" className="rounded-full bg-primary text-white px-4 py-3 fixed bottom-0 right-0"> + </a>

    <script src="user.js"></script>
    <script src="painel.js"> </script>

</>)
}

export default Painel;