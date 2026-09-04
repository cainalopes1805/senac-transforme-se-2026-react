import { use, useState } from "react"
;import { Link, useNavigate } from 'react-router'

function Login() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [mensagem, setMensagem] = useState("")
    const nav = useNavigate()
    function handleLogin() {
        const users= JSON.parse(localStorage.getItem('users'))
        
        let user = users.find(u => {
            return u.email == email
        });

        if(!user) {
            setMensagem("Usuário não encontrado")            
            return
        }
        if(user.senha == senha) {
            localStorage.setItem("logado", JSON.stringify(user))
            nav("/Auth")
        }
        else{            
            setMensagem("Senha incorreta")
            return
        }
    }

    return (
        <>
            <section>

                <div className="flex fixed top-0 right-0 bottom-0 left-0 items-center justify-center">

                    <div className="relative max-w-md w-full p-5 bg-primary rounded-xl shadow-md">
                        <Link to="/"
                            className="bg-terciary text-white rounded-full mb-4 mr-4 px-3 py-1 text-[16px] hover:text-dark hover:bg-white cursor-pointer absolute right-0">

                            Voltar

                        </Link>                    
                        <div className="mt-4">

                            <form>

                                <h1 className="text-center mt-[30px] mb-[30px] text-dark text-[40px]">

                                    Login

                                </h1>

                                <p className="text-center text-dark mb-[30px]">

                                    Preencha os campos abaixo

                                </p>

                                <div className="py-4 bg-terciary rounded-xl text-white px-3">

                                    <div className="py-2 items-center mt-[30px] mx-[40px]">
                                        <h3 className="text-left mb-[3px]">Email:</h3>
                                        <input
                                            id="idLogEmail"
                                            type="email"
                                            value={email}
                                            placeholder="Digite o email cadastrado"
                                            className="rounded-xl py-2 px-3 w-full hover:bg-white bg-darkBlue text-primary border-0"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="py-2 items-center mx-[40px]">
                                        <h3 className="text-left mb-[3px]">Senha</h3>
                                        <input
                                            id="idLogPassword"
                                            type="password"
                                            value={senha}
                                            placeholder="Digite sua senha"
                                            className="rounded-xl py-2 px-3 w-full hover:bg-white bg-darkBlue text-primary border-0"
                                            onChange={(e) => setSenha(e.target.value)}
                                        />
                                    </div>
                                    <div className="py-2">
                                        <a 
                                            onClick={handleLogin}
                                            id="idFormLogin"                                
                                            className="flex justify-center mt-[30px] text-center bg-primary py-2 text-dark rounded-full shadow-md hover:bg-white hover:text-dark cursor-pointer mx-[40px]">

                                            Entrar

                                        </a>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div >
                <pre id="idResponse" className="mt-5 mb-0 text-center">
                    {mensagem}
                </pre>
            </section >
        </>
    )
}

export default Login