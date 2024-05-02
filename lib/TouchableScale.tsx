import { useForwardedRef } from './hooks';
import React, { forwardRef, useCallback, useEffect, useRef } from 'react';
import { Animated, GestureResponderEvent, TouchableWithoutFeedback } from 'react-native';
import { ScaleAnimationConfig, TouchableScale, TouchableScaleProps } from './types';

const TouchableScaleComponent = forwardRef<TouchableScale, TouchableScaleProps>(function TouchableScale(
    { activeScale = 0.9, animationConfig, onPressIn, onPressOut, style, children, ...props },
    hostRef,
) {
    const defaultScale = 1;
    const scaleAnimation = useRef(new Animated.Value(defaultScale)).current;
    const ref = useForwardedRef(hostRef);

    const scaleTo = useCallback((toValue: number, config: ScaleAnimationConfig = {}) => {
        Animated.spring(scaleAnimation, {
            ...config,
            toValue: toValue,
            useNativeDriver: true,
        }).start();
    }, []);

    const _onPressIn = useCallback((event: GestureResponderEvent): void => {
        scaleTo(activeScale, animationConfig);

        onPressIn?.(event);
    }, []);

    const _onPressOut = useCallback((event: GestureResponderEvent): void => {
        scaleTo(defaultScale, animationConfig);

        onPressOut?.(event);
    }, []);

    useEffect(() => {
        if (!ref.current) {
            return;
        }

        ref.current.setScaleTo = scaleTo;
    }, [ref]);

    return (
        <TouchableWithoutFeedback
            ref={ref as React.Ref<TouchableWithoutFeedback>}
            {...props}
            onPressIn={_onPressIn}
            onPressOut={_onPressOut}>
            <Animated.View style={[style, { transform: [{ scale: scaleAnimation }] }]}>{children}</Animated.View>
        </TouchableWithoutFeedback>
    );
});

export default TouchableScaleComponent;
