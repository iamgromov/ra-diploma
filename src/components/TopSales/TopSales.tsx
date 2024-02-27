import { Preloader } from "../share/Preloader/Preloader";
import { useGetTopSalesQuery } from "../../store/slicers/getProducts";
import { Item } from "../Item/Item";
import { ErrorLoad } from "../ErrorLoad/ErrorLoad";

export const TopSales: React.FunctionComponent = () => {
  const { data, isLoading, error, refetch } = useGetTopSalesQuery();
  if (error) {
    if ("error" in error) {
      return (
        <section className="top-sales">
          <h2 className="text-center">Хиты продаж!</h2>
          <ErrorLoad error={error.error} updateFetch={() => refetch()} />
        </section>
      );
    }
  }
  
  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="row">
          {data?.map((el): React.ReactElement => {
            return <Item key={el.id} props={el} />;
          })}
        </div>
      )}
    </section>
  );
};
