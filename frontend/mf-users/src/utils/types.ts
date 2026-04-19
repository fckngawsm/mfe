import { User } from "@mf/shared";

export interface IUserApi {
  getUserInfo(): Promise<User>;
  setUserInfo: ({ name, about }: { name: string; about: string }) => void;
  setUserAvatar: (avatar: string) => void;
  addCard: ({ name, link }: { name: string; link: string }) => void;
}
