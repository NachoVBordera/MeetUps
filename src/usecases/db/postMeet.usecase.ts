import { supabase } from "../../../supabaseConfig";
import { CreatedMeet } from "../../types/meet";

export const inserMeet = async (meet: CreatedMeet) => {
  const { data, error } = await supabase.from("meets").insert([meet]).select();

  return { data, error };
};

export const uploadImage = async (path: string, file: File) => {
  const { error: uploadError } = await supabase.storage
    .from("meetsImages")
    .upload(path, file);
  console.log("data", uploadError);
};
