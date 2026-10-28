import { ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 sm:px-8">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
          >
            <GithubIcon className="size-4" />
            {profile.githubLabel}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={profile.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
          >
            Live site
            <ExternalLink className="size-3.5" strokeWidth={1.75} />
          </a>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}
          </p>
          <p className="tracking-wide">Jakarta · Taipei · Adelaide</p>
        </div>
      </div>
    </footer>
  );
}
