import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-24 text-center">
      <Image
        src="/images/hilary.png"
        alt="Portrait of Tangunu Hilary"
        width={220}
        height={220}
        priority
        className="rounded-full border border-line object-cover"
      />
      <div className="flex flex-col gap-3">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-blue-soft">
          Portfolio in progress
        </p>
        <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
          Tangunu Hilary
        </h1>
        <p className="mx-auto max-w-xl text-muted">
          Networking &middot; Network Security &middot; Ethical Hacking &middot;
          Mobile Development &middot; Web Development
        </p>
      </div>
    </main>
  );
}
