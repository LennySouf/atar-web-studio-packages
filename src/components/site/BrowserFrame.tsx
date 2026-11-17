import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  url: string;
  className?: string;
  eager?: boolean;
};

export function BrowserFrame({ src, alt, url, className, eager }: Props) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-foreground/15 bg-card shadow-[var(--shadow-card)]",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-foreground/10 bg-secondary px-3 py-2">
        <span className="size-2 rounded-full bg-primary/70" />
        <span className="size-2 rounded-full bg-highlight" />
        <span className="size-2 rounded-full bg-foreground/20" />
        <span className="ml-2 truncate rounded-full bg-background px-3 py-0.5 text-[10px] text-muted-foreground">
          {url}
        </span>
      </div>
      <img
        src={src}
        alt={alt}
        width={1200}
        height={912}
        loading={eager ? "eager" : "lazy"}
        className="block aspect-[1200/912] w-full object-cover object-top"
      />
    </div>
  );
}
