
import './style.scss'; // eslint-disable-line
// Type
type TypeButton = {
  title: string,
  onClick: () => void
}

const Button = ({ title, onClick }: TypeButton) => (
  <button
    className="Button"
    type="submit"
    onClick={onClick}
  >
    {title}
  </button>
);

export default Button;
