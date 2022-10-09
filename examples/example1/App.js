/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useRef} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {SelectList, BottomSheet} from 'react-native-select-bottom-list';
// import SelectList from './src/SelectList';
// import BottomSheet from './src/BottomSheet';
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

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

const App = () => {
  const [value, setValue] = useState('Select');
  const sheetRef = useRef(null);

  const onPress = () => {
    sheetRef.current?.open();
  };

  return (
    <SafeAreaView>
      <Text onPress={onPress} style={{padding: 20}}>
        Open BottomSheet
      </Text>
      <SelectList
        onSelect={(item, index) => setValue(item)}
        value={value}
        data={['1', '2']}
        headerTitle={'Quotes'}
      />

      <BottomSheet ref={sheetRef} presentationStyle={'overFullScreen'}>
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
