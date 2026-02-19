# triplex-storybook--docs-components-textfields-textareafield--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-textfields-textareafield--docs

---

# TextareaField

Многострочное текстовое поле для ввода большого объема текста.

## Props

| Name            | Description                                                                                        | Default |
| --------------- | -------------------------------------------------------------------------------------------------- | ------- |
| textareaProps\* | Свойства компонента FormFieldTextarea.IFormFieldTextareaProps & RefAttributes<HTMLTextAreaElement> | \-      |
| prefix          | Префикс поля ввода.ReactNode                                                                       | \-      |
| status          | Визуальное состояние.EFormFieldStatusundefined                                                     | \-      |
| label           | Лейбл поля ввода.ReactNode                                                                         | \-      |
| size            | Размер.EComponentSizeundefined                                                                     | \-      |
| postfix         | Постфикс поля ввода.ReactNode                                                                      | \-      |
| description     | Описание поля ввода.ReactNode                                                                      | \-      |
| counter         | Счетчик символов.ReactNode                                                                         | \-      |

## Playground

Label

| Name            | Description                                  | Default           | Control                                             |
| --------------- | -------------------------------------------- | ----------------- | --------------------------------------------------- |
| textareaProps\* | Свойства компонента FormFieldTextarea.object | \-                | RAWtextareaProps :{placeholder : "Type to proceed"} |
| size            | Размер поляEComponentSize                    | EComponentSize.LG | Choose option...smmdlg                              |
| status          | Состояние поляEFormFieldStatus               | DEFAULT           | Choose option...defaultdisablederrorwarning         |
| label           | Текст лейблаstring                           | \-                | Label                                               |
| prefix          | Текст постфиксаstring                        | \-                |                                                     |
| postfix         | Текст префиксаstring                         | \-                |                                                     |
| description     | Текст описанияstring                         | \-                |                                                     |
| counter         | Текст счётчикаstring                         | \-                |                                                     |

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

8967Label

Show code

### Example

В сочетании с другими компонентами.

Label

(21) Description [Link text](#)

Show code
