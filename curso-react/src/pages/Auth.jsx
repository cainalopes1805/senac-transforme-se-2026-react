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

    function updateUser(indice) {
        setFicha(true)
        setUser(users[indice])
        setIndex(indice)
    }

    function deleteUser(usuario) {

        if (users.length == 1) {
            return
        }

        const newUsers = users.filter((u) =>
            u.email != usuario.email
        )

        setUsers(newUsers)
        localStorage.setItem('users', JSON.stringify(newUsers))

        if (log.email == usuario.email) {
            localStorage.removeItem('logado')
            window.location.href = "/login"
        }
    }

    const [index, setIndex] = useState(-1)
    const [log, setLog] = useState({})
    const [modal, setModal] = useState(false)
    const [ficha, setFicha] = useState(false)

    const [users, setUsers] = useState(() => {
        const usersStorage = localStorage.getItem('users')

        return usersStorage ?
            JSON.parse(usersStorage) : []
    })

    const [user, setUser] = useState({})
    const [mensagem, setMensagem] = useState("")

    function handleRegister() {
        if (!user.nome ||
            !user.email ||
            !user.senha ||
            !user.nascimento) {
            setMensagem("Preencha todos os campos")
            return
        }
        const users = JSON.parse(localStorage.getItem('users'))
        let buscarEmail = users.find(u => {
            return u.email == user.email
        });

        if (buscarEmail) {
            setMensagem("Email já cadastrado")
            return
        }
        let newUsers = []
        if (index != -1) {
            newUsers = [...users]
            newUsers[index] = user
        } else {
            newUsers = [...users, user]
        }

        setUsers(newUsers)
        localStorage.setItem('users', JSON.stringify(newUsers))

        setFicha(false)
        setModal(false)
        setIsEdit(false)
        setUser({})
        setIndex(-1)
    }

    const [usuarioSelecionado, setUsuarioSelecionado] = useState(null)
    const [isEdit, setIsEdit] = useState(false)

    return (
        <>
            <Link
                to="/login"
                className="rounded-full bg-primary hover:bg-terciary hover:text-white m-[40px] px-4 py-3 text-[px] fixed top-0 left-0 shadow-md text-black">

                Voltar

            </Link>
            {log && (<div className="flex mx-auto mt-[30px]">
                <p className="text-black bg-primary px-[30px] py-[20px] rounded-full text-[40px] my-[30px]">
                    Seja bem vindo(a), {log.nome}!
                </p>
            </div>)}
            {modal && (
                <div
                    id="idModalRegister"
                    className="fixed flex top-0 right-0 bottom-0 left-0 items-center justify-center bg-black/80 z-50 ">

                    <div className="relative max-w-[600px] w-full p-[40px] border-orange-600 border-[4px] bg-darkBlue/80 rounded-lg flex flex-col">

                        <h3
                            onClick={() => {
                                setMensagem("")
                                setFicha(false)
                                setModal(false)
                                setIsEdit(false)
                                setUser({})
                                setIndex(-1)
                            }}
                            className="bg-orange-600 text-black rounded-full mb-4 mr-4 px-3 py-1 text-[16px] hover:text-white hover:bg-orange-800 cursor-pointer absolute right-0">

                            <b>X</b>

                        </h3>

                        <div>
                            {isEdit &&
                                (
                                    <form>
                                        <h1 className="text-center mt-[60px] mb-[30px] text-[40px] text-orange-600">

                                            Cadastro
                                        </h1>

                                        <p className="text-center mb-[50px] text-orange-600">

                                            Preencha os campos abaixo

                                        </p>

                                        <div className="py-4 rounded-lg border-orange-600 border-[4px] text-white px-3">
                                            <p className="mt-[20px] bg-red/60 rounded-lg mx-[40px]">{mensagem}</p>
                                            <div className="py-2 items-center mx-[40px] mt-[20px]">
                                                <h3 className="text-left mb-[3px]">Nome:</h3>
                                                <input
                                                    value={user.nome}
                                                    onChange={(e) => setUser({ ...user, nome: e.target.value })}
                                                    type="text"
                                                    placeholder="Digite seu nome completo"
                                                    className="rounded-lg py-2 px-3 w-full hover:bg-white/10 bg-darkBlue text-white border-orange-600 border-[3px]"
                                                    required />
                                            </div>
                                            <div className="py-2 items-center mx-[40px]">
                                                <h3 className="text-left mb-[3px]">Email:</h3>
                                                <input
                                                    value={user.email}
                                                    onChange={(e) => {
                                                        setMensagem("")
                                                        setUser({ ...user, email: e.target.value })
                                                    }}
                                                    type="email"
                                                    placeholder="Digite o seu melhor email"
                                                    className="rounded-lg py-2 px-3 w-full hover:bg-white/10 bg-darkBlue text-white border-orange-600 border-[3px]"
                                                    required />
                                            </div>
                                            <div className="py-2 items-center mx-[40px]">
                                                <h3 className="text-left mb-[3px]">Senha:</h3>
                                                <input
                                                    value={user.senha}
                                                    onChange={(e) => setUser({ ...user, senha: e.target.value })}
                                                    type="password"
                                                    placeholder="Letra maiúscula e números"
                                                    className="rounded-lg py-2 px-3 w-full hover:bg-white/10 bg-darkBlue text-white border-orange-600 border-[3px]"
                                                    required />
                                            </div>
                                            <div className="py-2 items-center mx-[40px]">
                                                <h3 className="text-left ">Data de nascimento:</h3>
                                                <input
                                                    value={user.nascimento}
                                                    onChange={(e) => setUser({ ...user, nascimento: e.target.value })}
                                                    type="date"
                                                    max="9999-12-31"
                                                    className="rounded-lg py-2 px-3 w-full hover:bg-white/10 bg-darkBlue text-white border-orange-600 border-[3px]"
                                                    required />
                                            </div>
                                            {index != -1 && (
                                                <a
                                                    onClick={() => {
                                                        setFicha(false)
                                                        setModal(false)
                                                        setIsEdit(false)
                                                        setUser({})
                                                        setIndex(-1)
                                                    }}
                                                    id="idFormRegister"
                                                    className="flex justify-center my-[20px] text-center bg-red py-2 text-white rounded-full shadow-md hover:bg-red-900 cursor-pointer mx-[40px]">

                                                    Cancelar

                                                </a>
                                            )}
                                            <a
                                                onClick={handleRegister}
                                                id="idFormRegister"
                                                className="flex justify-center my-[20px] text-center bg-primary py-2 text-dark rounded-full shadow-md hover:bg-terciary hover:text-white cursor-pointer mx-[40px]">

                                                Salvar

                                            </a>
                                        </div>
                                    </form>
                                )
                            }
                        </div>
                    </div>
                </div>
            )}
            {ficha && (
                <div className="fixed flex top-0 right-0 bottom-0 left-0 items-center justify-center bg-black/80 z-50 ">
                    <div className="bg-darkBlue/80 rounded-lg p-[40px] mx-auto min-w-[600px] border-orange-600 border-[4px]">
                        <div className="flex">
                            <p
                                onClick={() => {
                                    setFicha(false)
                                    setModal(false)
                                    setIsEdit(false)
                                    setUser({})
                                    setIndex(-1)
                                    setUsuarioSelecionado(null)
                                }}
                                className="bg-orange-600 text-black rounded-full ml-auto px-[15px] py-1 text-[16px] hover:text-white hover:bg-orange-800 cursor-pointer">
                                <b>X</b>
                            </p>
                        </div>
                        <div className="flex">
                            <p className="mx-auto rounded-full bg-orange-600 text-black px-[15px] py-[6px] text-[25px]">
                                Ficha do usuário
                            </p>
                        </div>
                        <div className="grid grid-cols-2 mt-[40px] gap-[40px] text-white">
                            <div className="p-[20px] rounded-lg border-[4px] border-orange-600 mb-[20px] hover:bg-white/10">
                                <p className="bg-orange-600 rounded-lg mb-[10px] text-black">Nome</p>
                                <p>{usuarioSelecionado.nome}</p>
                            </div>
                            <div className="p-[20px] rounded-lg border-[4px] border-orange-600 mb-[20px] hover:bg-white/10">
                                <p className="bg-orange-600 rounded-lg mb-[10px] text-black">Email</p>
                                <p>{usuarioSelecionado.email}</p>
                            </div>
                            <div className="p-[20px] rounded-lg border-[4px] border-orange-600 hover:bg-white/10">
                                <p className="bg-orange-600 rounded-lg mb-[10px] text-black">Senha</p>
                                <p>{usuarioSelecionado.senha}</p>
                            </div>
                            <div className="p-[20px] rounded-lg border-[4px] border-orange-600 hover:bg-white/10">
                                <p className="bg-orange-600 rounded-lg mb-[10px] text-black">Nascimento</p>
                                <p>{usuarioSelecionado.nascimento}</p>
                            </div>
                        </div>
                        <div className="flex">
                            <a
                                onClick={() => {
                                    setUser(usuarioSelecionado)
                                    setModal(true)
                                    setFicha(false)
                                    setIsEdit(true)
                                }}
                                id="idFormRegister"
                                className="w-full bg-orange-600 hover:bg-orange-800 text-black hover:text-white rounded-full mt-[40px] py-[10px]">
                                Editar
                            </a>
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
                    {users.map((usuario, i) => {
                        return (
                            <div
                                key={usuario.email}
                                onClick={() => {
                                    updateUser(i)
                                    setUsuarioSelecionado(usuario)
                                }}
                                className="grid grid-cols-3 text-white items-center rounded-lg hover:bg-white/10 cursor-pointer">
                                <p className="text-left border-r p-[20px] border-secondary">{usuario.nome}</p>
                                <p className="text-left border-r p-[20px] border-secondary">{usuario.email}</p>
                                <div className="flex mx-auto">
                                    <a
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            deleteUser(usuario)
                                        }}
                                        className="bg-red hover:bg-red-900 px-[13px] py-[6px] rounded-full cursor-pointer">
                                        X
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div >
            <a
                onClick={() => {
                    setModal(true)
                    setIsEdit(true)
                }}
                className="rounded-full bg-primary text-[40px] hover:bg-terciary hover:text-white px-[35px] pt-[30px] pb-[40px] items-center fixed bottom-10 right-10 shadow-md cursor-pointer text-black">

                +

            </a>
        </>
    )
}

export default Auth