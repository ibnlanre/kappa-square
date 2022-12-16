import { ActionIcon, Drawer } from "@mantine/core";
import { HambergerMenu } from "iconsax-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import StairWell from "@/assets/stairwell.jpeg";
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
  {
    page: "Contact",
    link: "/contact-us",
  },
];

export function NavBarMenu() {
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsMenuDrawerOpen(false);
  }, [router.route]);

  return (
    <>
      <nav className="fixed top-0 flex justify-between w-full px-4 py-5 z-[300] bg-white sm:hidden">
        <ActionIcon component={Link} href="/" className="relative h-9">
          <Image src={logo} className="object-contain" fill alt="logo" />
        </ActionIcon>

        <ActionIcon
          size="lg"
          className=""
          onClick={() => setIsMenuDrawerOpen(!isMenuDrawerOpen)}
        >
          <HambergerMenu size={32} className="text-black" />
        </ActionIcon>
      </nav>

      <Drawer
        size={805}
        position="right"
        opened={isMenuDrawerOpen}
        onClose={() => setIsMenuDrawerOpen(false)}
        withCloseButton={false}
        classNames={{
          drawer: "h-full",
        }}
      >
        <Image
          fill
          src={StairWell.src}
          blurDataURL={StairWell.blurDataURL}
          loading="lazy"
          placeholder="blur"
          className="object-cover opacity-20 -z-10"
          alt="logo"
        />
        <ul className="grid gap-8 px-4 mt-28">
          {MENU.map(({ page, link }) => {
            return (
              <Link key={page} href={link}>
                <li
                  onClick={() => setIsMenuDrawerOpen(false)}
                  className="text-2xl font-semibold text-gray-400"
                >
                  {page}
                </li>
              </Link>
            );
          })}
        </ul>
      </Drawer>
    </>
  );
}
