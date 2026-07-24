import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {year} {profile.name}
        </p>
        <p className="tracking-wide">
          Jakarta · Taipei · Adelaide
        </p>
      </div>
    </footer>
  );
}
