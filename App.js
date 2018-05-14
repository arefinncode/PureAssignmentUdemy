/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";


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
    // both of them works
    state = {
        places: [],
        selectedPlace: null
    };

    /* constructor(props) {
         super(props);
         this.state = {
             places: [],
             selectedPlace:null
         };
     }*/

    placeAddedHandler = placeName => {
        console.log(placeName);
        this.setState(prevState => {
            return {
                places: prevState.places.concat({
                    key: Math.random(),
                    name: placeName,
                    image: {
                        uri:
                            "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"

                        // "https://upload.wikimedia.org/wikipedia/commons/f/f2/Mau_egyptien_bronze.jpg"
                    }
                })
            };
        });
    };

    placeDeleteHandler = () => {
        this.setState((prevState) => {
            return {
                places: prevState.places.filter(place => {
                    return place.key !== prevState.selectedPlace.key;
                }),
                selectedPlace: null
            };
        });
    };

    modalCloseHandler = () => {
        this.setState({
            selectedPlace: null
        });
    };

    placeSelectedHandler = key => {
        this.setState(prevState => {
            return {
                selectedPlace: prevState.places.find(place => {
                    return place.key === key;
                })
            };

        });
    };

    render() {
        return (
            <View style={styles.container}>
                <PlaceDetail
                    selectedPlace={this.state.selectedPlace}
                    // onItemDeleted={this.placeDeleteHandler()} wrong approach.
                    onItemDeleted={this.placeDeleteHandler}
                    onModalClosed={this.modalCloseHandler}
                />


                <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
                <PlaceList
                    places={this.state.places}
                    // onItemSelected={this.placeSelectedHandler()} wrong, error
                    onItemSelected={this.placeSelectedHandler}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 26,
    }
});
