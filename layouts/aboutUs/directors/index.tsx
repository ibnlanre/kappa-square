import { ActionIcon } from "@mantine/core";
import { ArrowLeft } from "iconsax-react";

import Link from "next/link";

export function Directors({ children, person }) {
  return (
    <div className="flex flex-col h-screen mx-5 sm:mr-32 mt-9 sm:mt-0 clump:sm:mr-[clamp(1rem,8vw,8rem)] overflow-auto">
      {children}

      <Link href="/about-us">
        <ActionIcon className="hidden mt-14 sm:block" size="lg">
          <ArrowLeft className="text-black" />
        </ActionIcon>
      </Link>

      {person}
    </div>
  );
}
