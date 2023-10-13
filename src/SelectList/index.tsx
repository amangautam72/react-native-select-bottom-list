import React, { useRef, useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	FlatList,
	TextInput,
} from "react-native";
import BottomSheet from "../BottomSheet";
import { BottomSheetRef } from "../BottomSheet/types";
import { SelectListTypes, BottomListTypes } from "./types";
import styles from './styles'


const BottomFlatList = ({
	data,
	renderItem,
	renderListHeaderComponent,
}: BottomListTypes) => {
	return (
		<FlatList
			style={{ paddingTop: 10 }}
			data={data}
			keyExtractor={(item, index) => index.toString()}
			renderItem={renderItem}
			ListHeaderComponent={renderListHeaderComponent}
		/>
	);
};

const SelectList = (props: SelectListTypes) => {
	const {
		style,
		textStyle,
		placeHolder,
		value,
		data,
		headerTitle,
		headerStyle,
		headerTextStyle,
		onSelect,
		renderItem,
		itemTextStyle,
		presentationStyle,
		listHeight,
		renderIcon,
		itemStyle,
		itemValueKey,
		showSearch,
	} = props;
	const sheetRef = useRef<BottomSheetRef>(null);
	const [searchValue, setSearchValue] = useState("");

	const close = () => {
		sheetRef.current?.close();
	};

	const open = () => {
		sheetRef.current?.open();
	};

	const onSelection = (data, index) => {
		close();
		onSelect(data, index);
	};

	const getValue = (item) => {
		if (itemValueKey) {
			return item[itemValueKey];
		} else if (typeof item === "object") {
			return item?.value || item?.title || item?.text; //Default keys to use for value
		}
		return item;
	};

	const renderDefaultItem = ({ item, index }) => {
		let value = getValue(item);
		return (
			<TouchableOpacity
				onPress={() => onSelection(item, index)}
				style={[styles.sectionItemStyle, itemStyle]}
			>
				<Text
					style={
						itemTextStyle
							? itemTextStyle
							: styles.sectionItemTextStyle
					}
				>
					{value}
				</Text>
			</TouchableOpacity>
		);
	};

	const renderListHeader = () => {
		return headerTitle ? (
			<View style={[styles.sectionHeaderStyle, headerStyle]}>
				<Text style={[styles.sectionHeaderTextStyle, headerTextStyle]}>
					{headerTitle}
				</Text>
			</View>
		) : null;
	};

	const renderListItem = (data) => {
		//** For Search */
		if (!renderItem && showSearch) {
			const { item } = data;
			let value = getValue(item);
			if (!value?.toLowerCase().includes(searchValue.toLowerCase()))
				return null;
		}
		//** For Search */

		return renderItem
			? renderItem(data, sheetRef.current)
			: renderDefaultItem(data);
	};

	const onModalClose = () => {
		setSearchValue("");
	};

	return (
		<View>
			<TouchableOpacity onPress={open} style={[styles.inputStyle, style]}>
				<Text
					style={[styles.inputValueStyle, textStyle]}
					numberOfLines={1}
				>
					{value || placeHolder || "Select"}
				</Text>
				{renderIcon ? renderIcon() : null}
			</TouchableOpacity>

			<BottomSheet
				ref={sheetRef}
				presentationStyle={presentationStyle || "overFullScreen"}
				height={listHeight}
				onModalHide={onModalClose}
			>
				{showSearch ? (
					<TextInput
						placeholder="Search"
						style={[
							styles.inputStyle,
							{ marginTop: 15, marginHorizontal: 10 },
						]}
						onChangeText={(text: string) =>
							text.length > 2
								? setSearchValue(text)
								: setSearchValue("")
						}
					/>
				) : null}
				<BottomFlatList
					data={data || []}
					renderItem={renderListItem}
					renderListHeaderComponent={renderListHeader}
				/>
			</BottomSheet>
		</View>
	);
};

\

export default SelectList;
