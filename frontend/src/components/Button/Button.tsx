import styles from './style.module.scss'

type TypeButton = {
  title: string,
  onClick: () => void
}

const Button = ({ title, onClick }: TypeButton) => (
  <button
    className={styles.button}
    type="submit"
    onClick={onClick}
  >
    {title}
  </button>
);

export default Button;
