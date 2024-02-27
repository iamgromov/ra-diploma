import "./errorLoad.styles.css";

interface IErrorLoad {
  error: string;
  updateFetch: VoidFunction;
}

export const ErrorLoad: React.FunctionComponent<IErrorLoad> = ({
  error,
  updateFetch,
}: IErrorLoad) => {
  return (
    <div className="error-load_container nav justify-content-center">
      <div className="error-load_content">
        <p className="error-load_text">{error}</p>
      </div>
      <button type="button" className="error_button" onClick={updateFetch}>
        Попробовать еще раз
      </button>
    </div>
  );
};
