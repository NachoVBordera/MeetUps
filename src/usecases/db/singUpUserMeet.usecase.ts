//const { data, error } = await supabase
// .from('meets_users')
// .insert([
//   { some_column: 'someValue', other_column: 'otherValue' },
// ])
// .select()

import { supabase } from "../../../supabaseConfig";

export const singUpUserMeet = async (user: string, meetId: number) => {
  const { data, error } = await supabase
    .from("meets_users")
    .insert([
      {
        user_id: user,
        meet_id: meetId,
      },
    ])
    .select();
  console.log({ data }, { error });
};
