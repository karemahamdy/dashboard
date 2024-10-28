import { useForm } from "react-hook-form";
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from "../../components/ui/textarea"


export default function Form() {
  const { register, handleSubmit, formState, getValues } = useForm();
  const { errors } = formState;

  const onSubmit = data => console.log(data);

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
          {...register("description")}
          placeholder="Enter product description"
        />
      </div>

      {/* Discount */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="discount">Discount</Label>
        <Input
          id="discount"
          type="number"
          step="0.01"
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().price ||
              "Discount should be less than regular price",
          })}

          placeholder="Enter discount"
        />
        {errors.discount && <p className="text-red-500">{errors?.price?.message}</p>}
      </div>


      {/* Price */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="price">Price</Label>
        <Input
          id="price"
          type="number"
          {...register("price", {  validate: (value) =>
              value <= getValues().regularPrice ||
        "Discount should be less than regular price",
            })}

          placeholder="Enter price (optional)"
        />
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
        <button className="bg-gray-900 hover:bg-black text-white px-4 py-2 rounded-lg">cancel</button>
      <button className="bg-gray-900 hover:bg-black text-white px-4 py-2 rounded-lg">submit</button>
      </div>
    </form>
  );
};