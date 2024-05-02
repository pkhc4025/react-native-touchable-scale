import type * as React from 'react';
import type { TouchableWithoutFeedbackProps, TouchableWithoutFeedback, Animated } from 'react-native';

export type ScaleAnimationConfig = Omit<Animated.SpringAnimationConfig, 'toValue' | 'useNativeDriver'>;

export interface TouchableScaleProps extends TouchableWithoutFeedbackProps {
    /**
     * Determines what the scale of the wrapped view should be when touch is active.
     * Defaults to 0.9
     */
    activeScale?: number;

    animationConfig?: ScaleAnimationConfig;
}

declare class TouchableScaleComponent extends React.Component<TouchableScaleProps> {}
declare const TouchableScaleBase: TouchableWithoutFeedback & typeof TouchableScaleComponent;
export declare class TouchableScale extends TouchableScaleBase {
    /**
     * Animate the touchable to a new scale.
     */
    setScaleTo: (toValue: number, config?: ScaleAnimationConfig) => void;
}
