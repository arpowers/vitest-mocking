/* eslint-disable @typescript-eslint/no-use-before-define */
import { _stop } from "@factor/api/error"
import { OAuth2Client } from "google-auth-library"

export class QueryUserGoogleAuth {
  private client?: OAuth2Client
  private clientId = process.env.GOOGLE_CLIENT_ID
  private clientSecret = process.env.GOOGLE_CLIENT_SECRET

  async getClient(): Promise<OAuth2Client> {
    if (!this.client) {
      console.log("OAuth2Client", OAuth2Client)
      this.client = new OAuth2Client({
        clientId: this.clientId,
        clientSecret: this.clientSecret,
      })
    }
    return this.client
  }

  async run(params: {
    _action: "loginWithCredential"
    credential: string
  }): Promise<any> {
    const client = await this.getClient()

    if (params._action == "loginWithCredential") {
      const { credential } = params
      const ticket = await client.verifyIdToken({
        idToken: credential,
        audience: this.clientId,
      })

      console.log({
        level: "info",
        description: "Google login",
        context: "auth",
        data: ticket,
      })
    }

    return { status: "success", data: undefined }
  }
}

export const Queries = {
  UserGoogleAuth: new QueryUserGoogleAuth(),
}
