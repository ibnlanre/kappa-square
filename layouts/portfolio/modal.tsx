import { Twitter } from "@/components/twitter";
import { ActionIcon, Modal } from "@mantine/core";
import {
  Instagram,
  CloseCircle,
  ArrowCircleLeft,
  ArrowCircleRight,
} from "iconsax-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { ModalContent } from ".";

import Image from "next/image";

interface IPortfolioModal {
  modalContent: ModalContent;
  setModalContent: Dispatch<SetStateAction<ModalContent>>;
  closeModal(): void;
}

export function PortfolioModal({
  modalContent,
  setModalContent,
  closeModal,
}: IPortfolioModal) {
  const [parent] = useAutoAnimate<HTMLDivElement>();
  const [images, setImages] = useState<ModalContent["content"]["images"]>([]);

  useEffect(() => {
    setImages(modalContent.content?.images);
  }, [modalContent]);

  return (
    <Modal
      closeOnClickOutside
      opened={modalContent.open}
      onClose={closeModal}
      withCloseButton={false}
      withFocusReturn
      withinPortal
      classNames={{
        inner: "p-0",
        modal: "h-[60vmax] xl:h-[80vmin] m-auto p-0 rounded-none mx-2",
        body: "grid h-full grid-rows-[1fr_auto]",
      }}
    >
      <figure className="relative grid flex-1 h-full">
        <Image
          fill
          data-aos="fade"
          className="object-cover"
          src={images?.at(0)?.src}
          blurDataURL={images?.at(0)?.blurDataURL}
          alt={modalContent.content?.property}
          placeholder="blur"
        />

        <section className="relative flex items-center justify-around gap-3 px-3 mt-auto bg-gray-600 h-max">
          <ActionIcon
            onClick={() => {
              const juggle = [...images];
              juggle.unshift(juggle.pop());
              setImages(juggle);
            }}
          >
            <ArrowCircleLeft />
          </ActionIcon>

          <div
            ref={parent}
            className="grid flex-1 grid-flow-col gap-1 py-1 overflow-x-scroll"
          >
            {images?.length &&
              images.map((item, idx) => {
                return (
                  <figure
                    key={idx}
                    className="relative h-[7vmax] cursor-pointer"
                    onClick={() => {
                      const juggle = [...images];
                      juggle.unshift(juggle.splice(idx, 1).at(0));
                      setImages(juggle);
                    }}
                  >
                    <Image
                      fill
                      className="object-cover"
                      alt={modalContent.content?.property}
                      blurDataURL={item.blurDataURL}
                      placeholder="blur"
                      src={item.src}
                    />
                  </figure>
                );
              })}
          </div>

          <ActionIcon
            onClick={() => {
              const juggle = [...images];
              juggle.push(juggle.shift());
              setImages(juggle);
            }}
          >
            <ArrowCircleRight />
          </ActionIcon>
        </section>

        <ActionIcon
          className="absolute text-white focus:outline-none right-5 top-5 hover:text-black"
          onClick={closeModal}
        >
          <CloseCircle className="opacity-40" variant="Linear" />
        </ActionIcon>
      </figure>

      <div className="grid gap-3 px-12 py-10 text-gray-400 bg-white clump:px-[clamp(2rem,3vw,3rem)] clump:py-[clamp(2rem,3vw,2.5rem)]">
        <p className="uppercase">{modalContent.content?.property}</p>
        <p>{modalContent.content?.address}</p>
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
    </Modal>
  );
}
