import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';


export default function SettingForm() {

  return (
    <>
    <div className="bg-white  rounded-md p-6">
        <form>
      
          <div className=" mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <Label htmlFor="maxbooking" className="sm:basis-40 ">Max Booking/nights</Label>
            <Input
        
            id="maxbooking"
            type="name"/>  
         </div>

          <div className=" mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <Label htmlFor="minbooking" className="sm:basis-40">Min Booking/nights</Label>
            <Input
        
              id="minbooking"
              type="name" />
          </div>

          <div className=" mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <Label htmlFor="maxbooking" className="sm:basis-40">Max guests/booking</Label>
            <Input
            
              id="maxbooking"
              type="name" />
          </div>

          <div className=" mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <Label htmlFor="breakfast-price" className="sm:basis-40">Breakfast Price</Label>
            <Input
            
              id="breakfast-price"
              type="number" />
          </div>


      </form>
    </div>
    </>
  )
}
