import { expect, test } from "vitest"

export const waitFor = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms || 0))
}

test("basic", () => {
  const input = {
    foo: "hello",
    bar: "world",
  }

  const output = JSON.stringify(input)

  expect(output).eq('{"foo":"hello","bar":"world"}')
})

test("basic2", () => {
  const input = {
    foo: "hello",
    bar: "world",
  }

  const output = JSON.stringify(input)

  expect(output).eq('{"foo":"hello","bar":"world"}')
})

test("async test", async () => {
  const input = {
    foo: "hello",
    bar: "world",
  }

  waitFor(2000)

  const output = JSON.stringify(input)

  expect(output).eq('{"foo":"hello","bar":"world"}')
})
