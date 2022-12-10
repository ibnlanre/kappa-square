import { ContactUs } from "@/layouts/contactUs";
import { Close } from "@/components/close";
import { ActionIcon, Drawer } from "@mantine/core";
import { HambergerMenu } from "iconsax-react";
import { Dispatch, SetStateAction } from "react";

interface IDrawerAside {
  isDrawerOpen: boolean;
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
}
export function DrawerAside({ isDrawerOpen, setIsDrawerOpen }: IDrawerAside) {
  return (
    <>
      <ActionIcon
        size="lg"
        className="fixed hidden top-14 right-32 clump:right-[clamp(1rem,8vw,8rem)] hover:bg-transparent sm:block"
        onClick={() => setIsDrawerOpen(true)}
      >
        <HambergerMenu size={32} className="text-black" />
      </ActionIcon>

      <Drawer
        size={805}
        position="right"
        opened={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        withCloseButton={false}
      >
        <aside className="grid h-screen overflow-auto">
          <ContactUs>
            <ActionIcon
              className="absolute top-0 right-0 text-white hover:text-kappa-primary-dark"
              onClick={() => setIsDrawerOpen(false)}
              size="lg"
            >
              <Close className="text-3xl" />
            </ActionIcon>
          </ContactUs>
        </aside>
      </Drawer>
    </>
  );
}
