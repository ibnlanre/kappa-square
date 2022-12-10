import Image from "next/image";

export function Heading() {
  return (
    <header className="contents">
      <h2 className="text-3xl font-semibold uppercase">About Us</h2>
      <figure className="relative grid h-[55vh]">
        <Image
          fill
          className="object-cover"
          src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11"
          alt="about us"
        />
      </figure>
    </header>
  );
}
