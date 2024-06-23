import Image from "next/image";

export default function Comments() {
  return (
    <>
      <div className="">
        {/* write  */}
        <div className=" flex items-center gap-4  ">
          <Image
            src="https://th.bing.com/th/id/R.241a60509853b7c708d95d39f947f9dc?rik=P4HIWjMs0GVVkA&pid=ImgRaw&r=0"
            alt=""
            width={32}
            height={32}
            className=" w-8 h-8 rounded-full "
          />
          <div className=" flex-1  flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full ">
            <input
              type="text"
              placeholder=" write a comment ... "
              className=" bg-transparent outline-none flex-1 "
            />
            <Image
              src="/emoji.png"
              alt=""
              width={16}
              height={16}
              className=" cursor-pointer "
            />
          </div>
        </div>
        {/* coments  */}
        <div className="">
          {/* comm */}
          <div className=" flex gap-4 justify-center mt-6  ">
            {/* avatar */}
            <Image
              src="https://th.bing.com/th/id/R.241a60509853b7c708d95d39f947f9dc?rik=P4HIWjMs0GVVkA&pid=ImgRaw&r=0"
              alt=""
              width={40}
              height={40}
              className=" w-10 h-10 rounded-full "
            />
            {/* des */}
            <div className=" flex flex-col gap-2 flex-1 ">
              <span className=" font-medium ">
                {" "}
                Ali dev{" "}
              </span>
              <p>
                {" "}
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
                Dolores tenetur nostrum natus
                maiores cumque nulla pariatur,
                dolor saepe adipisci illum facere
                ipsa unde iste laudantium
                excepturi quidem architecto atque
                officia!{" "}
              </p>
              <div className=" flex items-center gap-8 text-xs text-gray-500 mt-2  ">
                <div className=" flex items-center gap-4  ">
                  <Image
                    alt=""
                    width={16}
                    height={16}
                    src="/like.png"
                    className=" cursor-pointer "
                  />
                  <span className=" text-gray-300 ">
                    |
                  </span>
                  <span className=" text-gray-500 ">
                    12 Likes
                  </span>
                </div>
                <div> reply </div>
              </div>
            </div>
            {/* icon */}
            <Image
              src="/more.png"
              alt=""
              width={16}
              height={16}
              className=" cursor-pointer w-4 h-4 "
            />
          </div>
        </div>
      </div>
    </>
  );
}
