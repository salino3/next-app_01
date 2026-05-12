export interface User {
  id: number | null;
  name: string;
  email: string;
  password?: string;
}

export interface useUserStore {
  user: User;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const initialUserData: User = {
  id: null,
  name: "",
  email: "",
  password: "",
};
