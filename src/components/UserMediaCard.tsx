import Image from "next/image";
import Link from "next/link";

export default function UserMediaCard({
  userId,
}: {
  userId: string;
}) {
  return (
    <>
      <div className=" p-4 bg-white rounded-lg shadow-md text-sm flex-col flex gap-4 ">
        {/* top  */}
        <div className=" flex justify-between items-center font-medium  ">
          <span className=" text-gray-500 ">
            User Media
          </span>
          <Link
            href="/"
            className=" text-blue-500 text-xs "
          >
            See all
          </Link>
        </div>
        {/* bottom  */}
        <div className=" flex gap-4 justify-between flex-wrap ">
          <div className=" relative w-1/5 h-24  ">
            <Image
              src="https://th.bing.com/th/id/R.241a60509853b7c708d95d39f947f9dc?rik=P4HIWjMs0GVVkA&pid=ImgRaw&r=0"
              alt=""
              fill
              className=" object-cover rounded-md "
            />
          </div>
          <div className=" relative w-1/5 h-24  ">
            <Image
              src="https://th.bing.com/th/id/R.241a60509853b7c708d95d39f947f9dc?rik=P4HIWjMs0GVVkA&pid=ImgRaw&r=0"
              alt=""
              fill
              className=" object-cover rounded-md "
            />
          </div>
          <div className=" relative w-1/5 h-24  ">
            <Image
              src="https://th.bing.com/th/id/R.241a60509853b7c708d95d39f947f9dc?rik=P4HIWjMs0GVVkA&pid=ImgRaw&r=0"
              alt=""
              fill
              className=" object-cover rounded-md "
            />
          </div>
          <div className=" relative w-1/5 h-24  ">
            <Image
              src="https://th.bing.com/th/id/R.241a60509853b7c708d95d39f947f9dc?rik=P4HIWjMs0GVVkA&pid=ImgRaw&r=0"
              alt=""
              fill
              className=" object-cover rounded-md "
            />
          </div>
          <div className=" relative w-1/5 h-24  ">
            <Image
              src="https://th.bing.com/th/id/R.241a60509853b7c708d95d39f947f9dc?rik=P4HIWjMs0GVVkA&pid=ImgRaw&r=0"
              alt=""
              fill
              className=" object-cover rounded-md "
            />
          </div>
          <div className=" relative w-1/5 h-24  ">
            <Image
              src="https://th.bing.com/th/id/R.241a60509853b7c708d95d39f947f9dc?rik=P4HIWjMs0GVVkA&pid=ImgRaw&r=0"
              alt=""
              fill
              className=" object-cover rounded-md "
            />
          </div>
        </div>
      </div>
    </>
  );
}
