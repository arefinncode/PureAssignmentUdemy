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
import ListItem from './src/components/ListItem/ListItem';
// import {YellowBox} from 'react-native';
// YellowBox.ignoreWarnings(['Warning: ...']);
// import {Image } from 'react-native';


type Props = {};
export default class App extends Component {
    constructor(props) {
        super(props);
        // this.state = {text: ''};
        this.state = {
            placeName: '',
            places:[]
        };

        this.placeNameChangedHandler = this.placeNameChangedHandler.bind(this);
        this.placeSubmitHandler = this.placeSubmitHandler.bind(this);
    }




  placeNameChangedHandler(val) {
    this.setState({placeName: val});
  }

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
  }





    render(){
        // console.log("this.state.places");
        // console.log(this.state);
        console.log(this.state.places);
        // alert("check previous line");
        const placesOutput = this.state.places.map((place,index) =>(
           /* console.log(place),
            console.log(i)*/

           <ListItem key={index} placeName={place}/>



        // <Welcome placeName={place} />


        ));
        return(
            <View style ={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput placeholder={"An awesome place"} value={this.state.placeName}
                        onChangeText={this.placeNameChangedHandler} style={styles.placeInput}/>
                    <Button title="Add" style={styles.placeButton} onPress={this.placeSubmitHandler}/>
                </View>
                <View style={styles.listContainer}>{placesOutput}</View>
            </View>
        );
    }
}

/*class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}*/

/*function Welcome(props) {

    console.log(props.placeName);
    // return <h1>Hello, {props.name}</h1>;
}*/




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
