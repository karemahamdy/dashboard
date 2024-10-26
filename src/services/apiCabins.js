import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("Cabins").select("*");
  console.log(data)
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function deleteCabins(id) {
  const { data, error } = await supabase
    .from('Cabins')
    .delete()
    .eq('id', id)
  console.log(data)
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted")
  }
}