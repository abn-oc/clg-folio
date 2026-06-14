import Link from "next/link";
import { ArrowRight, BookOpen, Users } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import aboutData from "@/data/about.json";

export default function Home() {
  const stats = [
    { value: aboutData.stats.students, label: "Students Enrolled" },
    { value: aboutData.stats.faculty, label: "Expert Faculty" },
    { value: aboutData.stats.programs, label: "Degree Programs" },
    { value: aboutData.stats.alumni, label: "Global Alumni" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-navy uppercase tracking-widest mb-6">
              Established 1995
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-stone-900 mb-6 leading-[1.15]">
              Shape Your Future at{" "}
              <span className="text-navy">Nestick Tech</span>
            </h1>
            <div className="w-12 h-px bg-stone-300 mb-8" />
            <p className="text-lg sm:text-xl text-stone-500 mb-10 leading-relaxed max-w-2xl">
              {aboutData.vision}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/programs">
                <Button variant="primary" size="lg">
                  Explore Programs <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/faculty">
                <Button variant="outline" size="lg">
                  Meet Our Faculty
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-stone-200">
            {stats.map((stat) => (
              <div key={stat.label} className="py-10 px-6 text-center">
                <div className="text-3xl sm:text-4xl font-serif text-navy mb-2">
                  {stat.value}
                </div>
                <div className="text-xs text-stone-400 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-4">
              A Legacy of Excellence
            </h2>
            <div className="w-12 h-px bg-stone-300 mb-8" />
            <p className="text-lg text-stone-500 leading-relaxed">
              {aboutData.history}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 sm:py-28 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-4">
              Discover Your Path
            </h2>
            <div className="w-12 h-px bg-stone-300 mb-6" />
            <p className="text-lg text-stone-500 max-w-2xl leading-relaxed">
              Explore our core areas of study and find the program that aligns
              with your passions and career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/programs" className="group block">
              <Card className="h-full">
                <div className="p-8 sm:p-10 flex flex-col h-full">
                  <div className="p-3 bg-navy-50 text-navy rounded-md mb-6 w-fit">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-3">
                    Academic Programs
                  </h3>
                  <p className="text-sm text-stone-500 mb-6 leading-relaxed">
                    Browse our comprehensive range of undergraduate and
                    postgraduate degrees designed for the modern tech landscape.
                  </p>
                  <span className="text-sm font-medium text-navy inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all mt-auto">
                    Explore Academics{" "}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Card>
            </Link>

            <Link href="/faculty" className="group block">
              <Card className="h-full">
                <div className="p-8 sm:p-10 flex flex-col h-full">
                  <div className="p-3 bg-navy-50 text-navy rounded-md mb-6 w-fit">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-3">
                    World-Class Faculty
                  </h3>
                  <p className="text-sm text-stone-500 mb-6 leading-relaxed">
                    Learn from industry veterans, acclaimed researchers, and
                    thought leaders dedicated to your success.
                  </p>
                  <span className="text-sm font-medium text-navy inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all mt-auto">
                    Meet the Team{" "}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
