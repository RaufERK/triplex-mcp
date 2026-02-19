# triplex-storybook--docs-components-alerts-alertcontext--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-alerts-alertcontext--docs

---

# AlertContext

Компонент контекстного предупреждения.

## Особенности

* **Типы**: Info, Warning, Error, System

## Props

| Name       | Description                                                                                                       | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| type\*     | Тип предупреждения (info/warning/error/system).EAlertType.INFOEAlertType.WARNINGEAlertType.ERROREAlertType.SYSTEM | \-      |
| renderIcon | Отображаемая иконка.ReactNode                                                                                     | \-      |

## Playground

This message provides context or highlights important information to note.

| Name     | Description                    | Default | Control                                                                    |
| -------- | ------------------------------ | ------- | -------------------------------------------------------------------------- |
| children | Текст сообщенияReact.ReactNode | \-      | This message provides context or highlights important information to note. |
| type\*   | Тип предупрежденияEAlertType   | \-      | Choose option...infowarningerrorsystemfeature                              |

## Stories

### Default

This message provides context or highlights important information to note.

Show code

### Different Types

Компонент разных типов.

This message provides context or highlights important information to note.This message provides context or highlights important information to note.This message provides context or highlights important information to note.This message provides context or highlights important information to note.

Show code

### With Custom Icon

Компонент с иконкой, переданной через свойство renderIcon.

This message provides context or highlights important information to note.

Show code
