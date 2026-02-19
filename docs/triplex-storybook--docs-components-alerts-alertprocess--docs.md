# triplex-storybook--docs-components-alerts-alertprocess--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-alerts-alertprocess--docs

---

# AlertProcess

Компонент процессного предупреждения с возможностью скрытия/раскрытия контента.

## Особенности

* **Типы**: Info, Warning, Error, System, Feature
* Передавать контент для спойлера возможно через компонент **AlertProcess.Spoiler**. Состояние спойлера задается через свойство **open**, а обработчик изменения состояния - через свойство **onOpen**
* Обработчик нажатия на иконку закрытия передается снаружи через свойство **onClose**
* Компонент не задает размеры или цвет текста. Контент передается с нужными компонентами Typography

## Props

| Name       | Description                                                      | Default |
| ---------- | ---------------------------------------------------------------- | ------- |
| type\*     | Тип предупреждения.EAlertType                                    | \-      |
| closable   | Модификатор возможности закрытия предупреждения.booleanundefined | \-      |
| onClose    | Функция обработки закрытия.(() => void) \| undefined             | \-      |
| renderIcon | Отображаемая иконка.ReactNode                                    | \-      |

## Playground

This message provides context or highlights important information to note.

| Name     | Description                                                                  | Default | Control                                       |
| -------- | ---------------------------------------------------------------------------- | ------- | --------------------------------------------- |
| children | Содержимое предупреждения (используйте Typography компоненты)React.ReactNode | \-      |                                               |
| type\*   | Тип предупрежденияEAlertType                                                 | \-      | Choose option...infowarningerrorsystemfeature |
| closable | Возможность закрытия предупрежденияboolean                                   | false   | FalseTrue                                     |

## Stories

### Default

This message provides context or highlights important information to note.

This message provides context or highlights important information to note.

This message provides context or highlights important information to note.

This message provides context or highlights important information to note.

This message provides context or highlights important information to note.

Show code

### With Custom Icon

This message provides context or highlights important information to note.

Show code

### Closable

This message provides context or highlights important information to note.

This message provides context or highlights important information to note.

This message provides context or highlights important information to note.

This message provides context or highlights important information to note.

This message provides context or highlights important information to note.

Show code

### With Button

This message provides context or highlights important information to note.Button link text

This message provides context or highlights important information to note.Button link text

This message provides context or highlights important information to note.Button link text

This message provides context or highlights important information to note.Button link text

This message provides context or highlights important information to note.Button link text

Show code

### With Link

This message provides context or highlights important information to note.[Link text](#)

This message provides context or highlights important information to note.[Link text](#)

This message provides context or highlights important information to note.[Link text](#)

This message provides context or highlights important information to note.[Link text](#)

This message provides context or highlights important information to note.[Link text](#)

Show code

### Spoiler

По вопросам финмониторинга обращайтесь в рабочие дни с 03:00 до 21:00 МСК с мобильного телефона по номеру 0321, доб. 6\. Звонки по России бесплатные.

У вас нет прав на подписание и отправку заявления в страховую компанию. Подписывать заявления, а также заверять документы, имеет право генеральный директор на основании устава, владалец ИП на основании доверенности.

Show code
