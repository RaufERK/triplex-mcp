# triplex-storybook--docs-components-segmentedcontrol--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-segmentedcontrol--docs

---

# SegmentedControl

Набор опций для выбора одного или нескольких вариантов.

## Props

| Name       | Description                                                                               | Default |
| ---------- | ----------------------------------------------------------------------------------------- | ------- |
| value\*    | Значение.string \| string\[\]                                                             | \-      |
| type\*     | Тип выбора элементов.ESegmentedControlType                                                | \-      |
| onSelect\* | Колбэк-функция выбора элемента.((value: string) => void) \| ((value: string\[\]) => void) | \-      |
| theme\*    | Визуальный стиль сегментов.ESegmentedControlTheme                                         | \-      |
| size\*     | Размер сегментов.ESegmentedControlSize                                                    | \-      |
| disabled   | Неактивное состояние.booleanundefined                                                     | \-      |

## Playground

SegmentSegmentSegmentSegmentSegment

| Name     | Description                                       | Default | Control                                                      |
| -------- | ------------------------------------------------- | ------- | ------------------------------------------------------------ |
| type\*   | Тип выбора элементов.ESegmentedControlType        | \-      | Choose option...singlemultiple                               |
| theme\*  | Визуальный стиль сегментов.ESegmentedControlTheme | \-      | Choose option...general\_1general\_2secondary\_1secondary\_2 |
| size\*   | Размер сегментов.ESegmentedControlSize            | \-      | Choose option...smmdlg                                       |
| disabled | Неактивное состояние.booleanundefined             | \-      | FalseTrue                                                    |

## Stories

### Basic

Базовый пример.

SegmentSegmentSegmentSegmentSegment

Show code

### Types

Демонстрация всех типов компонента.

Single

SegmentSegmentSegmentSegmentSegment

Multiple

SegmentSegmentSegmentSegmentSegment

Show code

### Themes

Демонстрация всех доступных тем компонента.

#### general\_1

SegmentSegmentSegmentSegmentSegment

#### general\_2

SegmentSegmentSegmentSegmentSegment

#### secondary\_1

SegmentSegmentSegmentSegmentSegment

#### secondary\_2

SegmentSegmentSegmentSegmentSegment

Show code

### Sizes

Демонстрация всех доступных размеров компонента.

#### SM

SegmentSegmentSegmentSegmentSegment

#### MD

SegmentSegmentSegmentSegmentSegment

#### LG

SegmentSegmentSegmentSegmentSegment

Show code

### Disabled

Демонстрация заблокированного состояния компонента.

SegmentSegmentSegmentSegmentSegment

Show code

### Example

В сочетании с иконками.

Show code
