import logo from "assets/images/logo.png";
import { Card } from "components/Card";
import produt from "assets/images/shopping.webp";
import produt1 from "assets/images/klavie-clinical-locao-hidratante-190.png";
import produt2 from "assets/images/Emulgel.png";
import produt3 from "assets/images/THERACNE.png";
import { NavBar } from "components/NavBar";

import "./styles.css";
import { useEffect, useState } from "react";
import { useProdutos } from "data/hooks/useProdutos.Page";

function Home() {
    const { weather, getWeather } = useProdutos();

    useEffect(() => {
        getWeather();
    }, []);

    return (
        <>
            <body>
                <NavBar />

                <main>
                    <div className="container sec-col">
                        <div
                            className="btn-group bt-wag"
                            role="group"
                            aria-label="Basic mixed styles example"
                        >
                            <button type="button" className="btn bt-element">
                                Clareadores
                            </button>
                            <button type="button" className="btn bt-element">
                                Hidratação
                            </button>
                            <button type="button" className="btn bt-element">
                                Anti-idade
                            </button>
                        </div>
                    </div>

                    <div className="album py-5 bg-light">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                {weather.map((game) => {
                                    return (
                                        <Card
                                            title={game.nome}
                                            description={game.descricao}
                                            img={game.image}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </main>

                <footer className="text-muted py-5">
                    <div className="container">
                        <p className="float-end mb-1">
                            <a href="#">Back to top</a>
                        </p>
                    </div>
                </footer>
            </body>
        </>
    );
}

export default Home;
