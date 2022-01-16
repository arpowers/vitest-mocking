import { assert, expect, test, vi } from "vitest";

import * as ep from "../example";

vi.mock("../example", async () => {
  console.log("START IMPORT ACTUAL");
  const actual = await vi.importActual("../example");
  console.log("END IMPORT ACTUAL");
  return actual;
});

test("someTest", async () => {
  console.warn("???", ep);
  const input = {
    foo: "hello",
    bar: "world",
  };

  const output = JSON.stringify(input);

  expect(output).eq('{"foo":"hello","bar":"world"}');
  assert.deepEqual(JSON.parse(output), input, "matches original");
});
