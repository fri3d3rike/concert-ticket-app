"use client";

import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

const concerts = [
  {
    title: "Freitag, 19. Juni",
    time: "Konzertbeginn: 19:00 Uhr",
    eventId: "1988762157148",
  },
  {
    title: "Samstag, 20. Juni",
    time: "Konzertbeginn: 19:00 Uhr",
    eventId: "1988766320601",
  },
];

const eventbriteWidgetTheme = {
  brandColor: "#8B2E2E",
  fontColor: "#2E2723",
  background: "#EFE3D2",
};

const getEventbriteModalTriggerId = (eventId: string) =>
  `eventbrite-widget-modal-trigger-${eventId}`;

export default function Home() {
  const createEventbriteWidget = () => {
    const EB = (
      window as typeof window & {
        EBWidgets?: {
          createWidget: (options: {
            widgetType: "checkout";
            eventId: string;
            modal: true;
            modalTriggerElementId: string;
            themeSettings: {
              brandColor: string;
              fontColor: string;
              background: string;
            };
            onOrderComplete: () => void;
          }) => void;
        };
      }
    ).EBWidgets;

    if (!EB) return;

    concerts.forEach((concert) => {
      const modalTriggerElementId = getEventbriteModalTriggerId(
        concert.eventId,
      );
      const trigger = document.getElementById(modalTriggerElementId);

      if (!trigger || trigger.dataset.eventbriteWidgetReady) return;

      EB.createWidget({
        widgetType: "checkout",
        eventId: concert.eventId,
        modal: true,
        modalTriggerElementId,
        themeSettings: eventbriteWidgetTheme,
        onOrderComplete: () => {
          console.log("Order complete!");
        },
      });

      trigger.dataset.eventbriteWidgetReady = "true";
    });
  };

  return (
    <div className="min-h-screen bg-concert-cream font-sans text-concert-text">
      <Script
        src="https://www.eventbrite.de/static/widgets/eb_widgets.js" 
        strategy="afterInteractive"
        onReady={createEventbriteWidget}
      />

      <main>
        <section className="relative min-h-[620px] overflow-hidden px-5 py-10 text-center text-white sm:py-14">
          <div className="absolute inset-0">
            <Image
              src="/chorbild.jpeg"
              alt="Chorprobe für das Chorkonzert Grenzen überwinden"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[rgba(46,39,35,0.62)]" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-concert-cream to-transparent" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[540px] max-w-5xl flex-col items-center justify-center">
            <div className="mb-6 h-px w-24 bg-concert-gold" />
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#F1D8A9]">
              Chorkonzert Kandern
            </p>
            <h1 className="max-w-4xl text-5xl font-bold leading-tight sm:text-7xl">
              Grenzen überwinden
            </h1>

            <div className="p-8 mb-4 flex flex-wrap justify-center gap-6 text-sm font-medium text-concert-forest">
                            <span className="text-sm font-semibold  tracking-[0.24em] text-[#F1D8A9]">
                Gesangverein Feuerbach
              </span>

              <span className="text-sm font-semibold  tracking-[0.24em] text-[#F1D8A9]">
                Gesangverein Holzen
              </span>

              <span className="text-sm font-semibold  tracking-[0.24em] text-[#F1D8A9]">
                Popchor Tannenkirch
              </span>

            </div>
            <p className="mt-2 max-w-2xl text-lg leading-8 text-[#F7F1E8] sm:text-xl">
              Ein gemeinsamer musikalischer Abend in der Stadtkirche St. Clemens
            </p>
          </div>
        </section>

        <section className="px-5 pb-14 pt-4">
          <div className="mx-auto max-w-5xl rounded-lg border border-concert-gold/25 bg-concert-beige p-6 shadow-[0_24px_70px_rgba(46,39,35,0.12)] sm:p-10">
            <div className="mx-auto mb-9 max-w-3xl space-y-4 text-center text-lg leading-relaxed text-concert-text">
              <p>
                Herzliche Einladung zu unserem Chorkonzert „Grenzen
                überwinden“ in Kandern in der St. Clemens Kirche
              </p>

              <p>
                Hier geht es zu kostenlosen Platzreservierung.
              </p>

            </div>

            <div className="mx-auto mb-10 h-px max-w-xs bg-concert-gold" />

            {/* EVENTBRITE CHECKOUTS */}
            <div id="tickets" className="scroll-mt-8">
              <h2 className="mb-6 text-center text-2xl font-semibold text-concert-burgundy">
                Tickets reservieren
              </h2>

              <div className="grid gap-5 lg:grid-cols-2">
                {concerts.map((concert) => (
                  <article
                    key={concert.eventId}
                    className="overflow-hidden rounded-lg border border-concert-gold/30 bg-concert-cream shadow-inner"
                  >
                    <div className="border-b border-concert-gold/25 px-5 py-6 text-center">
                      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-concert-gold">
                        Konzerttermin
                      </p>
                      <h3 className="text-3xl font-bold text-concert-text">
                        {concert.title}
                      </h3>
                      <p className="mt-4 text-lg text-concert-forest">
                        {concert.time}
                      </p>
                      <button
                        id={getEventbriteModalTriggerId(concert.eventId)}
                        type="button"
                        className="mt-6 inline-flex rounded-md bg-concert-burgundy px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-concert-burgundy-dark"
                      >
                        Tickets reservieren
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <noscript>
              <p className="mt-6 text-sm text-concert-forest">
                JavaScript ist deaktiviert. Bitte buchen Sie direkt über
                Eventbrite.
              </p>
            </noscript>

            <p className="mt-8 text-center text-sm leading-6 text-concert-forest">
              Bitte nehmen Sie reservierte Plätze spätestens 20 Minuten vor
              Konzertbeginn ein. <br />
              Danach können freie Plätze weitergegeben werden.
            </p>

            {/* CHÖRE */}
            <div className="mt-12 text-left">
              <h3 className="mb-5 text-center text-xl font-semibold text-concert-text">
                Mitwirkende Chöre
              </h3>

              <ul className="grid gap-3 text-center text-concert-text sm:grid-cols-3">
                <li className="rounded-md bg-concert-cream px-4 py-3">
                  Gesangverein Feuerbach 1865 e.V.
                </li>
                <li className="rounded-md bg-concert-cream px-4 py-3">
                  <a
                    href="https://www.gesangvereinholzen.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-concert-burgundy hover:text-concert-burgundy-dark hover:underline"
                  >
                    Gesangverein Holzen
                  </a>
                </li>
                <li className="rounded-md bg-concert-cream px-4 py-3">
                  <a
                    href="https://popchor-tannenkirch.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-concert-burgundy hover:text-concert-burgundy-dark hover:underline"
                  >
                    Popchor Tannenkirch
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-concert-gold/25 px-5 py-7 text-center text-xs text-concert-forest">
          <Link
            href="/impressum"
            className="font-medium text-concert-burgundy hover:text-concert-burgundy-dark hover:underline"
          >
            Impressum
          </Link>
        </footer>
      </main>
    </div>
  );
}
