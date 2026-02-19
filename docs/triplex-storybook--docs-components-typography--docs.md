# triplex-storybook--docs-components-typography--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-typography--docs

---

# Typography

## Назначение компонентов

### Title

Используется для заголовков разных уровней: страниц, секций, блоков.

* Применяет шрифт **SBSansDisplay**
* Поддерживает разные веса: Regular, Medium, Semibold, Bold
* Не используется для длинного текста

### Text

Используется для основного текстового контента.

* Применяет шрифт **SBSansText**
* Оптимизирован для чтения
* Подходит для абзацев, описаний, инструкций

### Caption

Используется для вспомогательного текста.

* Подписи
* Подсказки
* Второстепенная информация

## Шрифты

Компоненты Typography используют шрифты **SBSansDisplay** и **SBSansText**. Шрифты включены в npm-пакет и должны быть подключены в проекте.

## Подключение шрифтов

@font-face {
    font-family: "SBSansDisplay";
    src: url("node_modules/@sberbusiness/triplex-next/public/assets/fonts/SBSansDisplay-Regular.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: "SBSansDisplayMedium";
    src: url("node_modules/@sberbusiness/triplex-next/public/assets/fonts/SBSansDisplay-Medium.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: "SBSansDisplaySemibold";
    src: url("node_modules/@sberbusiness/triplex-next/public/assets/fonts/SBSansDisplay-SemiBold.woff2") format("woff2");
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: "SBSansDisplayBold";
    src: url("node_modules/@sberbusiness/triplex-next/public/assets/fonts/SBSansDisplay-Bold.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: "SBSansText";
    src: url("node_modules/@sberbusiness/triplex-next/public/assets/fonts/SBSansText-Regular.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: "SBSansTextSemibold";
    src: url("node_modules/@sberbusiness/triplex-next/public/assets/fonts/SBSansText-Semibold.woff2") format("woff2");
    font-weight: 600;
    font-style: normal;
}

Copy
