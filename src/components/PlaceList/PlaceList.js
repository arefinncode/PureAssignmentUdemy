import React from 'react';
import { View, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem';

const PlaceList=props=>{

     console.log(props.places);
    const placesOutput=props.places.map((currentValue,index)=>(
        /*<ListItem Key={index} placeName={currentValue}/>*/

        <ListItem Key={index} placeName={currentValue}/>
        )
    );

     console.log(placesOutput);

    return(
        <View style={styles.listContainer}>{placesOutput}</View>
    );
};


const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});

export default PlaceList;