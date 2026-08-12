import Container from "@/components/ui/Container";

export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="pb-16 pt-40 sm:pt-48">
      <Container>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-2xl text-balance font-serif text-4xl leading-[1.1] text-espresso sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-balance font-body text-base leading-relaxed text-espresso-soft">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
