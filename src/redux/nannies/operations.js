import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../supabase/supabase-client";

export const getNannies = createAsyncThunk(
  "nannies/getNannies",
  async ({ option, page, perPage }, thunkAPI) => {
    try {
      //   console.log(option, page, perPage);

      let query = supabase.from("babysitters").select("*");

      if (option === "A to Z") {
        query = query.order("name", { ascending: true });
      } else if (option === "Less than 10$") {
        query = query.lte("price_per_hour", 10);
      } else if (option === "Greater than 10$") {
        query = query.gt("price_per_hour", 10);
      } else if (option === "Popular") {
        query = query.gt("rating", 4);
      } else if (option === "Not Popular") {
        query = query.lte("rating", 4);
      } else if (option === "Z to A") {
        query = query.order("name", { ascending: false });
      }

      const from = (page - 1) * perPage;
      const to = from + perPage - 1;

      //   console.log("from", from, "To", to);

      const { data, error } = await query.range(from, to);

      if (error) {
        console.log("Помилка при отриманні даних", error);
        return thunkAPI.rejectWithValue("Помилка при отриманні даних");
      }

      //   console.log("Няни:", data);

      return data;
    } catch (error) {
      console.log("Помилка запиту:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
