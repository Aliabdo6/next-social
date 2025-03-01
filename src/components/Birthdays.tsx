import Image from "next/image";
import Link from "next/link";

export default function Birthdays() {
  return (
    <>
      <div className="p-4 bg-white rounded-lg shadow-md text-sm flex-col flex gap-4 ">
        <div className=" flex justify-between items-center font-medium  ">
          <span className=" text-gray-500 ">
            Birthdays
          </span>
        </div>
        {/* User  */}
        <div className=" flex items-center justify-between ">
          <div className=" flex items-center gap-4 ">
            <Image
              src="https://th.bing.com/th/id/R.241a60509853b7c708d95d39f947f9dc?rik=P4HIWjMs0GVVkA&pid=ImgRaw&r=0"
              alt=""
              width={40}
              height={40}
              className=" w-10 h-10 rounded-full object-cover  "
            />
            <span className=" font-semibold ">
              {" "}
              john doe{" "}
            </span>
          </div>
          <div className=" flex gap-3 justify-end ">
            <button className=" bg-blue-500 text-white text-xs px-2 py-1 rounded-md ">
              Celebrate
            </button>
          </div>
        </div>
        {/* upcoming  */}
        <div className=" p-4 bg-slate-100 rounded-lg flex items-center gap-4 ">
          <Image
            src="/gift.png"
            alt=""
            width={24}
            height={24}
          />
          <Link
            href="/"
            className=" flex flex-col gap-1 text-xs "
          >
            <span className=" text-gray-700 font-semibold ">
              {" "}
              Upcoming Birthdays{" "}
            </span>
            <span className=" text-gray-500 ">
              {" "}
              see the others have Upcoming
              Birthdays{" "}
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
