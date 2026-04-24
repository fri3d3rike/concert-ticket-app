export default function Impressum() {
  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-10">
      <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow">
        
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Impressum
        </h1>

        <p className="mb-4">
          <strong>Veranstalter:</strong><br />
          Gesangverein Feuerbach 1865 e.V.
        </p>

        <p className="mb-4">
          <strong>In Kooperation mit:</strong><br />
          Popchor Tannenkirch<br />
          Gesangverein Holzen
        </p>

        <p className="mb-4">
          Name Vernstalter<br />
          Straße <br />
          79379 Müllheim
        </p>

        <p className="mb-4">
          Tel.: (07631) XXXX
        </p>

        <p>
          E-Mail:{" "}
          <a href="mailto:khdeiss@t-online.de" className="text-blue-600 hover:underline">
            email@domain.com
          </a>
        </p>

      </div>
    </main>
  );
}