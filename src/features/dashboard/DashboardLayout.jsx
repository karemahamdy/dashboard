import { useRecentStays } from "./useRecentStays";
import { useRecentBookings } from "./useRecentBookings";
import Loader from "../../ui/Loader";
import Stats from "./Stats";
import { useCabins } from "../cabin/UseCabins";
// import SalesChart from "./SalesChart";
// import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";
import SalesChart from "./SalesChart";

function DashboardLayout() {
  const { Bookings, isLoading: isLoading1 } = useRecentBookings();
  const { confirmedStays, isLoading: isLoading2, numDays } = useRecentStays();
  const { Cabins, isLoading: isLoading3 } = useCabins();

  if (isLoading1 || isLoading2 || isLoading3) return <Loader />;

  return (
    <div className="grid gap-6">
      <Stats
        Bookings={Bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={Cabins.length}
      />
      <TodayActivity />
      {/* <DurationChart confirmedStays={confirmedStays} />*/}
      <SalesChart bookings={Bookings} numDays={numDays} /> 
    </div>
  );
}

export default DashboardLayout;
