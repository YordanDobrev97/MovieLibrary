
### Routes
  - /register - Receive `username` and `password` and register user
  - /login - Receive `username` and `password` and sends json web token
  - /rating - Receive `note/comment`, `rating number value`, ``title` and saves it to the database
  - /favorites/add - Recive `userId`, `moveId` and saves it who user it's added movie in favorites
  - /favorites/isAdded - Recive `userId`, `movieId` and checks if user is added movie in favorites
  - /favorites/remove - Recive `userId`, `movieId` and deletes the user's movie from favorites
  - /favorites - Getting all favorites movies
  - /rating/all?:title - Receive information about the number of votes of a movie by title
  - /movies/:id - Get movie by title
  - /movies - Getting all movies