import { supabase } from "../../../supabaseConfig";

export const logOutUserMeet = async (user: string, meetId: number) => {
  const raponse = await supabase
    .from("meets_users")
    .delete()
    .eq("user_id", user)
    .eq("meet_id", meetId);

  console.log(raponse);
};
