# triplex-storybook--docs-components-row--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-row--docs

---

# Row

Компонент строки сетки, который может содержать только компоненты Col.

## Особенности

* Принимает только компоненты Col в качестве children
* Имеет нижний отступ по умолчанию
* Можно отключить нижний отступ через `paddingBottom`

## Использование

import { Row, Col } from '@sberbusiness/triplex-next';

<Row>
    <Col size={6}>Колонка 1</Col>
    <Col size={6}>Колонка 2</Col>
</Row>

Copy

| Name          | Description                                 | Default | Control     |
| ------------- | ------------------------------------------- | ------- | ----------- |
| paddingBottom | Вертикальный нижний отступ.booleanundefined | true    | Set boolean |

Row 1, Col 1

Row 1, Col 2

Row 2, Col 1

Row 2, Col 2

Show code

## Stories

### Playground

Row 1, Col 1

Row 1, Col 2

Row 2, Col 1

Row 2, Col 2

Show code

### Default

Стандартные строки с двумя колонками равного размера

Row 1, Col 1

Row 1, Col 2

Row 2, Col 1

Row 2, Col 2

Show code

### Without Padding Bottom

Строки без нижнего отступа с двумя колонками

Row 1, Col 1

Row 1, Col 2

Row 2, Col 1

Row 2, Col 2

Show code
