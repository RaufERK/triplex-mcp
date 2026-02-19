# triplex-storybook--docs-components-cards-cardstatic--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-cards-cardstatic--docs

---

# CardStatic

Статичная карточка. Поддерживает темы и размеры скругления. Контент собирается из Media и Content.

## Особенности

* **Темы**: General, Secondary
* **Размеры внутреннего отступа**: small (SM), medium (MD)
* **Размеры скругления карточки**: small (SM), medium (MD)
* **Состояния**: selected

## Использование

import { CardAction, ECardTheme, ECardRoundingSize, ECardContentPaddingSize } from '@sberbusiness/triplex-next';

<CardStatic
    roundingSize={ECardRoundingSize.MD}
    theme={ECardTheme.GENERAL}
    style={{ width: "232px" }}
>
    <CardStatic.Content paddingSize={ECardContentPaddingSize.MD}>
        <CardStatic.Content.Header>
            Subtitle text
        </CardStatic.Content.Header>
        <CardStatic.Content.Body>
            Body content
        </CardStatic.Content.Body>
    </CardStatic.Content>
</CardStatic>

Copy

| Name         | Description                                                      | Default              | Control |
| ------------ | ---------------------------------------------------------------- | -------------------- | ------- |
| roundingSize | Возможные размеры скругления карточки.ECardRoundingSizeundefined | ECardRoundingSize.MD | \-      |
| theme        | Возможные темы оформления карточки.ECardTheme                    | ECardTheme.GENERAL   | \-      |

Subtitle text

This message provides context or highlights important information to note.

This message provides additional context or highlights important information to note.

1234567,00

Текст пояснения

1234567,00

Текст пояснения

1234567,00

Текст пояснения

Link text

Show code

## Stories

### Playground

Интерактивная демонстрация Card Static. Позволяет настраивать все основные свойства компонента.

Subtitle text

This message provides context or highlights important information to note.

This message provides additional context or highlights important information to note.

1234567,00

Текст пояснения

1234567,00

Текст пояснения

1234567,00

Текст пояснения

Link text

Show code

### Default

Subtitle text

This message provides context or highlights important information to note.

Show code

### General

Пример использования Card Static General. Скругление карточки: MD, размер внутреннего отступа контента карточки: MD.

Subtitle text

This message provides context or highlights important information to note.

This message provides additional context or highlights important information to note.

1234567,00

Текст пояснения

1234567,00

Текст пояснения

1234567,00

Текст пояснения

Link text

Show code

### Secondary

Пример использования Card Action Secondary. Скругление карточки: MD, размер внутреннего отступа контента карточки: MD.

Subtitle text

This message provides context or highlights important information to note.

This message provides additional context or highlights important information to note.

1234567,00

Текст пояснения

1234567,00

Текст пояснения

1234567,00

Текст пояснения

Link text

Show code

### Small padding size

Пример использования Card Static. Размер внутреннего отступа контента карточки: SM.

Subtitle text

This message provides context or highlights important information to note.

This message provides additional context or highlights important information to note.

1234567,00

Текст пояснения

1234567,00

Текст пояснения

1234567,00

Текст пояснения

Link text

Show code

### Small rounding size

Пример использования Card Action. Скругление карточки: SM.

Subtitle text

This message provides context or highlights important information to note.

This message provides additional context or highlights important information to note.

1234567,00

Текст пояснения

1234567,00

Текст пояснения

1234567,00

Текст пояснения

Link text

Show code
