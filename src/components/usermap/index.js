import React from 'react'
import { View, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

export default usersMap = props => {
    let userLocationMarker = null;
    if (props.userLocation) {
        userLocationMarker = <Marker coordinate={props.userLocation} />
    }
    const usersMarkers = props.userPlaces
        .map(userPlace => <Marker coordinate={userPlace} key={userPlace.id} />)
    return (
        <View style={styles.mapContainer}>
            <MapView
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
                region={props.userLocation}
                style={styles.map} >
                {userLocationMarker}
                {usersMarkers}
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    mapContainer: {
        width: '100%',
        height: 200,
        marginTop: 20
    },
    map: {
        width: '100%',
        height: '100%'
    }
})