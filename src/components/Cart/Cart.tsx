import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { RootState } from "../../store/store";
import { deleteItem } from "../../store/slicers/cartSlice";

export const Cart: React.FunctionComponent = () => {
  const cart = useSelector((state: RootState) => state.cartState);
  const dispatch = useDispatch();

  const deleteProduct = (article: number) => {
    dispatch(deleteItem(article));
  };

  return (
    <section className="cart">
      <h2 className="text-center">Корзина</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Название</th>
            <th scope="col">Размер</th>
            <th scope="col">Кол-во</th>
            <th scope="col">Стоимость</th>
            <th scope="col">Итого</th>
            <th scope="col">Действия</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((el, index) => {
            return (
              <tr key={index}>
                <td scope="row">{index + 1}</td>
                <td>
                  <Link to={`/products/${el.id}`}>{el.title}</Link>
                </td>
                <td>{el.size}</td>
                <td>{el.quantity}</td>
                <td>{el.price}</td>
                <td>{el.quantity * el.price}</td>
                <td>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => deleteProduct(el.sku)}
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={5} className="text-right">
              Общая стоимость
            </td>
            <td>
              {cart.reduce((acc, el) => {
                acc += el.quantity * el.price;
                return acc;
              }, 0)}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
