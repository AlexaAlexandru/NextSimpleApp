import Link from "next/link";
import Image from "next/image";
const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/photo.png" width={128} height={77} alt="" />

        <h1> People List</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/people/about">About</Link>
      <Link href="/people/people">People Listing</Link>
    </nav>
  );
};

export default NavBar;
