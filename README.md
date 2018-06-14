# Lyrical-GraphQL

### Mutation

```
mutation AddSong($title: String) {
  addSong(title: $title) {
    id
    title
  }
}

mutation deleteSong($id: ID) {
  deleteSong(id: $id) {
    id
  }
}
```
