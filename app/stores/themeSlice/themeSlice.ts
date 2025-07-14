import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { applyThemeConfig } from "@/app/utils/applyThemeConfig";
type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
}

const initialState: ThemeState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme);
      applyThemeConfig(state.theme);
      document.documentElement.classList.toggle("dark", state.theme === "dark");
    },
    setTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
      localStorage.setItem("theme", state.theme);
      applyThemeConfig(state.theme);
      document.documentElement.classList.toggle("dark", state.theme === "dark");
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme.theme;
export default themeSlice.reducer;
