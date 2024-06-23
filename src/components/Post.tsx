import Image from "next/image";
import Comments from "./Comments";

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
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illo, nihil sed.
            Facere tenetur quo ea perferendis
            aliquam. Possimus ad, quia sunt,
            minima labore eligendi eos alias ea
            natus, debitis totam!
          </p>
        </div>
        {/* Interaction  */}
        <div className=" flex items-center justify-between text-sm my-4 ">
          <div className=" flex gap-8 ">
            <div className=" flex items-center gap-4 bg-slate-50 p-2 rounded-xl ">
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
                12
                <span className=" hidden md:inline ">
                  {" "}
                  Likes{" "}
                </span>
              </span>
            </div>
            <div className=" flex items-center gap-4 bg-slate-50 p-2 rounded-xl ">
              <Image
                alt=""
                width={16}
                height={16}
                src="/comment.png"
                className=" cursor-pointer "
              />
              <span className=" text-gray-300 ">
                |
              </span>
              <span className=" text-gray-500 ">
                12
                <span className=" hidden md:inline ">
                  comments
                </span>
              </span>
            </div>
          </div>
          <div className="">
            <div className=" flex items-center gap-4 bg-slate-50 p-2 rounded-xl ">
              <Image
                alt=""
                width={16}
                height={16}
                src="/share.png"
                className=" cursor-pointer "
              />
              <span className=" text-gray-300 ">
                |
              </span>
              <span className=" text-gray-500 ">
                12
                <span className=" hidden md:inline ">
                  share
                </span>
              </span>
            </div>
          </div>
        </div>
        <Comments />
      </div>
    </>
  );
}
