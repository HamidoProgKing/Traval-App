import React from 'react';
import { StyleSheet, Text, View,StatusBar, ImageBackground, ScrollView } from 'react-native';
import { Entypo ,FontAwesome,Feather} from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      

      <StatusBar hidden />
      <ScrollView  showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <ImageBackground 
        style={styles.imgBg} 
        source={ {uri:"https://images.unsplash.com/photo-1608321074552-306f8811548e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"}}
        >
          <View style={styles.title}>
              <View>
                <Entypo name="text" size={24} color="white" />
              </View>
              <View style={{
                flexDirection:"row",
              }}>
              <View style={{
                marginRight:20,
              }}>
                 <Feather name="bell" size={22} color="white" />
              </View>
              <View>
                <FontAwesome name="search" size={22} color="white" /> 
              </View>
              </View>
          </View>
          <View style={styles.textHeader}>
                  <Text
                   style={{
                     fontSize:18,
                     color:"white",
                     fontWeight:"bold",
                   }}
                   >Traval App</Text>
                  <Text
                       style={{
                        fontSize:12,
                        color:"white",
                        fontWeight:"bold",
                      }}
                  >Hope you have a great day
                  </Text>
                  <View style={{flexDirection:"row"}}>
                    <View style={{
                      paddingHorizontal:10,
                      paddingVertical:5,
                      borderRadius:10,
                      marginTop:5,
                      backgroundColor:"grey",
                    }}>
                        <Text
                        style={{
                          fontSize:10,
                          color:"white",
                          fontWeight:"bold",
                        }}>
                          JOIN US
                          </Text>
                    </View>
                  </View>
              </View>
        </ImageBackground>
        <View style={{marginTop:20,paddingHorizontal:20,}}>
        <Text
                   style={{
                     fontSize:18,
                     color:"black",
                     fontWeight:"bold",
                   }}
                   >Nature Places</Text>
                  <Text
                       style={{
                        fontSize:12,
                        color:"grey",
                        fontWeight:"bold",
                      }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Text>
        </View>
      </View> 
      <ScrollView horizontal={true}
      style={{
        paddingLeft:20,
        paddingRight:10,
        marginTop:10,
      }}
      showsHorizontalScrollIndicator={false}
      >
        <View style={{
          flexDirection:'row',
        }}>
        <View style={{
          overflow:"hidden",
          borderRadius:10,
          marginRight:10,
          maxHeight:200,
          }}>
        <ImageBackground 
        style={{
          width:150,
         height:200,}} 
        source={ {uri:"https://images.unsplash.com/photo-1627840935425-3d333bb627f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"}}
        >
          <View style={{position:"absolute",left:20,bottom:20,}} >
          <Text
                   style={{
                     fontSize:14,
                     color:"white",
                     fontWeight:"bold",
                   }} >
                     mountains
          </Text>
          <Text
                   style={{
                     fontSize:14,
                     color:"white",
                     fontWeight:"bold",
                   }} >
                     <Feather name="star" size={18} color="white" />  5
                   
            </Text>
          </View>

        </ImageBackground>
        </View>
        </View>

        <View style={{
          flexDirection:'row',
        }}>
        <View style={{
          overflow:"hidden",
          borderRadius:10,
          marginRight:10,
          maxHeight:200,
          }}>
        <ImageBackground 
        style={{
          width:150,
         height:200,}} 
        source={ {uri:"https://images.unsplash.com/photo-1627863226402-4d30551f416c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"}}
        >
          <View style={{position:"absolute",left:20,bottom:20,}} >
          <Text
                   style={{
                     fontSize:14,
                     color:"white",
                     fontWeight:"bold",
                   }} >
                     snow
          </Text>
          <Text
                   style={{
                     fontSize:14,
                     color:"white",
                     fontWeight:"bold",
                   }} >
                     <Feather name="star" size={18} color="white" />  5
                   
            </Text>
          </View>

        </ImageBackground>
        </View>
        </View>

        <View style={{
          flexDirection:'row',
        }}>
        <View style={{
          overflow:"hidden",
          borderRadius:10,
          marginRight:10,
          maxHeight:200,
          }}>
        <ImageBackground 
        style={{
          width:150,
         height:200,}} 
        source={ {uri:"https://images.unsplash.com/photo-1623500549743-63abf749c4d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=339&q=80"}}
        >
          <View style={{position:"absolute",left:20,bottom:20,}} >
          <Text
                   style={{
                     fontSize:14,
                     color:"white",
                     fontWeight:"bold",
                   }} >
                     lakelet
          </Text>
          <Text
                   style={{
                     fontSize:14,
                     color:"white",
                     fontWeight:"bold",
                   }} >
                     <Feather name="star" size={18} color="white" />  5
                   
            </Text>
          </View>

        </ImageBackground>
        </View>
        </View>

        <View style={{
          flexDirection:'row',
        }}>
        <View style={{
          overflow:"hidden",
          borderRadius:10,
          marginRight:10,
          maxHeight:200,
          }}>
        <ImageBackground 
        style={{
          width:150,
         height:200,}} 
        source={ {uri:"https://images.unsplash.com/photo-1627835079593-0ce9a87cffe4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"}}
        >
          <View style={{position:"absolute",left:20,bottom:20,}} >
          <Text
                   style={{
                     fontSize:14,
                     color:"white",
                     fontWeight:"bold",
                   }} >
                     fog
          </Text>
          <Text
                   style={{
                     fontSize:14,
                     color:"white",
                     fontWeight:"bold",
                   }} >
                     <Feather name="star" size={18} color="white" />  5
                   
            </Text>
          </View>

        </ImageBackground>
        </View>
        <View style={{width:25,}}></View>
        </View>
      </ScrollView>
      <View style={{marginTop:20,paddingHorizontal:20,}}>
        <Text
                   style={{
                     fontSize:18,
                     color:"black",
                     fontWeight:"bold",
                   }}
                   >
                    Hotels
                   </Text>
                  <Text
                       style={{
                        fontSize:12,
                        color:"grey",
                        fontWeight:"bold",
                      }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                  </Text>
        </View>
        <ScrollView horizontal={true}
      style={{
        paddingLeft:20,
        paddingRight:10,
        marginTop:10,
      }}
      showsHorizontalScrollIndicator={false}
      >
        <View style={{
          flexDirection:'row',
        }}>
        <View style={{
          overflow:"hidden",
          borderRadius:10,
          marginRight:10,
          maxWidth:250,
          }}>
        <ImageBackground 
        style={{
          width:250,
         height:150,}} 
        source={ {uri:"https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"}}
        >
          <View style={{position:"absolute",left:20,bottom:20,}} >
          <Text
                   style={{
                     fontSize:14,
                     color:"white",
                     fontWeight:"bold",
                   }} >
                     Lorun ipusm
          </Text>
          <Text
                   style={{
                     fontSize:14,
                     color:"white",
                     fontWeight:"bold",
                   }} >
                     <Feather name="star" size={18} color="white" />  5
                   
            </Text>
          </View>

        </ImageBackground>
        <Text
                   style={{
                     fontSize:14,
                     color:"black",
                     fontWeight:"bold",
                   }} >
                     Lorun ipusm
          </Text>
          <Text
                   style={{
                     fontSize:12,
                     color:"grey",
                     fontWeight:"bold",
                   }} >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor ...                   
            </Text>
        </View>

        <View style={{
          overflow:"hidden",
          borderRadius:10,
          marginRight:10,
          maxWidth:250,
          }}>
        <ImageBackground 
        style={{
          width:250,
         height:150,}} 
        source={ {uri:"https://images.unsplash.com/photo-1574691250077-03a929faece5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=375&q=80"}}
        >
          <View style={{position:"absolute",left:20,bottom:20,}} >
          <Text
                   style={{
                     fontSize:14,
                     color:"white",
                     fontWeight:"bold",
                   }} >
                     Lorun ipusm
          </Text>
          <Text
                   style={{
                     fontSize:14,
                     color:"white",
                     fontWeight:"bold",
                   }} >
                     <Feather name="star" size={18} color="white" />  5
                   
            </Text>
          </View>

        </ImageBackground>
        <Text
                   style={{
                     fontSize:14,
                     color:"black",
                     fontWeight:"bold",
                   }} >
                     Lorun ipusm
          </Text>
          <Text
                   style={{
                     fontSize:12,
                     color:"grey",
                     fontWeight:"bold",
                   }} >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor ...                   
            </Text>
        </View>

        <View style={{
          overflow:"hidden",
          borderRadius:10,
          marginRight:10,
          maxWidth:250,
          }}>
        <ImageBackground 
        style={{
          width:250,
         height:150,}} 
        source={ {uri:"https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"}}
        >
          <View style={{position:"absolute",left:20,bottom:20,}} >
          <Text
                   style={{
                     fontSize:14,
                     color:"white",
                     fontWeight:"bold",
                   }} >
                     Lorun ipusm
          </Text>
          <Text
                   style={{
                     fontSize:14,
                     color:"white",
                     fontWeight:"bold",
                   }} >
                     <Feather name="star" size={18} color="white" />  5
                   
            </Text>
          </View>

        </ImageBackground>
        <Text
                   style={{
                     fontSize:14,
                     color:"black",
                     fontWeight:"bold",
                   }} >
                     Lorun ipusm
          </Text>
          <Text
                   style={{
                     fontSize:12,
                     color:"grey",
                     fontWeight:"bold",
                   }} >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor ...                   
            </Text>
        </View>


        <View style={{width:25,}}></View>
        </View>
      </ScrollView>
        <View  
        style={{height:30,}}>

        </View>
        </ScrollView>


    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    overflow:"hidden",
    borderBottomRightRadius:50,
  },
  imgBg: {
    width:"100%",
    height:250,
  },
  title:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignContent:"center",
    paddingHorizontal:20,
    marginTop:20,
  },
  textHeader: {
    paddingHorizontal:20,
    flex:1,
    marginTop:-15,
    justifyContent:"center",
  },
});
