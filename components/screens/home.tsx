import Stack from '../navigation/navigation';
import {TypeStackParamList} from '../navigation/navigation';
import styles from '../styles/styles';

import React, {useState,
    useEffect
} from 'react';

import{
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    ActivityIndicator,
    Image,
    TextInput
} from 'react-native';

import { 
    StackScreenProps
} from '@react-navigation/stack';

type HomeScreenProps = StackScreenProps<TypeStackParamList, 'Home'>;

const HomeScreen = ({navigation} : HomeScreenProps) => {
    const [nextLoading, setNextLoading] = useState<boolean>(true);
    const [prevLoading, setPrevLoading] = useState<boolean>(false);
    const [dataSource, setDataSource] = useState<Array<any>>([]);
    const [offset, setOffset] = useState<number>(1);
    const [search, setSearch] = useState<string>('');
    const [filteredDataSource, setFilteredDataSource] = useState<Array<any>>([]);

    useEffect(() => getData(), []);

    const getData = () => {
        console.log('getData');
        setNextLoading(true);
        setSearch('');
        console.log(offset);
        fetch('https://rickandmortyapi.com/api/character/?page=' + offset)
            .then((response) => response.json())
            .then((responseJson) => {
                setOffset(offset + 1);
                console.log(offset);
                console.log(responseJson.results);
                setDataSource(responseJson.results);
                setFilteredDataSource(responseJson.results);
                setNextLoading(false);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const getDataPrev = () => {
        console.log('getPrevData');
        console.log(offset);
        setSearch('');
        setPrevLoading(true);
        let toGet = offset - 2;
        fetch('https://rickandmortyapi.com/api/character/?page=' + toGet)
            .then((response) => response.json())
            .then((responseJson) => {
                setOffset(offset - 1);
                console.log(responseJson.results);
                setDataSource(responseJson.results);
                setFilteredDataSource(responseJson.results);
                setPrevLoading(false);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const renderFooter = () => {
        return (
            <View style={styles.footer}>
                {offset === 1 || offset === 2 ? null : (
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={getDataPrev}
                        style={styles.loadPrevBtn}>
                        <Text style={styles.btnText}>{offset - 2}</Text>
                        {prevLoading ? (
                            <ActivityIndicator color="#454D65" style={{marginLeft: 8}} />
                          ) : null
                        }
                   </TouchableOpacity>
                )}
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.loadCurrBtn}>
                    <Text style={styles.btnText}>{offset - 1}</Text>
                </TouchableOpacity>
                {offset === 1 ? null : (
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={getData}
                        style={styles.loadNextBtn}>
                        <Text style={styles.btnText}>{offset}</Text>
                        {nextLoading ? (
                            <ActivityIndicator color="#454D65" style={{marginLeft: 8}} />
                          ) : null
                        }
                    </TouchableOpacity>
                )}
            </View>
        );
    };

    const ItemView = ({item}:{item: any}) => {
        return (
            <View style={styles.feedItem}>
                <Image source={{uri: item.image}} style={{width: 36, height: 36, borderRadius: 18, marginRight: 16}} />
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={styles.footer}>
                            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Details', {data: item})}>
                            	<Text style={styles.name}>{item.name}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    };

    const searchFilterFunction = (text: string) => {
        if (text){
            const newData = dataSource.filter(function (item){
                const itemData = item.name ? item.name : '';
                const textData = text;
                console.log(itemData);
                console.log(textData);
                return itemData.indexOf(textData) > -1;
            });
            console.log(newData);
            setFilteredDataSource(newData);
            setSearch(text);
        } 
        else{
            setFilteredDataSource(dataSource);
            setSearch(text);
        }
    };

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
            	<View style={styles.header}>
                    <Text style={styles.headerTitle}>Home</Text>
                </View>
                <View style={{justifyContent: 'space-between', flexDirection: 'row', marginLeft:16, marginRight:10}}>
                    <TextInput
                        style={styles.search}
                        onChangeText={(text) => searchFilterFunction(text)}
                        value={search}
                        underlineColorAndroid="transparent"
                        placeholder="Search Here"
                        clearButtonMode="always"
                    />
                    <TouchableOpacity
                        style={styles.closeButtonParent}
                        onPress={() => searchFilterFunction('')}>
                        <Image
                            style={styles.closeButton}
                            source={require('../../assets/close.png')}
                        />
                    </TouchableOpacity>
                </View>
                <FlatList
                	style={styles.feed}
                    data={filteredDataSource}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={ItemView}
                    ListFooterComponent={renderFooter}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;