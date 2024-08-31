import { View, FlatList, TouchableOpacity, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import TodoItem from './reusableComponents/TodoItem';

const HomeScreen = () => {
  const [DATA, setDATA] = useState([
    { title: 'Install react-native' },
    { title: 'Make todo App' },
    { title: 'QNA' },
  ]);

  const [todoText, setTodoText] = useState('');

  const handleCreate = () => {
    if (todoText.trim()) {
      setDATA([...DATA, { title: todoText }]);
      setTodoText('');
    }
  };

  const handleDelete = (titleToDelete) => {
    setDATA(DATA.filter(item => item.title !== titleToDelete));
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View>
        <TextInput
          style={{ borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 }}
          placeholder="Enter todo"
          value={todoText}
          onChangeText={setTodoText}
        />
      </View>
      <TouchableOpacity
        onPress={handleCreate}
        style={{
          width: '100%',
          backgroundColor: '#add8e6',
          padding: 20,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          marginBottom: 20,
        }}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 19 }}>
          Create
        </Text>
      </TouchableOpacity>

      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <TodoItem
            title={item.title}
            style={{ margin: 10 }}
            onDeletePress={() => handleDelete(item.title)}
          />
        )}
        keyExtractor={item => item.title}
      />
    </View>
  );
};

export default HomeScreen;
