import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options[0]?.value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex gap-2 p-2 border border-grey-100 bg-grey-0 rounded-sm shadow-sm">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => handleClick(option.value)}
          disabled={option.value === currentFilter}
          className={`px-3 py-2 text-sm font-medium transition rounded-sm ${option.value === currentFilter
              ? "bg-brand-600 text-brand-50"
              : "bg-grey-0 hover:bg-brand-600 hover:text-brand-50"
            }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
