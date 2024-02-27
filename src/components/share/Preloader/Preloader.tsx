import styles from "./preloader.module.css";

export const Preloader: React.FunctionComponent = () => {
  return (
    <div className={styles.preloader}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
