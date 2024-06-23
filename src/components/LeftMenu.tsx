import Link from "next/link";
import Image from "next/image";
import ProfileCard from "./ProfileCard";
import Ad from "./Ad";

interface LeftMenuProps {
  type: "home" | "profile";
}

interface MenuItem {
  href: string;
  src: string;
  alt: string;
  label: string;
}

const menuItems: MenuItem[] = [
  {
    href: "/",
    src: "/posts.png",
    alt: "Posts Icon",
    label: "My Posts",
  },
  {
    href: "/",
    src: "/activity.png",
    alt: "Activity Icon",
    label: "Activity",
  },
  {
    href: "/",
    src: "/market.png",
    alt: "Market Icon",
    label: "Marketplace",
  },
  {
    href: "/",
    src: "/events.png",
    alt: "Events Icon",
    label: "Events",
  },
  {
    href: "/",
    src: "/albums.png",
    alt: "Albums Icon",
    label: "Albums",
  },
  {
    href: "/",
    src: "/videos.png",
    alt: "Videos Icon",
    label: "Videos",
  },
  {
    href: "/",
    src: "/news.png",
    alt: "News Icon",
    label: "News",
  },
  {
    href: "/",
    src: "/courses.png",
    alt: "Courses Icon",
    label: "Courses",
  },
  {
    href: "/",
    src: "/lists.png",
    alt: "Lists Icon",
    label: "Lists",
  },
  {
    href: "/",
    src: "/settings.png",
    alt: "Settings Icon",
    label: "Settings",
  },
];

const MenuItem = ({
  href,
  src,
  alt,
  label,
}: MenuItem) => (
  <>
    <Link
      href={href}
      className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
    >
      <Image
        src={src}
        alt={alt}
        width={20}
        height={20}
      />
      <span>{label}</span>
    </Link>
    <hr className="border-t-1 border-gray-50 w-36 self-center" />
  </>
);

const LeftMenu = ({ type }: LeftMenuProps) => {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
      <Ad size="sm" />
    </div>
  );
};

export default LeftMenu;

// import Link from "next/link";
// import ProfileCard from "./ProfileCard";
// import Image from "next/image";
// import Ad from "./Ad";

// export default function LeftMenu({
//   type,
// }: {
//   type: "home" | "profile";
// }) {
//   return (
//     <>
//       <div className="flex flex-col gap-6">
//         {type === "home" && <ProfileCard />}
//         <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
//           <Link
//             href="/"
//             className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
//           >
//             <Image
//               src="/posts.png"
//               alt=""
//               width={20}
//               height={20}
//             />
//             <span>My Posts</span>
//           </Link>
//           <hr className="border-t-1 border-gray-50 w-36 self-center" />
//           <Link
//             href="/"
//             className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
//           >
//             <Image
//               src="/activity.png"
//               alt=""
//               width={20}
//               height={20}
//             />
//             <span>Activity</span>
//           </Link>
//           <hr className="border-t-1 border-gray-50 w-36 self-center" />
//           <Link
//             href="/"
//             className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
//           >
//             <Image
//               src="/market.png"
//               alt=""
//               width={20}
//               height={20}
//             />
//             <span>Marketplace</span>
//           </Link>
//           <hr className="border-t-1 border-gray-50 w-36 self-center" />
//           <Link
//             href="/"
//             className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
//           >
//             <Image
//               src="/events.png"
//               alt=""
//               width={20}
//               height={20}
//             />
//             <span>Events</span>
//           </Link>
//           <hr className="border-t-1 border-gray-50 w-36 self-center" />
//           <Link
//             href="/"
//             className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
//           >
//             <Image
//               src="/albums.png"
//               alt=""
//               width={20}
//               height={20}
//             />
//             <span>Albums</span>
//           </Link>
//           <hr className="border-t-1 border-gray-50 w-36 self-center" />
//           <Link
//             href="/"
//             className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
//           >
//             <Image
//               src="/videos.png"
//               alt=""
//               width={20}
//               height={20}
//             />
//             <span>Videos</span>
//           </Link>
//           <hr className="border-t-1 border-gray-50 w-36 self-center" />
//           <Link
//             href="/"
//             className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
//           >
//             <Image
//               src="/news.png"
//               alt=""
//               width={20}
//               height={20}
//             />
//             <span>News</span>
//           </Link>
//           <hr className="border-t-1 border-gray-50 w-36 self-center" />
//           <Link
//             href="/"
//             className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
//           >
//             <Image
//               src="/courses.png"
//               alt=""
//               width={20}
//               height={20}
//             />
//             <span>Courses</span>
//           </Link>
//           <hr className="border-t-1 border-gray-50 w-36 self-center" />
//           <Link
//             href="/"
//             className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
//           >
//             <Image
//               src="/lists.png"
//               alt=""
//               width={20}
//               height={20}
//             />
//             <span>Lists</span>
//           </Link>
//           <hr className="border-t-1 border-gray-50 w-36 self-center" />
//           <Link
//             href="/"
//             className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
//           >
//             <Image
//               src="/settings.png"
//               alt=""
//               width={20}
//               height={20}
//             />
//             <span>Settings</span>
//           </Link>
//         </div>
//         <Ad size="sm" />
//       </div>
//     </>
//   );
// }
