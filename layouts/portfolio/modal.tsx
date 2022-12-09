import { Twitter } from "./twitter";
import { Carousel } from "@mantine/carousel";
import { ActionIcon, Modal } from "@mantine/core";
import { Instagram } from "iconsax-react";
import Image from "next/image";

export function PortfolioModal({ modalContent, setModalContent }) {
  return (
    <Modal
      opened={modalContent.open}
      onClose={() => setModalContent({ open: false })}
      withCloseButton={false}
      className="w-[80vw] aspect-square m-auto"
      classNames={{
        inner: "p-0",
        modal: "w-full h-full p-0 rounded-none",
        body: "grid h-full grid-rows-[1fr_auto]",
      }}
    >
      <figure className="relative grid flex-1 h-full">
        <Image
          fill
          className="object-cover"
          src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11"
          alt="about us"
        />
        {modalContent.content?.images?.length && (
          <Carousel
            withIndicators
            height={200}
            slideSize="25%"
            slideGap="md"
            className="mt-auto"
            classNames={{
              viewport: "h-24",
            }}
            breakpoints={[
              { maxWidth: "md", slideSize: "45%" },
              { maxWidth: "sm", slideSize: "50%", slideGap: 0 },
            ]}
            loop
            align="start"
          >
            {modalContent.content?.images?.map((item, idx) => {
              return (
                <Carousel.Slide key={idx}>
                  <figure className="relative h-full">
                    <Image
                      fill
                      className="object-cover"
                      alt={modalContent.content?.property}
                      src={item.src}
                    />
                  </figure>
                </Carousel.Slide>
              );
            })}
          </Carousel>
        )}
      </figure>
      <div className="grid gap-3 px-12 py-10 text-gray-400 bg-white">
        <p className="uppercase">{modalContent.content?.property}</p>
        <p>{modalContent.content?.address}</p>
        <div className="flex items-center gap-2">
          <ActionIcon p={0}>
            <Instagram size={30} variant="Bold" className="text-gray-400" />
          </ActionIcon>
          <ActionIcon size="sm" className="bg-gray-400">
            <Twitter className="text-white" />
          </ActionIcon>
        </div>
      </div>
    </Modal>
  );
}
