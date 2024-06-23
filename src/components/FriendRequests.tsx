import Image from "next/image";
import Link from "next/link";

export default function FriendRequests() {
  return (
    <>
      <div className=" p-4 bg-white rounded-lg shadow-md text-sm flex-col flex gap-4 ">
        {/* top  */}
        <div className=" flex justify-between items-center font-medium  ">
          <span className=" text-gray-500 ">
            Friend Requests
          </span>
          <Link
            href="/"
            className=" text-blue-500 text-xs "
          >
            See all
          </Link>
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
            <Image
              src="/accept.png"
              alt=""
              width={20}
              height={20}
              className=" cursor-pointer "
            />
            <Image
              src="/reject.png"
              alt=""
              width={20}
              height={20}
              className=" cursor-pointer "
            />
          </div>
        </div>
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
            <Image
              src="/accept.png"
              alt=""
              width={20}
              height={20}
              className=" cursor-pointer "
            />
            <Image
              src="/reject.png"
              alt=""
              width={20}
              height={20}
              className=" cursor-pointer "
            />
          </div>
        </div>
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
            <Image
              src="/accept.png"
              alt=""
              width={20}
              height={20}
              className=" cursor-pointer "
            />
            <Image
              src="/reject.png"
              alt=""
              width={20}
              height={20}
              className=" cursor-pointer "
            />
          </div>
        </div>
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
            <Image
              src="/accept.png"
              alt=""
              width={20}
              height={20}
              className=" cursor-pointer "
            />
            <Image
              src="/reject.png"
              alt=""
              width={20}
              height={20}
              className=" cursor-pointer "
            />
          </div>
        </div>
      </div>
    </>
  );
}
