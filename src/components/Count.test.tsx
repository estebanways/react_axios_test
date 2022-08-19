
import { fireEvent, render, screen } from "../utils/test-utils";
import Count from "./Count";


test('test click plus', () => {
  render(<Count />);
  const plusButton = screen.getByTestId("plus");
  // simula un click en el boton
  fireEvent.click(plusButton);
  const count = screen.getByTestId('countId');
  expect(count.textContent).toBe('1');
});

test('test click less', () => {
  render(<Count />);
  const plusButton = screen.getByTestId("less");
  // simula un click en el boton
  fireEvent.click(plusButton);
  const count = screen.getByTestId('countId');
  expect(count.textContent).toBe('-1');
});