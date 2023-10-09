import { supabase } from "../../../supabaseConfig";

export const getSingleMeetById = async (id: string) => {
  const { data } = await supabase
    .from("meets")
    .select("* ,meets_users(id, *) ")
    .eq("id", id);
  if (data) {
    const meet = data[0];

    return {
      ...meet,
      photo: meet.photo
        ? import.meta.env.VITE_REACT_APP_IMAGE_BASE_URL + meet.photo
        : import.meta.env.VITE_REACT_APP_DEFAULT_PHOTO,
    };
  }
  return {};
};
