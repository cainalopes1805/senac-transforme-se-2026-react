import { useState, useEffect } from "react"
import { Link } from "react-router"

function Auth() {
    useEffect(
        () => {
            const logado = JSON.parse(localStorage.getItem('logado'))
            setLog(logado)
        },
        []
    )

    useEffect(() => {
        const usersTemp = JSON.parse(localStorage.getItem('users'))
        if (usersTemp) setUsers(usersTemp)
    },
        []
    )

    function updateUser(pUser) {
        setModal(true)
        setUser(pUser)
    }

    const [log, setLog] = useState({})
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

    const [usuarioSelecionado, setUsuarioSelecionado] = useState(null)

    return (
        <>
            <Link
                to="/login"
                className="rounded-full bg-primary hover:bg-terciary hover:text-white m-[40px] px-4 py-3 text-[px] fixed top-0 left-0 shadow-md text-black">

                Voltar

            </Link>
            <div className="flex mx-auto mt-[30px]">
                <p className="text-black bg-primary px-[30px] py-[20px] rounded-full text-[40px] my-[30px]">
                    Seja bem vindo(a), {log.nome}!
                </p>
            </div>
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
                                            value={user.nome}
                                            onChange={(e) => setUser({ ...user, nome: e.target.value })}
                                            type="text"
                                            placeholder="Digite seu nome completo"
                                            className="rounded-xl py-2 px-3 w-full hover:bg-white bg-darkBlue text-primary border-0"
                                            required />
                                    </div>
                                    <div className="py-2 items-center mx-[40px]">
                                        <h3 className="text-left mb-[3px]">Email:</h3>
                                        <input
                                            value={user.email}
                                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                                            type="email"
                                            placeholder="Digite o seu melhor email"
                                            className="rounded-xl py-2 px-3 w-full hover:bg-white bg-darkBlue text-primary border-0"
                                            required />
                                    </div>
                                    <div className="py-2 items-center mx-[40px]">
                                        <h3 className="text-left mb-[3px]">Senha:</h3>
                                        <input
                                            value={user.senha}
                                            onChange={(e) => setUser({ ...user, senha: e.target.value })}
                                            type="password"
                                            placeholder="Letra maiúscula e números"
                                            className="rounded-xl py-2 px-3 w-full hover:bg-white bg-darkBlue text-primary border-0"
                                            required />
                                    </div>
                                    <div className="py-2 items-center mx-[40px]">
                                        <h3 className="text-left ">Data de nascimento:</h3>
                                        <input
                                            value={user.nascimento}
                                            onChange={(e) => setUser({ ...user, nascimento: e.target.value })}
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
            {usuarioSelecionado && (
                <div className="fixed flex top-0 right-0 bottom-0 left-0 items-center justify-center bg-black/80 z-50 ">
                    <div className="bg-darkBlue/70 rounded-lg p-[20px] mx-auto min-w-[600px] border-primary border-[4px]">
                        <div className="flex">
                            <p
                                onClick={() => setUsuarioSelecionado(null)}
                                className="bg-primary text-black rounded-full ml-auto px-[15px] py-1 text-[16px] hover:text-white hover:bg-terciary cursor-pointer">
                                X
                            </p>
                        </div>
                        <div className="flex">
                            <p className="mx-auto rounded-full bg-orange-600 text-white px-[15px] py-[8px]">
                                Ficha do usuário
                            </p>
                        </div>
                        <div className="grid grid-cols-2 mt-[40px] gap-[20px] text-white">
                            <div className="p-[20px] rounded-lg border-[4px] border-primary mb-[20px] hover:bg-white/10 hover:border-orange-500">
                                <p className="bg-orange-600 rounded-lg mb-[10px]">Nome</p>
                                <p>{usuarioSelecionado.nome}</p>
                            </div>
                            <div className="p-[20px] rounded-lg border-[4px] border-primary mb-[20px] hover:bg-white/10 hover:border-orange-500">
                                <p className="bg-orange-600 rounded-lg mb-[10px]">Email</p>
                                <p>{usuarioSelecionado.email}</p>
                            </div>
                            <div className="p-[20px] rounded-lg border-[4px] border-primary hover:bg-white/10 hover:border-orange-500">
                                <p className="bg-orange-600 rounded-lg mb-[10px]">Senha</p>
                                <p>{usuarioSelecionado.senha}</p>
                            </div>
                            <div className="p-[20px] rounded-lg border-[4px] border-primary hover:bg-white/10 hover:border-orange-500">
                                <p className="bg-orange-600 rounded-lg mb-[10px]">Nascimento</p>
                                <p>{usuarioSelecionado.nascimento}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="mx-auto bg-darkBlue p-[40px] rounded-lg border-[4px] border-primary mt-[50px] p-[10px]">
                <div className="px-[20px] bg-primary rounded-lg mb-[40px]">
                    <div className="grid grid-cols-3 py-[20px] text-black text-[25px]">
                        <p>Nome</p>
                        <p>Email</p>
                        <p>Ações</p>
                    </div>
                </div>
                <div className="p-[20px] rounded-lg border-[4px] border-primary">
                    {users.map((usuario) => {
                        return (
                            <div
                                key={usuario.nome}
                                className="grid grid-cols-3 text-white items-center rounded-lg hover:bg-white/10 cursor-pointer">
                                <p className="text-left border-r p-[20px] border-secondary">{usuario.nome}</p>
                                <p className="text-left border-r p-[20px] border-secondary">{usuario.email}</p>
                                <div className="flex mx-auto grid grid-cols-3 gap-[20px]">
                                    <a
                                        onClick={() => { }}
                                        className="bg-red hover:bg-red-900 px-[13px] py-[6px] rounded-full cursor-pointer">
                                        X
                                    </a>
                                    <a
                                        onClick={() => updateUser(usuario)}
                                        className="bg-blue-500 hover:bg-blue-900 px-[13px] py-[6px] rounded-full cursor-pointer">
                                        V
                                    </a>
                                    <a
                                        onClick={() => setUsuarioSelecionado(usuario)}
                                        className="bg-orange-500 hover:bg-orange-900 px-[13px] py-[6px] rounded-full cursor-pointer">
                                        F
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div >
            <a
                onClick={() => setModal(true)}
                className="rounded-full bg-primary text-[40px] hover:bg-terciary hover:text-white px-[35px] pt-[30px] pb-[40px] items-center fixed bottom-10 right-10 shadow-md cursor-pointer text-black">

                +

            </a>
        </>
    )
}

export default Auth