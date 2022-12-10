import { Button, Divider, Textarea, TextInput } from "@mantine/core";
import { ArrowRight } from "iconsax-react";
import { ReactNode } from "react";
import { Logo } from "./logo";

interface IContactUs {
  children?: ReactNode;
}

export function ContactUs({ children }: IContactUs) {
  return (
    <>
      <header className="relative grid px-32 clump:px-[clamp(1rem,8vw,8rem)] text-white py-14 bg-kappa-primary-dark">
        <Logo className="absolute top-0 right-0 h-full w-max" />
        <h2 className="relative text-2xl font-semibold">
          <span>Contact</span>
          {children}
        </h2>
        <div className="grid gap-4 max-w-max">
          <div>
            <p>3a Ikoya Avenue</p>
            <p>Ikoyi, Lagos</p>
          </div>
          <Divider size="md" className="w-2/6 border-white" />
          <div>
            <p>info@kappasquareltd.com</p>
            <p>+23418794736, +2347034945207</p>
          </div>
        </div>
      </header>
      <form className="grid content-between w-full gap-6 px-32 clump:px-[clamp(1rem,8vw,8rem)] py-20 clump:py-[clamp(2rem,5vw,5rem)] md:overflow-auto">
        <h2 className="text-2xl font-semibold">Your Request</h2>
        <section className="grid gap-4">
          <TextInput
            unstyled
            classNames={{
              root: "border-b border-kappa-primary-dark",
              input: "w-full outline-none leading-loose",
            }}
            placeholder="Your Name"
          />
          <TextInput
            unstyled
            classNames={{
              root: "border-b border-kappa-primary-dark",
              input: "w-full outline-none leading-loose",
            }}
            placeholder="Email"
          />
          <TextInput
            unstyled
            classNames={{
              root: "border-b border-kappa-primary-dark",
              input: "w-full outline-none leading-loose",
            }}
            type="tel"
            placeholder="Phone Number"
          />
          <Textarea
            classNames={{
              input:
                "bg-gray-100 placeholder-white rounded-none focus:border-none",
            }}
            placeholder="Enter your message..."
          />
        </section>
        <Button
          unstyled
          py={0}
          className="px-6 py-4 border border-kappa-primary-dark justify-self-start h-max"
          classNames={{
            inner: "flex gap-8 items-center",
          }}
          rightIcon={<ArrowRight />}
        >
          Send
        </Button>
      </form>
    </>
  );
}
