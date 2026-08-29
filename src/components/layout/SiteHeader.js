import Link from "next/link";
import Container from "@/components/layout/Container";

export default function SiteHeader() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <Container className="flex h-16 items-center">
        <Link href="/" className="font-semibold">
          Robótica — UNIMET
        </Link>
      </Container>
    </header>
  );
}
