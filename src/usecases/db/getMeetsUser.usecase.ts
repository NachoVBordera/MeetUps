import { supabase } from "../../../supabaseConfig";
import { Meet } from "../../types/meet";

export const getMeetUser = async (user: string): Promise<Meet[]> => {
  try {
    let { data: meets } = await supabase
      .from("meets")
      .select("*,meets_users(id, user_id) ")
      .ilike("user_id", `%${user}%`);

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
