import Stack from '../navigation/navigation';
import {TypeStackParamList} from '../navigation/navigation';
import styles from '../styles/styles';

import React, {useState,
    useEffect
} from 'react';

import{
    View,
    Text,
    StyleSheet,
    ImageBackground,
    ActivityIndicator,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import { 
    StackScreenProps
} from '@react-navigation/stack';

type DetailScreenProps = StackScreenProps<TypeStackParamList, 'Details'>;

const DetailsScreen = ({navigation, route} : DetailScreenProps) => {
    const data = route.params;
    console.log(data.data.image);
    const [loading, setLoading] = useState<boolean>(true);
    return (
        <ScrollView style={{flex: 1, backgroundColor: "#EBECF4"}}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Details</Text>
                </View>
            <Text style={styles.detailName}>Name:  {data.data.name}</Text>
            <Text style={styles.detailName}>Species:  {data.data.species}</Text>
            <Text style={styles.detailName}>Gender:  {data.data.gender}</Text>
            <Text style={styles.detailName}>Dead/Alive: {data.data.status}</Text>
            <ImageBackground
                onError={(e) => console.log(e.nativeEvent.error)} 
                style={{height: 400, width: '100%'}}
                source={{
                    uri: data.data.image,
                }}
                progressiveRenderingEnabled={true}
                onLoadEnd={() => setLoading(false)}
            >
                <ActivityIndicator animating={loading} />
            </ImageBackground>
            <View style={styles.footer}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate('Home')}
                    style={styles.loadPrevBtn}>
                    <Text style={styles.btnText}>Back</Text>
                 </TouchableOpacity>
            </View>
            </View>
        </ScrollView>
    );
}

export default DetailsScreen;