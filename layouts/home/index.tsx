import { ExportSquare } from "iconsax-react";
import Link from "next/link";
import { SlideShow } from "./slideShow";

export default function Home() {
  return (
    <div className="relative grid flex-1 h-screen">
      <SlideShow />
      <section className="bg-[#272727]/[.9] text-white grid gap-6 py-5 pl-3 pr-10 absolute bottom-28 left-5 max-w-[18rem]">
        <h3 className="text-xl font-semibold">
          We have served various capacities in the real estate value chain
        </h3>
        <Link href="/portfolio">
          <button className="flex items-center gap-2">
            <p className="text-left underline">View Portfolio</p>
            <ExportSquare size={12} className="text-white" />
          </button>
        </Link>
      </section>
    </div>
  );
}
