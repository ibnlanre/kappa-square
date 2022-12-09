import { ActionIcon } from "@mantine/core";
import { ArrowLeft } from "iconsax-react";

import Link from "next/link";

export function Directors({ children, person }) {
  return (
    <div className="flex flex-col h-screen ml-5 mr-16 overflow-auto">
      {children}

      <Link href="/about-us">
        <ActionIcon className="mt-14" size="lg">
          <ArrowLeft className="text-black" />
        </ActionIcon>
      </Link>

      {person}
    </div>
  );
}
