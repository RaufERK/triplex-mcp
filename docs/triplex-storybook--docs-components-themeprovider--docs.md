# triplex-storybook--docs-components-themeprovider--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-themeprovider--docs

---

# ThemeProvider

ThemeProvider - компонент для управления темами в приложении. Позволяет переключаться между светлой и темной темами, а также переопределять дизайн-токены.

| Name           | Description                                                                                  | Default                 | Control                   |
| -------------- | -------------------------------------------------------------------------------------------- | ----------------------- | ------------------------- |
| scopeClassName | Класс для области видимости CSS-переменныхstringundefined                                    | \-                      | Set string                |
| scopeRef\*     | Ref на HTML элемент, внутри которого будет действовать текущий конфиг.RefObject<HTMLElement> | \-                      | \-                        |
| theme          | Дизайн-тема Triplex NextETriplexNextThemeundefined                                           | ETriplexNextTheme.LIGHT | Choose option...lightdark |
| tokens         | Переопределяемые токеныTDesignTokensPartialundefined                                         | \-                      | Set object                |
| children       | \-                                                                                           | \-                      | \-                        |

## Тема по умолчанию

Это пример использования ThemeProvider с темой по умолчанию.

Button text

Show code

## Stories

### Default

ThemeProvider с темой по умолчанию (светлая тема).

## Тема по умолчанию

Это пример использования ThemeProvider с темой по умолчанию.

Button text

Show code

### Dark Theme

ThemeProvider с темной темой.

## Темная тема

Это пример использования ThemeProvider с темной темой.

Button text

Show code

### Custom Tokens

ThemeProvider с переопределенными токенами.

## Кастомные токены

Этот пример демонстрирует переопределение токенов темы.

Button text

Show code

### Theme Switcher

Интерактивный пример переключения между темами.

## Переключатель тем

Текущая тема: Светлая

Переключить на темную тему

Show code

### Scoped Theme

Пример использования scopeRef для ограничения области действия темы.

## Область вне ThemeProvider

Этот контент использует стандартные стили браузера.

Button text

## Область с темной темой

Этот контент использует темную тему через scopeRef.

Button text

Show code
