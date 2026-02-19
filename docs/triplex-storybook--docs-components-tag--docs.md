# triplex-storybook--docs-components-tag--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-tag--docs

---

# Tag

Компонент, который демонстрирует выбранное значение того или иного параметра.

| Name              | Description                                                                 | Default | Control                |
| ----------------- | --------------------------------------------------------------------------- | ------- | ---------------------- |
| id\*              | Уникальный идентификатор.string                                             | \-      | default-tag            |
| size\*            | Размер.EComponentSize                                                       | \-      | Choose option...smmdlg |
| disabled          | Отключенное состояние.booleanundefined                                      | \-      | Set object             |
| onEdit            | Колбэк-функция при редактировании.((id: string) => void) \| undefined       | \-      | \-                     |
| onRemove          | Колбэк-функция при удалении.((id: string) => void) \| undefined             | \-      | \-                     |
| editButtonProps   | Дополнительные свойства для кнопки редактирования.IButtonIconPropsundefined | \-      | Set object             |
| removeButtonProps | Дополнительные свойства для кнопки удаления.IButtonIconPropsundefined       | \-      | Set object             |

Selected value

Show code

## Stories

### Playground

Selected value

Show code

### Default

Selected value

Show code

### Basic

Базовый тег с функцией удаления.

Selected value

Show code

### Edit

Тег с возможностью редактирования и удаления.

Selected value

Show code

### Sizes

Теги разных размеров: SM, MD, LG.

Selected valueSelected valueSelected value

Show code

### Disabled

Отключенный тег.

Selected value

Show code

### With custom button props

Тег с кастомными свойствами для кнопок редактирования и удаления.

Selected value

Show code

### With overflow

Тег с длинным текстом, который обрезается многоточием.

Very long tag text that should be truncated with ellipsis

Show code
