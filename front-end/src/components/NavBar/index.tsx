import { LogoImg } from "./styles";
import logo from "assets/images/logo.png";


export const NavBar = () => {
    return (
        <header>
            <div
                className="navbar navbar-dark  shadow-sm"
                style={{ backgroundColor: "#ea4335" }}
            >
                <div className="container">
                    <LogoImg src={logo} />

                    <button
                        className="navbar-toggler .bg-dark"
                        type="button"
                        data-bs-toggle="collapse"
                    >
                        <span className="navbar-toggler-icon "></span>
                    </button>
                </div>
            </div>
        </header>
    );
}

