
import { useTodayActivity } from "./useTodayActivity";

import TodayItem from "./TodayItem";
import Loader from "../../ui/Loader";

function TodayActivity() {
  const { activities, isLoading } = useTodayActivity();

  return (
    <div className="bg-grey-0 border border-grey-100 rounded-md p-8 flex flex-col gap-6 grid-column-1 span-2 pt-6">
      <span type="horizontal">
        <h4>Today</h4>
      </span>

      {!isLoading ? (
        activities?.length > 0 ? (
          <ul className="overflow-y-auto overflow-x-hidden">
            {activities.map((activity) => (
              <TodayItem activity={activity} key={activity.id} />
            ))}
          </ul>
        ) : (
          <p className="text-center text-xl font-medium mt-2">No activity today...</p>
        )
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default TodayActivity;
