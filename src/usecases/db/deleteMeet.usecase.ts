import { supabase } from "../../../supabaseConfig";
import { toast } from "react-toastify";

export const deleteMeet = async (id: number) => {
  try {
    const { error } = await supabase
      .from("meets")
      .delete()
      .eq("id", id.toLocaleString());
    toast.success("Evento borrado correctamente");
    console.log(error);
  } catch (error) {
    console.error(error);
  }
};
