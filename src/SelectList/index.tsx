
import React, { Component, useRef } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, SectionList, FlatList, ViewProps, ViewStyle } from 'react-native'
import BottomSheet from '../BottomSheet';
import DropDownArrowDash from './dropDown.svg';
import { BottomSheetRef } from '../BottomSheet/types'

type SelectListTypes = {
    style?: ViewStyle;
    placeHolder?: string;
    value: string;
    data: Object;
    type: string;
    headerTitle?: string;
    onSelect: Function;
    renderItem?: Function;
    presentationStyle?: 'fullScreen' | 'pageSheet' | 'formSheet' | 'overFullScreen' | undefined;
    listHeight?: string | number;
    renderIcon?: Function;
    textStyle?: ViewStyle;
}

const BottomList = ({ data, header, onItemPress, renderItem }: { data: Object, header?: string, onItemPress: Function, renderItem?: any }) => {

    const renderDefaultItem = ({ item, section }) => {
        return <TouchableOpacity onPress={() => onItemPress(item)} style={styles.sectionItemStyle}>
            <Text style={styles.sectionItemTextStyle}>{item?.value || item?.title || item}</Text>
        </TouchableOpacity>
    }

    return <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem || renderDefaultItem}
        renderSectionHeader={({ section: { head, data } }) => data.length ? (
            <Text style={styles.sectionHeaderStyle}>{head}</Text>
        ) : null}
        stickyHeaderIndices={[]}
        ListHeaderComponent={() => (
            header ? <Text style={styles.sectionHeaderStyle}>{header}</Text> : null
        )}
    />
};

const BottomFlatList = ({ data, header, onItemPress, renderItem }: { data: Object, header?: string, onItemPress: Function, renderItem?: any }) => {

    const renderDefaultItem = ({ item, section }) => {
        return <TouchableOpacity onPress={() => onItemPress(item)} style={styles.sectionItemStyle}>
            <Text style={styles.sectionItemTextStyle}>{item}</Text>
        </TouchableOpacity>
    }
    return <FlatList
        style={{ borderRadius: 20 }}
        data={data}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem || renderDefaultItem}
        ListHeaderComponent={() => (
            header ? <Text style={styles.sectionHeaderStyle}>{header}</Text> : null
        )}
    />
};

export default function SelectList({ style, textStyle, placeHolder, value, data, type, headerTitle, onSelect, renderItem, presentationStyle, listHeight, renderIcon }: SelectListTypes) {

    const sheetRef = useRef<BottomSheetRef>(null)

    const onPress = () => {
        sheetRef.current?.open()
    }

    const onSelection = (data) => {
        sheetRef.current?.close()
        onSelect(data)
    }

    return (
        <View>
            <TouchableOpacity onPress={onPress} style={[styles.inputStyle, style]}>
                <Text numberOfLines={1} style={[styles.inputValueStyle, textStyle]}>{value || placeHolder || "Select"}</Text>
                {renderIcon ? renderIcon() : <DropDownArrowDash />}
            </TouchableOpacity>


            <BottomSheet ref={sheetRef} presentationStyle={presentationStyle || 'overFullScreen'} height={listHeight}>
                {type === 'sectionlist' ?
                    <BottomList
                        data={data || []}
                        header={headerTitle}
                        renderItem={renderItem || null}
                        onItemPress={onSelection} /> :
                    <BottomFlatList
                        data={data || []}
                        header={headerTitle}
                        renderItem={renderItem || null}
                        onItemPress={onSelection} />}

            </BottomSheet>
        </View>
    )
}


const styles = StyleSheet.create({
    inputStyle: {
        flexDirection: 'row',
        borderWidth: 1,
        padding: 10,
        alignItems: 'center',
        borderColor: '#DEDEDE',
        borderRadius: 5,
        margin: 10,
    },
    inputValueStyle: {
        fontWeight: '400',
        flex: 1
    },
    sectionItemStyle: {
        borderWidth: 1,
        borderColor: '#F4F4F4',
        padding: 2
    },
    sectionItemTextStyle: {
        fontWeight: '400',
        marginHorizontal: 12,
        marginVertical: 8,
    },
    sectionHeaderStyle: {
        fontSize: 16,
        padding: 12,
        backgroundColor: '#DEDEDE',
        fontWeight: '600',
    },
})