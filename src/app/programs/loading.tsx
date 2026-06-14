import Skeleton from "@/components/ui/Skeleton";

export default function ProgramsLoading() {
  return (
    <div className="pt-28 pb-20 sm:pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-16">
          <Skeleton className="h-10 sm:h-12 w-72 mx-auto mb-4" />
          <Skeleton className="h-5 w-[500px] max-w-full mx-auto" />
        </div>

        <div className="space-y-8 sm:space-y-10">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-xl border border-slate-200 overflow-hidden sm:flex">
              <div className="p-6 sm:p-8 lg:p-10 sm:w-1/2 space-y-4">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-10 w-10 rounded-lg" />
                  <Skeleton className="h-7 w-48" />
                </div>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
                <Skeleton className="h-4 w-36 mt-4" />
              </div>
              <div className="p-6 sm:p-8 lg:p-10 sm:w-1/2 space-y-3">
                <Skeleton className="h-4 w-24 mb-4" />
                {Array.from({ length: 4 }).map((_, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Skeleton className="h-5 w-5 shrink-0 mt-0.5" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
