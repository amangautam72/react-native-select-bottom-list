
import React, { Component, ForwardRefRenderFunction, useImperativeHandle, useRef } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, SectionList, FlatList, ViewProps, ViewStyle } from 'react-native'
import BottomSheet from '../BottomSheet';
import DropDownArrowDash from './dropDown.svg';
import { BottomSheetRef } from '../BottomSheet/types'
import {SelectListTypes, BottomListTypes } from './types';

const BottomFlatList = ({ data, header, onItemPress, renderItem, itemStyle }: BottomListTypes) => {

    const renderDefaultItem = ({ item, index }) => {
        let value = item
        if(typeof item === 'object'){
            value = item?.value || item?.title
        }
        return <TouchableOpacity onPress={() => onItemPress(item,index)} style={[styles.sectionItemStyle, itemStyle]}>
            <Text style={styles.sectionItemTextStyle}>{value}</Text>
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

const SelectList:  ForwardRefRenderFunction<BottomSheetRef,SelectListTypes> = (props, ref) => {

    const { style, textStyle, placeHolder, value, data, listType, headerTitle, onSelect, renderItem, presentationStyle, listHeight, renderIcon, itemStyle } = props;
    const sheetRef = useRef<BottomSheetRef>(null)

    useImperativeHandle(ref, () => ({
        open,
        close,
    }));

    const close = () => {
        sheetRef.current?.close()
    };

    const open = () => {
        sheetRef.current?.open()
    };

    const onSelection = (data, index) => {
        close()
        onSelect(data,index)
    }

    return (
        <View>
            <TouchableOpacity onPress={open} style={[styles.inputStyle, style]}>
                <Text numberOfLines={1} style={[styles.inputValueStyle, textStyle]}>{value || placeHolder || "Select"}</Text>
                {renderIcon ? renderIcon() : <DropDownArrowDash />}
            </TouchableOpacity>


            <BottomSheet ref={sheetRef} presentationStyle={presentationStyle || 'overFullScreen'} height={listHeight}>
                    <BottomFlatList
                        data={data || []}
                        header={headerTitle}
                        renderItem={renderItem || null}
                        itemStyle={itemStyle}
                        onItemPress={onSelection} 
                        />    

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
        borderBottomWidth: 1,
        borderColor: '#F4F4F4',
        padding: 2,
        paddingVertical:5
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
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        fontWeight: '600',
    },
})


export default React.forwardRef(SelectList)