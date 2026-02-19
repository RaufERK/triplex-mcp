# triplex-storybook--docs-components-notification--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-notification--docs

---

# Notification

Компонент уведомлений, используемый для отображения сообщений об успехе, ошибках или предупреждениях. Он включает в себя иконку, текстовое описание и, по желанию, список. Также включает кнопку для закрытия уведомления.

### Title text

This message provides context or highlights important information to note.

Show code

| Name                   | Description                                          | Default | Control                                                                    |
| ---------------------- | ---------------------------------------------------- | ------- | -------------------------------------------------------------------------- |
| withExtraBottomPadding | Признак для увеличения отступа снизуboolean          | false   | FalseTrue                                                                  |
| isShowCloseOnHover     | Показывать кнопку закрытия при наведенииboolean      | false   | FalseTrue                                                                  |
| showIcon               | Показывать иконкуboolean                             | true    | FalseTrue                                                                  |
| iconType               | Тип иконкиsuccesswarningerrordefault                 | success | Choose option...successwarningerrordefault                                 |
| showHeader             | Показывать заголовокboolean                          | true    | FalseTrue                                                                  |
| headerText             | Текст заголовкаstring                                | \-      | Title text                                                                 |
| showContent            | Показывать содержимоеboolean                         | true    | FalseTrue                                                                  |
| contentText            | Текст содержимогоstring                              | \-      | This message provides context or highlights important information to note. |
| showList               | Показывать списокboolean                             | false   | FalseTrue                                                                  |
| listItems              | Элементы списка (разделенные точкой с запятой)string | \-      | List item text 1;List item text 2;List item text 3                         |
| showFooter             | Показывать футерboolean                              | false   | FalseTrue                                                                  |
| showClose              | Показывать кнопку закрытияboolean                    | true    | FalseTrue                                                                  |
| showTime               | Показывать времяboolean                              | false   | FalseTrue                                                                  |
| time                   | Времяstring                                          | \-      | 22:45                                                                      |

## Stories

### Playground

Интерактивная демонстрация Notification с расширенными controls. Позволяет настраивать все основные свойства компонента, включая отображение иконки, заголовка, содержимого, списка, футера, кнопки закрытия и времени.

### Title text

This message provides context or highlights important information to note.

Show code

### Status

### Success

This message provides context or highlights important information to note.

* List item text;
* List item text;
* List item text;

### Warning

This message provides context or highlights important information to note.

* List item text;
* List item text;
* List item text;

### Error

This message provides context or highlights important information to note.

* List item text;
* List item text;
* List item text;

Show code

### Business

### Normal

### Title text

This message provides context or highlights important information to note.

22:45

### Button

### Title text

This message provides context or highlights important information to note.

Button text

22:45

### Alert

### Title text

This message provides context or highlights important information to note.

This message provides context or highlights important information to note.

22:45

Show code

### Business Stack

### Normal

### Title text

This message provides context or highlights important information to note.

22:45

### Button

### Title text

This message provides context or highlights important information to note.

Button text

22:45

### Alert

### Title text

This message provides context or highlights important information to note.

This message provides context or highlights important information to note.

22:45

Show code

### Feedback Without Stars

### Default

### Предложите идею

Чего не хватает вам и что оценят другие пользователи?

Как мы можем улучшить сервис?

Отправить

### Filled

### Предложите идею

Чего не хватает вам и что оценят другие пользователи?

Отправить

### Error

### Предложите идею

Чего не хватает вам и что оценят другие пользователи?

Как мы можем улучшить сервис?

Введите текст сообщения.

Отправить

### Success

### Спасибо за оценку!

Ваши отзывы помогают нам стать лучше.

Show code

### Feedback With Stars

### Default

### Оцените оформление кредита

Оцените, насколько удобным был процесс оформления недавно полученого кредита.

### Filled

### Оцените оформление кредита

Оцените, насколько удобным был процесс оформления недавно полученого кредита.

Как мы можем улучшить сервис?

Отправить

### Error

### Оцените оформление кредита

Оцените, насколько удобным был процесс оформления недавно полученого кредита.

Встречается неточная информация

Уведомления приходят ночью

Не хватает данных в сообщении

Отправить

### Success

### Спасибо за оценку!

Ваши отзывы помогают нам стать лучше.

Show code
