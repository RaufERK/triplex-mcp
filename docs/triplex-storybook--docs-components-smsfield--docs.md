# triplex-storybook--docs-components-smsfield--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-smsfield--docs

---

# SMSField

Компонент для ввода СМС.

## Использование

`SMSField` состоит из подсказки `SMSField.Tooltip` с кнопкой `SMSField.Refresh`, поля ввода `SMSField.Input` и кнопки отправки `SMSField.Submit`. Можно добавить описание и счётчик.

| Name        | Description                                   | Default | Control                |
| ----------- | --------------------------------------------- | ------- | ---------------------- |
| description | Описание поля вводаstring                     | \-      | Перейдите по           |
| disabled    | Признак блокировки компонентаbooleanundefined | \-      | FalseTrue              |
| maxLength   | Максимальное количество символовnumber        | \-      |                        |
| placeholder | Плейсхолдер поля вводаstring                  | \-      | Введите код            |
| size\*      | Размер поляEComponentSize                     | \-      | Choose option...smmdlg |

Show code

## Stories

### Playground

Интерактивная демонстрация SMSField. Позволяет настраивать основные свойства компонента.

Show code

### Error

SMSField в состоянии error.

Текст ошибки

Текст ошибки

Текст ошибки

Show code

### Disabled

SMSField в состоянии disabled с введённым кодом и без.

Show code

### Sizes

Демонстрация различных размеров SMSField: SM (маленький), MD (средний), LG (большой). Каждый размер имеет свои отступы и высоту для разных случаев использования.

Show code
