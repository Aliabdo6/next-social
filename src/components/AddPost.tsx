import Image from "next/image";

export default function AddPost() {
  return (
    <>
      <div className=" p-4 bg-white rounded-lg shadow-md flex gap-4 justify-between text-sm ">
        {/* Avatar  */}
        <Image
          src="https://th.bing.com/th/id/R.241a60509853b7c708d95d39f947f9dc?rik=P4HIWjMs0GVVkA&pid=ImgRaw&r=0"
          alt=""
          height={48}
          width={48}
          className=" w-12 h-12 object-cover rounded-full "
        />

        {/* Post Textarea */}
        <div className=" flex-1 ">
          {/* text input  */}
          <div className=" flex gap-4  ">
            <textarea
              placeholder="what`s in your mind "
              className="  flex-1 p-2 bg-slate-200 rounded-lg "
            ></textarea>
            <Image
              src="/emoji.png"
              alt=""
              height={20}
              width={20}
              className=" w-5 h-5 cursor-pointer self-end "
            />
          </div>

          {/* Post Options */}
          <div className=" flex items-center gap-4 mt-4 text-gray-400 flex-wrap ">
            <div className=" flex items-center gap-2 cursor-pointer  ">
              <Image
                src="/addimage.png"
                alt=""
                height={20}
                width={20}
              />
              Photo
            </div>
            <div className=" flex items-center gap-2 cursor-pointer  ">
              <Image
                src="/addVideo.png"
                alt=""
                height={20}
                width={20}
              />
              Video
            </div>
            <div className=" flex items-center gap-2 cursor-pointer  ">
              <Image
                src="/addevent.png"
                alt=""
                height={20}
                width={20}
              />
              Event
            </div>
            <div className=" flex items-center gap-2 cursor-pointer  ">
              <Image
                src="/poll.png"
                alt=""
                height={20}
                width={20}
              />
              Poll
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
