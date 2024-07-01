import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <>
      <div className=" flex gap-6 pt-6 ">
        <div className=" hidden xl:block w-[20%] ">
          <LeftMenu type="profile" />
        </div>
        <div className=" w-full lg:w-[70%] xl:w-[50%] ">
          <div className="flex flex-col gap-6  ">
            <div className=" flex flex-col items-center justify-center ">
              <div className=" w-full h-64 relative ">
                <Image
                  src="https://th.bing.com/th/id/R.241a60509853b7c708d95d39f947f9dc?rik=P4HIWjMs0GVVkA&pid=ImgRaw&r=0"
                  alt=""
                  fill
                  className="object-cover rounded-md "
                />
                <Image
                  src="https://th.bing.com/th/id/R.241a60509853b7c708d95d39f947f9dc?rik=P4HIWjMs0GVVkA&pid=ImgRaw&r=0"
                  alt=""
                  width={128}
                  height={128}
                  className=" rounded-full object-cover w-32 h-32 absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white "
                />
              </div>
              <h1 className=" mt-20 mb-4 text-2xl font-medium ">
                {" "}
                loi young{" "}
              </h1>
              <div className=" flex items-center justify-center gap-12 mb-4 ">
                <div className=" flex flex-col items-center ">
                  <span className=" font-medium ">
                    {" "}
                    123{" "}
                  </span>
                  <span className=" text-sm">
                    {" "}
                    Posts
                  </span>
                </div>
                <div className=" flex flex-col items-center ">
                  <span className=" font-medium ">
                    {" "}
                    123{" "}
                  </span>
                  <span className=" text-sm">
                    {" "}
                    Followers
                  </span>
                </div>
                <div className=" flex flex-col items-center ">
                  <span className=" font-medium ">
                    {" "}
                    123{" "}
                  </span>
                  <span className=" text-sm">
                    {" "}
                    Following
                  </span>
                </div>
              </div>
            </div>
            <Feed />
          </div>
        </div>
        <div className=" hidden lg:block  w-[30%] ">
          <RightMenu userId="test" />
        </div>
      </div>
    </>
  );
}
