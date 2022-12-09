import { clsx } from "@mantine/core";
import { useRouter } from "next/router";

import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { DrawerAside } from "@/components/drawerAside";
import { useState } from "react";

const MENU = [
  {
    page: "Home",
    link: "/",
  },
  {
    page: "About Us",
    link: "/about-us",
  },
  {
    page: "Portfolio",
    link: "/portfolio",
  },
];

export function MenuAside() {
  const router = useRouter();
  const path = router.pathname;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <aside className="w-64 h-screen bg-kappa-primary-dark shrink-0">
        <header className="px-20 bg-white py-7">
          <Image src={logo} width={logo.width} height={logo.height} alt="" />
        </header>
        <nav className="mt-36">
          <ul className="grid px-8 text-center uppercase justify-items-stretch">
            {MENU.map(({ page, link }) => (
              <Link key={link} href={link}>
                <li
                  onClick={() => setIsDrawerOpen(true)}
                  className={clsx(
                    "py-4 px-6",
                    path === link
                      ? "text-white bg-kappa-primary"
                      : "text-gray-50"
                  )}
                >
                  {page}
                </li>
              </Link>
            ))}
            <li
              onClick={() => setIsDrawerOpen(true)}
              className="px-6 py-4 hover:text-white hover:bg-kappa-primary text-gray-50"
            >
              Contact Us
            </li>
          </ul>
        </nav>
      </aside>

      <DrawerAside
        setIsDrawerOpen={setIsDrawerOpen}
        isDrawerOpen={isDrawerOpen}
      />
    </>
  );
}
