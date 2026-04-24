import Link from "next/link";

const event19 =
  "https://www.eventbrite.com/e/grenzen-uberwinden-chorkonzert-kandern-tickets-1988182567580?aff=oddtdtcreator";

const event20 =
  "HIER_DEN_EVENTBRITE_LINK_FUER_20_JUNI_EINFUEGEN";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-10 font-sans dark:bg-black flex flex-col justify-between">
      
      <main className="mx-auto max-w-3xl rounded-2xl bg-white p-8 text-center shadow-lg dark:bg-zinc-900">
         <section className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow">
        <h1 className="mb-3 text-4xl font-bold text-gray-900 dark:text-white">
          Grenzen überwinden
        </h1>

        <h2 className="mb-6 text-2xl font-semibold text-gray-700 dark:text-gray-300">
          Chorkonzert Kandern
        </h2>

        <p className="mb-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          Wir laden Sie herzlich zu unserem großen Chorkonzert „Grenzen überwinden“ in Kandern ein.
        </p>

        <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          Reservieren Sie hier kostenlos Ihre Plätze für eines der beiden
          Konzerte. Die Buchung erfolgt über Eventbrite.
        </p>

        {/* KONZERT BUTTONS */}
        <div className="grid gap-5 md:grid-cols-2">
          
          <div className="rounded-xl border border-gray-200 p-6 dark:border-zinc-700">
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              Freitag, 19. Juni
            </h3>
            <p className="mb-5 text-gray-600 dark:text-gray-400">
              Konzertbeginn: 19:00 Uhr
            </p>
            <a
              href={event19}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Tickets reservieren
            </a>
          </div>

          <div className="rounded-xl border border-gray-200 p-6 dark:border-zinc-700">
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              Samstag, 20. Juni
            </h3>
            <p className="mb-5 text-gray-600 dark:text-gray-400">
              Konzertbeginn: 19:00 Uhr
            </p>
            <a
              href={event20}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Tickets reservieren
            </a>
          </div>

        </div>
                <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          Bitte nehmen Sie reservierte Plätze spätestens 20 Minuten vor Beginn ein. <br />
          Danach können freie Plätze weitergegeben werden.
        </p>

        {/* CHÖRE */}
        <div className="mt-10 text-left">
          <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white text-center">
            Mitwirkende Chöre
          </h3>

          <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-center">
            <li>
              <a
                href="https://popchor-tannenkirch.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Popchor Tannenkirch
              </a>
            </li>

            <li>
              <a
                href="https://www.gesangvereinholzen.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Gesangverein Holzen
              </a>
            </li>

            <li>
              Gesangverein Feuerbach 1865 e.V.
            </li>
          </ul>
        </div>


              </section>

      {/* FOOTER */}
      <footer className="mt-8 text-xs text-gray-500">
        <Link href="/impressum" className="hover:underline">
          Impressum
        </Link>
      </footer>
    </main>
    </div>
  );
}