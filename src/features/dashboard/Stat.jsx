function Stat({ icon, title, value, color }) {
  const bgColor = `bg-${color}-100`;
  const iconColor = `text-${color}-700`;

  return (
    <div className="bg-white  border border-grey-100 rounded-md p-4 grid grid-cols-[6.4rem_1fr] grid-rows-[auto_auto] gap-x-4 gap-y-1">
      {/* Icon */}
      <div
        className={`row-span-2 aspect-square rounded-full flex items-center justify-center ${bgColor}`}
      >
        <div className={`w-8 h-8 text-4xl ${iconColor}`}>{icon}</div>
      </div>

      {/* Title */}
      <h5 className="self-end text-xl font-semibold uppercase tracking-wide text-grey-500">
        {title}
      </h5>

      {/* Value */}
      <p className="text-xl font-medium leading-none">{value}</p>
    </div>
  );
}

export default Stat;
