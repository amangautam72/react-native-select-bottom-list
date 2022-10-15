import { ReactNode, Ref } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { BottomSheetRef } from "../BottomSheet/types";

export type ListTypes = {
	placeHolder?: string;
	value: string;
	data: Object;
	listType?: "list";
	headerTitle?: string;
	onSelect: (item: any, index?: number | string, section?: any) => void;
	presentationStyle?:
		| "fullScreen"
		| "pageSheet"
		| "formSheet"
		| "overFullScreen"
		| undefined;
	listHeight?: string | number;
	renderIcon?: Function;
	style?: StyleProp<ViewStyle> | StyleProp<TextStyle>;
	headerStyle?: StyleProp<ViewStyle>;
	headerTextStyle?: StyleProp<TextStyle>;
	textStyle?: StyleProp<TextStyle>;
	itemStyle?: StyleProp<ViewStyle>;
	itemTextStyle?: StyleProp<TextStyle>;
	itemValueKey?: string;
};

interface SearchTrueProp {
	showSearch?: true;
}

interface SearchFalseProp {
	showSearch?: false;
	renderItem?: (
		{ item, index }: { item: any; index: number },
		listRef: BottomSheetRef
	) => void;
}

export type SelectListTypes = ListTypes & (SearchTrueProp | SearchFalseProp);

export type BottomListTypes = {
	data: any;
	renderItem?: any;
	renderListHeaderComponent?: any;
};
