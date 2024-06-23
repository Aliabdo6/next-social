import Image from "next/image";
import Link from "next/link";

export default function UserInfoCard({
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
            User Information
          </span>
          <Link
            href="/"
            className=" text-blue-500 text-xs "
          >
            See all
          </Link>
        </div>
        {/* bottom  */}
        <div className=" flex flex-col gap-4 text-gray-500 ">
          <div className=" flex items-center gap-2 ">
            <span className=" text-xl text-black ">
              {" "}
              jon doe{" "}
            </span>
            <span className=" text-sm ">
              {" "}
              @aliabdo_os{" "}
            </span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veritatis, accusamus
            eveniet odit, ipsa pariatur
          </p>
          <div className=" flex items-center gap-2 ">
            <Image
              src="/map.png"
              alt=""
              height={16}
              width={16}
            />
            <span>
              Living in <b> NYC </b>
            </span>
          </div>
          <div className=" flex items-center gap-2 ">
            <Image
              src="/school.png"
              alt=""
              height={16}
              width={16}
            />
            <span>
              Went to <b> NYC </b>
            </span>
          </div>
          <div className=" flex items-center gap-2 ">
            <Image
              src="/work.png"
              alt=""
              height={16}
              width={16}
            />
            <span>
              Working at <b> NYC </b>
            </span>
          </div>
          <div className=" flex items-center justify-between ">
            <div className=" flex gap-1 items-center ">
              <Image
                src="/link.png"
                alt=""
                height={16}
                width={16}
              />
              <Link
                href="https://github.com/aliabdo6"
                className=" text-blue-500 font-medium  "
              >
                {" "}
                aliabdo_os{" "}
              </Link>
            </div>
            <div className="flex gap-1 items-center">
              <Image
                src="/date.png"
                alt=""
                height={16}
                width={16}
              />
              <span> 10k Followers </span>
            </div>
          </div>
          <button className=" bg-blue-500 text-white text-sm rounded-md py-2 ">
            {" "}
            Follow{" "}
          </button>
          <span className=" text-red-400 self-end text-xs cursor-pointer ">
            {" "}
            Block User{" "}
          </span>
        </div>
      </div>
    </>
  );
}
