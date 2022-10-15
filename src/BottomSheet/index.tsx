import {
  View,
  StyleSheet,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  Animated,
  InteractionManager,
} from 'react-native';
import React, {
  useMemo,
  useState,
  useRef,
  useImperativeHandle,
  ForwardRefRenderFunction,
  useEffect,
  useCallback,
} from 'react';
import {BottomSheetProps, BottomSheetRef} from './types';

const BottomSheet: ForwardRefRenderFunction<
  BottomSheetRef,
  BottomSheetProps
> = (props, ref) => {
  const {
    children,
    onModalHide,
    onModalShow,
    height,
    bottomSheetStyle,
    bottomSheetViewStyle,
    presentationStyle,
    containerStyle,
  } = props;

  const [modalVisible, setModalVisible] = useState(false);

  const onCloseCallback = useRef<() => void>();
  const onOpenCallback = useRef<() => void>();

  useImperativeHandle(ref, () => ({
    open,
    close,
  }));

  const close = (callback?: () => void) => {
    onCloseCallback.current = callback;
    setModalVisible(false);
  };

  const open = (callback?: () => void) => {
    onOpenCallback.current = callback;
    setModalVisible(true);
  };

  const onClose = () => {
    typeof onCloseCallback.current == 'function' && onCloseCallback.current();
    onModalHide?.();
  };

  const onOpen = () => {
    typeof onCloseCallback.current == 'function' &&
      onOpenCallback.current &&
      onOpenCallback.current();
    onModalShow?.();
  };

  const isPresentationPageSheet =
    presentationStyle !== 'fullScreen' &&
    presentationStyle !== 'overFullScreen';
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        flex: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(52,52,52,0.3)',
        ...containerStyle,
      },
      modalStyle: {
        margin: 0,
      },
      children: {
        height: isPresentationPageSheet ? '100%' : height,
        maxHeight: isPresentationPageSheet ? '100%' : '90%',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
    });
  }, [height, containerStyle, presentationStyle]);

  return (
    <Modal
      onBackButtonPress={close}
      onBackdropPress={close}
      backdropTransitionOutTiming={0}
      visible={modalVisible}
      onRequestClose={close}
      onDismiss={onModalHide}
      onShow={onOpen}
      animationType={'slide'}
      presentationStyle={presentationStyle}
      style={[styles.modalStyle, bottomSheetStyle]}
      transparent={isPresentationPageSheet ? false : true}>
      <TouchableOpacity
        style={[styles.container, bottomSheetViewStyle]}
        onPress={close}
        activeOpacity={0.8}>
        <Animated.View style={styles.children}>{children}</Animated.View>
      </TouchableOpacity>
    </Modal>
  );
};

export default React.forwardRef(BottomSheet);
