"use client";

export default function ActivityTile() {
  const bars = [50, 80, 60, 95, 70, 88, 65];

  return (
    <div className="bg-[#15151d] rounded-3xl p-6 border border-zinc-800">
      <h2 className="text-2xl font-bold mb-6">
        Activity
      </h2>

      <div className="flex items-end gap-4 h-40">
        {bars.map((bar, index) => (
          <div
            key={index}
            className="bg-violet-500 rounded-xl w-10 transition-all duration-700"
            style={{
              height: `${bar}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}