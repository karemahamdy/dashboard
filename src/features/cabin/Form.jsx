import { useForm } from "react-hook-form";
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from "../../components/ui/textarea"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { insertCabins } from "../../services/apiCabins";


export default function Form() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;
  
  
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: insertCabins,
    onSuccess: () => {
      toast.success("Cabin added successfully");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
      console.error("Error inserting data:", err);
    },
  });

  const onSubmit = async (data) => {
    console.log("Data being sent:", data);
    mutate({ ...data });
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 py-3">

      {/* Name */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          {...register("name", { required: "Name is required" })}
          placeholder="Enter product name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      {/* Max Capacity */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="maxCapacity">Max Capacity</Label>
        <Input
          id="maxCapacity"
          type="number"
        
          {...register("maxCapacity", {
            required: "Max capacity is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            }
          } )}
          placeholder="Enter max capacity"
        />
        {errors.maxCapacity && <p className="text-red-500">{errors.maxCapacity.message}</p>}
      </div>

      {/* Description */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          {...register("description", {
            required: "This field is required"
          }
  )}
          placeholder="Enter product description"
        />
      </div>

      {/* Discount */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="discount">discount</Label>
        <Input
          id="discount"
          type="number"
          step="1"
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().price ||
              "discount should be less than regular price",
          })}

          placeholder="Enter discount"
        />
        {errors.discount && <p className="text-red-500">{errors?.discount?.message}</p>}
      </div>


      {/* Price */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="price">Price</Label>
        <Input
          id="price"
          type="number"
          {...register("price", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Price should be at least 1",
            },
          })}

          placeholder="Enter price (optional)"
        />
        {errors.price && <p className="text-red-500">{errors?.price?.message}</p>}
      </div>

      {/* Image */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="image">Image URL</Label>
        <Input
          id="image"
          type="url"
          {...register("image", { required: "Image URL is required" })}
          placeholder="Enter image URL"
        />
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}
      </div>

      <div className="flex justify-end gap-2">
        <button className="bg-gray-900 hover:bg-black text-white px-4 py-2 rounded-lg" type="button"
          onClick={() => reset()}>cancel</button>
      <button className="bg-gray-900 hover:bg-black text-white px-4 py-2 rounded-lg">submit</button>
      </div>
    </form>
  );
};