export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0b0b0f] p-6">
      <div className="animate-pulse grid grid-cols-1 md:grid-cols-3 gap-5">

        <div className="h-40 rounded-3xl bg-zinc-800 md:col-span-2" />

        <div className="h-40 rounded-3xl bg-zinc-800" />

        <div className="h-56 rounded-3xl bg-zinc-800" />

        <div className="h-56 rounded-3xl bg-zinc-800" />

        <div className="h-56 rounded-3xl bg-zinc-800" />
      </div>
    </main>
  );
}