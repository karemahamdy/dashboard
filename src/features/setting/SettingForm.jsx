// import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
// import { updateSetting } from '@/services/apiSettings';
import { useSettings }  from './useSetting'
// import toast from 'react-hot-toast';


export default function SettingForm() {

  const {
    Settings: {
      minbooking,
      maxbooking,
      maxguests,
      breakfastCost,
    } = {},
  } = useSettings();
  const { Settings } = useSettings()
  console.log("Settings data:", Settings);
  // const queryClient = useQueryClient();
  // const { mutate: useUpdateSetting } = useMutation({
  //   mutationFn: updateSetting,
  //   onSuccess: () => {
  //     toast.success("Cabin successfully deleted");
  //     queryClient.invalidateQueries({
  //       queryKey: ["settings"],
  //     });
  //   },
  //   onError: () => {
  //     (err) => toast.err(err.message);
  //   },

  // });

  return (
    <>
    <div className="bg-white  rounded-md p-6">
        <form>
      
          <div className=" mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <Label htmlFor="maxbooking" className="sm:basis-40 ">Max Booking/nights</Label>
            <Input     
            id="maxbooking"
              type="name"
              defaultValue={maxbooking}
            />  
         </div>

          <div className=" mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <Label htmlFor="minbooking" className="sm:basis-40">Min Booking/nights</Label>
            <Input
        
              id="minbooking"
              type="name"
              defaultValue={minbooking}
            />
          </div>

          <div className=" mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <Label htmlFor="maxbooking" className="sm:basis-40">Max guests/booking</Label>
            <Input
            
              id="maxbooking"
              type="name"
              defaultValue={maxguests}
            />
          </div>

          <div className=" mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <Label htmlFor="breakfast-price" className="sm:basis-40">Breakfast Price</Label>
            <Input
            
              id="breakfast-price"
              type="number"
              defaultValue={breakfastCost}
            />
          </div>


      </form>
    </div>
    </>
  )
}
