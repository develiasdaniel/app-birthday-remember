import React, {useState} from 'react';
import { 
    Text, 
    View, 
    StyleSheet
} from 'react-native';
import ActionBar from "./ActionBar";
import AddBirthday from "./AddBirthday";


export default function ListBirthday(props){  
  const {user} = props;
  const [showList, setShowList] = useState(false);
  return(
    <View style={styles.container}>
      {showList ? (
        <>
        <Text>List</Text>
        <Text>List</Text>
        <Text>List</Text>
        <Text>List</Text>
        </>
      ) : (
        <AddBirthday user={user} setShowList={setShowList}/>
      )
      }      
      <ActionBar showList={showList} setShowList={setShowList}/>
    </View>
  )
}


const styles = StyleSheet.create({
   container:{
       height:'100%',
       alignItems: 'center'
   }
})