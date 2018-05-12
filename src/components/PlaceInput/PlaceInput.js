import React ,{ Component} from 'react';
import {View,Text,StyleSheet,TextInput,Button,} from 'react-native';
// import App from "../../../App";


//
// const PlaceInput=(props)=>(
//     console.log(props),
//         <View style={styles.inputContainer}>
//             <TextInput
//                 placeholder={"An awesome place"}
//                 // value={this.props.Content}
//                 onChangeText={this.placeNameChangedHandler}
//                 style={styles.placeInput}
//             />
//             <Button
//                 title="Add"
//                 style={styles.placeButton}
//                 onPress={this.placeSubmitHandler}
//             />
//         </View>
// );




class PlaceInput extends Component {
    state = {
        placeName: ""
    };

    componentDidMount() {

    }

    placeNameChangedHandler = val => {
        this.setState({
            placeName: val
        });
    };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
            return;
        }


        this.props.onPlaceAdded(this.state.placeName);
    };

    render() {
        // const textColor = this.props.selected ? "red" : "black";
        return (

            /*<TouchableOpacity onPress={this._onPress}>
                <View>
                    <Text style={{ color: textColor }}>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableOpacity>*/

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
        );
    }
}





// export default class SampleLayout  extends Component{
/*
export default class PlaceInput extends App {

    /* placeNameChangedHandler(val) {
         this.setState({placeName: val});
     }*/

    /*  placeSubmitHandler() {

          if (this.state.placeName.trim() === "") {

              console.log("empty placeName");
              return;
          }


          this.setState(prevState => {
              return {
                  places: prevState.places.concat(prevState.placeName)
              };
          });
          /!*this.setState(function(prevState, props) {
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
          });*!/
      }*/

/*
    constructor(props) {
        super(props);
        // this.state = {text: ''};
        // this.state = {
        //     placeName: ''
        // };
        render()
        {
            // const textColor = this.props.selected ? "red" : "black";
            return (

                /*<TouchableOpacity onPress={this._onPress}>
                    <View>
                        <Text style={{ color: textColor }}>
                            {this.props.title}
                        </Text>
                    </View>
                </TouchableOpacity>*/
/*
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
            );
        }
    }
}

*/
// const listItem=(props)=>(
//     <View style={styles.listItem}>
//         <Text>{props.placeName}</Text>
//     </View>
// );



const styles=StyleSheet.create({
    inputContainer:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"

    },
    placeButton:{
        width:"30%"
    }
});

export default PlaceInput;
// AppRegistry.registerComponent('AwesomeProject', () => ListItem);