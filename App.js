import React from 'react';
import { StyleSheet, View } from 'react-native';
import {connect} from 'react-redux';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import * as actionCreators from './src/store/actions/index';

class App extends React.Component {

  onPlaceAdded = (placeName) => {
    this.props.onAddPlace(placeName);
  }

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  }

  placeSelectedHandler = (key) => {
    this.props.onSelectPlace(key);
  }

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  }

  render() {

    return (
      <View style={styles.container}>
        <PlaceDetail 
          selectedPlace={this.props.selectedPlace} onItemDeleted={this.placeDeletedHandler} onModalClosed={this.modalClosedHandler} />
        <PlaceInput 
          onPlaceAdded={this.onPlaceAdded} />
        <PlaceList 
          places={this.props.places} 
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

const mapStateToProps = (state) => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    onAddPlace: (name) => dispatch(actionCreators.addPlace(name)),
    onDeletePlace: () => dispatch(actionCreators.deletePlace()),
    onSelectPlace: (key) => dispatch(actionCreators.selectPlace(key)),
    onDeselectPlace: () => dispatch(actionCreators.deselectPlace())
  };
};

export default connect(mapStateToProps, mapActionsToProps)(App);