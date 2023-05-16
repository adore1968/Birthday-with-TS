import { useAppContext } from "../hooks/AppContext";
import BirthdayItem from "./BirthdayItem";

function BirthdayList() {
  const { birthdays, setBirthdays } = useAppContext();
  return (
    <div className="min-w-fit max-w-sm flex-auto rounded bg-white p-5">
      <div>
        <h1 className="mb-5 text-2xl sm:text-3xl">
          {birthdays.length} birthdays today
        </h1>
        {birthdays.map((value) => (
          <BirthdayItem key={value.id} value={value} />
        ))}
        <button
          onClick={() => setBirthdays([])}
          className="w-full rounded bg-red-500 p-2 text-lg text-white transition-colors hover:bg-red-600 sm:text-xl"
        >
          Clear All
        </button>
      </div>
    </div>
  );
}

export default BirthdayList;
