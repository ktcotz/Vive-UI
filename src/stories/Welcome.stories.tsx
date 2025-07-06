export default {
  title: 'Welcome',
};

export const ToViveUI = () => (
  <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-8 sm:px-8">
    <div className="w-full max-w-xl rounded-2xl bg-white p-6 text-center shadow-2xl sm:p-10">
      <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">Vive‑UI</h1>
      <p className="mt-2 text-base text-gray-600 sm:mt-3 sm:text-lg">
        Modernistyczna biblioteka komponentów React
      </p>

      <div className="mt-6 space-y-4 text-left">
        <h2 className="text-xl font-semibold text-gray-800 sm:text-2xl">🚀 Jak zacząć?</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700 sm:text-base">
          <li>👉 Przejdź do wybranego komponentu w sidebarze</li>
          <li>🎨 Testuj różne propsy i ustawienia bez pisania kodu</li>
          <li>💻 Skorzystaj z przykładowych implementacji</li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold text-gray-800 sm:text-2xl">🌱 Plany rozwoju</h2>
        <p className="text-sm text-gray-600 sm:text-base">
          Kolejne wersje wprowadzą więcej komponentów, przykładowe layouty i pełne typowanie.
        </p>
      </div>

      <div className="mt-8">
        <a
          href="https://github.com/ktcotz/Vive-UI"
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 sm:px-6 sm:py-3 sm:text-base"
        >
          🔗 Przejdź do Repozytorium
        </a>
      </div>
    </div>
  </div>
);
