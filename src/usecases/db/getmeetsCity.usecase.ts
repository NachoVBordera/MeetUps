import { supabase } from "../../../supabaseConfig";
import { Meet } from "../../types/meet";

export const getmeetsCity = async (ubication: string): Promise<Meet[]> => {
  try {
    let { data: meets } = await supabase
      .from("meets")
      .select("*")
      .ilike("ubication", `%${ubication}%`);
    console.log(meets);
    if (meets && Array.isArray(meets)) {
      return meets as Meet[];
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};
