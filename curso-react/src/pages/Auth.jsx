import { useState } from "react"
import { Link } from "react-router"

function Auth() {
    const [modal, setModal] = useState(false)
    return (
        <>
            <Link
                to="/login"
                className="rounded-full bg-primary hover:bg-terciary hover:text-white m-4 px-4 py-3 text-[px] fixed top-0 left-0 shadow-md text-black">

                Voltar

            </Link>
            <div className="text-center">
                <h1
                    id="idUsuario"
                    className="mt-0 mb-0 flex justify-center">
                </h1>
            </div >
            {modal && (
                <div
                    id="idModalRegister"
                    className="fixed flex top-0 right-0 bottom-0 left-0 items-center justify-center bg-green/10 z-50 ">

                    <div className="relative max-w-[600px] w-full p-5 bg-primary rounded-lg shadow-md flex flex-col">

                        <h3
                            onClick={() => setModal(false)}
                            className="bg-terciary text-white rounded-full mb-4 mr-4 px-3 py-1 text-[16px] hover:text-dark hover:bg-white cursor-pointer absolute right-0">

                            X

                        </h3>

                        <div>

                            <form>

                                <h1 className="text-center mt-[60px] mb-[30px] text-dark text-[40px]">

                                    Cadastro

                                </h1>

                                <p className="text-center text-dark mb-[50px]">

                                    Preencha os campos abaixo

                                </p>

                                <div className="py-4 bg-terciary rounded-lg text-white px-3">
                                    <div className="py-2 flex items-center mx-[40px] mt-[50px]">
                                        <h2 className="text-left">Nome:</h2>
                                        <input
                                            id="idRegName"
                                            type="text"
                                            placeholder="Digite seu nome completo"
                                            className="rounded-full py-2 px-6 hover:bg-white bg-darkBlue text-primary border-0 ml-auto"
                                            required />
                                    </div>
                                    <div className="py-2 flex items-center mx-[40px]">
                                        <h2 className="text-left">Email:</h2>
                                        <input
                                            id="idRegEmail"
                                            type="email"
                                            placeholder="Digite o seu melhor email"
                                            className="rounded-full py-2 px-6 hover:bg-white bg-darkBlue text-primary border-0 ml-auto"
                                            required />
                                    </div>
                                    <div className="py-2 flex items-center mx-[40px]">
                                        <h2 className="text-left">Senha:</h2>
                                        <input
                                            id="idRegPassword"
                                            type="password"
                                            placeholder="Letra maiúscula e números"
                                            className="rounded-full py-2 px-6 hover:bg-white bg-darkBlue text-primary border-0 ml-auto"
                                            required />
                                    </div>
                                    <div className="py-2 flex items-center mx-[40px]">
                                        <h2 className="text-left">Data de nascimento:</h2>
                                        <input
                                            id="idRegDate"
                                            type="date"
                                            max="9999-12-31"
                                            className="rounded-full py-2 px-6 hover:bg-white bg-darkBlue text-primary border-0 ml-auto"
                                            required />
                                    </div>
                                    <div>


                                        <a
                                            id="idFormRegister"
                                            className="flex justify-center my-[50px] text-center bg-primary py-2 text-dark rounded-full shadow-md hover:bg-white hover:text-dark cursor-pointer mx-[40px]">

                                            Cadastrar

                                        </a>
                                    </div>
                                </div>

                            </form>


                        </div>

                    </div>

                </div>
            )}
            <table className="mx-auto mt-6 bg-primary p-2 rounded-lg shadow-md">
                <thead className="bg-primary text-dark">
                    <tr>
                        <td className="px-4 py-2 rounded text-center">Nome</td>
                        <td className="px-4 py-2 rounded text-center">Email</td>
                        <td className="px-4 py-2 rounded text-center">Ações</td>
                    </tr>
                </thead>
                <tbody id="idListUsers">

                </tbody>
            </table>
            <a
                onClick={() => setModal(true)}
                className="rounded-full bg-primary hover:bg-terciary hover:text-white m-4 px-5 py-4 text-[px] fixed bottom-0 right-0 shadow-md cursor-pointer text-black">

                +

            </a>
        </>
    )
}

export default Auth