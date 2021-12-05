// Type
type TypeCartRow = {
    title: string,
    amount?: number,
    sum: number
} & typeof defaultProps;

const defaultProps = {
  amount: 0,
};

const CartRow = ({ title, amount, sum }: TypeCartRow) => (
  <div className="CartRow">
    <p>
      {amount === 0 ? '' : amount}
      {' '}
      {title}
    </p>
    <p>
      $
      {sum}
    </p>
  </div>
);

CartRow.defaultProps = defaultProps;

export default CartRow;
