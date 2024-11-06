import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  user: { email: string } | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const loadUserFromLocalStorage = (): AuthState => {
  const user = localStorage.getItem('user');
  if (user) {
    return {
      isAuthenticated: true,
      user: JSON.parse(user),
    };
  }
  return initialState;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: loadUserFromLocalStorage(),
  reducers: {
    login: (state, action: PayloadAction<{ email: string; password: string }>) => {
      const { email } = action.payload;
      state.isAuthenticated = true;
      state.user = { email };

      localStorage.setItem('user', JSON.stringify(state.user));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;

      localStorage.removeItem('user');
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
