import Link from 'next/link';
import ImageComponent from './Image';

function Logo({isCollapsed=false}: {isCollapsed?: boolean}) {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <ImageComponent
        src='/images/logo.png'
        alt='Cyd Alex-Emenike'
        width={44}
        objectFit='contain'
      />
      {!isCollapsed && (
        <div className="flex flex-col leading-none">
          <span
            className="font-great-vibes text-2xl"
            style={{ color: "var(--primary)" }}
          >
            Lady Cyd
          </span>
          <span
            className="font-cinzel text-[9px] tracking-[0.2em] uppercase"
            style={{ color: "white", opacity: 0.55 }}
          >
            Cyd Alex-Emenike
          </span>
        </div>
      )}
    </Link>
  )
}

export default Logo