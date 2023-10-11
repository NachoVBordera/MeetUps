import { supabase } from "../../../supabaseConfig";
import { CreatedMeet } from "../../types/meet";

export const editmeet = async (id: string, meet: CreatedMeet) => {
  const { data, error } = await supabase
    .from("meets")
    .update({
      title: meet.title,
      photo: meet.photo,
      description: meet.description,
      subject: meet.subject,
      ubication: meet.ubication,
    })
    .eq("id", id)
    .select();

  return { data, error };
};

export const updateImage = async (path: string, file: File) => {
  await supabase.storage.from("meetsImages").upload(path, file);
};
