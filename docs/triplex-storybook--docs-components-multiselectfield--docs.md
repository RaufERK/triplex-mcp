# triplex-storybook--docs-components-multiselectfield--docs

Source: https://storybook.triplex-dev.ru/main/?path=/docs/components-multiselectfield--docs

---

# MultiselectField

Компонент мульти-списка.

## Особенности

* **Размеры**: SM, MD, LG.

## Состав

* Target — поле ввода
* Dropdown — выпадающий список

## Props

### MultiselectField

| Name           | Description                                                                                     | Default |
| -------------- | ----------------------------------------------------------------------------------------------- | ------- |
| size           | Размер компонента.EComponentSizeundefined                                                       | \-      |
| renderTarget\* | Рендер-функция поля выбора.(props: ISelectExtendedFieldTargetProvideProps) => ReactNode         | \-      |
| children\*     | Рендер-функция выпадающего блока.(props: ISelectExtendedFieldDropdownProvideProps) => ReactNode | \-      |
| onClose        | Функция, срабатывающая при закрытии выпадающего блока.(() => void) \| undefined                 | \-      |
| onOpen         | Функция, срабатывающая при открытии выпадающего блока.(() => void) \| undefined                 | \-      |
| closeOnTab     | Закрытие выпадающего блока при нажатии клавиши Tab.booleanundefined                             | \-      |

### MultiselectField.Target

| Name         | Description                                                               | Default |
| ------------ | ------------------------------------------------------------------------- | ------- |
| label        | Текст или компонент, отображающий выбранное значение.ReactNode            | \-      |
| fieldLabel\* | Текст или компонент, отображающий выбранное значение для Target.ReactNode | \-      |
| loading      | Состояние загрузки.booleanundefined                                       | \-      |
| opened\*     | Состояние открытости выпадающего списка.boolean                           | \-      |
| placeholder  | Текст или компонент, отображающий выбранное placeholder.ReactNode         | \-      |
| prefix       | Префикс поля ввода.ReactNode                                              | \-      |
| postfix      | Постфикс поля ввода.ReactNode                                             | \-      |
| setOpened\*  | Функция открытия/закрытия выпадающего списка.(opened: boolean) => void    | \-      |
| status       | Визуальное состояние.EFormFieldStatusundefined                            | \-      |
| size         | Размер.EComponentSizeundefined                                            | \-      |

### MultiselectField.Dropdown

| Name            | Description                                                                                                                                                           | Default   |    |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | -- |
| focusTrapProps  | Свойства FocusTrap. Используется npm-пакет focus-trap-react.FocusTrapPropsundefined                                                                                   | \-        |    |
| onOpen          | Функция, вызывающаяся при открытии.(() => void) \| undefined                                                                                                          | \-        |    |
| onClose         | Функция, вызывающаяся при закрытии.(() => void) \| undefined                                                                                                          | \-        |    |
| mobileViewProps | Свойства отображения в адаптивном режиме. В этом режиме на мобильном устройстве Dropdown рендерится на весь экран.Omit<IDropdownMobileProps, "opened" \| "setOpened"> | undefined | \- |
| opened\*        | Открыт.boolean                                                                                                                                                        | \-        |    |
| setOpened\*     | Устанавливает флаг opened.(opened: boolean) => void                                                                                                                   | \-        |    |
| targetRef\*     | Ссылка на управляющий элемент.RefObject<HTMLElement>                                                                                                                  | \-        |    |
| direction       | Направление выпадающего меню.EDropdownDirectionundefined                                                                                                              | \-        |    |
| alignment       | Выравнивание списка относительно управляющего элемента.EDropdownAlignmentundefined                                                                                    | \-        |    |
| fixedWidth      | Фиксированная ширина по управляющему элементу.booleanundefined                                                                                                        | \-        |    |
| size            | Размер дропдауна.EComponentSizeundefined                                                                                                                              | \-        |    |

## Playground

Label

Select to proceed

(21) Description [Link text](#)

| Name            | Description                          | Default | Control                                     |
| --------------- | ------------------------------------ | ------- | ------------------------------------------- |
| size            | Размер компонентаEComponentSize      | md      | Choose option...smmdlg                      |
| status          | Состояние компонентаEFormFieldStatus | default | Choose option...defaultdisablederrorwarning |
| descriptionText | string                               | \-      | (21) Description                            |

## Stories

### Default

Label

Select to proceed

Show code

### Different Sizes

Label

Select to proceed

(21) Description [Link text](#)

Label

Select to proceed

(21) Description [Link text](#)

Label

Select to proceed

(21) Description [Link text](#)

Show code

### Different Statuses

Label

Select to proceed

(21) Description [Link text](#)

Label

Select to proceed

Error text

Label

Select to proceed

Warning text

Show code

### Loading

Label

Select to proceed

(21) Description [Link text](#)

Label

Select to proceed

(21) Description [Link text](#)

Show code

### Dropdown Without Input

Label

Select to proceed

Show code

### With Clear Button

Label

Select to proceed

Show code
