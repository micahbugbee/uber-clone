import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import tw from 'twrnc';

const data = [
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "1602 Southern Hills Drive, Ardmore, OK, USA",
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Work",
        destination: "Winstar World Casino and Resort, Casino Avenue, Thackerville, OK, USA",
    },
];

const NavFavorites = () => {
  return (
    <FlatList 
    data={data} 
    ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5}]} />
    )}
    keyExtractor={(item) => item.id} 
    renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
            <Icon 
                style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                name={icon}
                type='ionicon'
                color='white'
                size={18}
            />
            <View>
                <Text style={tw`font-semibold text-lg`}>{location}</Text>
                <Text style={tw`text-gray-500`}>{destination}</Text>
            </View>
        </TouchableOpacity>
    )}/>
  )
}

export default NavFavorites

const styles = StyleSheet.create({})