// apiCabins.js
import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("Cabins").select("*");

  if (error) {
    console.error(error);
    throw error;
  }

  return data;
}

export async function insertCabins(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  const { data, error } = await supabase.from('Cabins').insert([{ ...newCabin } , image: imageName]).select();

  // https://tlkyzpirifkgkmylfzwd.supabase.co/storage/v1/object/public/cabins-img/cabin-002.jpg

  if (error) {
    console.error(error);
    throw error;
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