# triplex-storybook--docs-components-col--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-col--docs

---

# Col

Компонент колонки сетки, который используется внутри компонента Row.

## Особенности

* Размеры от 1 до 12 (12-колоночная сетка)
* Адаптивные размеры для разных экранов (sm, md, lg, xl)
* Поддержка отступов (offset)
* Управление видимостью (hidden/block)
* Следует использовать только внутри компонента Row

## Размеры экранов

* **sm**: ≥576px (планшеты)
* **md**: ≥768px (планшеты в альбомной ориентации)
* **lg**: ≥992px (десктопы)
* **xl**: ≥1200px (большие десктопы)

## Использование

import { Row, Col } from '@sberbusiness/triplex-next';

<Row>
    <Col size={6} sizeMd={4} sizeLg={3}>
        Col
    </Col>
</Row>

Copy

| Name     | Description          | Default | Control |
| -------- | -------------------- | ------- | ------- |
| size     | TColumnSizeundefined | 12      | \-      |
| sizeSm   | TColumnSizeundefined | \-      | \-      |
| sizeMd   | TColumnSizeundefined | \-      | \-      |
| sizeLg   | TColumnSizeundefined | \-      | \-      |
| sizeXl   | TColumnSizeundefined | \-      | \-      |
| offset   | TOffsetSizeundefined | \-      | \-      |
| offsetSm | TOffsetSizeundefined | \-      | \-      |
| offsetMd | TOffsetSizeundefined | \-      | \-      |
| offsetLg | TOffsetSizeundefined | \-      | \-      |
| offsetXl | TOffsetSizeundefined | \-      | \-      |
| hidden   | booleanundefined     | \-      | \-      |
| hiddenSm | booleanundefined     | \-      | \-      |
| hiddenMd | booleanundefined     | \-      | \-      |
| hiddenLg | booleanundefined     | \-      | \-      |
| hiddenXl | booleanundefined     | \-      | \-      |
| block    | booleanundefined     | \-      | \-      |
| blockSm  | booleanundefined     | \-      | \-      |
| blockMd  | booleanundefined     | \-      | \-      |
| blockLg  | booleanundefined     | \-      | \-      |
| blockXl  | booleanundefined     | \-      | \-      |

Col Content

Show code

## Stories

### Playground

Col Content

Show code

### Default

Размер колонки по-умолчанию

default size (size-12)

Show code

### Different Sizes

Демонстрация различных размеров колонок, включая размер по-умолчанию

default size (size-12)

size-2

size-3

size-6

Show code

### Responsive Sizes

Колонки с адаптивными размерами для разных экранов

Размеры колонки на разных экранах: sm - 6, md - 5, lg - 4, xl - 3

Размеры колонки на разных экранах: sm - 7, md - 8, lg - 9, xl - 10

Show code

### With Offsets

Колонки с отступами (offset)

size-4

size-4 offset-3

size-3 offset-3

size-3 offset-1

size-6 offset-2

Show code

### Responsive Offsets

Адаптивные отступы для разных размеров экрана

sizeMd=6

offsetMd=3

sizeSm=6

offsetSm=4

Show code

### Hidden Columns

Колонки, скрытые на определенных размерах экрана

Свойство hidden не установлено

Свойство hidden установлено для экрана sm

Свойство hidden установлено для экрана md

Свойство hidden установлено для экрана lg

Свойство hidden установлено для экрана xl

Show code
