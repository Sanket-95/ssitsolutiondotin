import mark96 from '@/assets/brand/mark-white-96.webp';
import mark192 from '@/assets/brand/mark-white-192.webp';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

/** Brand mark + wordmark lockup used in the navbar and footer. */
export function Logo({ className = '', showTagline = false }: LogoProps) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <img
        src={mark96}
        srcSet={`${mark96} 1x, ${mark192} 2x`}
        width={36}
        height={36}
        alt=""
        aria-hidden="true"
        decoding="async"
        className="h-9 w-9 shrink-0 object-contain"
      />
      <span className="flex flex-col leading-none">
        <span className="text-[17px] font-semibold tracking-tight text-white">
          SS IT <span className="font-normal text-slate-300">Solution</span>
        </span>
        {showTagline && (
          <span className="mt-1.5 text-[10px] font-medium tracking-[0.16em] text-muted uppercase">
            Software • Cloud • Automation
          </span>
        )}
      </span>
    </span>
  );
}
