declare module "host/CurrentUserContext" {
  // Описываем структуру пользователя (Domain Model)
  interface User {
    _id: number;
    name: string;
    about: string;
    avatar: string;
    email: string;
    password: string;
  }

  // Хук возвращает объект с полем user
  export const useUser: () => { user: User };

  // Если вы экспортируете сам контекст по дефолту, оставьте это:
  const CurrentUserContext: React.Context<User>;
  export default CurrentUserContext;
}

declare module "host/types/Card" {}
