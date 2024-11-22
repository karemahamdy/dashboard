import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ Bookings, confirmedStays, numDays, cabinCount }) {
  // 1. Total number of bookings
  const numBookings = Bookings.length;

  // 2. Total sales
  const sales = Bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // 3. Total check-ins
  const checkins = confirmedStays.length;

  // 4. Occupancy rate
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <div className="flex justify-around items-center text-center gap-6">
      <Stat
        title="Bookings"
        color="gray"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="yellow"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check-ins"
        color="green"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy Rate"
        color="red"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </div>
  );
}

export default Stats;
