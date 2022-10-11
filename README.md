# Project Title

A simple, lightweight and fully customisable Select Input List component and a BottomSheet made using Modal from react-native.

![ezgif-5-a003bd8cd2](https://user-images.githubusercontent.com/28658574/194723713-5a1af66b-f28a-4d9c-aced-c3f0e2fca139.gif) ![ezgif-5-a4574d3d86](https://user-images.githubusercontent.com/28658574/194723747-62f3d8af-eced-4003-9e26-cb0b2ce804c7.gif)

## Features

-   Lightweight Select Input List Component.
-   Dynamic Modal height.
-   Fully Customisable styles.
-   Included BottomSheet component for custom usage.
-   Cross platform.
-   Written in Typescript.

## Coming Soon Features :rocket:

-   Stable Release.
-   Custom Header Component.
-   More Custom Styles.
-   SectionList Support.
-   Search Feature.
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
## Note
This library uses react-native-svg & react-native-svg-transformer. Please pass ‘() => null’ or ‘() => CustomIcon’ to renderIcon if these libraries are not setup. Otherwise this will lead to a crash.

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

| Name                | Type               | Description                                                                                                                                |
| :------------------ | :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| `style`             | `ViewStyle`        | **Optional**. Custom style for input                                                                                                       |
| `placeHolder`       | `string`           | **Optional**. Placeholder for input                                                                                                        |
| `textStyle`         | `ViewStyle`        | **Optional**. Custom style for input value                                                                                                 |
| `value`             | `string`           | **Required**. Selected value from list                                                                                                     |
| `data`              | `Object`           | **Required**. list of data to render in bottom list                                                                                        |
| `listType`          | `string`           | **Optional**. Not Required as of now, defaults to 'list', 'sectionlist' to be added in future                                              |
| `itemStyle`         | `ViewStyle`        | **Optional**. List item style                                                                                                              |
| `itemValueKey`      | `string`           | **Optional**. Used to render list item with key other than 'title','value'&'text'                                                          |
| `headerTitle`       | `string`           | **Optional**. Header value of title                                                                                                        |
| `onSelect`          | `Function`         | **Required**. Function invoked on list item selection, gives back (item, index)                                                            |
| `renderItem`        | `Function`         | **Optional**. Custom list item, gives back ({item, index})                                                                                 |
| `presentationStyle` | `string`           | **Optional**. iOS only, this is similar to presentationStyle of Modal from react native                                                    |
| `listHeight`        | `string Or number` | **Optional**. height of Bottomlist                                                                                                         |
| `renderIcon`        | `Function`         | **Optional** Required when you don't need icon(Sol: pass '() => null') or if react-native-svg & react-native-svg-transformer are not setup |

## SelectList Methods

| Name    | Type       | Description                                          |
| :------ | :--------- | :--------------------------------------------------- |
| `close` | `Function` | **Optional**. To close Bottom List, Use ref to close |
| `open`  | `Function` | **Optional**. To open Bottom List, Use ref to open   |

## BottomSheet Props

| Name                | Type        | Description                                                  |
| :------------------ | :---------- | :----------------------------------------------------------- |
| `children`          | `ReactNode` | **Optional**. Content inside bottom sheet                    |
| `height`            | `string`    | **Optional**. Height of BottomSheet                          |
| `presentationStyle` | `ViewStyle` | **Optional**. iOS only, this is similar to presentationStyle |

## BottomSheet Methods

| Name    | Type       | Description                                          |
| :------ | :--------- | :--------------------------------------------------- |
| `close` | `Function` | **Optional**. To close BottomSheet, Use ref to close |
| `open`  | `Function` | **Optional**. To open BottomSheet, Use ref to open   |

## Contributing

Contributions are always welcome! Feel free to open a new GitHub issue for any change or enhancement.

## Feedback

Any feedback would be deeply appreciated, please feel free to reach out to me at amangautam72@gmail.com

## Author

Aman Gautam

## License

MIT
