import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addItem } from "../../store/slicers/cartSlice";
import { useGetItemByIdQuery } from "../../store/slicers/getProducts";
import { Preloader } from "../share/Preloader/Preloader";
import { ErrorLoad } from "../ErrorLoad/ErrorLoad";

type Tsize = {
  size: string;
  available: boolean;
};

export const ProductCard: React.FunctionComponent = () => {
  const { id } = useParams();
  const [sizesAvailable, setSizesAvailable] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [chosenSize, setChosenSize] = useState("");
  const [isSelected, setSelected] = useState(false);
  const { data, isLoading, error, refetch } = useGetItemByIdQuery(id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  const increaseQuantity = () =>
    setQuantity((prev) => (prev < 10 ? prev + 1 : prev));

  const addToCart = (): void => {
    dispatch(
      addItem({
        id: data.id,
        title: data.title,
        size: chosenSize,
        quantity: quantity,
        price: data.price,
        sku: data.sku,
      })
    );
    navigate("/cart");
  };
  const selectSize = (size: string) => {
    setSelected((prev) => !prev);
    if (isSelected) {
      return setChosenSize("");
    }
    setChosenSize(size);
  };
  useEffect(() => {
    if (data) {
      setSizesAvailable(
        data.sizes.filter((el: Tsize) => el.available === true)
      );
    }
  }, [data]);

  if (error) {
    if ("error" in error) {
      return <ErrorLoad error={error.error} updateFetch={() => refetch()} />;
    }
  }
  
  return isLoading ? (
    <Preloader />
  ) : (
    <section className="catalog-item">
      <h2 className="text-center">{data.title}</h2>
      <div className="row">
        <div className="col-5">
          <img src={data.images[0]} className="img-fluid" alt="" />
        </div>
        <div className="col-7">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Артикул</td>
                <td>{data.sku}</td>
              </tr>
              <tr>
                <td>Производитель</td>
                <td>{data.manufacturer}</td>
              </tr>
              <tr>
                <td>Цвет</td>
                <td>{data.color}</td>
              </tr>
              <tr>
                <td>Материалы</td>
                <td>{data.material}</td>
              </tr>
              <tr>
                <td>Сезон</td>
                <td>{data.season}</td>
              </tr>
              <tr>
                <td>Повод</td>
                <td>{data.reason}</td>
              </tr>
            </tbody>
          </table>
          <div className="text-center">
            <p>
              Размеры в наличии:
              {sizesAvailable.map((el: Tsize) => {
                return (
                  <span
                    className={`catalog-item-size ${isSelected ? "selected" : ""}`}
                    key={el.size}
                    onClick={() => selectSize(el.size)}
                  >
                    {el.size}
                  </span>
                );
              })}
            </p>
            {sizesAvailable.length < 1 ? (
              <></>
            ) : (
              <p>
                Количество:
                <span className="btn-group btn-group-sm pl-2">
                  <button
                    className="btn btn-secondary"
                    onClick={decreaseQuantity}
                  >
                    -
                  </button>
                  <span className="btn btn-outline-primary">{quantity}</span>
                  <button
                    className="btn btn-secondary"
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </span>
              </p>
            )}
          </div>
          {sizesAvailable.length < 1 ? (
            <></>
          ) : (
            <button
              className="btn btn-danger btn-block btn-lg"
              onClick={addToCart}
              disabled={chosenSize ? false : true}
            >
              В корзину
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
