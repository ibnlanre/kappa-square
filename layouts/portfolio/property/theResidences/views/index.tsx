import AerialView from "./assets/aerial-view.jpg";
import PoolGymView from "./assets/pool-gym-view.jpg";
import DrivewayView from "./assets/driveway-view.jpg";
import StreetView from "./assets/street-view.jpg";
import Image from "next/image";

export function Views() {
  return (
    <article className="grid text-gray-400 gap-7">
      <h2 className="py-4 text-4xl clump:text-[clamp(1.65rem,5vw,2.25rem)] font-bold bg-gray-50 px-7 text-gray-900">
        Views
      </h2>

      <section className="grid md:grid-cols-2 gap-7">
        <div className="flex flex-col gap-7">
          <div className="max-h-[16rem] relative">
            <Image
              className="object-cover h-full"
              src={AerialView.src}
              placeholder="blur"
              blurDataURL={AerialView.blurDataURL}
              width={AerialView.width}
              height={AerialView.height}
              alt="Aerial View"
            />
            <div className="absolute right-0 px-3 py-2 text-white bottom-6 h-max bg-primary-800">
              <h4>Aerial View</h4>
            </div>
          </div>
          <div className="relative">
            <Image
              className="object-cover object-bottom h-full"
              src={DrivewayView.src}
              placeholder="blur"
              blurDataURL={DrivewayView.blurDataURL}
              width={DrivewayView.width}
              height={DrivewayView.height}
              alt="Driveway View"
            />
            <div className="absolute right-0 px-3 py-2 text-white bottom-6 h-max bg-primary-800">
              <h4>Driveway View</h4>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-[1fr_auto] gap-7">
          <div className="relative">
            <Image
              className="object-cover object-bottom h-full"
              src={PoolGymView.src}
              placeholder="blur"
              blurDataURL={PoolGymView.blurDataURL}
              width={PoolGymView.width}
              height={PoolGymView.height}
              alt="Pool/Gym View"
            />
            <div className="absolute right-0 px-3 py-2 text-white bottom-6 h-max bg-primary-800">
              <h4>Pool & Gym View</h4>
            </div>
          </div>

          <div className="max-h-[16rem] relative">
            <Image
              className="object-cover object-bottom h-full"
              src={StreetView.src}
              placeholder="blur"
              blurDataURL={StreetView.blurDataURL}
              width={StreetView.width}
              height={StreetView.height}
              alt="Street View"
            />
            <div className="absolute left-0 px-3 py-2 text-white bottom-6 h-max bg-primary-800">
              <h4>Street View</h4>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
