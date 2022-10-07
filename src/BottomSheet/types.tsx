import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export interface BottomSheetRef {
    close: (callback?: () => void) => void;
    open: (callback?: () => void) => void;
}

export interface BottomSheetProps {
    children: ReactNode;
    onModalShow?: () => void;
    onModalHide?: () => void;
    height?: string | number;
    bottomSheetViewStyle?: ViewStyle;
    bottomSheetStyle?: ViewStyle;
    containerStyle?: ViewStyle;
    presentationStyle?: 'fullScreen' | 'pageSheet' | 'formSheet' | 'overFullScreen' | undefined;
}
