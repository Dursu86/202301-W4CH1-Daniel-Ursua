import { Button } from "./button";
import { render, screen } from "@testing-library/react";

test("renders learn react link", () => {
  render(<Button />);
  const linkElement = screen.getByText("0 gentlemen pointing at you");
  expect(linkElement).toBeInTheDocument();
});
