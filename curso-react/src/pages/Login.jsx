import { use, useState } from "react"
import { Link } from 'react-router';

function Login() {
    const [number, setNumber] = useState(2);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <section>

                <div className="flex fixed top-0 right-0 bottom-0 left-0 items-center justify-center">

                    <div className="relative max-w-md w-full p-5 bg-primary rounded-lg shadow-md">
                        <Link to="/"
                            className="bg-terciary text-white rounded-full mb-4 mr-4 px-3 py-2 text-[16px] hover:text-dark hover:bg-white cursor-pointer absolute right-0">

                            Voltar

                        </Link>                    
                        <div className="mt-4">

                            <form>

                                <h1 className="text-center mt-[60px] mb-[30px] text-dark text-[40px]">

                                    Login

                                </h1>

                                <p className="text-center text-dark mb-[50px]">

                                    Preencha os campos abaixo

                                </p>

                                <div className="py-4 bg-terciary rounded-lg text-white px-3">

                                    <div className="py-2 flex items-center mx-[40px] mt-[50px]">
                                        <h2 className="text-left">Email:</h2>
                                        <input
                                            id="idLogEmail"
                                            type="email"
                                            value={email}
                                            placeholder="Digite o email cadastrado"
                                            className="rounded-full py-2 px-6 hover:bg-white bg-darkBlue text-primary border-0 ml-auto"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="py-2 flex items-center mx-[40px]">
                                        <h2 className="text-left">Senha</h2>
                                        <input
                                            id="idLogPassword"
                                            type="password"
                                            placeholder="Digite sua senha"
                                            className="rounded-full py-2 px-6 hover:bg-white bg-darkBlue text-primary border-0 ml-auto"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="py-2">
                                        <Link 
                                            id="idFormLogin"
                                            to="/auth"
                                            className="flex justify-center my-[50px] text-center bg-primary py-2 text-dark rounded-full shadow-md hover:bg-white hover:text-dark cursor-pointer mx-[40px]">

                                            Entrar

                                        </Link>
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