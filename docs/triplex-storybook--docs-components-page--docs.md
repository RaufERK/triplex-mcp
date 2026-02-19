# triplex-storybook--docs-components-page--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-page--docs

---

# Page

Компонент Page — каркас страницы. Принимает только компоненты `Page.Header`, `Page.Body` и `Page.Footer`.

## Особенности

* **Типы**: Page.Header, Page.Body и Page.Footer могут быть двух типов: `first` (на основе острова) и `second` (без фона)

| Name           | Description                                                   | Default | Control                     |
| -------------- | ------------------------------------------------------------- | ------- | --------------------------- |
| headerType     | Тип заголовка страницыEHeaderPageType                         | first   | Choose option...firstsecond |
| footerType     | Тип футера страницыEFooterPageType                            | first   | Choose option...firstsecond |
| verticalMargin | Вертикальные отступы у компонента BodyEBodyPageVerticalMargin | large   | Choose option...largesmall  |

## Stories

### Playground

# Title text

Description text

Button textButton text

Page content

Footer page text

Button textButton text

Show code

### Default

Базовая страница с заголовком, контентом и футером. Это дефолтная Page для использования в LightBox. Если контента мало, рекомендуется использовать Page.Body типа FIRST, чтобы не было пустого пространства.

# Title text

Optional description about the page

Button textButton text

Page content

Footer page text

Button textButton text

Show code

### Without Islands

Страница, где header, body и footer не являются островами. Используется в layout, а не в LightBox.

# Title text

Optional description about the page

Button textButton text

Page content

Footer page text

Button textButton text

Show code

### Withlands

Страница, где header, body и footer являются островами. Используется в LightBox.

# Title text

Optional description about the page

Button textButton text

Page content

Footer page text

Button textButton text

Show code
