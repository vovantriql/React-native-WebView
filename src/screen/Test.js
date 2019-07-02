
import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Alert,TextInput, StyleSheet,ImageBackground,Image } from "react-native";
import { nstyles } from '../styles/styles'
import Utils from '../app/Utils';
import { Images } from '../images';


class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            link:''
        }
    }
    _gotoWeb = () => {
        Utils.goscreen(this, 'sc_BrowserInApp', 
        { link:'http://' + this.state.link + '/web' , istitle: true, title: 'WinERP' }
        )
    }
    render() {
        return (
            <ImageBackground source={Images.icBackGround} style={styles.backgroundContainer}>
            <View>
                <View>
                <Image source={Images.icLogo} style={styles.logo} />
                <Text style={styles.logoText}>WINERP</Text>
                </View>
                <View>
                <TextInput style={styles.input}
                placeholder={"Nhập địa chỉ website: "}
                value={this.state.link}
                onChangeText ={(text) => this.setState({link: text})}
                placeholderTextColor={'rgba(255,255,255,0.7)'}
                underlibeColorAndroid='transparent'
          />

                </View>
                
                <TouchableOpacity  onPress={this._gotoWeb} style={{ paddingTop: 50 }}>
                    <Text style={styles.text}>Touch this to go to Web</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        );
    }

}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center'
      },
      logo: {
        width: 300,
        height: 200,
        marginBottom: 100,
        justifyContent: 'center',
      },
      logoText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        opacity: 0.5
      },
      input: {
        width: 250,
        height: 60,
        borderRadius: 45,
        fontSize: 20,
        backgroundColor: '#CFCFCF',
        color: 'rgba(255,255,255,0.7)',
        marginHorizontal: 25,
    
      },
      
      text: {
        color: '#CCCCCC',
        fontSize: 18,
        textAlign: 'center'
      }
});

export default Test;
