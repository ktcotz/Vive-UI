export default {
  title: 'Intro',
};

export const HelloFromTeamViveUI = () => (
  <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-8 sm:px-8">
    <div className="w-full max-w-xl rounded-2xl bg-white p-6 text-center shadow-2xl sm:p-10 md:p-12 lg:p-16">
      <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl">
        Vive‑UI
      </h1>
      <p className="mt-2 text-base text-gray-600 sm:mt-3 sm:text-lg md:text-xl">
        A modern React component library
      </p>

      <div className="mt-6 space-y-6 text-left">
        <h2 className="text-xl font-semibold text-gray-800 sm:text-2xl md:text-3xl">
          🚀 Getting Started
        </h2>
        <ul className="list-inside list-disc space-y-2 text-sm text-gray-700 sm:text-base md:text-lg">
          <li>👉 Follow the installation instructions below</li>
          <li>👉 Navigate to your chosen component in the sidebar</li>
          <li>🎨 Experiment with props and settings without writing code</li>
          <li>💻 Use the provided example implementations</li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold text-gray-800 sm:text-2xl md:text-3xl">
          🌱 Roadmap
        </h2>
        <p className="text-sm text-gray-600 sm:text-base md:text-lg">
          Future releases will include more components, example layouts, and full typing support.
        </p>
      </div>

      <div className="mt-10">
        <a
          href="https://github.com/ktcotz/Vive-UI"
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:px-8 sm:py-4 sm:text-base md:px-10 md:py-5 md:text-lg"
        >
          🔗 Go to Repository
        </a>
      </div>
    </div>
  </div>
);

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
