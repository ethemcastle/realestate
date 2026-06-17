export default function Loading() {
  return (
    <div className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="h-4 w-64 animate-pulse rounded bg-slate-200" />
        <div className="mt-6 h-8 w-2/3 animate-pulse rounded bg-slate-200" />
        <div className="mt-3 h-4 w-1/3 animate-pulse rounded bg-slate-100" />

        <div className="mt-6 aspect-[16/9] animate-pulse rounded-2xl bg-slate-200" />
        <div className="mt-3 grid grid-cols-3 gap-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="aspect-[4/3] animate-pulse rounded-xl bg-slate-200"
            />
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            <div className="h-24 animate-pulse rounded-xl bg-white" />
            <div className="h-40 animate-pulse rounded-xl bg-white" />
          </div>
          <div className="h-80 animate-pulse rounded-2xl bg-white lg:col-span-1" />
        </div>
      </div>
    </div>
  );
}

