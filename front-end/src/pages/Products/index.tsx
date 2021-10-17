import { LogoImg } from "./styles";

import logo from "assets/images/logo.png";
import { Carousell } from "components/Carousel";
import { NavBar } from "components/NavBar";

import seals1 from "assets/seals/seals1.png";
import seals2 from "assets/seals/seals2.jpg";
import seals3 from "assets/seals/seals3.jpg";
import { useProdutos } from "data/hooks/useProdutos.Page";

function Products() {
        const { weather } = useProdutos();

    return (
        <body>
            <NavBar />
            <main className="container">
                <div className="row py-5">
                    <div className="col-md">
                        <article className="blog-post">
                            <h2 className="blog-post-title">
                                Klaviê Clinical - Loção Hidratante
                            </h2>
                            <p className="fs-5">
                                Sua pele hidradata por 24 horas
                            </p>
                        </article>
                    </div>
                </div>
                <Carousell />
            </main>
            <main className="container">
                <div className="row py-5">
                    <div className="col-md">
                        <article className="blog-post">
                            <h3 className="blog-post-title">Indicação:</h3>

                            <p className="fs-4 p-3">
                                O <b>TheraSkin Klaviê®</b> Clinical é indicado
                                para hidratação de peles secas, sensíveis e
                                sensibilizadas e é indicado para uso adulto e
                                pediátrico. A utilização frequente do produto
                                promove a sensação de conforto e suavidade, com
                                redução rápida do prurido (coceira na pele).
                            </p>

                            <h3>Benefícios:</h3>
                            <ul className="list-group list-group-numbered ">
                                <li className="list-group-item fw-normal">
                                    Espalha facilmente na pele.
                                </li>
                                <li className="list-group-item fw-normal">
                                    Rápida absorção.
                                </li>
                                <li className="list-group-item fw-normal">
                                    Redução rápida da sensação de prurido (
                                    coceira).
                                </li>
                                <li className="list-group-item fw-normal">
                                    Produto hipoalergênico para pele sensível.
                                </li>

                                <li className="list-group-item fw-normal">
                                    Sem fragrância, corantes e conservantes.
                                </li>

                                <li className="list-group-item fw-normal">
                                    Uso adulto e infantil.
                                </li>
                            </ul>

                            <p></p>
                        </article>

                        <article className="blog-post">
                            <h2 className="blog-post-title">Como usar:</h2>

                            <p className="fs-4 p-3">
                                A forma certa para controlar o ressecamento da
                                pele é manter a pele hidratada diariamente, por
                                24 horas. Para garantir essa proteção, aplique a
                                loção Klaviê® Clinical de 1 a 2 vezes ao dia
                                sobre a pele seca, de preferência após o banho.
                            </p>
                        </article>
                        <article className="blog-post">
                            <h2 className="blog-post-title">Composição:</h2>

                            <p className="fs-4 p-3">
                                Ceramidas, Ácidos Graxos, Glicerol, Bisabolol,
                                Fitoesteróis, Manteiga de Karité, Óleo de
                                Calêndula e SymCalmin®.
                            </p>
                        </article>
                        <article className="blog-post">
                            <h2 className="blog-post-title">Avaliações:</h2>

                            <p className="fs-4 p-3">
                                - A loção é muito leve e espalha fácil na pele.
                                É possível sentir a hidratação na mesma hora,
                                deixando a pele muito macia e sedosa.”
                            </p>
                        </article>
                        <div
                            className="container"
                            style={{
                                marginTop: "50px",
                                borderTop: "1px solid #000",
                                paddingTop: "20px",
                            }}
                        >
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <img
                                                src={seals1}
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <h5 className="card-title text-center">
                                                Não testamos em animais
                                            </h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <img
                                                src={seals2}
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <h5 className="card-title text-center">
                                                Componentes naturais{" "}
                                            </h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <img
                                                src={seals3}
                                                className="card-img-top"
                                                alt="..."
                                            />
                                            <h5 className="card-title text-center">
                                                Pesquisa e Inteligência
                                                Artificial
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="blog-footer">
                <p>
                    Blog template built for{" "}
                    <a href="https://getbootstrap.com/">Bootstrap</a> by{" "}
                    <a href="https://twitter.com/mdo">@mdo</a>.
                </p>
                <p>
                    <a href="#">Back to top</a>
                </p>
            </footer>
        </body>
    );
}

export default Products;
/*<Container>
            <Header>
                <LogoImg src={logo} />
            </Header>
            <InnerContainer>
                <Title> Hidratação </Title>
                <SubTitle>Klaviê Clinical - Loção Hidratante</SubTitle>
                <Carousell />
            </InnerContainer>
        </Container> */
