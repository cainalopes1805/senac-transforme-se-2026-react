import { useState } from "react"
import { Link } from "react-router"

function Auth() {
    const [modal, setModal] = useState(false)
    const [users, setUsers] = useState(() => {
        const usersStorage = localStorage.getItem('users')

        return usersStorage ?
        JSON.parse(usersStorage) : []
    })
    const [user, setUser] = useState({})

    function handleRegister() {        
        const emailExiste = users.some(
            (usuario) => usuario.email === user.email
        )
        if (emailExiste) {
            alert("Este email já está cadastrado")
            return
        }
        const newUsers = [...users, user]
        setUsers(newUsers)
        setUser({})
        localStorage.setItem('users', JSON.stringify(newUsers))
        setModal(false)
    }

    return (
        <>
            <Link
                to="/login"
                className="rounded-full bg-primary hover:bg-terciary hover:text-white m-[40px] px-4 py-3 text-[px] fixed top-0 left-0 shadow-md text-black">

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

                    <div className="relative max-w-[600px] w-full p-5 bg-primary rounded-xl shadow-md flex flex-col">

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

                                <div className="py-4 bg-terciary rounded-xl text-white px-3">
                                    <div className="py-2 items-center mx-[40px] mt-[50px]">
                                        <h3 className="text-left mb-[3px]">Nome:</h3>
                                        <input
                                            onChange={(e) => setUser({...user, nome: e.target.value})}
                                            type="text"
                                            placeholder="Digite seu nome completo"
                                            className="rounded-xl py-2 px-3 w-full hover:bg-white bg-darkBlue text-primary border-0"
                                            required />
                                    </div>
                                    <div className="py-2 items-center mx-[40px]">
                                        <h3 className="text-left mb-[3px]">Email:</h3>
                                        <input
                                            onChange={(e) => setUser({...user, email: e.target.value})}
                                            type="email"
                                            placeholder="Digite o seu melhor email"
                                            className="rounded-xl py-2 px-3 w-full hover:bg-white bg-darkBlue text-primary border-0"
                                            required />
                                    </div>
                                    <div className="py-2 items-center mx-[40px]">
                                        <h3 className="text-left mb-[3px]">Senha:</h3>
                                        <input
                                            onChange={(e) => setUser({...user, senha: e.target.value})}
                                            type="password"
                                            placeholder="Letra maiúscula e números"
                                            className="rounded-xl py-2 px-3 w-full hover:bg-white bg-darkBlue text-primary border-0"
                                            required />
                                    </div>
                                    <div className="py-2 items-center mx-[40px]">
                                        <h3 className="text-left ">Data de nascimento:</h3>
                                        <input
                                            onChange={(e) => setUser({...user, nascimento: e.target.value})}
                                            type="date"
                                            max="9999-12-31"
                                            className="rounded-xl py-2 px-3 w-full hover:bg-white bg-darkBlue text-primary border-0"
                                            required />
                                    </div>                             
                                    <div>


                                        <a
                                            onClick={handleRegister}
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
            <table className="mx-auto mt-6 bg-primary p-2 rounded-xl shadow-md">
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
                className="rounded-full bg-primary text-[40px] hover:bg-terciary hover:text-white px-[35px] pt-[30px] pb-[40px] items-center fixed bottom-10 right-10 shadow-md cursor-pointer text-black">

                +

            </a>
        </>
    )
}

export default Auth