# triplex-storybook--docs-components-textfields-numberfield--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-textfields-numberfield--docs

---

# NumberField

Текстовое поле для ввода числовых значений.

## Props

| Name         | Description                                                                                    | Default |
| ------------ | ---------------------------------------------------------------------------------------------- | ------- |
| inputProps\* | Свойства поля ввода.IFormFieldInputProps & { ref?: RefObject<HTMLInputElement> \| undefined; } | \-      |
| prefix       | Префикс поля ввода.ReactNode                                                                   | \-      |
| status       | Визуальное состояние.EFormFieldStatusundefined                                                 | \-      |
| label        | Лейбл поля ввода.ReactNode                                                                     | \-      |
| size         | Размер.EComponentSizeundefined                                                                 | \-      |
| postfix      | Постфикс поля ввода.ReactNode                                                                  | \-      |
| description  | Описание поля ввода.ReactNode                                                                  | \-      |
| counter      | Счетчик символов.ReactNode                                                                     | \-      |

## Playground

Label

| Name         | Description                    | Default           | Control                                     |
| ------------ | ------------------------------ | ----------------- | ------------------------------------------- |
| inputProps\* | Свойства поля вводаobject      | \-                | RAWinputProps :{placeholder : "0"}          |
| size         | Размер поляEComponentSize      | EComponentSize.LG | Choose option...smmdlg                      |
| status       | Состояние поляEFormFieldStatus | DEFAULT           | Choose option...defaultdisablederrorwarning |
| label        | Текст лейблаstring             | \-                | Label                                       |
| prefix       | Текст префиксаstring           | \-                |                                             |
| postfix      | Текст постфиксаstring          | \-                |                                             |
| description  | Текст описанияstring           | \-                |                                             |
| counter      | Текст счётчикаstring           | \-                |                                             |

## Stories

### Basic

Базовый пример.

Label

Show code

### Sizes

Размеры

Label

Label

Label

Show code

### Statuses

Статусы.

Label

Label

Label

Label

Show code

### With clear button

С кнопкой очистки.

Label

Show code

### Example

В сочетании с другими компонентами.

Labelмм

(21) Description [Link text](#)

Show code
