import { supabase } from "../../../supabaseConfig";
import { Meet } from "../../types/meet";

export const getmeetsCity = async (ubication: string): Promise<Meet[]> => {
  try {
    let { data: meets } = await supabase
      .from("meets")
      .select("*")
      .ilike("ubication", `%${ubication}%`);

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
