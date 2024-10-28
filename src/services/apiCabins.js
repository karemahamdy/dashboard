import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("Cabins").select("*");
  
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}


export async function insertCabins(newCabin) {
  const { data, error } = await supabase
    .from('Cabins')
    .insert([
      newCabin])
    .select()
  
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;

}
export async function deleteCabins(id) {
  const {  error } = await supabase
    .from('Cabins')
    .delete()
    .eq('id', id)
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted")
  }
}