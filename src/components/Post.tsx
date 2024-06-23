import Image from "next/image";

export default function Post() {
  return (
    <>
      <div className=" flex flex-col gap-4 ">
        {/* user  */}
        <div className=" flex items-center justify-between ">
          <div className="flex items-center gap-4">
            <Image
              alt=""
              width={40}
              height={40}
              src="https://th.bing.com/th/id/R.241a60509853b7c708d95d39f947f9dc?rik=P4HIWjMs0GVVkA&pid=ImgRaw&r=0"
              className="w-10 rounded-full h-10 "
            />
            <span className=" font-medium ">
              Ali Dev
            </span>
          </div>
          <Image
            alt=""
            width={16}
            height={16}
            src="/more.png"
          />
        </div>
        {/* Desc  */}
        <div className=" flex flex-col gap-4  ">
          <div className="w-full min-h-96 relative ">
            <Image
              alt=""
              fill
              className="object-cover rounded-md "
              src="https://th.bing.com/th/id/R.241a60509853b7c708d95d39f947f9dc?rik=P4HIWjMs0GVVkA&pid=ImgRaw&r=0"
            />
          </div>
        </div>
        {/* Interaction  */}
        <div className=""> </div>
      </div>
    </>
  );
}
