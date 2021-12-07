// Type
type TypeButton = {
    title: string,
    onClick: () => void
}

const Button = ({ title, onClick }: TypeButton) => (
  <input
    className="Button"
    type="submit"
    onClick={onClick}
    value={title}
  />
);

export default Button;
