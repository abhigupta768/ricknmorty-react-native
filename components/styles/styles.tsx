import React from 'react';

import{
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EBECF4"
    },
    header: {
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#EBECF4",
        shadowColor: "#454D65",
        shadowOffset: { height: 5, width:5 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 10
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "500"
    },
    feed: {
        marginHorizontal: 16
    },
    search: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 8,
        marginVertical: 8,
        textAlign: 'center',
        width: '90%'
    },
    closeButton: {
        height: 16,
        width: 16,
    },
    closeButtonParent: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    },
    feedItem: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 8,
        flexDirection: "row",
        marginVertical: 8,
        flex: 1
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 16
    },
    name: {
        fontSize: 15,
        fontWeight: "500",
        color: "#454D65"
    },
    detailName: {
        fontSize: 20,
        fontWeight: "500",
        color: "#454D65",
        textAlign: 'center'
    },
    timestamp: {
        fontSize: 11,
        color: "#C4C6CE",
        marginTop: 4
    },
    footer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    loadPrevBtn: {
        padding: 10,
        backgroundColor: "#FFF",
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
    },
    loadCurrBtn: {
        padding: 10,
        backgroundColor: "#FFF",
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
        opacity: 0.5
    },
    loadNextBtn: {
        padding: 10,
        backgroundColor: "#FFF",
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1
    },
    btnText: {
        color: '#454D65',
        fontSize: 15,
        textAlign: 'center',
    },
});

export default styles;