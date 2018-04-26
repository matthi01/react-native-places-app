import React from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

import placeImage from './src/assets/image1.jpg';

export default class App extends React.Component {
  state = {
    places: [],
    selectedPlace: null
  };

  onPlaceAdded = (placeName) => {
    this.setState(prevState => {
        return {
          places: prevState.places.concat({
            key: Math.random().toString(), 
            name: placeName,
            image: placeImage
          })
        };
    });
  };

  placeSelectedHandler = (key) => {
    this.setState((prevState) => {
      return {
        selectedPlace: prevState.places.find((place) => place.key === key)
      }
    });
  }

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => place.key !== prevState.selectedPlace.key),
        selectedPlace: null
      };
    })
  }

  modalClosedHandler = () => {
    this.setState({selectedPlace: null});
  }

  render() {

    return (
      <View style={styles.container}>
        <PlaceDetail 
          selectedPlace={this.state.selectedPlace} onItemDeleted={this.placeDeletedHandler} onModalClosed={this.modalClosedHandler} />
        <PlaceInput 
          onPlaceAdded={this.onPlaceAdded} />
        <PlaceList 
          places={this.state.places} 
          onItemSelected={this.placeSelectedHandler} />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }

});
