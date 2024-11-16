import Link from "next/link";

const NavButton = ({ href, children, className = "" }) => (
  <Link href={href} className={` text-white ${className}`}>
    {children}
  </Link>
);

export default NavButton;
