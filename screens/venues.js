import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, DrawerLayoutAndroid, Dimensions,Image } from 'react-native';
import Toolbar from './toolbar';
import DrawerLayout from 'react-native-drawer-layout';
import SideMenu from './sidemenu';
import { Icon,Button,Content,Footer,FooterTab } from 'native-base';
import { scale } from 'react-native-size-matters';


class Trainers extends Component {
    constructor(props) {
        super(props);
        this.openDrawer = this.openDrawer.bind(this);
    }

    openDrawer() {
        this.drawer.openDrawer();
    }

    render() {
        var navigationView = <SideMenu navigation={this.props.navigation} />;
        return (
		  <DrawerLayout
                drawerWidth={scale(290)}
                disableGestures={true}
                ref={(_drawer) => (this.drawer = _drawer)}
                drawerPosition={DrawerLayout.positions.Left}
                renderNavigationView={() => navigationView}>
                {this.props.hideHeader ? null : (
                    <Toolbar
                        title='Venues'
                        back={true}
                        navigation={this.props.navigation}
                        openDrawer={this.openDrawer}
                        closeDrawer={this.closeDrawer}
                    />
                )}
                <Content style={{backgroundColor:'white'}}>
            <View
                style={{
                    flex          : 1,
                    height        : Dimensions.get('screen').height,
                    flexDirection : 'column'
                }}>
                <View style={styles.container_1}>
                    <TouchableOpacity
                        style={styles.touchableOpacityContainer}
                        >
                        <Image
                                source={{
                                    uri :
                                        'https://thumb.ibb.co/bUtXsy/pp.png'
                                }}
                                style={styles.image}
                            />
							<Text style={[ styles.title_text1]}>Bahu Acad</Text>
							<Icon type='FontAwesome' name='location-arrow' style={styles.phoneIcon}>
                        <Text style={[ styles.title_text]}> No.2,Velacherry,Chennai</Text>
						</Icon>
						<View style={{backgroundColor:'crimson',borderRadius:5,width:100,height:15,margin:10}}>
                    <Text style={{color: '#ffffff',justifyContent:'center', textAlign : 'center',textAlignVertical : 'center',alignSelf: 'center',fontSize:scale(9)}}>Open Time Tracker</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.touchableOpacityContainer}
                        >
                        <Image
                                source={{
                                    uri :
                                        'https://thumb.ibb.co/bUtXsy/pp.png'
                                }}
                                style={styles.image}
                            />
							<Text style={[ styles.title_text1]}>Bahu Acad</Text>
							<Icon type='FontAwesome' name='location-arrow' style={styles.phoneIcon}>
                        <Text style={[ styles.title_text]}> No.2,Velacherry,Chennai</Text>
						</Icon>
						<View style={{backgroundColor:'crimson',borderRadius:5,width:100,height:15,margin:10}}>
                    <Text style={{color: '#ffffff',justifyContent:'center', textAlign : 'center',textAlignVertical : 'center',alignSelf: 'center',fontSize:scale(9)}}>Open Time Tracker</Text>
                    </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.container_2}>
                    <TouchableOpacity
                        style={styles.touchableOpacityContainer}
                        >
                        <Image
                                source={{
                                    uri :
                                        'https://thumb.ibb.co/bUtXsy/pp.png'
                                }}
                                style={styles.image}
                            />
							<Text style={[ styles.title_text1]}>Bahu Acad</Text>
							<Icon type='FontAwesome' name='location-arrow' style={styles.phoneIcon}>
                        <Text style={[ styles.title_text]}> No.2,Velacherry,Chennai</Text>
						</Icon>
						<View style={{backgroundColor:'crimson',borderRadius:5,width:100,height:15,margin:10}}>
                    <Text style={{color: '#ffffff',justifyContent:'center', textAlign : 'center',textAlignVertical : 'center',alignSelf: 'center',fontSize:scale(9)}}>Open Time Tracker</Text>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.touchableOpacityContainer}
                        >
                        <Image
                                source={{
                                    uri :
                                        'https://thumb.ibb.co/bUtXsy/pp.png'
                                }}
                                style={styles.image}
                            />
							<Text style={[ styles.title_text1]}>Bahu Acad</Text>
							<Icon type='FontAwesome' name='location-arrow' style={styles.phoneIcon}>
                        <Text style={[ styles.title_text]}> No.2,Velacherry,Chennai</Text>
						</Icon>
						<View style={{backgroundColor:'crimson',borderRadius:5,width:100,height:15,margin:10}}>
                    <Text style={{color: '#ffffff',justifyContent:'center', textAlign : 'center',textAlignVertical : 'center',alignSelf: 'center',fontSize:scale(9)}}>Open Time Tracker</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
			</Content>
							  <Footer style={{left: 0,right: 0,bottom: 0,height: 56,backgroundColor:'white'}}>
                    <FooterTab style={{left: 0,right: 0,bottom: 0,height: 56,backgroundColor:'white'}}>
                        <Button 
						  onPress={() => this.navigate('home')}
						  >
                            <Icon name='ios-apps-outline' style={styles.iconStyle}/>
							<Text style={styles.title_text}>Dashboard</Text>
                        </Button>
                        <Button  onPress={() => this.navigate('customers')}>
                            <Icon name='ios-camera-outline' style={styles.iconStyle}/>
							<Text style={styles.title_text}>Customers</Text>
                        </Button>
                        <Button  onPress={() => this.navigate('invoices')}>
                            <Icon name='ios-contact-outline' style={styles.iconStyle} />
							<Text style={styles.title_text}>Invoice</Text>
                        </Button>
						    <Button  onPress={() => this.navigate('timesheet')}>
                            <Icon name='ios-compass' style={styles.iconStyle}/>
							<Text style={styles.title_text}>Timesheet</Text>
                        </Button>
						 <Button onPress={() => this.navigate('sidemenu')}>
                            <Icon name='more' style={styles.iconStyle}/>
							<Text style={styles.title_text}>More</Text>
                        </Button>		
                    </FooterTab>
                </Footer>
			  </DrawerLayout>
        );
    }

    navigate(screen_name) {
        this.props.navigation.navigate(screen_name);
    }
}

export default Trainers;

const styles = StyleSheet.create({
    container_1               : {
        flex          : 0,
        flexDirection : 'row',
        alignItems    : 'center',
        padding       : scale(8)
    },
    container_2               : {
        flex          : 1,
        flexDirection : 'row',
        padding       : scale(8)
    },
    title_text                : {
        fontSize          : scale(10),
		color:'grey',
		padding:scale(5),
        textAlign:'left'
    },
	 title_text1               : {
        fontSize          : scale(13),
        justifyContent    : 'center',
        alignSelf         : 'center',
        textAlign         : 'center',
        textAlignVertical : 'center',
		color:'black',
		padding:scale(5)
    },
    touchableOpacityContainer : {
        height         : 200,
        width          : 160,
        flex           : 1,
        borderRadius   : scale(3),
        borderColor    : 'black',
        borderWidth    : 1,
        marginTop      : scale(35),
        marginRight    : scale(25),
        marginLeft     : scale(15)
    },
    iconStyle                 : {
           textAlign         : 'center',
        textAlignVertical : 'center',
        alignSelf         : 'center',
		color:'grey'
    },
    iconContainer             : {
        width           : scale(62),
        height          : scale(62),
        justifyContent  : 'center',
        alignItems      : 'center',
        borderRadius    : scale(40)
    },
	  phoneIcon                 : {
        fontSize : scale(10),
        color    : 'grey'
    },
	image              : { width: 150, height: 110},
});
