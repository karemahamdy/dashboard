// apiCabins.js
import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("Cabins").select("*");

  if (error) {
    console.error(error);
    throw error;
  }

  return data;
}

export async function insertCabins(newCabin) {

  // create image
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabins-img/${imageName}`;
  

  // https://tlkyzpirifkgkmylfzwd.supabase.co/storage/v1/object/public/cabins-img/cabin-002.jpg


  const { data, error } = await supabase.from('Cabins').insert([{ ...newCabin, image: imagePath }]).select();
  // upload image

  const { error: storageError } = await supabase.storage
    .from("cabins-img")
    .upload(imageName, newCabin.image);

  if (storageError) {
    await supabase.from("Cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }

  if (error) {
    console.error("Database insert error:", error);
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