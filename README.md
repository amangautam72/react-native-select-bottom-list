# react-native-select-bottom-list

A simple, lightweight and fully customisable Select Input List component and a BottomSheet made using Modal from react-native.

![ezgif-5-a003bd8cd2](https://user-images.githubusercontent.com/28658574/194723713-5a1af66b-f28a-4d9c-aced-c3f0e2fca139.gif) ![ezgif-5-a4574d3d86](https://user-images.githubusercontent.com/28658574/194723747-62f3d8af-eced-4003-9e26-cb0b2ce804c7.gif)

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

Simply place any component or view inside <BottomSheet/> and use ref to open and close it.

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
