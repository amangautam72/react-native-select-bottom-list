/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import 'react-native-gesture-handler';

import React, {useState, useRef} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {SelectList, BottomSheet} from 'react-native-select-bottom-list';

import {
  GestureHandlerRootView,
  GestureDetector,
} from 'react-native-gesture-handler';

const LISTDATA = [
  {
    title: 'Change the world by being yourself – T.S Eliot',
  },
  {
    title: 'Every moment is a fresh beginning. – T.S Eliot',
  },
  {
    title: 'When nothing goes right, go left. – Anonymous',
  },
  {
    title: 'Success is the child of audacity. – Benjamin Disraeli',
  },
  {
    title: 'Die with memories, not dreams. – Anonymous',
  },
  {
    title: 'Never regret anything that made you smile. – Mark Twain',
  },
];

const SECTIONDATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const App = () => {
  const [value, setValue] = useState('Select');
  const sheetRef = useRef(null);

  const onPress = () => {
    sheetRef.current?.open();
  };

  return (
    // <GestureHandlerRootView style={{flex: 1}}>
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <Text onPress={onPress} style={{padding: 20}}>
        Open BottomSheet
      </Text>
      <SelectList
        style={{margin: 10}}
        placeHolder={'Select'}
        data={[...LISTDATA, ...LISTDATA, ...LISTDATA]}
        showSearch={true}
        onSelect={(item, index) => setValue(item.title)}
        value={value}
        headerTitle={'Quotes'}
      />
      <BottomSheet
        ref={sheetRef}
        presentationStyle={'overFullScreen'}
        // height={400}
      >
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
    // </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
