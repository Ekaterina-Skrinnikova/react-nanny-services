import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../supabase/supabase-client";

export const getNannies = createAsyncThunk(
  "nannies/getNannies",
  async ({ option, page, perPage }, thunkAPI) => {
    try {
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

      const { data: nanniesData, error: nanniesError } = await query.range(
        from,
        to
      );

      if (nanniesError) {
        console.log("Помилка при отриманні даних", error);
        return thunkAPI.rejectWithValue("Помилка при отриманні даних");
      }

      const { data: countData, error } = await supabase
        .from("babysitters")
        .select("id", { count: "exact" });

      // console.log("Няни:", { nanniesData, countData: countData.length });

      return { nanniesData, countData: countData.length };
    } catch (error) {
      console.log("Помилка запиту:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
