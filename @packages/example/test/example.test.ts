/**
 * External dependencies.
 */
import { describe, it, vi } from "vitest"

/**
 * Internal dependencies.
 */
import { QueryUserGoogleAuth } from "../example"

vi.mock("google-auth-library", () => {
  return {
    OAuth2Client: vi.fn(() => ({
      verifyIdToken: vi.fn(() => {
        return {
          sub: "103755555555503471",
        }
      }),
    })),
  }
})

describe("Run Token", () => {
  it("token", async () => {
    const q = new QueryUserGoogleAuth()
    const action = await q.run({
      _action: "loginWithCredential",
      credential: "not-a-credential",
    })
    console.log("action", action)
  })
})
