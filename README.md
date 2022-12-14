# Project Title

A simple, lightweight and fully customisable Select Input List component and a BottomSheet made using Modal from react-native.

### Demo

![first](https://user-images.githubusercontent.com/28658574/196030420-96af6eec-9231-4924-8819-054f43cdd00d.gif) ![second](https://user-images.githubusercontent.com/28658574/196030455-17ab0a12-2fce-4718-a959-e0a79deca1f9.gif)  ![third](https://user-images.githubusercontent.com/28658574/196030566-c553d03c-c733-431c-9988-6edffa7e3b0b.gif) 




## Features

-   Lightweight Select Input List Component.
-   Dynamic Modal height.
-   Fully Customisable styles.
-   Included BottomSheet component for custom usage.
-   Cross platform.
-   Written in Typescript.
-   Basic Search Support.

## Coming Soon Features :rocket:

-   Stable Release.
-   Custom Header Component.
-   More Custom Styles.
-   SectionList Support.
-   Better Documentation.

# Installation

Using npm

```
npm i react-native-select-bottom-list
```

Using yarn

```
yarn add react-native-select-bottom-list
```

# SelectList Usage

```
import { SelectList } from 'react-native-select-bottom-list';
```

Simple use case :

```
const YourComponent = () => {
  const [value, setValue] = useState('Select');

  return (
    <SafeAreaView>
      <SelectList
        onSelect={(item,index) => setValue(item)}
        value={value}
        data={[
          'Change the world by being yourself – T.S Eliot',
          'Every moment is a fresh beginning. – T.S Eliot',
          'When nothing goes right, go left. – Anonymous',
          'Success is the child of audacity. – Benjamin Disraeli',
          'Never regret anything that made you smile. – Mark Twain',
          'Die with memories, not dreams. – Anonymous',
        ]}
        headerTitle={'Quotes'}
      />
    </SafeAreaView>
  );
};
```

# BottomSheet Usage

```
import { BottomSheet, BottomSheetRefType } from 'react-native-select-bottom-list';
```

Simply place any component or view inside <BottomSheet/> and use reference to open and close it.

Example :

```
const App = () => {

  const sheetRef = useRef<BottomSheetRefType>(null);

  const onPress = () => {
    sheetRef.current?.open();
  };

  return (
    <SafeAreaView>
      <Text onPress={onPress} style={{padding: 20}}>
        Open BottoSheet
      </Text>

      <BottomSheet
        ref={sheetRef}
        presentationStyle={'overFullScreen'}
        height={'30%'}>
        <View
          style={{
            padding: 100,
          }}>
          <Text style={{fontSize: 20, textAlign: 'center'}}>
            Put Whatever you want to have here!
          </Text>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};
```

# Documentation

## SelectList Props

| Name                | Type               | Description                                                                                                                                                                          |
| :------------------ | :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `style`             | `ViewStyle`        | **Optional**. Custom style for input                                                                                                                                                 |
| `placeHolder`       | `string`           | **Optional**. Placeholder for input                                                                                                                                                  |
| `textStyle`         | `ViewStyle`        | **Optional**. Custom style for input value                                                                                                                                           |
| `value`             | `string`           | **Required**. Selected value from list                                                                                                                                               |
| `data`              | `Object`           | **Required**. list of data to render in bottom list                                                                                                                                  |
| `listType`          | `string`           | **Optional**. Not Required as of now, defaults to 'list', 'sectionlist' to be added in future                                                                                        |
| `itemStyle`         | `ViewStyle`        | **Optional**. List Item container style                                                                                                                                              |
| `itemTextStyle`     | `TextStyle`        | **Optional**. List Item text style                                                                                                                                                   |
| `headerStyle`       | `TextStyle`        | **Optional**. List Header Container style                                                                                                                                            |
| `headerTextStyle`   | `TextStyle`        | **Optional**. List Header Text style                                                                                                                                                 |
| `itemValueKey`      | `string`           | **Optional**. Used to render list item with key other than 'title','value'&'text'. itemValueKey doesn't work for nested key, use renderItem for nested key                           |
| `headerTitle`       | `string`           | **Optional**. Header value of title                                                                                                                                                  |
| `onSelect`          | `Function`         | **Required**. Function invoked on list item selection, gives back (item, index)                                                                                                      |
| `renderItem`        | `Function`         | **Optional**. Custom list item, gives back ({item, index}, sheetRef). sheetRef containes close() & open() method to close & open respectively                                        |
| `presentationStyle` | `string`           | **Optional**. iOS only, this is similar to presentationStyle of Modal from react native                                                                                              |
| `listHeight`        | `string Or number` | **Optional**. Height of Bottomlist                                                                                                                                                   |
| `renderIcon`        | `Function`         | **Optional**. Render icon                                |
| `showSearch`        | `boolean`          | **Optional**. Search Input to search items. Search only works for defualt list. Don't use renderItem in case you want to use search. For better user experience use 'listheight' prop |

## BottomSheet Methods

| Name    | Type       | Description                                          |
| :------ | :--------- | :--------------------------------------------------- |
| `close` | `Function` | **Optional**. To close BottomSheet, Use ref to close |
| `open`  | `Function` | **Optional**. To open BottomSheet, Use ref to open   |

## BottomSheet Props

| Name                | Type        | Description                                                  |
| :------------------ | :---------- | :----------------------------------------------------------- |
| `children`          | `ReactNode` | **Optional**. Content inside bottom sheet                    |
| `height`            | `string`    | **Optional**. Height of BottomSheet                          |
| `presentationStyle` | `ViewStyle` | **Optional**. iOS only, this is similar to presentationStyle |

## Contributing

Contributions are always welcome! Feel free to open a new GitHub issue for any change or enhancement.

## Feedback

Any feedback would be deeply appreciated, please feel free to reach out to me at amangautam72@gmail.com

## Author

Aman Gautam

## License

MIT
