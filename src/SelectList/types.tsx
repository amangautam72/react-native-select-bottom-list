import { ViewStyle } from 'react-native';

export type SelectListTypes = {
    style?: ViewStyle;
    placeHolder?: string;
    value: string;
    data: Object;
    listType?: 'list';
    headerTitle?: string;
    onSelect: (item: any, index?: number | string) => void;
    renderItem?: Function;
    presentationStyle?: 'fullScreen' | 'pageSheet' | 'formSheet' | 'overFullScreen' | undefined;
    listHeight?: string | number;
    renderIcon?: Function;
    textStyle?: ViewStyle;
    itemStyle?: ViewStyle
}

export type BottomListTypes = { 
    data: Object, 
    header?: string, 
    onItemPress: Function, 
    renderItem?: any, 
    itemStyle?: ViewStyle  
}