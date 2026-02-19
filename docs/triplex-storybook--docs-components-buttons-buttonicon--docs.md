# triplex-storybook--docs-components-buttons-buttonicon--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-buttons-buttonicon--docs

---

# ButtonIcon

Компонент кнопки-иконки с различными формами и состояниями.

## Особенности

* **Формы**: squircle, circle
* **Состояния**: active, disabled

## Использование

import { ButtonIcon, EButtonIconShape } from '@sberbusiness/triplex-next';

// Кнопка-иконка формы squircle (по умолчанию)
<ButtonIcon onClick={handleClick}>
    <DefaulticonStrokePrdIcon32 paletteIndex={5} />
</ButtonIcon>

// Круглая кнопка-иконка
<ButtonIcon shape={EButtonIconShape.CIRCLE} onClick={handleClick}>
    <DefaulticonStrokePrdIcon32 paletteIndex={5} />
</ButtonIcon>

// Кнопка-иконка в состоянии active
<ButtonIcon active onClick={handleClick}>
    <DefaulticonStrokePrdIcon32 paletteIndex={5} />
</ButtonIcon>

// Кнопка-иконка в состоянии disabled
<ButtonIcon disabled onClick={handleClick}>
    <DefaulticonStrokePrdIcon32 paletteIndex={5} />
</ButtonIcon>

Copy

| Name     | Description                          | Default  | Control                        |
| -------- | ------------------------------------ | -------- | ------------------------------ |
| shape    | Форма границы кнопкиEButtonIconShape | squircle | Choose option...circlesquircle |
| active   | Активное состояниеboolean            | \-       | Set boolean                    |
| disabled | Отключенное состояниеboolean         | \-       | Set boolean                    |

Show code

## Stories

### Playground

Show code

### Default

Show code

### Different Sizes

Кнопка-иконка разных размеров (16, 20, 24, 32)

Show code

### Disabled

Кнопка-иконка в состоянии disabled

Show code
