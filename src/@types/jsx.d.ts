import { DetailedHTMLProps, HTMLAttributes } from 'react'

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    crossOrigin?: string
    referrerPolicy?: string
    'data-emotion'?: string
  }
}

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