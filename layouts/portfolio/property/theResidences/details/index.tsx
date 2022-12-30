import Image from "next/image";
import SiteMap from "./assets/sitemap.jpg";

export function Details() {
  return (
    <article className="grid text-gray-400 gap-7">
      <header className="grid gap-4">
        <h2 className="py-4 text-4xl clump:text-[clamp(1.65rem,5vw,2.25rem)] font-bold bg-gray-50 px-7 text-gray-900">
          Property Details
        </h2>
        <p>
          3a Ikoya offers 6 numbers Exclusive 5-bedroom Terrace Units; each on
          G+3 floors with a private lift and featuring contemporary design; high
          end finishes and fittings, smart home features and flexible floor
          layouts customisable to suit your unique lifestyle.
        </p>
      </header>

      <Image
        src={SiteMap.src}
        placeholder="blur"
        blurDataURL={SiteMap.blurDataURL}
        height={SiteMap.height}
        width={SiteMap.width}
        alt="ikoya site-map"
      />

      <section className="grid lg:grid-cols-[1fr,auto] justify-between gap-7">
        <div className="grid content-start max-w-lg gap-8">
          <p>
            Each of the 6 Terrace units enjoys its own exclusive space on the
            site, including designated parking for 3 cars and a private
            backyard.
          </p>
          <div className="grid gap-2">
            <h4 className="font-semibold">Other amenities on-site include:</h4>
            <ul className="ml-4 list-disc">
              <li>6 additional parking spaces for visitors: 1 per unit</li>
              <li>Swimming Pool with Changing rooms conveniences</li>
              <li>Pool deck seating area and Pool Bar</li>
              <li>First floor Gym equipped with cardio and weight</li>
              <li>training equipment and overlooking the pool</li>
            </ul>
          </div>
        </div>

        <ul className="py-4 list-decimal px-14 clump:px-[clamp(2.75rem,4vw,3.5rem)] bg-gray-50">
          <li>Gate entrance</li>
          <li>Gate house</li>
          <li>Facility office</li>
          <li>Generator house</li>
          <li>Garbage collection</li>
          <li>Visitor parking</li>
          <li>Driveway</li>
          <li>Designated parking</li>
          <li>Terrace unit</li>
          <li>Private backyards</li>
          <li>Water treatment</li>
          <li>Gym and changing rooms</li>
          <li>Swimming pool</li>
          <li>Pool deck</li>
          <li>Pool bar </li>
        </ul>
      </section>
    </article>
  );
}
