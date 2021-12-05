import ButtomComp from './Button'; // eslint-disable-line
import CartRowComp from './CartSummaryRow'; // eslint-disable-line
import InputComp from './Input'; // eslint-disable-line

// Type
type TypeCartSummary = {
    items: [],
}

type TypeCartSummaryItem = {
    quantity: number,
    price: number
}

const CartSummary = ({ items }: TypeCartSummary) => {
  // Number of pieces in a single item
  const quantityItem = items.map((item: TypeCartSummaryItem) => item.quantity);
  // Total number of pieces
  const quantityTotal = quantityItem.reduce((a, b) => a + b, 0);
  // Line item amount
  const sumItem = items.map((item: TypeCartSummaryItem) => item.quantity * item.price);
  // Total of all items
  const sumTotal = parseFloat((sumItem.reduce((a, b) => a + b, 0)).toFixed(2));

  return (
    <div className="CartSummary">
      <CartRowComp
        title="PCS"
        amount={quantityTotal}
        sum={sumTotal}
      />

      <CartRowComp
        title="Coupon:"
        sum={0}
      />

      <CartRowComp
        title="Total:"
        sum={sumTotal}
      />

      <form>
        <InputComp
          htmlFor="Email"
          type="email"
          size={23}
          title="Enter your email"
          placeholder="Email"
          ariaRequired
        />

        <InputComp
          htmlFor="Phone"
          type="tel"
          size={23}
          title="Enter your phone"
          placeholder="Phone"
          ariaRequired
        />

        <ButtomComp
          title="Buy"
          onClick={() => console.log('Buy')}
        />
      </form>
    </div>
  );
};

export default CartSummary;
