import type React from 'react';
import { usePageContext } from 'vike-react/usePageContext';
import clsx from 'clsx';

export function Link({
    href,
    ...props
}: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) {
    const pageContext = usePageContext();
    const { urlPathname } = pageContext;
    const isActive = href === '/' ? urlPathname === href : href && urlPathname.startsWith(href);

    return <a {...props} href={href} className={clsx(props.className, isActive ? 'is-active' : undefined)} />;
}
