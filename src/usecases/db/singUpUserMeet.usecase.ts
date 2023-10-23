import { supabase } from "../../../supabaseConfig";

export const singUpUserMeet = async (
  user: string,
  imageUrl: string,
  meetId: number
) => {
  await supabase
    .from("meets_users")
    .insert([
      {
        user_id: user,
        meet_id: meetId,
        user_profile_img: imageUrl,
      },
    ])
    .select();
};
