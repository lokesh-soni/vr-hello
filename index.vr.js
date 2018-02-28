import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  VideoPano,
  View,
} from 'react-vr';

export default class hello extends React.Component {
  render() {
    return (
      <View>
        <VideoPano source={{uri: 'vr.mp4'}} />
      </View>
    );
  }
};

AppRegistry.registerComponent('hello', () => hello);
