import { useRecentStays } from "./useRecentStays";
import { useRecentBookings } from "./useRecentBookings";
import Loader from "../../ui/Loader";
import Stats from "./Stats";
import { useCabins } from "../cabin/UseCabins";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";
import SalesChart from "./SalesChart";

function DashboardLayout() {

  const fakeStays = [
    { id: 1, numNights: 1 },
    { id: 2, numNights: 2 },
    { id: 3, numNights: 3 },
    { id: 4, numNights: 4 },
    { id: 5, numNights: 5 },
    { id: 6, numNights: 6 },
    { id: 7, numNights: 7 },
    { id: 8, numNights: 8 },
    { id: 9, numNights: 15 },
    { id: 10, numNights: 21 },
    { id: 11, numNights: 21 },
  ];


  const { Bookings, isLoading: isLoading1 } = useRecentBookings();
  const { confirmedStays, isLoading: isLoading2, numDays } = useRecentStays();
  console.log(confirmedStays)
  const { Cabins, isLoading: isLoading3 } = useCabins();

  if (isLoading1 || isLoading2 || isLoading3) return <Loader />;

  return (
    <div className="">
      <Stats
        Bookings={Bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={Cabins.length}
      />
      <TodayActivity />
      <DurationChart confirmedStays={fakeStays} />
      <SalesChart bookings={Bookings} numDays={numDays} /> 
    </div>
  );
}

export default DashboardLayout;
