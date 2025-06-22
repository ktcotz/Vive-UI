export default {
  title: "Welcome",
};

export const ToViveUI = () => (
  <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 to-gray-100 p-8">
    <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-2xl text-center">
      <h1 className="text-4xl font-bold text-gray-800">Vive‑UI</h1>
      <p className="text-gray-600 mt-3">
        Modernistyczna biblioteka komponentów React
      </p>
      <div className="mt-6 space-y-4 text-left">
        <h2 className="text-2xl font-semibold text-gray-800">🚀 Jak zacząć?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>👉 Przejdź do wybranego komponentu w sidebarze</li>
          <li>🎨 Testuj różne propsy i ustawienia bez pisania kodu</li>
          <li>💻 Skorzystaj z przykładowych implementacji</li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">
          🌱 Plany rozwoju
        </h2>
        <p className="text-gray-600">
          Kolejne wersje wprowadzą więcej komponentów, przykładowe layouty i
          pełne typowanie.
        </p>
      </div>
      <div className="mt-8">
        <a
          href="https://github.com/ktcotz/Vive-UI"
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-lg bg-blue-600 text-white font-semibold py-3 px-6 hover:bg-blue-700 transition"
        >
          🔗 Przejdź do Repozytorium
        </a>
      </div>
    </div>
  </div>
);
