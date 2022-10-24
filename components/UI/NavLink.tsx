import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { NavLinkProps } from "../../types";

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
