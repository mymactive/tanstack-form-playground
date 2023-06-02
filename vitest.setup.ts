import matchers from "@testing-library/jest-dom/matchers";
import { afterEach, expect } from "vitest";
import { cleanup } from "@testing-library/react";

// FIXME: Jestではtesting-libraryではテスト実行後のcleanupが自動で行われる。vitest, happy-dom環境が原因なのかcleanupが行われていないので暫定的に処理を追加する
afterEach(() => cleanup());

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
expect.extend(matchers);
