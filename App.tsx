import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import  styles  from './styles/Styles';
import  RenderItem  from './RenderItem';

export interface Task{
  title: string;
  done: boolean;
  date: Date;
}

export default function App() {

  const [text, setText] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const markDone = () => {
    console.log('markDone');
  }
  
  const deleteFunction = () => {
    console.log('deleteFunction');
  }

  return (
  <View style={ styles.container }>
    <Text style={ styles.title }>Tareas Pendientes</Text>
    <View style={ styles.input_container }>
      <TextInput placeholder='Agregar un nueva tarea' 
                 style={ styles.textinput }
                 onChangeText={ (t: string) => setText(t) }
                 value={ text } />
      <TouchableOpacity style={ styles.addBoton }>
          <Text style={ styles.textoBlanco }>Agregar</Text>
      </TouchableOpacity>
    </View>
    <View style={ styles.scrollContainer }>
        <FlatList renderItem={ ({ item }) => <RenderItem item={item} deleteFunction={deleteFunction} markDone={markDone}/>} data={tasks}/>
    </View>
  </View>
  );
}