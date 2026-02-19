# triplex-storybook--docs-components-islandaccordion--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-islandaccordion--docs

---

# IslandAccordion

Интерактивный компонент для организации контента, который позволяет пользователям раскрывать и скрывать разделы логически сгруппированной информации внутри ограниченного пространства.

```

```

## Особенности

* Позволяет использовать **статусы** success, wait, error, disabled, warning, с возможностью добавления подсказок при наведении курсора

## Props

### IslandAccordion

| Name | Description                                                        | Default |
| ---- | ------------------------------------------------------------------ | ------- |
| size | EComponentSizeundefined                                            | \-      |
| type | Тип компонента Island. Отличаются цвет и тень.EIslandTypeundefined | \-      |

### IslandAccordion.Item

| Name            | Description                                                                                                                           | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| title\*         | Нода с названием заголовка.ReactNode                                                                                                  | \-      |
| id\*            | Идентификатор вкладки (если не передать извне, то используется индекс. Также используется как ключ при рендере списка вкладок).string | \-      |
| num             | Цифра в кружке.numberundefined                                                                                                        | \-      |
| opened          | Раскрыт ли элемент.booleanundefined                                                                                                   | \-      |
| status          | Статус шага.EStepStatusundefined                                                                                                      | \-      |
| stepHint        | Подсказка к шагу.stringundefined                                                                                                      | \-      |
| disabled        | Заблокирован ли элемент.booleanundefined                                                                                              | \-      |
| onToggle        | Вызывается при клике по вкладке.((newOpened: boolean, id: string) => void) \| undefined                                               | \-      |
| onRemove        | Вызывается при удалении вкладки.((id: string) => void) \| undefined                                                                   | \-      |
| transitionProps | Свойства компонента Transition (react-transition-group).TransitionProps<HTMLDivElement> \| undefined                                  | \-      |

## Playground

* 1  
Title  
Content  
Button link textButton textButton text

| Name      | Description                                   | Default | Control                                               |
| --------- | --------------------------------------------- | ------- | ----------------------------------------------------- |
| size      | Размер компонентаEComponentSize               | md      | Choose option...smmdlg                                |
| type      | Тип визуального оформления островаEIslandType | type\_1 | Choose option...type\_1type\_2type\_3                 |
| removable | boolean                                       | \-      | FalseTrue                                             |
| disabled  | boolean                                       | \-      | FalseTrue                                             |
| status    | Статус компонентаEStepStatus                  | default | Choose option...defaultdoneactiveerrorwarningdisabled |
| title     | Текст заголовкаstring                         | Title   | Title                                                 |

## Stories

### Default

* Title  
Content  
Button link textButton textButton text

Show code

### Sizes

* Title  
Content  
Button link textButton textButton text
* Title  
Content  
Button link textButton textButton text
* Title  
Content  
Button link textButton textButton text

Show code

### Disabled

* Title  
Контент аккордеона  
Button Name

Show code

### Removable

* Title  
Контент аккордеона  
Button link textButton textButton text

Show code

### With Status

* 1  
Title  
Content  
Button link textButton textButton text
* 2  
Title  
Content  
Button link textButton textButton text
* 3  
Title  
Content  
Button link textButton textButton text
* 4  
Title  
Content  
Button link textButton textButton text
* 5  
Title  
Content  
Button link textButton textButton text
* 6  
Title  
Content  
Button link textButton textButton text

Show code

### With Step Hint

* 1  
Title  
Content  
Button link textButton textButton text

Show code

### Only One Open At A Time

* 1  
Title  
Content  
Button link textButton textButton text
* 2  
Title  
Content  
Button link textButton textButton text
* 3  
Title  
Content  
Button link textButton textButton text

Show code
