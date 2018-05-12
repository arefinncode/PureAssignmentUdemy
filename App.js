import React, { Component } from 'react';
// import { ListItem } from 'react-native-elements';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    List
} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
// import ListItem from './src/components/ListItem/ListItem'
// import {YellowBox} from 'react-native';
// YellowBox.ignoreWarnings(['Warning: ...']);
// import {Image } from 'react-native';


// type Props = {};
export default class App extends Component {
    constructor(props) {
        super(props);
        // this.state = {text: ''};
        state = {
            // placeName: '',
            places: []
        };

        //     this.placeNameChangedHandler = this.placeNameChangedHandler.bind(this);
        //     this.placeSubmitHandler = this.placeSubmitHandler.bind(this);
        // }


        placeAddedHandler = placeName => {
            this.setState(prevState => {
                return {
                    places: prevState.places.concat(placeName)
                };
            });
        };

        // }

        /* placeNameChangedHandler(val) {
           this.setState({placeName: val});
         }*/

        /*
         placeSubmitHandler() {

             if (this.state.placeName.trim() === "") {

                 console.log("empty placeName");
                 return;
             }


             this.setState(prevState => {
                 return {
                     places: prevState.places.concat(prevState.placeName)
                 };
             });
             /*this.setState(function(prevState, props) {
                 console.log("prevState:");
                 console.log(prevState);
                 console.log("props");
                 console.log(props);
                 console.log("prevState.placeName: ");
                 console.log(prevState.placeName);
                 prevState.places.concat(prevState.placeName);
                 {places: prevState.placeName};
                 let x= prevState.places.concat(prevState.placeName);
                 console.log(x);
                 places:x};

                 return {places: prevState.places.concat(prevState.placeName)};
             });*/
        /* } */
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
}



    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 26,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "flex-start"
        }
    });

