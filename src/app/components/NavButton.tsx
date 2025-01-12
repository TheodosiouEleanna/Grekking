import Link from "next/link";

interface NavButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function NavButton({
  href,
  children,
  className,
}: NavButtonProps) {
  return (
    <Link href={href} className={` text-white ${className}`}>
      {children}
    </Link>
  );
}
