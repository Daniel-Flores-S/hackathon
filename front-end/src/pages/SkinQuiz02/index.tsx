import "./styles.css";

import logo from "assets/images/logo.png";
import { NavBar } from "components/NavBar";
import { Link } from "react-router-dom";

function SkinQuiz02() {
    return (
        <section className="h-100 gradient-form">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="card-body p-md-5 mx-md-4">
                                        <div className="text-center">
                                            <h3 className="mt-1 mb-5 pb-1">
                                                Qual seu tipo de pele?
                                            </h3>
                                        </div>

                                        <form>
                                            <div className="form-outline mb-4">
                                                <Link to="/home">
                                                    <button
                                                        type="button"
                                                        id="form2Example11"
                                                        className="form-control element-b"
                                                        placeholder="Phone number or email address"
                                                    >
                                                        Normal
                                                    </button>
                                                </Link>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <Link to="/home">
                                                    <button
                                                        type="button"
                                                        id="form2Example11"
                                                        className="form-control element-b"
                                                        placeholder="Phone number or email address"
                                                    >
                                                        Seca
                                                    </button>
                                                </Link>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <Link to="/home">
                                                    <button
                                                        type="button"
                                                        id="form2Example11"
                                                        className="form-control element-b"
                                                        placeholder="Phone number or email address"
                                                    >
                                                        Oleosa
                                                    </button>
                                                </Link>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <Link to="/home">
                                                    <button
                                                        type="button"
                                                        id="form2Example11"
                                                        className="form-control element-b"
                                                        placeholder="Phone number or email address"
                                                    >
                                                        Com acne
                                                    </button>
                                                </Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-flex align-items-center gradient-custom-2 text-body">
                                    <div className="text-white px-3 py-4 mx-md-4">
                                        <img
                                            src={logo}
                                            style={{ width: "300px" }}
                                        />
                                        <h4 className="mb-4 text-body">
                                            A marca TheraSkin®
                                        </h4>
                                        <p className="small mb-0 text-body">
                                            A marca TheraSkin® completa 20 anos
                                            e se consolida entre as maiores
                                            empresas de dermatologia do país,
                                            sempre trazendo inovação, definindo
                                            tendências, tecnologia e produtos de
                                            ponta.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkinQuiz02;
