# Vive-UI

[![npm version](https://img.shields.io/npm/v/viveui.svg)](https://www.npmjs.com/package/viveui)
[![Build Status](https://img.shields.io/github/actions/workflow/status/ktcotz/Vive-UI/ci.yml?branch=main)](https://github.com/ktcotz/Vive-UI/actions)
[![License](https://img.shields.io/npm/l/viveui.svg)](LICENSE)

**Vive-UI** to nowoczesna, lekkka biblioteka komponentów UI dla React, napisana w TypeScript i stylizowana za pomocą TailwindCSS.

---

## 🚀 Instalacja

Zainstaluj Vive-UI w swoim projekcie:

```bash
npm install viveui
# lub
yarn add viveui
```

## ✨ Szybki start

```bash
import { Button } from 'viveui';

export default function App() {
  return (
    <div className="p-4">
      <Button variant="primary" size="md">
        Kliknij mnie
      </Button>
    </div>
  );
}
```

## ⚠️ Wymagania dotyczące styli

Vive-UI opiera się na **TailwindCSS** do stylizacji komponentów.  
Oznacza to, że w projekcie, w którym korzystasz z Vive-UI, powinieneś mieć skonfigurowany TailwindCSS, aby style działały poprawnie.

Jeśli nie masz Tailwinda w swoim projekcie, komponenty będą renderować się bez stylów.  
Możesz dodać TailwindCSS do swojego projektu, korzystając z oficjalnej dokumentacji:  
[https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)

---

W przyszłości planujemy dodać także gotowy plik CSS do importu, aby uprościć użycie Vive-UI w projektach bez Tailwinda.

## 📖 Dokumentacja i demo

Pełną dokumentację i live demo znajdziesz w Storybooku:

[https://vive-ui.vercel.app](https://vive-ui.vercel.app)

Aby uruchomić Storybook lokalnie:

```bash
npm run storybook
```

## 🤝 Współpraca

Masz pomysł na nowy komponent lub poprawkę? Chętnie przyjmujemy pull requesty i sugestie!

**Dziękujemy, że korzystasz z Vive-UI! 🎉**
