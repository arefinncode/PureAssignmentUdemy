import React from 'react';
import App from 'App';
import {View,Text,StyleSheet,TextInput,Button,} from 'react-native';


/*
const PlaceInput=(props)=>(
<View style={styles.inputContainer}>
    <TextInput
        placeholder={"An awesome place"}
        value={this.props.placeName}
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
*/







class PlaceInput extends App {
    // _onPress = () => {
    //     this.props.onPressItem(this.props.id);
    // };

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
                    value={this.props.val}
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

    }
});

export default PlaceInput;
// AppRegistry.registerComponent('AwesomeProject', () => ListItem);