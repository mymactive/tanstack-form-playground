import {
  RenderOptions as OriginalRenderOptions,
  render,
} from "@testing-library/react";
import { ReactElement } from "react";
import userEvent from "@testing-library/user-event";

type UserEventOptions = Parameters<typeof userEvent.setup>[0];
type RenderOptions = Omit<OriginalRenderOptions, "wrapper">;

// NOTE: See https://testing-library.com/docs/user-event/intro/#writing-tests-with-userevent
/**
 * This function sets up a user event and renders a UI component.
 *
 * @example
 * ```typescript
 * import { setup, screen } from "@/lib/testing-library";
 *
 * test("Click a button", async () => {
 *   const { user } = setup(<Button>Submit</Button>);
 *   const button = screen.getByRole("button", { name: "Submit" });
 *   await user.click(button);
 * });
 * ```
 *
 * @param {ReactElement} ui - The UI component to be rendered.
 * @param {Object} [options] - Optional parameters for the setup.
 * @param {RenderOptions} [options.uiOptions] - Options for rendering the UI component.
 * @param {UserEventOptions} [options.userEventOptions] - Options for setting up the user event.
 * @returns {Object} An object containing the setup user event.
 *
 */
const setup = (
  ui: ReactElement,
  options?: {
    uiOptions?: RenderOptions;
    userEventOptions?: UserEventOptions;
  }
) => {
  const user = userEvent.setup(options?.userEventOptions);
  render(ui, { ...options?.uiOptions });

  return { user };
};

export type * from "@testing-library/react";
export {
  screen,
  renderHook,
  act,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";

export type * from "@testing-library/user-event";
export { setup };
