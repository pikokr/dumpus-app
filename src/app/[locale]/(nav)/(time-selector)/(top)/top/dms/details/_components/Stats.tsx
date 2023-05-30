import StatCard from "~/components/data/StatCard";

const DATA = [
  {
    value: "45k",
    label: "total messages sent",
  },
  {
    value: "5 PM",
    label: "top chat hour",
  },
  {
    value: "1M",
    label: "reactions added",
  },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-2 px-2 py-4 desktop-container sm:py-8">
      {DATA.map((stat, i) => (
        <StatCard key={i} {...stat} />
      ))}
    </div>
  );
}