import Form from "./Form"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog"


export default function CreateCabin() {
  // const { register, handleSubmit } = useForm();
  // const onSubmit = data => console.log(data);

  return (
    <div className="overflow-auto">

    <Dialog>
      <DialogTrigger>
        <div className="bg-gray-900 hover:bg-black text-white px-2 py-2 rounded-lg">
        Add Cabins
        </div>
      </DialogTrigger>
        <DialogContent className="max-h-[95vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add Cabins </DialogTitle>
          <DialogDescription>
          <Form/>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>

    </div>

  )
}
