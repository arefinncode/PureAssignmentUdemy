/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";

/*

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

*/



// type Props = {};
export default class App extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {

    // both of them works
    /*
        state = {
            places: []
        };
        */

    constructor(props) {
        super(props);
        this.state = {
            //     state = {
            places: []
        };
    }

        placeAddedHandler = placeName => {
          console.log(placeName);
            this.setState(prevState => {
                return {
                    places: prevState.places.concat(placeName)
                };
            });
        };


        render()
        {
            return (
                <View style={styles.container}>
                  <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
                  <PlaceList places={this.state.places}/>

                </View>
            );
        }
    }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
      padding:26,
  }
});
