import Skeleton from "@/components/ui/Skeleton";

export default function HomeLoading() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="min-h-[90vh] flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-6">
            <Skeleton className="h-6 w-32 rounded-full" />
            <Skeleton className="h-16 sm:h-20 w-3/4" />
            <Skeleton className="h-6 w-2/3" />
            <div className="flex gap-4 mt-4">
              <Skeleton className="h-12 w-44 rounded-lg" />
              <Skeleton className="h-12 w-44 rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
