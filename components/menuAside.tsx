import { clsx } from "@mantine/core";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

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

interface IMenuAside {
  setIsContactDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

export function MenuAside({ setIsContactDrawerOpen }: IMenuAside) {
  const router = useRouter();
  const path = router.pathname;

  return (
    <aside className="flex-col hidden w-64 clump:w-[clamp(12rem,20vw,16rem)] h-screen bg-kappa-primary-dark shrink-0 sm:flex">
      <header className="bg-white px-[30%] py-7">
        <Image src={logo} width={logo.width} height={logo.height} alt="logo" />
      </header>
      <nav className="mt-[16vmin] overflow-auto">
        <ul className="grid px-[10%] font-medium text-center uppercase justify-items-stretch">
          {MENU.map(({ page, link }) => (
            <Link key={link} href={link}>
              <li
                className={clsx(
                  "py-4 px-6 hover:text-white hover:bg-kappa-light",
                  path === link ? "text-white bg-kappa-primary" : "text-gray-50"
                )}
              >
                {page}
              </li>
            </Link>
          ))}
          <li
            onClick={() => setIsContactDrawerOpen(true)}
            className="px-6 py-4 cursor-pointer hover:text-white hover:bg-kappa-light text-gray-50"
          >
            Contact Us
          </li>
        </ul>
      </nav>
    </aside>
  );
}
