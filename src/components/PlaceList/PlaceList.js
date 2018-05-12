import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import ListItem from '../ListItem/ListItem';

// const PlaceList=(props)=>(
// PlaceList is Place_for_Place_output
const PlaceList=props=>{
    // (


    console.log(props.places);

    const placesOutput = props.places.map((place,i)=>(
        alert(i),
            alert(place),
            <ListItem Key={i} placeName={place}/>
    ));

    /*<View style={styles.listItem}>
        <Text>{props.placeName}</Text>
    </View>
*/
    return <View style={styles.listContainer}>
        {placesOutput}
    </View>;
}


const styles=StyleSheet.create({
    listContainer:{
        flex: 1,
        padding:26,
        backgroundColor: '#F5FCFF',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});

export default PlaceList;
// AppRegistry.registerComponent('AwesomeProject', () => ListItem);

