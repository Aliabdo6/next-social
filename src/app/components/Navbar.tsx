import Link from "next/link";
import MobileMenu from "./MobileMenu";

export const Navbar = () => {
  return (
    <>
      <div className="">
        {/* lift */}
        <div className="">
          <Link href="/"> DEV</Link>
        </div>

        {/* center */}
        <div className=" hidden "></div>
        {/* right */}
        <div>
          <MobileMenu />
        </div>
      </div>
    </>
  );
};
