export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen px-4">
      <main className="text-center max-w-2xl mx-auto bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Grenzen überwinden
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
          Chorkonzert Kandern
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          Unser Online-Ticketreservierungssystem befindet sich derzeit noch im Aufbau.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          Ab dem 21. Mai können Sie hier Ihre Plätze reservieren.
          Wir freuen uns darauf, Sie beim Konzert begrüßen zu dürfen!
        </p>
      </main>
    </div>
  );
}
