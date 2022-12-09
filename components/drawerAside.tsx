import {
  ActionIcon,
  Drawer,
} from "@mantine/core";
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
        className="fixed top-14 right-14 hover:bg-transparent"
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
        
      </Drawer>
    </>
  );
}
