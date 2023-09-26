import { supabase } from "../../../supabaseConfig";
import { meet } from "../../types/meet";

export const getmeetsCity = async (ubication: string): Promise<meet[]> => {
  try {
    let { data: meets } = await supabase
      .from("meets")
      .select("*")
      .ilike("ubication", `%${ubication}%`);
    console.log(meets);
    if (meets && Array.isArray(meets)) {
      return meets as meet[];
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};
