import { ActionIcon, Drawer } from "@mantine/core";
import { HambergerMenu } from "iconsax-react";
import { useEffect, useState } from "react";

import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useBlurURL } from "@/library/useBlurUrl";
import { useRouter } from "next/router";

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
  const getBlurURL = useBlurURL();

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
        position="top"
        opened={isMenuDrawerOpen}
        onClose={() => setIsMenuDrawerOpen(false)}
        withCloseButton={false}
        classNames={{
          drawer: "h-full",
        }}
      >
        <Image
          fill
          src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6"
          blurDataURL={getBlurURL(
            "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6"
          )}
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
