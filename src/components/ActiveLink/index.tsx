import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  activeClassName: string
  children: ReactElement
}

export function ActiveLink(props: ActiveLinkProps) {
  const { children, activeClassName, ...rest } = props
  const { asPath } = useRouter()

  const className = asPath === rest.href
    ? activeClassName
    : ''

  return (
    <Link {...rest}>
      {cloneElement(children, {
        className
      })}
    </Link>
  )
}