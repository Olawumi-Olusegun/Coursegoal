
import { type PropsWithChildren } from 'react'

type ImageType = {
    image: {
        src: string;
        alt: string;
    }
}

type HeaderProps = PropsWithChildren<ImageType>

export default function Header({ image: { src, alt }, children }: HeaderProps) {
  return (
    <>
     <header>
        <img src={src} alt={alt} />
        {children}
     </header>
    </>
  )
}