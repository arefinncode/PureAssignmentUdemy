import React from 'react';
import { View, StyleSheet,FlatList } from 'react-native';

import ListItem from '../ListItem/ListItem';

const PlaceList=props=>{

    /*
    old code

         console.log(props.places);
        const placesOutput=props.places.map((currentValue,index)=>(
            /*<ListItem Key={index} placeName={currentValue}/>

        <ListItem Key={index} placeName={currentValue}/>
    )
    );

        console.log(placesOutput);

        return(

            <View style={styles.listContainer}>{placesOutput}</View>
        );
     */

    return (
        <FlatList
            style={styles.listContainer}
            data={props.places}
            renderItem={(info)=>(
                <ListItem
                    placeName={info.item.name}
                    placeImage={info.item.image}
                    onItemPressed={()=> props.onItemSelected(info.item.key)}
                />

            )}
        />
    );
};


const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});

export default PlaceList;