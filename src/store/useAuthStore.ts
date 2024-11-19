import { create } from 'zustand';

interface User {
  id: number;
  ownerName: string;
  ownerEmail: string;
  ownerPassword: string;
  ownerPhoneNumber: string;
  ownerAddress: string;
}

interface AuthStore {
  loggedInUser: User | null;
  isLoggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  loggedInUser: null,
  isLoggedIn: false,
  login: (user) => {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    set({ loggedInUser: user, isLoggedIn: true });
  },
  logout: () => {
    localStorage.removeItem('loggedInUser');
    set({ loggedInUser: null, isLoggedIn: false });
  },
}));
