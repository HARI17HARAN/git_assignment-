


{ _id: ObjectId("6204ac79f0c9f77c1e7b52f6"),
  title: 'fightclub',
  writer: 'chuck palahniuko',
  year: 1999,
  actors: [ 'brad pitt,edward norton' ] }
{ _id: ObjectId("6204ad13f0c9f77c1e7b52f7"),
  title: 'Pulp Fiction',
  writer: 'Quentin Tarantino',
  year: 1994,
  actors: [ 'John Travolta,Uma Thurman' ] }
{ _id: ObjectId("6204affef0c9f77c1e7b52f8"),
  title: 'Inglorious Basterds',
  writer: 'Quentin Tarantino',
  year: 2009,
  actors: [ 'Brad Pitt,Diane Kruger,Eli Roth' ] }
{ _id: ObjectId("6204b0fff0c9f77c1e7b52f9"),
  title: 'The Hobbit: An Unexpected Journey',
  writer: 'J.R.R. Tolkein',
  year: 2012,
  franchise: 'The Hobbit' }
{ _id: ObjectId("6204b165f0c9f77c1e7b52fa"),
  title: 'The Hobbit: An Unexpected Journey',
  writer: 'J.R.R. Tolkein',
  year: 2013,
  franchise: 'The Hobbit' }
{ _id: ObjectId("6204b1b6f0c9f77c1e7b52fb"),
  title: 'The Hobbit: The Desolation of Smaug',
  writer: 'J.R.R. Tolkein',
  year: 2013,
  franchise: 'The Hobbit' }
{ _id: ObjectId("6204b226f0c9f77c1e7b52fc"),
  title: 'The Hobbit: The Battle of the Five Armies',
  writer: 'J.R.R. Tolkein',
  year: 2012,
  franchise: 'The Hobbit',
  synopsis: 'Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness' }
{ _id: ObjectId("6204b26af0c9f77c1e7b52fd"),
  title: 'Pee Wee Herman\'s Big Adventure' }
{ _id: ObjectId("6204b280f0c9f77c1e7b52fe"), title: 'Avatar' }


#query /Find Documents
QUESTIONS

1. get all documents
2. get all documents with writer set to "Quentin Tarantino"
3. get all documents where actors include "Brad Pitt"
4. get all documents with franchise set to "The Hobbit"
5. get all movies released in the 90s
6. get all movies released before the year 2000 or after 2010
ANSWERS
=======
#QUERY/FIND DOCUMENTS
>>>>>>> bfc9ca69e6e9626c7a5280d32b5899689471a7a1
1)db.movies.find()
2)db.movies.find({writer:"Quentin tarantino"})
3)db.movies.find({actors:"Brad Pitt"})
4)db.movies.find({franchise:"The Hobbit"})
5)db.movies.find({year:{$lt:2000}})
6)db.movies.find({year:{$gt:2010}})
#UPDATE DOCUMENTS
QUESTIONS
1) add a synopsis to "The Hobbit: An Unexpected Journey" : "A reluctant hobbit,
Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of
dwarves to reclaim their mountain home - and the gold within it - from the
dragon Smaug."
2) add a synopsis to "The Hobbit: The Desolation of Smaug" : "The dwarves,
along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim
Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a
mysterious and magical ring."
3)add an actor named "Samuel L. Jackson" to the movie "Pulp Fiction"
ANSWERS
1)db.movies.update({title:"The Hobbit:An Unexpected Journey"},{$set:{synopsis:"A reluctant hobbit, 
Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of 
dwarves to reclaim their mountain home - and the gold within it - from the 
dragon Smaug."}})
2)db.movies.update({year:2013},{$set:{synopsis:"The dwarves, 
along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim 
Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a 
mysterious and magical ring."}})
3)db.movies.update({title:Pulp Fiction},{$Set:{actors:["Sameul L. Jackson","John Travolta","Uma thurman"]}})

#TEXT SEARCH

QUESTIONS

1. find all movies that have a synopsis that contains the word "Bilbo"
2. find all movies that have a synopsis that contains the word "Gandalf"
3. find all movies that have a synopsis that contains the word "Bilbo" and not the
word "Gandalf"
4. find all movies that have a synopsis that contains the word "dwarves" or
"hobbit"
5. find all movies that have a synopsis that contains the word "gold" and
"dragon"

ANSWERS

1)db.movies.createIndex({synopsis:"text"})
  db.movies.find({$text:{$search:"bilbo"}})

2)db.movies.find({$text:{$search:"Gandalf"}})

3)db.movies.find({$text:{$search:"bilbo -Gandalf"}})

4)db.movies.find({$text:{$search:"dwarves or hobbit"}})

5)db.movies.find({$text:{$search:"gold and dragon"}})

#DELETE DOCUMENTS

QUESTIONS
1. delete the movie "Pee Wee Herman's Big Adventure"
2. delete the movie "Avatar"

ANSWERS

1)db.movies.remove({title:"Pee Wee Herman's Big Adventure"})

2)db.movies.remove({title:"Avatar"})

#QUERYING RELATED COLLECTIONS

QUESTIONS

1. find all users
2. find all posts
3. find all posts that was authored by "GoodGuyGreg"
4. find all posts that was authored by "ScumbagSteve"
5. find all comments
6. find all comments that was authored by "GoodGuyGreg"
7. find all comments that was authored by "ScumbagSteve"
8. find all comments belonging to the post "Reports a bug in your code"

ANSWERS

1)db.users.find()

2)db.posts.find()

3)db.posts.find({username:"GoodGuyGreg"})

4)db.posts.find({username:"ScumbagSteve"})

5)db.comments.find()

6)db.comments.find({username:"GoodGuyGreg"})

7)db.comments.find({username:"ScumbagSteve"})

8)db.comments.createIndex({post:"text})
  db.comments.find({$text:{$search:"Reports a bug in your code"}})