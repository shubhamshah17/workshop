import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const TodoItem = ({title, style, onDeletePress}) => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        onPress={() => setChecked(!checked)}
        style={{
          height: 30,
          width: 30,
          backgroundColor: 'white',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {checked && (
          <Image
            style={{height: 25, width: 25}}
            source={require('../assets/check.png')}
          />
        )}
      </TouchableOpacity>
      <Text style={{color: 'white', fontWeight: 'bold'}}>{title}</Text>

      <TouchableOpacity onPress={onDeletePress}>
        <Image
          style={{height: 25, width: 25, tintColor: 'white', margin: 5}}
          source={require('../assets/delete.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: 'red',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

export default TodoItem;
