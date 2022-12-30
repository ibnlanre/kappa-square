import { Twitter } from "@/components/twitter";
import { ActionIcon } from "@mantine/core";
import { DocumentDownload, Instagram } from "iconsax-react";

import Link from "next/link";

export function Brochure() {
  return (
    <section className="flex flex-wrap items-end justify-between gap-7">
      <div className="grid gap-3 text-gray-400">
        <h4 className="font-semibold uppercase">3A IKOYA RESIDENCE</h4>
        <p>40A, Raymond Njoku street, Ikoyi, Lagos.</p>
        
        <div className="flex items-center gap-2">
          <ActionIcon p={0} className="text-gray-400 hover:text-gray-300">
            <Instagram size={30} variant="Bold" />
          </ActionIcon>
          <ActionIcon
            size="sm"
            className="text-white bg-gray-400 hover:bg-gray-300"
          >
            <Twitter />
          </ActionIcon>
        </div>
      </div>

      <div className="grid gap-2 ml-auto text-right text-gray-400">
        <p className="italic">For more details:</p>

        <div className="flex gap-2">
          <Link
            href="/3a-ikoya-landscape.pdf"
            download="The Residences Brochure"
            title="The Residences Brochure"
            target="_blank"
          >
            <p className="underline hover:text-gray-300">Download Brochure</p>
          </Link>
          <DocumentDownload variant="Bold" />
        </div>
      </div>
    </section>
  );
}
