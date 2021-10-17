import { Link } from "react-router-dom";

interface CardType {
    title: string;
    description?: string;
    img: string;
}

export const Card: React.FC<CardType> = (props) => {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <Link to="/Products">
                <img
                    className="bd-placeholder-img card-img-top"
                    width="95%"
                    height="225"
                    src={props.img}
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    style={{objectFit: "cover"}}
                />
                </Link>
                <div className="card-body">
                    <h4>
                       {props.title}
                        <span className="badge badge-secondary">New</span>
                    </h4>
                    <p className="card-text">
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    );
};
