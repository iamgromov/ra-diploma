import { useNavigate } from "react-router-dom";

import "./error.styles.css";

export interface IErrorProps {
  error: string;
}

export const ErrorOrder: React.FunctionComponent<IErrorProps> = ({
  error,
}: IErrorProps) => {
  const navigate = useNavigate();
  const closeError = () => {
    navigate(-1);
  };
  
  return (
    <div className="error_container">
      <div className="error_content">
        <h2>OOps! some error happend</h2>
        <p className="error_text">{error}</p>
      </div>
      <button type="button" className="error_button" onClick={closeError}>
        Закрыть
      </button>
    </div>
  );
};
