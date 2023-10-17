import { supabase } from "../../../supabaseConfig";
import { Meet } from "../../types/meet";
import { getCurrentDate } from "../../utils/getCurrentDate";

export const getMeetsCity = async (ubication: string): Promise<Meet[]> => {
  try {
    let { data: meets } = await supabase
      .from("meets")
      .select("*,meets_users(id, user_id)")
      .ilike("ubication", `%${ubication}%`)
      .gte("date", getCurrentDate()); // Filtra por reuniones con fecha menor o igual a la actual

    if (meets && Array.isArray(meets)) {
      const formatedMeets = meets.map((meet) => {
        return {
          ...meet,
          photo: meet.photo
            ? import.meta.env.VITE_REACT_APP_IMAGE_BASE_URL + meet.photo
            : import.meta.env.VITE_REACT_APP_DEFAULT_PHOTO,
        };
      });

      return formatedMeets as Meet[];
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};
