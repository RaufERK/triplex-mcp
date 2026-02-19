# triplex-storybook--docs-components-cards-cardaction--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-cards-cardaction--docs

---

# CardAction

Интерактивная карточка с возможностью выбора. Поддерживает скругления и контролируемое состояние.

## Особенности

* **Темы**: General, Secondary
* **Размеры внутреннего отступа**: small (SM), medium (MD)
* **Размеры скругления карточки**: small (SM), medium (MD)
* **Состояния**: selected

## Использование

import { CardAction, ECardTheme, ECardRoundingSize, ECardContentPaddingSize } from '@sberbusiness/triplex-next';

const [selected, setSelected] = React.useState(false);

const handleChangeSelect = () => setSelected((prev) => !prev);

<CardAction
    selected={selected}
    toggle={setSelected}
    onToggle={action("onToggle")}
    roundingSize={ECardRoundingSize.MD}
    theme={ECardTheme.GENERAL}
    style={{ width: "232px" }}
>
    <CardAction.Media style={{ backgroundImage: "url(example.png)", height: "129px" }} />
    <CardAction.Content paddingSize={ECardContentPaddingSize.MD}>
        <CardAction.Content.Header>
            Title text
        </CardAction.Content.Header>
        <CardAction.Content.Body>
            Body content
        </CardAction.Content.Body>
        <CardAction.Content.Footer>
            Footer content
        </CardAction.Content.Footer>
    </CardAction.Content>
</CardAction>

Copy

| Name         | Description                                          | Default | Control                          |
| ------------ | ---------------------------------------------------- | ------- | -------------------------------- |
| paddingSize  | string                                               | md      | Choose option...mdsm             |
| roundingSize | Размер скругления карточкиECardRoundingSizeundefined | md      | Choose option...mdsm             |
| theme\*      | Тема карточкиECardTheme                              | general | Choose option...generalsecondary |

Title text

List item text

List item text

List item text

This message provides additional context or highlights important information to note.

Link text

Button text

Show code

## Stories

### Playground

Интерактивная демонстрация Card Action. Позволяет настраивать все основные свойства компонента.

Title text

List item text

List item text

List item text

This message provides additional context or highlights important information to note.

Link text

Button text

Show code

### Default

Title text

Body content

Show code

### General

Пример использования Card Action General. Скругление карточки: MD, размер внутреннего отступа контента карточки: MD.

Title text

List item text

List item text

List item text

This message provides additional context or highlights important information to note.

Link text

Button text

Show code

### Secondary

Пример использования Card Action Secondary. Скругление карточки: MD, размер внутреннего отступа контента карточки: MD.

Title text

List item text

List item text

List item text

This message provides additional context or highlights important information to note.

Link text

Show code

### Small padding size

Пример использования Card Action. Размер внутреннего отступа контента карточки: SM.

Title text

List item text

List item text

List item text

This message provides additional context or highlights important information to note.

Link text

Button text

Show code

### Small rounding size

Пример использования Card Action. Скругление карточки: SM.

Title text

List item text

List item text

List item text

This message provides additional context or highlights important information to note.

Link text

Button text

Show code

### Controlled

Пример использования Card Action. Позволяет переключаться в состояние Selected и обратно

Selected

Title text

List item text

List item text

List item text

This message provides additional context or highlights important information to note.

Link text

Button text

Show code
