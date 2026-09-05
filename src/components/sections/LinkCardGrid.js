import Link from "next/link";
import Container from "@/components/layout/Container";
import NavCard from "@/components/sections/NavCard";

export default function LinkCardGrid({ title, items, verMas }) {
  return (
    <section className="py-12">
      <Container>
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <NavCard key={item.id} {...item} />
          ))}
        </div>
        {verMas && (
          <Link
            href={verMas.href}
            className="mt-6 inline-block text-sm font-medium underline underline-offset-4"
          >
            {verMas.label}
          </Link>
        )}
      </Container>
    </section>
  );
}
