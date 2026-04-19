import { User } from "@mf/shared";

export interface IAuthApi {
  checkToken(token: string): Promise<User>;
  register(email: string, password: string): Promise<void>;
  login(email: string, password: string): Promise<void>;
}
