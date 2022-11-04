import Link from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

import { NavLinkProps } from "../../types";

const NavLink: React.FC<PropsWithChildren<NavLinkProps>> = ({
  href,
  className,
  activeClassName,
  inactiveClassName,
  isExternalLink,
  children,
  ...props
}) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  const allClassNames = `${className} ${
    isActive ? activeClassName : inactiveClassName
  }`;

  return (
    <Link href={href}>
      <a
        className={allClassNames}
        {...props}
        target={isExternalLink ? "_blank" : "_self"}
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
