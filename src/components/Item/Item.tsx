import { Link } from "react-router-dom";

export interface ICard {
  category: number;
  id: number;
  images: string[];
  price: number;
  title: string;
}

export const Item: React.FunctionComponent<{ props: ICard }> = ({ props }) => {
  return (
    <div className="col-4">
      <div className="card">
        <img
          src={props.images[0]}
          className="card-img-top img-fluid"
          alt={props.title}
        />
        <div className="card-body">
          <p className="card-text">{props.title}</p>
          <p className="card-text">{props.price}</p>
          <Link to={`/catalog/${props.id}`} className="btn btn-outline-primary">
            Заказать
          </Link>
        </div>
      </div>
    </div>
  );
};
