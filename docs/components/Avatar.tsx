import Image from "next/image";
import type { AuthorDetails } from "./team";

export function Avatar({ name, picture, xUsername }: AuthorDetails) {
  return (
    <div className="flex items-center flex-shrink-0 md:justify-start not-prose">
      <div className="w-[32px] h-[32px]">
        <Image
          alt={name}
          className="w-full rounded-full"
          height={32}
          priority
          src={picture}
          title={name}
          width={32}
        />
      </div>
      <dl className="ml-2 text-sm font-medium leading-4 text-left whitespace-no-wrap">
        <dt className="sr-only">Name</dt>
        <dd className="text-foreground mb-0.5">{name}</dd>
        {xUsername ? (
          <>
            <dt className="sr-only">X</dt>
            <dd>
              <a
                className="text-xs text-blue-500 no-underline betterhover:hover:text-blue-600 betterhover:hover:underline"
                href={`https://x.com/${xUsername}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {`@${xUsername}`}
              </a>
            </dd>
          </>
        ) : null}
      </dl>
    </div>
  );
}
