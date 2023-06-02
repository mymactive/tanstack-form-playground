import { setup, screen } from "@/lib/testing-library";
import { HelloWorld } from ".";
import { test, expect } from "vitest";

test("renders HelloWorld component", () => {
  setup(<HelloWorld />);

  const titleElement = screen.getByRole("heading", {
    level: 1,
    name: /HelloWorld Component/i,
  });

  expect(titleElement).toBeInTheDocument();
});
