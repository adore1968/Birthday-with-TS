import { Birthday } from "../shared/types";

type Props = {
  value: Birthday;
};

function BirthdayItem({ value }: Props) {
  return (
    <div className="mb-10 flex items-center gap-3 last-of-type:mb-5">
      <img
        src={value.image}
        alt={value.name}
        className="h-[65px] w-16 rounded-full object-cover"
      />
      <div>
        <h4 className="text-lg sm:text-xl">{value.name}</h4>
        <p className="text-base sm:text-lg">{value.age}</p>
      </div>
    </div>
  );
}

export default BirthdayItem;
