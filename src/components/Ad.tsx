import Image from "next/image";

export default function Ad({
  size,
}: {
  size: "sm" | "md" | "lg";
}) {
  return (
    <>
      <div className="p-4 bg-white rounded-lg shadow-md text-sm ">
        {/* top  */}
        <div className=" flex items-center justify-between text-gray-500 font-medium ">
          <span>Sponsored Ads</span>
          <Image
            alt=""
            width={16}
            height={16}
            src="/more.png"
          />
        </div>
        {/* bottom  */}
        <div
          className={` flex flex-col mt-4 ${
            size === "sm" ? "gap-2" : "gap-4"
          } `}
        >
          <div
            className={`relative w-full ${
              size === "sm"
                ? "24"
                : size === "md"
                ? "h-36"
                : "h-48"
            } `}
          >
            <Image
              src="https://th.bing.com/th/id/R.241a60509853b7c708d95d39f947f9dc?rik=P4HIWjMs0GVVkA&pid=ImgRaw&r=0"
              alt=""
              fill
              className="  rounded-lg object-cover  "
            />
          </div>
          <div className=" flex items-center gap-4  ">
            <Image
              src="https://th.bing.com/th/id/R.241a60509853b7c708d95d39f947f9dc?rik=P4HIWjMs0GVVkA&pid=ImgRaw&r=0"
              alt=""
              width={24}
              height={24}
              className=" w-6 h-6 rounded-full object-cover "
            />
            <span className=" text-blue-500 font-medium ">
              {" "}
              loi young{" "}
            </span>
          </div>
          <p
            className={
              size === "sm"
                ? "text-xs"
                : "text-sm"
            }
          >
            {size === "sm"
              ? "Lorem ipsum dolor sit amet consectetur adipisicing elit."
              : size === "md"
              ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tenetur nostrum natus maiores cumque nulla pariatur, "
              : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tenetur nostrum natus maiores cumque nulla pariatur, dolor saepe adipisci illum facere ipsa unde iste laudantium excepturi quidem architecto atque officia!"}
          </p>
          <button className=" bg-gray-200 text-gray-500 p-2 text-xs rounded-lg ">
            {" "}
            learn more{" "}
          </button>
        </div>
      </div>
    </>
  );
}
