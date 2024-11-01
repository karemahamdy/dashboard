// import { useMutation, useQueryClient } from '@tanstack/react-query';
import Loader from '@/ui/Loader';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
// import { updateSetting } from '@/services/apiSettings';
import { useSettings }  from './useSetting'
import { useUpdateSetting } from './useUpdateSetting';
// import toast from 'react-hot-toast';


export default function SettingForm() {

  const {
    isPending,
    Settings: {
      minbooking,
      maxbooking,
      maxguests,
      breakfastCost,
    } = {},
  } = useSettings();
  
  const { isUpdating, updateSetting } = useUpdateSetting();

  if (isPending) return <Loader />;

  function handleUpdate(e, field) {
    const { value } = e.target;

    if (!value) return;
    updateSetting({ [field]: value });
  }


  return (
    <>
    <div className="bg-white  rounded-md p-6">
        <form onSubmit={handleUpdate}>
      
          <div className=" mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <Label htmlFor="maxbooking" className="sm:basis-40 ">Max Booking/nights</Label>
            <Input     
            id="maxbooking"
              type="name"
              defaultValue={maxbooking}
              disabled={isUpdating}
              onBlur={(e) => handleUpdate(e, "maxbooking")}
            />  
         </div>

          <div className=" mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <Label htmlFor="minbooking" className="sm:basis-40">Min Booking/nights</Label>
            <Input
        
              id="minbooking"
              type="name"
              defaultValue={minbooking}
              disabled={isUpdating}
              onBlur={(e) => handleUpdate(e, "minbooking")}

            />
          </div>

          <div className=" mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <Label htmlFor="maxbooking" className="sm:basis-40">Max guests/booking</Label>
            <Input
            
              id="maxbooking"
              type="name"
              defaultValue={maxguests}
              disabled={isUpdating}
              onBlur={(e) => handleUpdate(e, "maxguests")}

            />
          </div>

          <div className=" mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <Label htmlFor="breakfast-price" className="sm:basis-40">Breakfast Price</Label>
            <Input
            
              id="breakfast-price"
              type="number"
              defaultValue={breakfastCost}
              disabled={isUpdating}
              onBlur={(e) => handleUpdate(e, "breakfastCost")}

            />
          </div>


      </form>
    </div>
    </>
  )
}
