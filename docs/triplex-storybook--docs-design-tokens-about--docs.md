# triplex-storybook--docs-design-tokens-about--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/design-tokens-about--docs

---

# Design Tokens

Дизайн-токены — это набор базовых переменных, определяющих внешний вид компонентов. С помощью токенов можно реализовать темную тему или стилизовать приложение под цвета своего бренда.

В Triplex дизайн токен имеет следующую структуру: название_группы.название_токена = значение\_токена. Например: ColorBrand.100 = #E3FFFA. Группы токенов бывают двух видов - core, токены компонентов(локальные). Core группы токенов - ColorBasicAlpha, ColorBrand, ColorDarkBasicAlpha, ColorDarkNeutralAlpha, ColorDarkNeutral, ColorError, ColorInfo, ColorNeutralAlpha, ColorNeutral, ColorSuccess, ColorWarning. Локальные группы токенов соответствуют названию компонента. Пример локального токена: divider.background = '#E3FFFA'. Значением токена может быть либо строка, либо ссылка на core токен, например divider.background = 'ColorBrand.100'.

Поменять значения дизайн-токенов или выбрать темную тему для приложения можно через компонент ThemeProvider.
