export default {
  title: 'Intro',
};

export const InstallationGuide = () => (
  <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-8 sm:px-8">
    <div className="w-full max-w-xl rounded-2xl bg-white p-6 text-left shadow-2xl sm:p-10">
      <h1 className="mb-6 text-3xl font-bold text-gray-800 sm:text-4xl">Instalacja Vive‑UI</h1>

      <p className="mb-4 text-base text-gray-600 sm:text-lg">
        Aby Vive-UI działało poprawnie, dodaj w swoim globalnym pliku CSS (np.{' '}
        <code>style.css</code>) poniższe zmienne CSS:
      </p>

      <pre className="overflow-x-auto rounded-md bg-gray-100 p-4 font-mono text-sm text-gray-800">
        <code>
          {`@theme {
  --color-cosiek-300: red;
}`}
        </code>
      </pre>

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
