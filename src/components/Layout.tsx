import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacityProps,
  ViewProps,
  ScrollViewProps,
} from 'react-native';
import React, { ComponentType } from 'react';
import useSafeAreaPadding from '~/utils/WindowSize';

interface LayoutProps {
  children: React.ReactNode;
  scrollEnabled?: boolean;
  backgroundColor?: string;
  scrollViewProps?: ScrollViewProps;
}

const Layout: React.FC<LayoutProps> = ({
  scrollEnabled = false,
  children,
  backgroundColor = 'bg-background',
  scrollViewProps,
}) => {
  const { top, bottom, right, left } = useSafeAreaPadding();
  const Component = (scrollEnabled ? ScrollView : View) as ComponentType<
    TouchableOpacityProps | ViewProps
  >;

  return (
    <View
      className={`flex-1 ${backgroundColor}`}
      style={{
        paddingTop: top,
        paddingBottom: bottom,
        paddingLeft: left,
        paddingRight: right,
      }}>
      <Component {...(scrollEnabled ? scrollViewProps : {})} className="flex-1">
        {children}
      </Component>
    </View>
  );
};

export default Layout;
