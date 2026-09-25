import {Link} from 'react-router'
function Home() {
    return (<>
        <nav className="py-2 px-4 flex items-center fixed top-0 w-full bg-primary shadow-md">
            <a className="p-2 mr-2 hover:bg-primary" href="#prices">Preços</a>
            <a className="p-2 mr-2 hover:bg-primary" href="#features">Benefícios</a>
            <Link className="p-2 bg-pr rounded text-white ml-auto mr-5 hover:shadow-inner" to="/auth">Acessar</Link> 
        </nav>

        <main>
            <h2></h2>
            <section id="about">

                <div className="max-w-lg mx-auto py-5">
                    <h1 className="text-center mt-5"> Oque é o FALE+?</h1>
                    <div className="flex gap-8 ">
                        <article>
                            <p>
                                O fale+ é uma iniciativa voltada ao desenvolvimento da comunicação e da interação social
                                para pessoas que sofrem de disfemia, gagueira, oratória e insegurança ao falar se sentirem
                                mais seguras. confiantes e interativas.
                                Unindo a tecnologia de uma I.A em um app/site dinâmico e intuitivo onde os usuários
                                realizarão exercicios para melhorar sua comunicação,
                                com aulas, eventos presenciais e online
                            </p>
                        </article>
                        <article>
                            <p>
                                o Fale+ precisa de mais Desenvolvimento O fale+ é uma iniciativa voltada ao desenvolvimento
                                da comunicação e da interação social
                                para pessoas que sofrem de disfemia, gagueira, oratória e insegurança ao falar se sentirem
                                mais seguras. confiantes e interativas.
                                Unindo a tecnologia de uma I.A em um app/site dinâmico e intuitivo onde os usuários
                                realizarão exercicios para melhorar sua comunicação,
                                com aulas, eventos presenciais e online
                            </p>

                        </article>
                    </div>

                </div>
            </section>
            <section id="prices">
                <div className="max-w-lg mx-auto py-3" >
                    <h2>
                        Preços
                    </h2>
                    <p>
                        Temos um plano <b>Gratuito</b> para incluir a todos o acesso a plataforma, além de assinaturas
                        mensais
                        com um ótimo custo benefício bolsas para estudantes de escolas, univesidades
                        e instituições parceiras que aplicam nosso projeto para alunos que necessitam de um apoio
                        especializado
                    </p>
                </div>
            </section>
            <section id="feature">
                <div className="max-w-lg mx-auto py-2">
                    <h2>
                        Benefícios
                    </h2>
                    <p>
                        nosso projeto fornece aulas práticas com acompanhamento pofissional, diversas opções de eventos
                        sociais e profissionais
                    </p>
                </div>
            </section>
        </main>

        <footer>

        </footer>

    </>);
}

export default Home;