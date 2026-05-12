export interface User {
  id: number | null;
  name: string;
  email: string;
  password?: string;
}

export interface useUserStore {
  user: User;
  setUser: (user: Partial<useUserStore>) => void;
  clearUser: () => void;
}
