# Astro with Tailwind

## Install

Использовать при установке Astro с параметром:

With NPM:

```bash
npm create astro@latest . -- --template zinadesign/astro-tailwind
```

With Yarn:

```bash
yarn create astro . --template zinadesign/astro-tailwind
```

Или в менее болтливом режиме:

```bash
npm create astro@latest . -- --template zinadesign/astro-tailwind --skip-houston --install --no-git
```

```bash
yarn create astro . --template zinadesign/astro-tailwind --skip-houston --install --no-git
```

Вместо точки можно писать имя папки проекта. Т.е. с точкой запускать внутри существующей папки проекта, а если с названием, то папка будет создана.

После установки запускать как обычно в Astro:

```bash
npm run dev
```

## Дополнительные возможности

* [Nesting](https://tailwindcss.com/docs/using-with-preprocessors#nesting) на основе встроенного в Tailwind плагина `postcss-nested`, для этого добавлен файл `postcss.config.cjs`
* [Prettier](https://prettier.io/) для форматирования классов Tailwind в файлах `.astro`, для этого добавлен файл `.prettierrc.json`
