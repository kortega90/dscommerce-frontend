import { requestBackend } from "../utils/request";
import * as authService from './auth-service'

export function findMe() {

  const headers = {
    Authorization: "Bearer "+ authService.getAccessToken()
  }
  return requestBackend({ url:`/users/me`, headers })
}
