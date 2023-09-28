import { supabase } from "../../../supabaseConfig";
import { Meet } from "../../types/meet";

export const inserMeet = async (meet: Meet) => {
  const { data, error } = await supabase
    .from("meets")
    .insert([
      {
        title: meet.title,
        subject: meet.subject,
        date: meet.date,
        description: meet.description,
        signedup_users: [],
        user_id: meet.user_id,
        ubication: meet.ubication,
        photo: "",
      },
    ])
    .select();

  return { data, error };
};
