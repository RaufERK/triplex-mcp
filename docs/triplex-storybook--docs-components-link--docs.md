# triplex-storybook--docs-components-link--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-link--docs

---

# Link

Гиперссылка с поддержкой дополнительного контента.

## Особенности

* **Дополнительный контент**: поддержка contentAfter и contentBefore для добавления иконок или другого контента до или после ссылки
* Компонент задает только цвет текста ссылки

## Props

| Name          | Description                                                                                             | Default   |    |
| ------------- | ------------------------------------------------------------------------------------------------------- | --------- | -- |
| children\*    | Тело гиперссылки.ReactNode                                                                              | \-        |    |
| contentBefore | Рендер функция предшествующего контента.(() => ReactElement<any, string \| JSXElementConstructor<any>>) | undefined | \- |
| contentAfter  | Рендер функция последующего контента.(() => ReactElement<any, string \| JSXElementConstructor<any>>)    | undefined | \- |

## Playground

Link text

| Name       | Description           | Default | Control   |
| ---------- | --------------------- | ------- | --------- |
| children\* | Текст ссылкиReactNode | \-      | Link text |

## Stories

### Default

[Link text](#)

Show code

### Examples

[External link with content after](#)[​External link with content before](#)[​External link with content before and after](#)

Show code
