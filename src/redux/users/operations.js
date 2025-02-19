import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../utils/supabase/supabase-client";

export const registration = createAsyncThunk(
  "auth/registration",
  async ({ name, email, password }, thunkAPI) => {
    try {
      const { data: userData, error: userError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (userError) {
        console.log("Error:", userError);
        return thunkAPI.rejectWithValue(
          userError.message || "Помилка реєстрації"
        );
      }

      if (!userData || !userData.user) {
        return thunkAPI.rejectWithValue(
          "Реєстрація не вдалася, користувач не створений"
        );
      }

      const { data: profileData, error: profileError } = await supabase
        .from("profile")
        .insert({ name: name, user_id: userData.user.id })
        .select();

      if (profileError) {
        console.log("Помилка створення профілю:", profileError.message);
        return thunkAPI.rejectWithValue("Не вдалося створити профіль");
      }

      console.log("User", { userData: userData, profileData: profileData });
      return { userData: userData, profileData: profileData };
    } catch (error) {
      console.log("Непередбачена помилка:", error.message);
      return thunkAPI.rejectWithValue(error.message || "Невідома помилка");
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const { data: userData, error: userError } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (userError) {
        console.log("Error:", userError);
        return thunkAPI.rejectWithValue(userError.message || "Помилка логіну");
      }

      if (!userData || !userData.user) {
        return thunkAPI.rejectWithValue("Користувача немає в базі");
      }

      const { data: profileData, error: profileError } = await supabase
        .from("profile")
        .select("*")
        .eq("user_id", userData.user.id);

      if (profileError) {
        console.log("Помилка отримання профілю:", profileError.message);
        return thunkAPI.rejectWithValue("Не вдалося отримати профіль");
      }

      console.log("user", { userData: userData, profileData: profileData });
      return { userData: userData, profileData: profileData };
    } catch (error) {
      console.log("error:", error);
      return thunkAPI.rejectWithValue(error.message || "Невідома помилка");
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await supabase.auth.signOut();
  } catch (error) {
    console.log("err:", error);
    return thunkAPI.rejectWithValue(error.message);
  }
});
