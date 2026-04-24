"use client";

import { useEffect } from "react";
import Link from "next/link";

const event19 = "1988182567580";
const event20 = "1988182567580"; // später durch anderes Event ersetzen

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.eventbrite.com/static/widgets/eb_widgets.js";
    script.async = true;

    script.onload = () => {
      const EB = (window as any).EBWidgets;
      if (!EB) return;

      EB.createWidget({
        widgetType: "checkout",
        eventId: event19,
        modal: true,
        modalTriggerElementId: "eventbrite-widget-modal-trigger-19",
        themeSettings: {
          brandColor: "#0042aa",
          fontColor: "#000000",
          background: "#e0edd4",
        },
        onOrderComplete: () => {
          console.log("Order complete for 19 June!");
        },
      });

      EB.createWidget({
        widgetType: "checkout",
        eventId: event20,
        modal: true,
        modalTriggerElementId: "eventbrite-widget-modal-trigger-20",
        themeSettings: {
          brandColor: "#0042aa",
          fontColor: "#000000",
          background: "#e0edd4",
        },
        onOrderComplete: () => {
          console.log("Order complete for 20 June!");
        },
      });
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-10 font-sans flex flex-col justify-between">
      <main className="mx-auto max-w-5xl rounded-2xl bg-white p-8 text-center shadow-lg">
        <section className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow">
          <h1 className="mb-3 mt-3 text-7xl font-bold text-gray-900">
            Grenzen überwinden
          </h1>

          <h2 className="mb-6 text-4xl font-semibold text-gray-700">
            Chorkonzert Kandern
          </h2>

          <div className="flex flex-wrap justify-evenly gap-4 mb-8 p-4">
            <span className="text-gray-600">Popchor Tannenkirch</span>
            <span className="text-gray-600">Gesangverein Holzen</span>
            <span className="text-gray-600">Gesangverein Feuerbach</span>
          </div>

          <div className="mb-8 space-y-4 text-lg leading-relaxed text-gray-600">
            <p>
              Wir laden Sie herzlich zu unserem großen Chorkonzert „Grenzen überwinden“
              in Kandern in der St. Clemens Kirche ein.
            </p>

            <p>
              Reservieren Sie hier kostenlos Ihre Plätze für eines der beiden Konzerte.
            </p>

            <p>
              Wir freuen uns sehr auf Ihr Kommen und auf einen gemeinsamen musikalischen Abend!
            </p>
          </div>

          {/* KONZERT BUTTONS */}
          <div className=" grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                Freitag, 19. Juni
              </h3>

              <p className="mb-5 text-gray-600">
                Konzertbeginn: 19:00 Uhr
              </p>

              <button
                id="eventbrite-widget-modal-trigger-19"
                type="button"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Hier buchen!
              </button>
            </div>

            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                Samstag, 20. Juni
              </h3>

              <p className="mb-5 text-gray-600">
                Konzertbeginn: 19:00 Uhr
              </p>

              <button
                id="eventbrite-widget-modal-trigger-20"
                type="button"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Hier buchen!
              </button>
            </div>
          </div>

          <noscript>
            <p className="mt-6 text-sm text-gray-500">
              JavaScript ist deaktiviert. Bitte buchen Sie direkt über
              Eventbrite.
            </p>
          </noscript>

          <p className="mt-8 text-sm text-gray-500">
            Bitte nehmen Sie reservierte Plätze spätestens 20 Minuten vor Konzertbeginn
            ein. <br />
            Danach können freie Plätze weitergegeben werden.
          </p>

          {/* CHÖRE */}
          <div className="mt-10 text-left">
            <h3 className="mb-4 text-xl font-semibold text-gray-900 text-center">
              Mitwirkende Chöre
            </h3>

            <ul className="space-y-3 text-center text-gray-700">
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

              <li>Gesangverein Feuerbach 1865 e.V.</li>
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