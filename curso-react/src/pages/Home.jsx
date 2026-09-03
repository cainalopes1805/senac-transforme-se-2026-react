import { Link } from "react-router"

function Home() {
  return (
    <>
      <nav className="grid grid-cols-3 items-center bg-darkBlue50 fixed w-full px-5">
        <div className="grid grid-cols-3 items-center text-left gap-8 pr-[270px]">

          <a
            className="text-center p-1 bg-primary rounded-lg hover:bg-white hover:text-dark text-black m-[0px]"
            id="idMenuAbout"
            href="#idAbout">

            Sobre

          </a>

          <a
            className="text-center p-1 bg-primary rounded-lg hover:bg-white hover:text-dark text-black m-[0px]"
            id="idMenuPrices"
            href="#idPrices">

            Planos

          </a>

          <a
            className="text-center p-1 bg-primary rounded-lg hover:bg-white hover:text-dark text-black m-[0px]"
            id="idMenuFeatures"
            href="#idFeatures">

            Benefícios

          </a>

        </div>

        <div className="text-center">
          <a to="home">
            <h1 className="text-[60px] logo text-center hover:text-white text-primary cursor-pointer">

              Nutri-Connect

            </h1>
          </a>
        </div>
        <div className="text-right">
          <Link
            id="idMenuLogin"
            to="/login"
            className="px-4 py-2 bg-primary rounded-full text-black hover:bg-white hover:text-dark">

            Acessar

          </Link>
        </div>
      </nav>
      <main>

        <section
          id="idAbout"
          className="bg-white text-black pt-[170px] pb-[50px]">

          <div
            className="max-w-[800px] mx-auto pb-6">

            <h1
              id="idAboutAncoras"
              className="mb-3 text-black">

              <b>Sobre</b>


            </h1>

            <nav
              id="idAboutAncoras"
              className="mb-5">
              <a
                id="idAboutAncoras"
                href="#idPrices"
                className="hover:text-primary m-2">


                Planos

              </a>

              |

              <a
                id="idAboutAncoras"
                href="#idFeatures"
                className="hover:text-primary m-2">

                Benefícios

              </a>

            </nav>

            <p
              className="text-justify">

              O <b>Nutri Connect</b> foi planejado e desenvolvido para ajudar pessoas a
              melhorarem sua alimentação. A princípio parece algo simples, porém
              acreditamos que <i>o ato de se alimentar é o que define a maior parte
                do nosso desenvolvimento humano</i>, já que é dos alimentos que tiramos
              toda a energia para viver nosso dia a dia. Desde um copo de água para
              se refrescar, até um jantar de aniversário, a comida está sempre
              presente! E por isso é tão importante entender como sua alimentação
              afeta seu corpo, assim como seu psicológico e emocional, e cuidar dele
              de acordo com seu objetivo. Com nossos planos <a href="#idHealth" className="hover:text-white">Saúde</a>,
              <a href="#idFit" className="hover:text-white">Fit</a> ou <a href="#idAthlete" className="hover:text-white">Atleta</a>,
              você pode transformar seu corpo da melhor forma para a sua rotina

            </p>

          </div>

        </section>

        <section
          id="idPrices"
          className="bg-darkBlue text-black py-[50px]">

          <div
            className="max-w-[800px] mx-auto pt-5 pb-6">

            <h1
              className="mb-3 text-center text-primary">

              <b>Planos</b>

            </h1>

            <nav
              className="text-center mb-5 text-white">

              <a
                href="#idAbout"
                className="hover:text-primary text-white m-2">

                Sobre

              </a>

              |

              <a
                href="#idFeatures"
                className="hover:text-primary text-white m-2">

                Benefícios

              </a>

            </nav>

            <div
              className="grid grid-cols-3 gap-6 justify-between">

              <article
                id="idPlanoSA"
                className="bg-primary p-4 rounded-xl">

                <h3
                  id="idHealth">

                  Plano Saúde

                </h3>

                <p
                  id="idPlanoSA"
                  className="text-justify">

                  Com o <i><b>Plano Saúde</b></i> você tem um caminho específico para ajudar nos mais variados
                  transtornos alimentares e acompanhamento médico e psicológico caso a
                  caso com profissionais especializados!

                </p>


              </article>

              <article
                className="bg-white p-4 rounded-xl">

                <h3
                  id="idFit">

                  Plano Fit

                </h3>

                <p className="text-justify">

                  O nosso <i><b>Plano Fit</b></i> é perfeito para as pessoas que querem melhorar seu
                  relacionamento com seu próprio corpo, desenvolvendo sua disposição, ganhando energia
                  e saúde!

                </p>

              </article>

              <article
                id="idPlanoSA"
                className="bg-primary p-4 rounded-xl">

                <h3
                  id="idAthlete">

                  Plano Atleta

                </h3>

                <p
                  id="idPlanoSA"
                  className="text-justify">

                  O <i><b>Plano Atleta</b></i> traz tudo que um verdadeiro atleta necessita! Desde uma dieta
                  personalizada, até uma rotina semanal de exercícios e sempre auxiliado por um
                  profissional, você se torna uma verdadeira máquina de competir!

                </p>

              </article>

            </div>
            <div
              className="grid grid-cols-3 gap-6 mt-4 justify-between items-center">
              <article className="bg-primary py-2 rounded-xl px-4">
                <p id="idPlanoSA">

                  Por apenas <b>R$ 69,90/mês</b>
                </p>
              </article>
              <article className="bg-white py-2 rounded-xl px-4">
                <p>

                  Por apenas <b>R$ 79,90/mês</b>

                </p>
              </article>
              <article className="bg-primary py-2 rounded-xl px-4">
                <p id="idPlanoSA">

                  Por apenas <b>R$ 99,90/mês</b>

                </p>
              </article>
            </div>

          </div>

        </section>

        <section
          id="idFeatures"
          className="bg-primary text-black py-[50px]">

          <div
            className="max-w-[800px] mx-auto py-5">


            <h1 className="mb-3 text-white text-left">

              Benefícios

            </h1>

            <nav className="mb-5 text-left">

              <a
                href="#idAbout"
                className="hover:text-white mr-2">

                Sobre

              </a>

              |

              <a
                href="#idPrices"
                className="hover:text-white m-2">

                Planos

              </a>

            </nav>

            <p className="text-justify text-darkBlue">

              Escolhendo um plano do <b>Nutri Connect</b> você terá o melhor acompanhamento alimentar
              possível, contando com um plano específico criado para o seu objetivo, tendo acompanhamento
              com os melhores profissionais da área e atendimento rápido e fácil!

            </p>

          </div>

        </section>

      </main>
    </>
  )
}

export default Home