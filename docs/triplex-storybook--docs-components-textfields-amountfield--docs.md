# triplex-storybook--docs-components-textfields-amountfield--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-textfields-amountfield--docs

---

# AmountField

## Props

| Name             | Description                                                              | Default |                |                                                                      |    |
| ---------------- | ------------------------------------------------------------------------ | ------- | -------------- | -------------------------------------------------------------------- | -- |
| inputProps\*     | Свойства поля ввода.Omit<IFormFieldInputProps, "inputMode" \| "onChange" | "type"  | "autoComplete" | "maxLength"> & { value: string; onChange: (value: string) => void; } | \- |
| currency         | Наименование валюты.stringundefined                                      | \-      |                |                                                                      |    |
| maxIntegerDigits | Максимальное количество знаков перед запятой.numberundefined             | 16      |                |                                                                      |    |
| fractionDigits   | Количество знаков после запятой.numberundefined                          | 2       |                |                                                                      |    |
| onClear          | Обработчик очищения значения.(() => void) \| undefined                   | \-      |                |                                                                      |    |
| prefix           | Префикс поля ввода.ReactNode                                             | \-      |                |                                                                      |    |
| status           | Визуальное состояние.EFormFieldStatusundefined                           | \-      |                |                                                                      |    |
| label            | Лейбл поля ввода.ReactNode                                               | \-      |                |                                                                      |    |
| size             | Размер.EComponentSizeundefined                                           | \-      |                |                                                                      |    |
| postfix          | Постфикс поля ввода.ReactNode                                            | \-      |                |                                                                      |    |
| description      | Описание поля ввода.ReactNode                                            | \-      |                |                                                                      |    |
| counter          | Счетчик символов.ReactNode                                               | \-      |                |                                                                      |    |

## Playground

LabelRUB

| Name             | Description                                            | Default           | Control                                     |
| ---------------- | ------------------------------------------------------ | ----------------- | ------------------------------------------- |
| inputProps\*     | Свойства поля вводаobject                              | \-                | RAWinputProps :{placeholder : "0,00"}       |
| status           | Состояние поляEFormFieldStatus                         | DEFAULT           | Choose option...defaultdisablederrorwarning |
| size             | Размер поляEComponentSize                              | EComponentSize.LG | Choose option...smmdlg                      |
| label            | Текст лейблаstring                                     | \-                | Label                                       |
| currency         | Валютаstring                                           | \-                | RUB                                         |
| prefix           | Текст префиксаstring                                   | \-                |                                             |
| postfix          | Текст постфиксаstring                                  | \-                |                                             |
| description      | Текст описанияstring                                   | \-                |                                             |
| counter          | Текст счётчикаstring                                   | \-                |                                             |
| maxIntegerDigits | Макс. знаков до запятойnumber                          | 16                |                                             |
| fractionDigits   | Знаков после запятойnumber                             | 2                 |                                             |
| onClear          | Обработчик очищения значения.(() => void) \| undefined | \-                | \-                                          |

## Stories

### Basic

Базовый пример.

LabelRUB

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

LabelRUB

(21) Description [Link text](#)

Show code
