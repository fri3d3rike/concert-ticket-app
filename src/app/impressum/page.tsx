export default function Impressum() {
  return (
    <main className="min-h-screen bg-concert-cream px-4 py-10 text-concert-text">
      <div className="mx-auto max-w-2xl rounded-lg border border-concert-gold/25 bg-concert-beige p-8 shadow-[0_24px_70px_rgba(46,39,35,0.12)]">
        <div className="mb-6 h-px w-20 bg-concert-gold" />

        <h1 className="mb-6 text-3xl font-bold text-concert-text">Impressum</h1>

        <p className="mb-4">
          <strong className="text-concert-forest">Veranstalter:</strong>
          <br />
          Gesangverein Feuerbach 1865 e.V.
          <br />
          Gesangverein Holzen
          <br />
          Popchor Tannenkirch
        </p>


        <p className="mb-4">
          <a
            href="https://ulrikerombach.jimdofree.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-concert-burgundy hover:text-concert-burgundy-dark hover:underline"
          >
            Ulrike Rombach
          </a>
          <br />
          Im Schorner 1 <br />
          Riedlingen
        </p>

        <p className="mb-4">Tel.: (0177) 7878872</p>

        <p>
          E-Mail:{" "}
          <a
            href="mailto:info@ulrikerombach.de"
            className="font-medium text-concert-burgundy hover:text-concert-burgundy-dark hover:underline"
          >
            info@ulrikerombach.de
          </a>
        </p>
      </div>
    </main>
  );
}
