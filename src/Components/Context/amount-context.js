import { createContext } from "react";

const AmountContext = createContext({
  amount: {},
  dispatchAmount: () => {}
});

export default AmountContext;
