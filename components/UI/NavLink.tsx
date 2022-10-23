import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

interface NavLinkProps extends LinkProps {
  activeClassName: string;
  inactiveClassName: string;
  className: string;
  children?: React.ReactNode;
}

export default function NavLink({
  href,
  className,
  activeClassName,
  inactiveClassName,
  children,
  ...props
}: NavLinkProps) {
  const router = useRouter();
  const isActive = router.pathname === href;
  const allClassNames = `${className} ${
    isActive ? activeClassName : inactiveClassName
  }`;

  return (
    <Link href={href}>
      <a className={allClassNames} {...props}>
        {children}
      </a>
    </Link>
  );
}
