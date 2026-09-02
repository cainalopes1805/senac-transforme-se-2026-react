function Login() {
    return (
        <>
            <section>

                <div className="flex fixed top-0 right-0 bottom-0 left-0 items-center justify-center">

                    <div className="relative max-w-md w-full p-5 bg-primary rounded-lg shadow-md flex flex-col">

                        <a href="index.html"
                            className="mb-0 bg-terciary absolute top-0 text-white rounded-full px-4 py-3 text-[16px] right-0 mr-4 mt-4 hover:text-dark hover:bg-white cursor-pointer">

                            Voltar

                        </a>

                        <div>

                            <form>

                                <h1 className="text-center mt-0 text-dark text-[40px]">

                                    Login

                                </h1>

                                <p className="text-center text-dark">

                                    Preencha os campos abaixo

                                </p>

                                <div className="py-4 justify-between bg-terciary rounded-lg mx-auto text-white flex flex-col shadow-md">

                                    <div className="py-2 flex items-center">
                                        Email:
                                        <input id="idLogEmail" type="email" placeholder="Digite o email cadastrado"
                                            className="rounded-full py-2 px-6 hover:bg-white bg-darkBlue text-primary border-0"
                                        />
                                    </div>
                                    <div className="py-2 flex items-center">
                                        <div className="text-left">Senha</div>
                                        <div>
                                        <input id="idLogPassword" type="password" placeholder="Digite sua senha"
                                            className="rounded-full py-2 px-6 hover:bg-white bg-darkBlue text-primary border-0"
                                        />
                                        </div>
                                    </div>
                                    <div className="py-2">
                                        <a id="idFormLogin"
                                            className="flex justify-center text-center bg-primary py-2 text-dark rounded-full shadow-md hover:bg-white hover:text-dark cursor-pointer">

                                            Entrar

                                        </a>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div >
                <pre id="idResponse" className="mt-5 mb-0 text-center">

                </pre>
            </section >
        </>
    )
}

export default Login