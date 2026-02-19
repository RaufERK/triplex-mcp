# triplex-storybook--docs-components-textfields-textfield--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-textfields-textfield--docs

---

# TextField

Упрощенный компонент поля ввода, построенный на основе FormField и FormGroup.

## Основные возможности

* **Размеры**: SM (маленький), MD (средний), LG (большой - по умолчанию)
* Возможность добавить **счетчик символов** для динамического подсчета введенных символов
* Возможность добавить **префикс/постфикс**, дополнительные элементы слева и справа от поля

| Name            | Description                                                                           | Default                  | Control                                     |
| --------------- | ------------------------------------------------------------------------------------- | ------------------------ | ------------------------------------------- |
| inputProps\*    | Свойства поля вводаIFormFieldInputProps & { ref?: React.RefObject<HTMLInputElement> } | \-                       | Set object                                  |
| prefix          | Префикс поля ввода.ReactNode                                                          | \-                       | \-                                          |
| status          | Состояние поляEFormFieldStatus                                                        | EFormFieldStatus.DEFAULT | Choose option...defaultdisablederrorwarning |
| label           | Лейбл поля ввода.ReactNode                                                            | \-                       | \-                                          |
| size            | Размер поля вводаEComponentSize                                                       | EComponentSize.LG        | Choose option...smmdlg                      |
| postfix         | Постфикс поля ввода.ReactNode                                                         | \-                       | \-                                          |
| description     | Описание поля ввода.ReactNode                                                         | \-                       | \-                                          |
| counter         | Текст счетчика символовstring                                                         | \-                       | Set string                                  |
| labelText       | Текст лейблаstring                                                                    | \-                       | Set string                                  |
| showLabel       | Показать лейблboolean                                                                 | true                     | Set boolean                                 |
| placeholder     | Плейсхолдер поля вводаstring                                                          | \-                       | Set string                                  |
| prefixText      | Текст префиксаstring                                                                  | \-                       | Set string                                  |
| postfixText     | Текст постфиксаstring                                                                 | \-                       | Set string                                  |
| descriptionText | Текст описанияstring                                                                  | \-                       | Set string                                  |
| className       | Дополнительные CSS классыstring                                                       | \-                       | Set string                                  |

## Stories

### Playground

Интерактивная демонстрация TextField с расширенными controls. Позволяет настраивать все основные свойства компонента, включая тип поля, текст лейбла, плейсхолдер, префикс, постфикс и описание.

Label

(21) Description

0/201

Show code

### Default

Базовый пример использования TextField с лейблом и описанием.

Label

(21) Description

Show code

### Pass Ref To Input

Пример использования TextField с передачей ref на input.

Label

(21) Description

Show code

### With Prefix And Postfix

TextField с префиксом и постфиксом.

Label

(21) Description

Show code

### With Clear Button

TextField с кнопкой очистки значения.

Label

(21) Description

Show code

### With Counter

TextField с динамическим счетчиком символов. Счетчик показывает текущее количество символов и максимально допустимое.

Label

(21) Description

0/201

Show code

### Sizes

Демонстрация различных размеров TextField: SM (маленький), MD (средний), LG (большой - по умолчанию). Каждый размер имеет свои отступы и высоту для разных случаев использования.

### Размер SM (маленький)

Label

### Размер MD (средний)

Label

### Размер LG (большой) - по умолчанию

Label

Show code

### States

Различные состояния TextField: обычное, с ошибкой, отключенное.

Label

(21) Description

Label

Error text

Label

Warning text

Label

(21) Description

Show code

### Examples

Базовый пример использования TextField с лейблом и описанием.

Label

(21) Description [Link text](#)

0/201

Show code
