/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference types="next/navigation-types/compat/navigation" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

import { DetailedHTMLProps, HTMLAttributes } from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      html: DetailedHTMLProps<HTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>
      head: DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>
      link: DetailedHTMLProps<HTMLAttributes<HTMLLinkElement>, HTMLLinkElement>
      body: DetailedHTMLProps<HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>
      style: DetailedHTMLProps<HTMLAttributes<HTMLStyleElement>, HTMLStyleElement>
      main: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      div: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
    }
  }
}
