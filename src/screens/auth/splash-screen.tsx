import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {StackActions} from '@react-navigation/native';

import {Text} from '../../components/';

export default function SplashScreen({navigation}: any) {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('StartedScreen'));
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={require('../../../assets/images/Logo.png')}
          style={styles.logo}
        />
        <Text type="bold" size={20}>
          Mountrash
        </Text>
      </View>

      <Text type="regular">v.0.01</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 70,
    width: 90,
    resizeMode: 'stretch',
    marginRight: 10,
  },
  containerImage: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});
