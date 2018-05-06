
import React, { Component } from 'react';
// import {YellowBox} from 'react-native';
// YellowBox.ignoreWarnings(['Warning: ...']);
// import {Image } from 'react-native';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from 'react-native';
import ListItem from './src/components/ListItem/ListItem';


type Props = {};
export default class App extends Component {
    constructor(props) {
        super(props);
        // this.state = {text: ''};
        this.state = {
            placeName: '',
            places:[]
        };
    }


    placeNameChangedHandler=val=>{
        this.setState({
            placeName:val
        });
    };

    placeSubmitHandler=val=> {
        console.log("Val is :",val);
        alert("DDDDD");
        if (this.state.placeName.trim() === "") {
            return;
        }


        alert("QQQQQQ");
        this.setState(prevState => {
            return {
                places: prevState.places.concat(prevState.placeName)
            };
        });

    }


    render(){
        console.log("this.state.places");
        console.log(this.state);
        // alert("check previous line");
        const placesOutput = this.state.places.map((place,i) =>(
            <ListItem key={i} placeName={place}/>
        ));
        return(
            <View style ={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder={"An awesome place"}
                        value={this.state.placeName}
                        onChangeText={this.placeNameChangedHandler}
                        style={styles.placeInput}
                    />
                    <Button
                        title="Add"
                        style={styles.placeButton}
                        onPress={this.placeSubmitHandler}
                    />

                </View>
                <View style={styles.listContainer}>{placesOutput}</View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:26,
        backgroundColor: '#F5FCFF',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    inputContainer:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    placeInput:{
        width:"70%"
    },
    placeButton:{
        width:"30%"
    },
    listContainer:{
        width:"100%"
    }
});
