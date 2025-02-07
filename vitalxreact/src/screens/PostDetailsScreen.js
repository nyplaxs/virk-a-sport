import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const PostDetailsScreen = ({ route }) => {
  const { post } = route.params;
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const addComment = () => {
    setComments([...comments, { id: comments.length, text: newComment }]);
    setNewComment('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text>{post.content}</Text>
      <FlatList data={comments} renderItem={({ item }) => <Text>{item.text}</Text>} keyExtractor={(item) => item.id.toString()} />
      <TextInput style={styles.input} placeholder="Ajouter un commentaire..." value={newComment} onChangeText={setNewComment} />
      <Button title="Commenter" onPress={addComment} />
    </View>
  );
};

const styles = StyleSheet.create({ container: { padding: 20 }, title: { fontSize: 20, fontWeight: 'bold' }, input: { borderBottomWidth: 1, marginBottom: 10 } });

export default PostDetailsScreen;
