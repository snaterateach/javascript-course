// 20220419211722
// https://api.sampleapis.com/simpsons/episodes

const data = [
	{
	  "season": 1,
	  "episode": 1,
	  "name": "Simpsons Roasting on an Open Fire",
	  "rating": 8.2,
	  "description": "When Homer receives no holiday bonus, he hopes to make extra money by becoming a Mall Santa, in an attempt to bring the family a happy holiday.",
	  "airDate": "1990-09-01T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZGZjNzZhNzAtYTZjNi00YjU4LWI0NTYtNjZmYWNkYTA2YzY3XkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 1
	},
	{
	  "season": 1,
	  "episode": 3,
	  "name": "Homer's Odyssey",
	  "rating": 7.4,
	  "description": "While Bart's class is touring the power plant on a field trip, Homer crashes a cart into a radioactive pipe. In the aftermath, the plant is forced to shut down and Homer loses his job.",
	  "airDate": "1990-01-21T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1MjQ0Njg1MF5BMl5BanBnXkFtZTgwMzg2NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 3
	},
	{
	  "season": 1,
	  "episode": 4,
	  "name": "There's No Disgrace Like Home",
	  "rating": 7.8,
	  "description": "After being embarrassed by the rest of the family at a company picnic, Homer becomes obsessed with improving their behavior towards each other.",
	  "airDate": "1990-01-28T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzMwODQzMTQ4N15BMl5BanBnXkFtZTgwODU1NjQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 4
	},
	{
	  "season": 1,
	  "episode": 5,
	  "name": "Bart the General",
	  "rating": 8.1,
	  "description": "After being beaten up by Nelson Muntz one too many times, Bart turns to Grampa for help, and soon leads a rebellion against the school bully.",
	  "airDate": "1990-02-04T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjkzMjAzMzc4NF5BMl5BanBnXkFtZTgwNDY2NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 5
	},
	{
	  "season": 1,
	  "episode": 6,
	  "name": "Moaning Lisa",
	  "rating": 7.6,
	  "description": "A depressed Lisa's spirit is lifted when she meets a jazz-man, Bleeding Gums Murphy.",
	  "airDate": "1990-02-11T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjg5MjA2NzcwM15BMl5BanBnXkFtZTgwMjY2NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 6
	},
	{
	  "season": 1,
	  "episode": 7,
	  "name": "The Call of the Simpsons",
	  "rating": 7.9,
	  "description": "Jealous of Ned Flanders' new RV, Homer purchases one of his own, but the family's trip into the wilderness soon goes awry.",
	  "airDate": "1990-09-01T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BODAwNzM5OTk1OV5BMl5BanBnXkFtZTgwMDY1NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 7
	},
	{
	  "season": 1,
	  "episode": 8,
	  "name": "The Telltale Head",
	  "rating": 7.7,
	  "description": "Bart gets more than he bargained for when he saws the head off a statue of the town's founder.",
	  "airDate": "1990-02-25T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzMzY0MTA2Nl5BMl5BanBnXkFtZTgwNjU1NjQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 8
	},
	{
	  "season": 1,
	  "episode": 9,
	  "name": "Life on the Fast Lane",
	  "rating": 7.5,
	  "description": "Marge contemplates an affair with a handsome bowling instructor.",
	  "airDate": "1990-03-18T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA0NDM4Njk0MF5BMl5BanBnXkFtZTgwOTExNDE1NTE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 9
	},
	{
	  "season": 1,
	  "episode": 10,
	  "name": "Homer's Night Out",
	  "rating": 7.4,
	  "description": "After a photograph of Homer canoodling with an exotic dancer is distributed throughout Springfield, he finds himself kicked out of the house by Marge.",
	  "airDate": "1990-03-25T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4NzU0MjY1OF5BMl5BanBnXkFtZTgwNTE4NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 10
	},
	{
	  "season": 1,
	  "episode": 11,
	  "name": "The Crepes of Wrath",
	  "rating": 7.8,
	  "description": "After another of Bart's pranks at school, Principal Skinner suggests he participate in a student exchange program. However, he is sent to France and forced to work all hours in a vineyard, with little chance of escape.",
	  "airDate": "1990-04-14T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIzMDIwMTM4NF5BMl5BanBnXkFtZTgwMzU1NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 11
	},
	{
	  "season": 1,
	  "episode": 12,
	  "name": "Krusty Gets Busted",
	  "rating": 8.3,
	  "description": "Homer witnesses a robbery at the Kwik-E-Mart, where the culprit is a man dressed like Bart's hero, Krusty the Clown. But there's more than meets the eye?",
	  "airDate": "1990-04-28T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIzMTA0MjY5NV5BMl5BanBnXkFtZTgwOTk2NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 12
	},
	{
	  "season": 1,
	  "episode": 13,
	  "name": "Some Enchanted Evening",
	  "rating": 7.9,
	  "description": "Homer and Marge enjoy a night out on the town, while the kids deal with a diabolical babysitter, with a surprising secret.",
	  "airDate": "1990-05-12T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ1MjU5NjQzNF5BMl5BanBnXkFtZTgwMjA2NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 13
	},
	{
	  "season": 2,
	  "episode": 1,
	  "name": "Bart Gets an F",
	  "rating": 8.2,
	  "description": "Mrs. Krabappel becomes fed up with Bart's lackadaisical approach to his studies. After he bluffs his way through a book report and fails a history exam, she gives him an ultimatum: shape up or repeat the fourth grade.",
	  "airDate": "1990-10-10T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MjA1ODUyNV5BMl5BanBnXkFtZTgwNjk5ODQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 14
	},
	{
	  "season": 2,
	  "episode": 2,
	  "name": "Simpson and Delilah",
	  "rating": 8.3,
	  "description": "Homer lies on a medical insurance form in order to obtain a miracle hair restoring drug.",
	  "airDate": "1990-10-17T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjE1MDY0MDc0NV5BMl5BanBnXkFtZTgwODQ1NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 15
	},
	{
	  "season": 2,
	  "episode": 3,
	  "name": "Treehouse of Horror I",
	  "rating": 8.2,
	  "description": "The Simpsons move into a cursed house, then are abducted by aliens, before Homer is ensconced in a tale by Edgar Allen Poe.",
	  "airDate": "1990-10-24T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgwODcyOTUwMl5BMl5BanBnXkFtZTgwMjIxNDE1NTE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 16
	},
	{
	  "season": 2,
	  "episode": 4,
	  "name": "Two Cars in Every Garage and Three Eyes on Every Fish",
	  "rating": 8.1,
	  "description": "After the power plant experiences bad publicity and is threatened with closure, Mr. Burns decides to run for Governor in order to have power over the law.",
	  "airDate": "1990-11-01T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM4MzkwNzY3MF5BMl5BanBnXkFtZTgwMDcyNjQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 17
	},
	{
	  "season": 2,
	  "episode": 5,
	  "name": "Dancin' Homer",
	  "rating": 7.5,
	  "description": "Homer's heckling of the Springfield Isotopes baseball team during one of their games inadvertently leads to his appointment as the new team mascot.",
	  "airDate": "1990-11-08T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3NzczMzU4N15BMl5BanBnXkFtZTgwNDI3NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 18
	},
	{
	  "season": 2,
	  "episode": 6,
	  "name": "Dead Putting Society",
	  "rating": 8,
	  "description": "In an attempt to show up Ned Flanders, Homer pits Bart against Ned's son, Todd, in a miniature golf competition.",
	  "airDate": "1990-11-15T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1MTkzMDA1NV5BMl5BanBnXkFtZTgwNjUzMzQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 19
	},
	{
	  "season": 2,
	  "episode": 7,
	  "name": "Bart vs. Thanksgiving",
	  "rating": 7.7,
	  "description": "On Thanksgiving, Bart gets into a fight with the family and runs away from home, before sharing a turkey dinner with a group of homeless people at a soup kitchen, and learning the true meaning of the holiday in the process.",
	  "airDate": "1990-11-22T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDY2ODU2MTA1NV5BMl5BanBnXkFtZTgwNjM3NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 20
	},
	{
	  "season": 2,
	  "episode": 8,
	  "name": "Bart the Daredevil",
	  "rating": 8.4,
	  "description": "After seeing a motorcycle daredevil at a monster truck show, Bart becomes a death-defying daredevil skateboarder.",
	  "airDate": "1990-12-06T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxNTIyNjI5MV5BMl5BanBnXkFtZTgwNDUzMzQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 21
	},
	{
	  "season": 2,
	  "episode": 9,
	  "name": "Itchy and Scratchy and Marge",
	  "rating": 8.1,
	  "description": "Marge becomes a crusader against cartoon violence after watching The Itchy and Scratchy Show.",
	  "airDate": "1990-12-20T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5MTc0MTM1NV5BMl5BanBnXkFtZTgwOTI3NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 22
	},
	{
	  "season": 2,
	  "episode": 10,
	  "name": "Bart Gets Hit by a Car",
	  "rating": 7.8,
	  "description": "While skateboarding down the street, Bart is hit by a car driven by Mr. Burns. Homer turns down Mr. Burns' token offer of $100, and instead hires ambulance-chaser Lionel Hutz to bring an outrageous lawsuit against the millionaire.",
	  "airDate": "1991-01-10T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM4NTM4OTUxM15BMl5BanBnXkFtZTgwMzcyNjQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 23
	},
	{
	  "season": 2,
	  "episode": 11,
	  "name": "One Fish, Two Fish, Blowfish, Blue Fish",
	  "rating": 8.8,
	  "description": "After apparently consuming poison blowfish, Homer is told that he only has 24 hours to live.",
	  "airDate": "1991-01-24T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU3MjMzODUwNV5BMl5BanBnXkFtZTcwOTI2NjM0OA@@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 24
	},
	{
	  "season": 2,
	  "episode": 12,
	  "name": "The Way We Was",
	  "rating": 8.2,
	  "description": "Homer and Marge tell the story of how they met and fell in love in high school.",
	  "airDate": "1991-01-31T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4NzQ1MzQyNl5BMl5BanBnXkFtZTgwMDk0NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 25
	},
	{
	  "season": 2,
	  "episode": 13,
	  "name": "Homer vs. Lisa and the 8th Commandment",
	  "rating": 8,
	  "description": "Homer gets a crooked cable guy to install free cable in the Simpson home, and as a result, Lisa faces an ethical crisis over her family's stealing.",
	  "airDate": "1991-02-07T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1MzQ1OTQ2OF5BMl5BanBnXkFtZTgwMDczNDE1NTE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 26
	},
	{
	  "season": 2,
	  "episode": 14,
	  "name": "Principal Charming",
	  "rating": 7.5,
	  "description": "After attending a co-worker's wedding, Selma begins to fear she will die alone. However, when Homer tries to set her up with Principal Skinner, he falls for Patty instead.",
	  "airDate": "1991-02-14T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4NzA1MzExMV5BMl5BanBnXkFtZTgwNTUzMzQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 27
	},
	{
	  "season": 2,
	  "episode": 15,
	  "name": "Oh Brother, Where Art Thou?",
	  "rating": 8.2,
	  "description": "After Grampa is hospitalized, he reveals that Homer has a half-brother, and the family soon discovers the brother, named Herb, owns a car company. However Herb's hiring of Homer to design a new car may be his undoing.",
	  "airDate": "1991-02-21T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MzcyNTM4Nl5BMl5BanBnXkFtZTgwNjc1NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 28
	},
	{
	  "season": 2,
	  "episode": 16,
	  "name": "Bart's Dog Gets an F",
	  "rating": 7.5,
	  "description": "After an uncontrollable Santa's Little Helper destroys several important Simpson possessions, Homer announces that he will be thrown out of the house unless he completes obedience training.",
	  "airDate": "1991-03-07T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ5NDcwMDY0NF5BMl5BanBnXkFtZTgwMjY3NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 29
	},
	{
	  "season": 2,
	  "episode": 17,
	  "name": "Old Money",
	  "rating": 7.6,
	  "description": "After Grampa's new girlfriend dies and leaves him $106,000 in her will, he tries to decide what to do with it.",
	  "airDate": "1991-03-28T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BODExMDU0OTU0MV5BMl5BanBnXkFtZTgwNDQ1NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 30
	},
	{
	  "season": 2,
	  "episode": 18,
	  "name": "Brush with Greatness",
	  "rating": 8,
	  "description": "After becoming trapped in a water slide, Homer decides to go on a diet, while Marge enrolls in an art class and is soon commissioned to paint a portrait of Mr. Burns.",
	  "airDate": "1991-04-10T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ0MjI5NDQ2Ml5BMl5BanBnXkFtZTgwMzc3NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 31
	},
	{
	  "season": 2,
	  "episode": 19,
	  "name": "Lisa's Substitute",
	  "rating": 8.5,
	  "description": "Lisa has a crush on her substitute teacher, who seemingly represents everything that Homer is not. Meanwhile, Bart decides to run for class president, and becomes the overwhelming favorite.",
	  "airDate": "1991-04-24T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1NTk0OTY4OV5BMl5BanBnXkFtZTgwMzY2NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 32
	},
	{
	  "season": 2,
	  "episode": 20,
	  "name": "The War of the Simpsons",
	  "rating": 7.9,
	  "description": "Homer must decide which is more important: completing counseling to save his marriage or skipping out to catch a legendary catfish. Meanwhile, at home, Bart and Lisa take advantage of Grampa's ignorance of the house rules.",
	  "airDate": "1991-05-01T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkwNjc4MzQyMl5BMl5BanBnXkFtZTgwNzE4MzQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 33
	},
	{
	  "season": 2,
	  "episode": 21,
	  "name": "Three Men and a Comic Book",
	  "rating": 8.4,
	  "description": "Bart, Milhouse and Martin each pitch in to buy an expensive comic book, which soon has a disastrous effect on their friendship.",
	  "airDate": "1991-05-08T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk5NzQ2MzU2Nl5BMl5BanBnXkFtZTgwNTA1NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 34
	},
	{
	  "season": 2,
	  "episode": 22,
	  "name": "Blood Feud",
	  "rating": 8,
	  "description": "Bart saves Mr. Burns's life. But Homer becomes enraged when Mr. Burns doesn't return the favor by sending the Simpsons what he considers to be an appropriate \"thank you\" gift.",
	  "airDate": "1991-08-10T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5Mjc0MDIyN15BMl5BanBnXkFtZTgwMTUzMzQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 35
	},
	{
	  "season": 3,
	  "episode": 1,
	  "name": "Stark Raving Dad",
	  "rating": 8.6,
	  "description": "Homer accidentally lands in a mental hospital and ends up sharing a room with a white man who thinks he is Michael Jackson.",
	  "airDate": "1991-09-18T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk3MTE2OTE4NV5BMl5BanBnXkFtZTgwMzQ1NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 36
	},
	{
	  "season": 3,
	  "episode": 2,
	  "name": "Mr. Lisa Goes to Washington",
	  "rating": 7.7,
	  "description": "Lisa enters a contest and wins a trip to Washington D.C. for the whole family. While there, she discovers corruption and decides to expose the corrupt official.",
	  "airDate": "1991-09-25T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQwOTAwNzA5NV5BMl5BanBnXkFtZTgwNzA2NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 37
	},
	{
	  "season": 3,
	  "episode": 3,
	  "name": "When Flanders Failed",
	  "rating": 8.2,
	  "description": "Ned Flanders opens a mall store catering to lefties. Homer, however, wishes Flanders would fail.",
	  "airDate": "1991-10-02T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5MDI4MjE4N15BMl5BanBnXkFtZTgwMDQwOTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 38
	},
	{
	  "season": 3,
	  "episode": 4,
	  "name": "Bart the Murderer",
	  "rating": 8.7,
	  "description": "Bart stumbles upon the local mafia boss, and starts working for him on the side. When Principal Skinner goes missing after punishing Bart, he and Fat Tony's gang are suspected of killing him, but they try to get Bart to take the rap.",
	  "airDate": "1991-10-09T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI4NDAwMzY2Ml5BMl5BanBnXkFtZTgwODE3NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 39
	},
	{
	  "season": 3,
	  "episode": 5,
	  "name": "Homer Defined",
	  "rating": 8.5,
	  "description": "Homer is a hero after averting a nuclear meltdown that he nearly caused, but he doesn't want to tell anyone that he stopped it completely by accident.",
	  "airDate": "1991-10-16T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MDc3NjY1N15BMl5BanBnXkFtZTgwMTY3NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 40
	},
	{
	  "season": 3,
	  "episode": 6,
	  "name": "Like Father, Like Clown",
	  "rating": 7.7,
	  "description": "When the Simpsons have Krusty the Clown over for dinner, he says grace in Hebrew, and recalls his difficult relationship with his father, a rabbi. Bart and Lisa try to reunite the two of them.",
	  "airDate": "1991-10-23T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4OTc3MTk1Ml5BMl5BanBnXkFtZTgwMjU3NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 41
	},
	{
	  "season": 3,
	  "episode": 7,
	  "name": "Treehouse of Horror II",
	  "rating": 8.2,
	  "description": "The Simpson family receives a severed monkey's paw which can grant wishes, Bart gains magical powers which he uses to turn Homer into a Jack-in-the-box, and Mr. Burns uses Homer's brain to create a robot.",
	  "airDate": "1991-10-31T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzkwNjQyMTM3NV5BMl5BanBnXkFtZTgwOTMzNDE1NTE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 42
	},
	{
	  "season": 3,
	  "episode": 8,
	  "name": "Lisa's Pony",
	  "rating": 7.9,
	  "description": "After ruining Lisa's performance at the school talent show, Homer tries to make it up by buying her a pony.",
	  "airDate": "1991-11-07T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk3MTYxMDM0NV5BMl5BanBnXkFtZTgwOTg2NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 43
	},
	{
	  "season": 3,
	  "episode": 9,
	  "name": "Saturdays of Thunder",
	  "rating": 7.9,
	  "description": "After Homer fails a fathering test, he decides to help Bart build his Soap Box Derby racer. But Bart dumps Homer and their racer after Martin's far superior vehicle suddenly becomes available.",
	  "airDate": "1991-11-14T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ0MTI3MTc4NV5BMl5BanBnXkFtZTgwOTE5NDQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 44
	},
	{
	  "season": 3,
	  "episode": 10,
	  "name": "Flaming Moe's",
	  "rating": 8.8,
	  "description": "Moe claims that a drink that Homer invented is his own. After the drink makes the bar a local hot spot, Moe gains a number of fair-weather friends but loses Homer's friendship.",
	  "airDate": "1991-11-21T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTIzNTI1NDI1MV5BMl5BanBnXkFtZTgwMTc3NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 45
	},
	{
	  "season": 3,
	  "episode": 11,
	  "name": "Burns Verkaufen der Kraftwerk",
	  "rating": 8.2,
	  "description": "Burns decides to retire and sells the power plant to a German consortium for an exorbitant price. Homer's laziness and inefficiency are quickly exposed by his new bosses, and he is laid off.",
	  "airDate": "1991-12-05T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTQwODc0Mjc0Ml5BMl5BanBnXkFtZTgwNDI0NDQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 46
	},
	{
	  "season": 3,
	  "episode": 12,
	  "name": "I Married Marge",
	  "rating": 8.2,
	  "description": "As Marge goes to the doctor for a pregnancy test, Homer tells the children of the events leading up to his marriage, and Bart's birth.",
	  "airDate": "1991-12-26T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ3NDI1ODUzOF5BMl5BanBnXkFtZTgwOTk4NDQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 47
	},
	{
	  "season": 3,
	  "episode": 13,
	  "name": "Radio Bart",
	  "rating": 8.5,
	  "description": "After Bart receives a microphone which can transmit through radios, he decides to pull a series of pranks and eventually convinces the town that a boy has fallen down a well.",
	  "airDate": "1992-01-09T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzMjAwMzAwNV5BMl5BanBnXkFtZTgwMDIxNDE1NTE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 48
	},
	{
	  "season": 3,
	  "episode": 14,
	  "name": "Lisa the Greek",
	  "rating": 7.9,
	  "description": "Homer uses Lisa (and her prognostic skills) to help him bet on football games.",
	  "airDate": "1992-01-23T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyMzMwMzk2OF5BMl5BanBnXkFtZTgwMjA5NDQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 49
	},
	{
	  "season": 3,
	  "episode": 15,
	  "name": "Homer Alone",
	  "rating": 8,
	  "description": "While Marge spends a couple of days at Rancho Relaxo after she has a breakdown, Bart and Lisa stay with Patty and Selma, and Homer stays at home to take care of Maggie.",
	  "airDate": "1992-02-06T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkwNzc1MTQ0Ml5BMl5BanBnXkFtZTgwNTA5NDQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 50
	},
	{
	  "season": 3,
	  "episode": 16,
	  "name": "Bart the Lover",
	  "rating": 8.3,
	  "description": "After Mrs. Krabappel gives Bart a month of detention, he gets his revenge by responding to her newspaper singles ad. Meanwhile, Marge suggests Homer to start a swear jar to stop him cursing.",
	  "airDate": "1992-02-13T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTIwODIyMjAzOV5BMl5BanBnXkFtZTgwNTk4NDQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 51
	},
	{
	  "season": 3,
	  "episode": 17,
	  "name": "Homer at the Bat",
	  "rating": 8.6,
	  "description": "Homer and his co-workers qualify for the plant softball team's league final, but Mr. Burns hires nine professional MLB players in order to win a $1 million bet.",
	  "airDate": "1992-02-20T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyMTY2MjE3N15BMl5BanBnXkFtZTgwMDU4NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 52
	},
	{
	  "season": 3,
	  "episode": 18,
	  "name": "Separate Vocations",
	  "rating": 8.2,
	  "description": "The results of a standardized test steer Bart in the direction of law and order at Springfield Elementary School. However, Lisa becomes so depressed by her results that she turns to juvenile delinquency.",
	  "airDate": "1992-02-27T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5MDg4NDg4Ml5BMl5BanBnXkFtZTgwMjU1NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 53
	},
	{
	  "season": 3,
	  "episode": 19,
	  "name": "Dog of Death",
	  "rating": 7.7,
	  "description": "The Simpsons wind up regretting paying for an expensive surgery for Santa's Little Helper. He then runs away from home, winds up in the animal shelter, and is adopted by Mr. Burns to become an attack dog.",
	  "airDate": "1992-03-12T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ5NTg5MzMyN15BMl5BanBnXkFtZTgwNDA5NDQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 54
	},
	{
	  "season": 3,
	  "episode": 20,
	  "name": "Colonel Homer",
	  "rating": 7.9,
	  "description": "Homer becomes the manager of a beautiful young country singer and finds himself almost attracted to her, sparking Marge's jealousy.",
	  "airDate": "1992-03-26T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjc1MzY2MjgyNF5BMl5BanBnXkFtZTgwODM3NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 55
	},
	{
	  "season": 3,
	  "episode": 21,
	  "name": "Black Widower",
	  "rating": 8.2,
	  "description": "Sideshow Bob gets out of jail and plots to take his revenge on Bart by marrying his Aunt Selma and killing her.",
	  "airDate": "1992-04-25T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg2Mjc0NTQ3OF5BMl5BanBnXkFtZTgwMjI3NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 56
	},
	{
	  "season": 3,
	  "episode": 22,
	  "name": "The Otto Show",
	  "rating": 7.7,
	  "description": "After Otto loses his job as school bus driver because he does not have a license, Bart convinces Homer and Marge to let Otto stay with them until he gets back on his feet.",
	  "airDate": "1992-04-22T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjkyMDE5NzQ1Ml5BMl5BanBnXkFtZTgwOTg0NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 57
	},
	{
	  "season": 3,
	  "episode": 23,
	  "name": "Bart's Friend Falls in Love",
	  "rating": 7.7,
	  "description": "Milhouse falls in love with Samantha, a new transfer student, and Bart becomes jealous of all the time they are spending together. Meanwhile, Homer orders a subliminal weight loss tape, but is given a vocabulary builder by mistake.",
	  "airDate": "1992-05-06T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTEwNTkxMTY0MjheQTJeQWpwZ15BbWU4MDY0NzU0NjIx._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 58
	},
	{
	  "season": 3,
	  "episode": 24,
	  "name": "Brother, Can You Spare Two Dimes?",
	  "rating": 8.2,
	  "description": "After Homer \"wins\" a $2000 settlement with the plant for radiation affecting his sperm count, his brother Herb comes to Springfield with an idea that could help him get his fortune back.",
	  "airDate": "1992-08-26T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU3OTgwNjUzM15BMl5BanBnXkFtZTgwOTE3NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 59
	},
	{
	  "season": 4,
	  "episode": 1,
	  "name": "Kamp Krusty",
	  "rating": 8.4,
	  "description": "Bart and Lisa go off for the summer to Krusty's camp for kids, but instead of meeting Krusty they meet his bean-counting surrogate, Mr. Black. With their children gone, Homer and Marge enjoy a romantic summer, but Bart and Lisa are put to work making crummy merchandise, until Krusty returns and sets things right-by taking the kids to Tijuana.",
	  "airDate": "1992-09-23T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQyN2NjOTItZjc2MC00YzE4LTllZjEtZmQzNDYzMWExNGY4XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 60
	},
	{
	  "season": 4,
	  "episode": 2,
	  "name": "A Streetcar Named Marge",
	  "rating": 8.1,
	  "description": "Marge wins the lead in a musical production of \"A Streetcar Named Desire\", in which Ned Flanders plays Stanley Kowalski. Marge is infuriated by Homer's brutishness and insensitivity during preproduction, until he sees the play and reveals to Marge that he has grasped its meaning. While rehearsing, Marge sticks Maggie in the Ayn Rand Day Care Center, where her pacifier is immediately taken from her, and a la \"The Great Escape\", she must struggle to win it back.",
	  "airDate": "1992-09-30T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZjQ3YWEzODEtNmE2Ny00NWU0LTkzNWQtZjM2ZjI5YTFhZDhlXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 61
	},
	{
	  "season": 4,
	  "episode": 3,
	  "name": "Homer the Heretic",
	  "rating": 9,
	  "description": "After skipping church one week, Homer decides that he is never going back. However, when a calamity occurs, it takes the combined efforts of a number of people from different faiths to save him.",
	  "airDate": "1992-10-07T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQxNDc2ODg0NF5BMl5BanBnXkFtZTgwMzk5NjA1MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 62
	},
	{
	  "season": 4,
	  "episode": 4,
	  "name": "Lisa the Beauty Queen",
	  "rating": 7.8,
	  "description": "Lisa enters the Little Miss Springfield pageant.",
	  "airDate": "1992-10-14T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BY2NmY2YzYWQtYWIwOC00MzY4LThjMTctMzJkYzVmZmRiZDE3XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 63
	},
	{
	  "season": 4,
	  "episode": 5,
	  "name": "Treehouse of Horror III",
	  "rating": 8.4,
	  "description": "An evil Krusty the Clown doll makes life hell for the Simpsons, Marge is captured by a giant ape who falls in love with her, and Bart inadvertently raises the dead.",
	  "airDate": "1992-10-29T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2MTE3NzAwMl5BMl5BanBnXkFtZTgwNzc1NzQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 64
	},
	{
	  "season": 4,
	  "episode": 6,
	  "name": "Itchy & Scratchy: The Movie",
	  "rating": 8.2,
	  "description": "Pulling one prank too many costs Bart the opportunity to see the Itchy and Scratchy Movie.",
	  "airDate": "1992-11-03T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BM2I1Nzk0Y2MtYTE2Yy00ZWFjLWFlNzQtNDllMjQ0OWY2NzI4XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 65
	},
	{
	  "season": 4,
	  "episode": 7,
	  "name": "Marge Gets a Job",
	  "rating": 7.8,
	  "description": "Marge takes a job at the nuclear plant to help pay for the house's foundation repair, and Mr. Burns is smitten by her.",
	  "airDate": "1992-11-05T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BN2IwM2FmZWEtYzdkMi00MTI3LWE1M2YtY2QzODIxMjlkNzRjXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 66
	},
	{
	  "season": 4,
	  "episode": 8,
	  "name": "New Kid on the Block",
	  "rating": 8.2,
	  "description": "Bart finds himself attracted to his new 15-year-old neighbor, Laura. Meanwhile, Homer sues an All-You-Can-Eat buffet.",
	  "airDate": "1992-11-12T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BOWI0MjIzYmUtNzlmYi00ODUxLTkxMTktNDExMzBkNzQ0OTk1XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 67
	},
	{
	  "season": 4,
	  "episode": 9,
	  "name": "Mr. Plow",
	  "rating": 8.8,
	  "description": "Homer buys a truck with an attached snow plow after he destroys his car, and to pay for it, he starts a snow shoveling business, calling himself Mr. Plow. It all goes off without a hitch, until he finds himself in competition with The Plow King, a.k.a. Barney Gumbel. Now begins the winter of discontent.",
	  "airDate": "1992-11-19T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ5MDQwNzM2MV5BMl5BanBnXkFtZTgwMzk1NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 68
	},
	{
	  "season": 4,
	  "episode": 10,
	  "name": "Lisa's First Word",
	  "rating": 8.5,
	  "description": "While trying to coax Maggie into saying her first word, Homer and Marge talk about how Lisa spoke hers.",
	  "airDate": "1992-12-03T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjc4ZGFjMzAtYzE2Ni00ZDFkLWE2YjktMWYyZGFkZGJiMjExXkEyXkFqcGdeQXVyNjQwMTkxMDU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 69
	},
	{
	  "season": 4,
	  "episode": 11,
	  "name": "Homer's Triple Bypass",
	  "rating": 8.7,
	  "description": "Years of poor eating habits catch up with Homer when he suffers a massive heart attack. The family can't afford the triple bypass operation he needs from Dr. Hibbert, so they go to a discount quack named Nick Riviera.",
	  "airDate": "1993-01-10T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTEzMTAwYzAtZWQ3Ny00NmRhLWIwNjctNDc1OWIzYTA2OWI4XkEyXkFqcGdeQXVyNjYyODY4NDU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 70
	},
	{
	  "season": 4,
	  "episode": 12,
	  "name": "Marge vs. the Monorail",
	  "rating": 9,
	  "description": "After receiving a considerable donation of money, the people of Springfield decide what to spend it on. Enter Lyle Langley, a jocular salesman who gets Springfield hooked on a monorail system. After the monorail is up and running, and with Homer as the conductor, it's time for the maiden voyage. Little do the people know they have just boarded a one-way train to Hell.",
	  "airDate": "1993-01-14T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZmMyNzgwNDYtN2YzMS00MmViLTgwYWEtOTllYzU0Mzk3OGNjXkEyXkFqcGdeQXVyNjQwMTkxMDU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 71
	},
	{
	  "season": 4,
	  "episode": 13,
	  "name": "Selma's Choice",
	  "rating": 8,
	  "description": "Selma starts to feel broody, but after taking Bart and Lisa to Duff Gardens, she changes her mind.",
	  "airDate": "1993-01-21T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMGIyZTIyOTctYjY0MS00OWY1LTkxMjAtYWZlYjAxNGU3NzIxXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 72
	},
	{
	  "season": 4,
	  "episode": 14,
	  "name": "Brother from the Same Planet",
	  "rating": 8.1,
	  "description": "After Homer forgets to pick up Bart from soccer practice, Bart joins a mentor program called Big Brothers presenting himself as an orphan, and is assigned a big brother called Tom. When Homer finds out, he joins the program too as a big brother.",
	  "airDate": "1993-02-04T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZjlkZDk0YTEtODVkNy00MjE1LTg1MWUtZWZhNzg2OTZhMTA4XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 73
	},
	{
	  "season": 4,
	  "episode": 15,
	  "name": "I Love Lisa",
	  "rating": 8.3,
	  "description": "Feeling sorry for Ralph, Lisa sends him a Valentine card. Having developed a crush on her, Ralph invites Lisa to go see the Krusty the Clown show. She accepts but after Krusty asks them if they are boyfriend and girlfriend, Lisa lets Ralph know that she just wants them to be friends.",
	  "airDate": "1993-02-11T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzNDA4NDM4NF5BMl5BanBnXkFtZTgwMTk5NjA1MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 74
	},
	{
	  "season": 4,
	  "episode": 16,
	  "name": "Duffless",
	  "rating": 8.3,
	  "description": "After Homer is arrested for DUI, and loses his driver's license, he is put to the ultimate test when Marge pressures him to give up beer for a month.",
	  "airDate": "1993-02-18T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNGI2NmYwYTctMDNkZi00MjM1LTgwZmYtYjMyMzI2MTQyYzRlXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 75
	},
	{
	  "season": 4,
	  "episode": 17,
	  "name": "Last Exit to Springfield",
	  "rating": 9,
	  "description": "Homer becomes union leader and leads a company strike when Mr. Burns takes away the company dental plan.",
	  "airDate": "1993-03-11T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNWRiNjI0OTMtZTk0MS00NmIyLThjOGQtOGZjYTk1OTkyYTZkXkEyXkFqcGdeQXVyNjYyODY4NDU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 76
	},
	{
	  "season": 4,
	  "episode": 18,
	  "name": "So It Has Come to This: The Simpsons Clip Show",
	  "rating": 7.2,
	  "description": "Homer plays a series of (childish) practical jokes on Bart. To get even, Bart uses a paint mixer at a local hardware store to shake up a can of Homer's beer. Homer opens the can, resulting in a huge explosion that seriously injures the Simpsons patriarch.",
	  "airDate": "1993-03-31T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMmVlZjM1N2QtNjZhZC00OTcwLWFiOWMtOTdhZTg0Njk5YmZmXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 77
	},
	{
	  "season": 4,
	  "episode": 19,
	  "name": "The Front",
	  "rating": 8.1,
	  "description": "Homer goes back to school after it is revealed that he never graduated. Meanwhile, Bart and Lisa ghostwrite for Itchy & Scratchy using Abe's name.",
	  "airDate": "1993-05-01T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BN2U3ZjE5ODktNzBhNS00OTQ5LTllMDYtYmMxYjdjZTkxOWNhXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 78
	},
	{
	  "season": 4,
	  "episode": 20,
	  "name": "Whacking Day",
	  "rating": 8.1,
	  "description": "Marge attempts to home school Bart after he is expelled from Springfield Elementary. Meanwhile, Lisa protests a barbaric local holiday centered around clubbing snakes to death.",
	  "airDate": "1993-05-08T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYjRhMTJhOTctNTUzNC00Mjk2LTg4NzAtMTgzNTlhMmRmMDM5XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 79
	},
	{
	  "season": 4,
	  "episode": 21,
	  "name": "Marge in Chains",
	  "rating": 7.7,
	  "description": "A misunderstanding leads to Marge being imprisoned for shoplifting. In her absence, the family, and eventually, the town itself, descend into chaos.",
	  "airDate": "1993-05-29T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMGVlOTQyZDctMDE0Zi00ZGYwLTgwOWMtODYyYTg5NjM0MDY5XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 80
	},
	{
	  "season": 4,
	  "episode": 22,
	  "name": "Krusty Gets Kancelled",
	  "rating": 8.2,
	  "description": "A massive advertising blitz announces the arrival of something named \"Gabbo\". Eventually, Gabbo is revealed to be a Howdy Doody-esque dummy, whose sensational success causes Krusty the Clown's show to be canceled.",
	  "airDate": "1993-06-19T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjczZDFhOTItZTc2OS00MTYxLThlODktNzI0ODFhNTZhNTEzXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 81
	},
	{
	  "season": 5,
	  "episode": 1,
	  "name": "Homer's Barbershop Quartet",
	  "rating": 8.5,
	  "description": "After the kids find a record with Homer's picture on it, he recalls the story of how he achieved fame in the 1980s with his barbershop quartet, The Be Sharps.",
	  "airDate": "1993-10-02T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjFiYjliNGYtMjk5Mi00OGI4LWIyZmItODQ2YjhmOGE2ZjljXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 82
	},
	{
	  "season": 5,
	  "episode": 2,
	  "name": "Cape Feare",
	  "rating": 9,
	  "description": "After being released from prison on parole, Sideshow Bob plots to murder Bart.",
	  "airDate": "1993-10-09T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BOGQ4ZjYxOTgtYTM1MS00MzczLWE1YjAtYzIwNjIyMzg5MzJmXkEyXkFqcGdeQXVyNjYyODY4NDU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 83
	},
	{
	  "season": 5,
	  "episode": 3,
	  "name": "Homer Goes to College",
	  "rating": 8.6,
	  "description": "When a surprise inspection of the nuclear power plant reveals that Homer is not qualified to do his job, he is forced to go to college.",
	  "airDate": "1993-10-13T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjU4ZmM4YzYtOWFlMC00ZDYxLWFhZTYtOGU0MDVmYzNlZmM0XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 84
	},
	{
	  "season": 5,
	  "episode": 4,
	  "name": "Rosebud",
	  "rating": 8.9,
	  "description": "Mr. Burns goes on a desperate quest to recover his cherished childhood toy Bobo, a bear which is now in Maggie's possession.",
	  "airDate": "1993-11-14T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BN2U1ZTY4NjctZWQ3NC00MWNhLWFlODgtOWFkNTkxMGQwNDZhXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 85
	},
	{
	  "season": 5,
	  "episode": 5,
	  "name": "Treehouse of Horror IV",
	  "rating": 8.7,
	  "description": "Homer sells his soul to the Devil for a donut, Bart contends with a gremlin on the side of the school bus which only he can see, and the family discovers that Mr. Burns is a vampire.",
	  "airDate": "1993-10-27T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE0MzIxMjc2NF5BMl5BanBnXkFtZTgwNzU1NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 86
	},
	{
	  "season": 5,
	  "episode": 6,
	  "name": "Marge on the Lam",
	  "rating": 8.1,
	  "description": "A girls' night out turns into a high speed chase when Marge learns her friend is driving a stolen car.",
	  "airDate": "1993-11-21T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZGEyOWMxMGItY2I4MC00MTVmLWFjZjctOTUzY2ZlYWRlZDRhXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 87
	},
	{
	  "season": 5,
	  "episode": 7,
	  "name": "Bart's Inner Child",
	  "rating": 7.7,
	  "description": "Brad Goodman, a self-help guru, comes to Springfield and identifies Bart as a role model for personal happiness because he is in touch with his inner child. Soon, the entire town begins to behave like him.",
	  "airDate": "1993-12-19T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNmEzYjkyZDktZDQ0Yy00OTNkLTgxNDgtOWJkYWVhZWVmNWMyXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 88
	},
	{
	  "season": 5,
	  "episode": 8,
	  "name": "Boy Scoutz 'n the Hood",
	  "rating": 8.7,
	  "description": "After joining the Junior Campers while on a sugar high, Bart reluctantly invites Homer to accompany him on the group's annual father-son rafting trip, which soon goes awry.",
	  "airDate": "1994-01-02T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZjRiNTdlNjYtMWJlOS00OTVhLWE0NTAtYzI0NTY3OThiNmRiXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 89
	},
	{
	  "season": 5,
	  "episode": 9,
	  "name": "The Last Temptation of Homer",
	  "rating": 8.4,
	  "description": "Homer's marriage is in trouble when he develops an attraction to a new co-worker.",
	  "airDate": "1994-01-16T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgyYjBmMDMtOWY1Zi00NmEwLWFkNjAtODVmYTM1ZDNjOThmXkEyXkFqcGdeQXVyMTY2MzYyNzA@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 90
	},
	{
	  "season": 5,
	  "episode": 10,
	  "name": "$pringfield (or How I Learned to Stop Worrying and Love Legalized Gambling)",
	  "rating": 8.5,
	  "description": "In order to revitalize its economy, Springfield decides to legalize gambling. As a consequence, Marge becomes addicted to using slot machines, while Mr. Burns develops a Howard Hughes complex.",
	  "airDate": "1994-01-30T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZWZjMjFiMzItZGY2NS00MmNhLTgxZTYtYmJjMWNiMjI4YmFkXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 91
	},
	{
	  "season": 5,
	  "episode": 11,
	  "name": "Homer the Vigilante",
	  "rating": 8.2,
	  "description": "An outbreak of burglaries inspires Homer to lead a vigilante group.",
	  "airDate": "1994-02-20T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjZlMzRkMDMtNjY5OS00NjY4LWEwOTQtNDZhNWY5MTFhOWYxXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 92
	},
	{
	  "season": 5,
	  "episode": 12,
	  "name": "Bart Gets Famous",
	  "rating": 8.1,
	  "description": "Bart becomes an overnight sensation as the \"I didn't do it\" boy on Krusty the Clown's show.",
	  "airDate": "1994-04-02T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMmI5MDQwOTItYjhmYi00MzUxLThmNGItMDM0ODAyNjc1MzZiXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 93
	},
	{
	  "season": 5,
	  "episode": 13,
	  "name": "Homer and Apu",
	  "rating": 8.3,
	  "description": "When Homer becomes ill after eating contaminated food bought at the Kwik-E-Mart, Apu is fired from his job.",
	  "airDate": "1994-03-06T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4OTc5NDUxOF5BMl5BanBnXkFtZTgwNjI3NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 94
	},
	{
	  "season": 5,
	  "episode": 14,
	  "name": "Lisa vs. Malibu Stacy",
	  "rating": 8.2,
	  "description": "Lisa leads a protest against a talking doll which she believes is sexist.",
	  "airDate": "1994-04-09T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMGJkOTJlMjgtZmFlZi00YzE1LWE3YWMtMjBjZWU0ZmE3MGZmXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 95
	},
	{
	  "season": 5,
	  "episode": 15,
	  "name": "Deep Space Homer",
	  "rating": 8.8,
	  "description": "In an effort to increase the dismal television ratings for their space launches, NASA decides to send an ordinary man into space, and Homer is chosen for the task.",
	  "airDate": "1994-03-20T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BOGQzOTkzOTQtZjJmYi00NWQxLWFjZDctZGUyNzkwNGFkOGNmXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 96
	},
	{
	  "season": 5,
	  "episode": 16,
	  "name": "Homer Loves Flanders",
	  "rating": 8.5,
	  "description": "After Ned Flanders invites Homer to a major football game, the pair become friends. However, Homer's possessiveness and loutish behaviour slowly turns Ned against him.",
	  "airDate": "1994-04-23T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNmExMmU2ZGYtM2IwMS00MDUwLTkxZDktOTdjYjIwOTNiOWI2XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 97
	},
	{
	  "season": 5,
	  "episode": 17,
	  "name": "Bart Gets an Elephant",
	  "rating": 7.9,
	  "description": "Bart wins an elephant in a radio contest.",
	  "airDate": "1994-04-30T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTY1YTc4NmMtZDNhNS00MTE5LThmZWQtMjBkNzdiYTVhMWE5XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 98
	},
	{
	  "season": 5,
	  "episode": 18,
	  "name": "Burns' Heir",
	  "rating": 8.4,
	  "description": "After a near-death experience, Mr. Burns realizes he has no legal heir and holds auditions to find one. Bart is eventually chosen, and Mr. Burns plots to turn him against the rest of the Simpson family.",
	  "airDate": "1994-05-14T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ5OThkMGItMjgyNy00NzhiLTlkODgtYmYwZDgxZDA4NWExXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 99
	},
	{
	  "season": 5,
	  "episode": 19,
	  "name": "Sweet Seymour Skinner's Baadasssss Song",
	  "rating": 8.4,
	  "description": "Bart takes Santa's little helper to school with him on inspection day and gets Skinner fired, Bart is pleased until Ned Flanders is made his replacement. Bart sets out to find Skinner and get him reinstated.",
	  "airDate": "1994-05-21T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTJmNzA2YmQtNWY4Yy00ZTYxLWEzN2ItYTkwOTBlODU1MjMxXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 100
	},
	{
	  "season": 5,
	  "episode": 20,
	  "name": "The Boy Who Knew Too Much",
	  "rating": 8.2,
	  "description": "After playing truant from school, Bart witnesses the alleged assault of a waiter by Mayor Quimby's nephew, Freddy. However, if he comes forward, he will have to admit he skipped class, and face the consequences.",
	  "airDate": "1994-05-28T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMmQ1Y2M4ZDAtNjFmOC00NTU2LTgxMzctMmMzOTk4OTI4ZTU4XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 101
	},
	{
	  "season": 5,
	  "episode": 21,
	  "name": "Lady Bouvier's Lover",
	  "rating": 7.5,
	  "description": "Grampa falls in love with Marge's mother, but must compete with Mr. Burns for her heart.",
	  "airDate": "1994-05-11T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQ3ZGFiNTMtODQ1OC00YjFmLTgxYzgtZWNjYTUzNjI4ODIwXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 102
	},
	{
	  "season": 5,
	  "episode": 22,
	  "name": "Secrets of a Successful Marriage",
	  "rating": 8,
	  "description": "Homer begins teaching a class on how to have a successful marriage, but jeopardizes his own marriage by revealing secrets about himself and Marge.",
	  "airDate": "1994-06-18T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BOGVjZmYwZjktOGNiOS00N2QyLWI3MDItOWI0MzJhMDE0YmM5XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 103
	},
	{
	  "season": 6,
	  "episode": 1,
	  "name": "Bart of Darkness",
	  "rating": 8.6,
	  "description": "After he breaks his leg and becomes confined to his room, Bart begins spying on the residents of Springfield with a telescope. He soon suspects that Ned Flanders has murdered his wife, and asks Lisa to help prove it.",
	  "airDate": "1994-09-03T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzBiM2JmYzYtYzQ5Ni00NWY4LTg0ZjctZDE5ZTQ4MTFkZDY3XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 104
	},
	{
	  "season": 6,
	  "episode": 2,
	  "name": "Lisa's Rival",
	  "rating": 8.1,
	  "description": "Lisa is jealous when a new girl in class is smarter than she is. Meanwhile, Homer obtains a massive amount of sugar.",
	  "airDate": "1994-09-10T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjU3ZDVmZjAtOWQ2ZS00OWE0LWIyMzAtZjBlNzlmYTFiMGU0XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 105
	},
	{
	  "season": 6,
	  "episode": 3,
	  "name": "Another Simpson Clip Show",
	  "rating": 6,
	  "description": "The family recalls past tales of lost love.",
	  "airDate": "1994-09-24T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjBkMDkwODUtOTFiNS00Nzg1LWJkZjItNGFmNjcwMTU5MDc1XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 106
	},
	{
	  "season": 6,
	  "episode": 4,
	  "name": "Itchy & Scratchy Land",
	  "rating": 8.5,
	  "description": "A family vacation to Itchy & Scratchy Land turns disastrous when the robots malfunction and turn on the tourists.",
	  "airDate": "1994-10-01T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZWRkY2VlZjAtNGI2My00ODBjLWJkODMtMTkwZGNkNmIzZDhmXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 107
	},
	{
	  "season": 6,
	  "episode": 5,
	  "name": "Sideshow Bob Roberts",
	  "rating": 8.2,
	  "description": "Sideshow Bob is released from prison and runs for Mayor of Springfield. When he wins the election, Bart and Lisa suspect foul play and are determined to expose Bob's corruption.",
	  "airDate": "1994-11-13T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTZhY2IwNzYtMTFhYy00NjliLTlkNGYtYzk1YjhmNWEwZTlmXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 108
	},
	{
	  "season": 6,
	  "episode": 6,
	  "name": "Treehouse of Horror V",
	  "rating": 9.1,
	  "description": "The family's job at Mr. Burns' country estate goes awry when Homer goes mad. Meanwhile, Homer's attempt to repair a toaster results in inadvertent time travel, and Bart and Lisa face becoming dinner when the school staff turn cannibalistic.",
	  "airDate": "1994-10-29T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE0OTc5OTg1Ml5BMl5BanBnXkFtZTgwNTM1NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 109
	},
	{
	  "season": 6,
	  "episode": 7,
	  "name": "Bart's Girlfriend",
	  "rating": 8,
	  "description": "Bart falls for Reverend Lovejoy's daughter and is surprised when she becomes a bad influence on him.",
	  "airDate": "1994-11-06T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDg5NzdhYjAtYzllOS00M2ViLWE1MmUtNzZjYWJkNDJkNGVmXkEyXkFqcGdeQXVyNDIzNDExOQ@@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 110
	},
	{
	  "season": 6,
	  "episode": 8,
	  "name": "Lisa on Ice",
	  "rating": 8.4,
	  "description": "Homer gives all his attention to Bart because he is the star of his hockey team, which makes Lisa jealous. But when a rival team discovers that she is an excellent goalie, Bart suddenly has a rival for Homer's attention.",
	  "airDate": "1994-11-13T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTlhOWM0MmQtYjZmMy00ZTNkLTg1NDctMzBhYjA2ZTFkYTAzXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 111
	},
	{
	  "season": 6,
	  "episode": 9,
	  "name": "Homer Badman",
	  "rating": 9,
	  "description": "After a series of misunderstandings, Homer is labeled a pervert. He soon finds himself ostracized by everyone in town, and must try to clear his name.",
	  "airDate": "1994-11-27T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYzE2OWUwMDYtZTNkZC00NmIwLTkyOWMtYjcyZGVkMDFhYzI0XkEyXkFqcGdeQXVyNjQwNzY3OTQ@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 112
	},
	{
	  "season": 6,
	  "episode": 10,
	  "name": "Grandpa vs. Sexual Inadequacy",
	  "rating": 8,
	  "description": "Homer and Abe hit the road to sell Abe's miraculous aphrodisiac.",
	  "airDate": "1994-12-04T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZDliYTE2MjEtYTY3ZC00MzIxLWIzYWQtZDZlZTdkNzE1MzFlXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 113
	},
	{
	  "season": 6,
	  "episode": 11,
	  "name": "Fear of Flying",
	  "rating": 7.8,
	  "description": "Marge goes into therapy to cure her of her traumatizing fear of flying.",
	  "airDate": "1994-12-18T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYWE1ZTQ3NDMtZjBiNC00ZjdhLTg3OTQtYzVkMmM1NWNjOTI3XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 114
	},
	{
	  "season": 6,
	  "episode": 12,
	  "name": "Homer the Great",
	  "rating": 8.9,
	  "description": "Homer becomes a member of a mysterious organization called the Stonecutters and is heralded as \"the chosen one\".",
	  "airDate": "1995-01-29T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNWY4ZmNhYzEtYmU2OC00NDM2LWEzODItOGE2YTA3ODg1Y2M1XkEyXkFqcGdeQXVyNjYyODY4NDU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 115
	},
	{
	  "season": 6,
	  "episode": 13,
	  "name": "And Maggie Makes Three",
	  "rating": 8.6,
	  "description": "Homer recounts the story of Maggie's birth when the kids ask why there are no photos of her in the family album.",
	  "airDate": "1995-01-22T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTcwMjViNDItOGNkNC00Y2U1LWFkZWYtOWY3ODRkY2JmYjVhXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 116
	},
	{
	  "season": 6,
	  "episode": 14,
	  "name": "Bart's Comet",
	  "rating": 8.6,
	  "description": "Bart discovers a comet that is on a collision course with Springfield.",
	  "airDate": "1995-02-05T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BODRlZDZiZTAtMzQxMS00MGNhLThlOTgtZWQyMGRiZTVmYzI4XkEyXkFqcGdeQXVyNjQwNzY3OTQ@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 117
	},
	{
	  "season": 6,
	  "episode": 15,
	  "name": "Homie the Clown",
	  "rating": 8.6,
	  "description": "Homer becomes a Krusty the Clown stand-in, but is mistaken for the real Krusty by the Springfield mafia.",
	  "airDate": "1995-02-12T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjkyNzljMzItN2JiZi00MTAwLWFiYzAtMTFkNjE2ZWM0NGJkXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 118
	},
	{
	  "season": 6,
	  "episode": 16,
	  "name": "Bart vs. Australia",
	  "rating": 8.5,
	  "description": "After he makes a collect call to Australia and refuses to pay for it, Bart sparks an international incident, with the Simpsons forced to travel to the country in order to repair political relations.",
	  "airDate": "1995-02-19T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZDM4MjE0MzQtZWViMS00YWFkLWI2OTgtMTQxYTlkNmYyYTM0XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 119
	},
	{
	  "season": 6,
	  "episode": 17,
	  "name": "Homer vs. Patty and Selma",
	  "rating": 7.9,
	  "description": "Desperate for money, Homer takes a loan from Patty and Selma. Meanwhile, Bart discovers a natural talent for ballet.",
	  "airDate": "1995-02-26T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZjk1MzAzN2UtNGE1Ny00ZjJiLTk2YmUtYTlmNGY5NWY2NGM5XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 120
	},
	{
	  "season": 6,
	  "episode": 18,
	  "name": "A Star Is Burns",
	  "rating": 8.5,
	  "description": "Mr. Burns hosts a film festival in Springfield to improve his image. Film critic Jay Sherman, of \"The Critic\" is invited, and stays with the Simpsons.",
	  "airDate": "1995-03-05T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZmFlNmY0NjYtNTg5NC00ZWYzLWEwYWMtNzEyNjJiMTY1N2UwXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 121
	},
	{
	  "season": 6,
	  "episode": 19,
	  "name": "Lisa's Wedding",
	  "rating": 8.3,
	  "description": "A fortune teller gives Lisa a look at her wedding in the year 2010.",
	  "airDate": "1995-03-19T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQxNjQyNTcxOV5BMl5BanBnXkFtZTgwNTc2NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 122
	},
	{
	  "season": 6,
	  "episode": 20,
	  "name": "Two Dozen and One Greyhounds",
	  "rating": 8.1,
	  "description": "Santa's Little Helper's new mate has puppies, and Mr. Burns schemes to steal them and make them into a coat.",
	  "airDate": "1995-04-08T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BODEyOTJjZjctMDE1Mi00ZjQ0LTg1NmYtODc0ZDU3Mzk0ZjRlXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 123
	},
	{
	  "season": 6,
	  "episode": 21,
	  "name": "The PTA Disbands",
	  "rating": 8.1,
	  "description": "Marge fills in for Mrs. Krabappel during a teachers' strike.",
	  "airDate": "1995-04-15T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BM2FjOWNlM2QtN2FmOC00YWE5LWJkNDctMTA4YWI3MTk5YzdiXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 124
	},
	{
	  "season": 6,
	  "episode": 22,
	  "name": "'Round Springfield",
	  "rating": 8.3,
	  "description": "When Bart is hospitalized, Lisa runs into her hero, Bleeding Gums Murphy, who is also a patient. However, when he dies soon after, she is devastated.",
	  "airDate": "1995-10-14T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYzQwZTRmMzUtNzY0ZS00OGYxLWFiYWMtNTE5OThhMzEzMTUzXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 125
	},
	{
	  "season": 6,
	  "episode": 23,
	  "name": "The Springfield Connection",
	  "rating": 8.2,
	  "description": "Marge deals with corruption and crime when she joins the Springfield police force.",
	  "airDate": "1995-05-06T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAwMzYyZWUtNmRkYS00ZDE0LWE1YWYtNGM5Y2E1NmU0ODgzXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 126
	},
	{
	  "season": 6,
	  "episode": 24,
	  "name": "Lemon of Troy",
	  "rating": 8.6,
	  "description": "When a group of Shelbyville kids steal Springfield's sacred lemon tree, Bart and his friends venture there to get the tree back.",
	  "airDate": "1995-05-13T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BM2QyNzEwZGEtYWU1MS00YjJiLWFjYTAtOGQxZWI1ZjZmMmE4XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 127
	},
	{
	  "season": 6,
	  "episode": 25,
	  "name": "Who Shot Mr. Burns?",
	  "rating": 9.1,
	  "description": "After Mr. Burns steals oil from Springfield Elementary, an unknown person, seemingly in retaliation, shoots him.",
	  "airDate": "1995-07-01T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYzc3MzE2OGYtMjVmYS00MzcxLWJmZDMtZTk0OTg2NTg1YjNjXkEyXkFqcGdeQXVyNjQwMTkxMDU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 128
	},
	{
	  "season": 7,
	  "episode": 1,
	  "name": "Who Shot Mr. Burns?",
	  "rating": 8.9,
	  "description": "As Mr. Burns lies in intensive care, Chief Wiggum - with some help from Lisa - tries to find out who shot him.",
	  "airDate": "1995-09-30T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjYwOTAxNTcyOV5BMl5BanBnXkFtZTgwMTc0NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 129
	},
	{
	  "season": 7,
	  "episode": 2,
	  "name": "Radioactive Man",
	  "rating": 8.3,
	  "description": "Milhouse is cast as Radioactive Man's sidekick in a Hollywood production of the comic book.",
	  "airDate": "1995-10-07T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2OTQxMTY2M15BMl5BanBnXkFtZTgwMjUxNDc5NzE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 130
	},
	{
	  "season": 7,
	  "episode": 3,
	  "name": "Home Sweet Home-Dum-Diddly Doodily",
	  "rating": 8.3,
	  "description": "Marge and Homer lose custody of the kids, who are sent to live at the Flanders' house.",
	  "airDate": "1995-11-26T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNmQ1MjE1YzctNDIwYy00ODk4LTgyNTctN2E1MmNjOWYzMzEzXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 131
	},
	{
	  "season": 7,
	  "episode": 4,
	  "name": "Bart Sells His Soul",
	  "rating": 8.7,
	  "description": "When Rev. Lovejoy disciplines Bart for a prank he pulled in church - he tricked the organist into playing Iron Butterfly's \"\"In-A-Gadda-Da-Vida\" - he and co-conspirator Milhouse begin arguing over whether man really has a soul. Bart scoffs at the notion and agrees to \"sell\" his soul (a piece of paper with the words \"Bart Simpson's Soul\") to Milhouse for $5. A series of situations makes Bart realize maybe he really did sell his soul, prompting him to go all-out to get it back from Milhouse, who isn't willing to sell. Meanwhile, Moe attempts to open a family-style ...",
	  "airDate": "1995-12-03T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZDJkNjZlZmUtZmQ2NS00ZmYyLWI3ZWMtODNmOGE3NTk2MmE4XkEyXkFqcGdeQXVyNjQwNzY3OTQ@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 132
	},
	{
	  "season": 7,
	  "episode": 5,
	  "name": "Lisa the Vegetarian",
	  "rating": 8.6,
	  "description": "A trip to a local petting zoo convinces Lisa to give up meat, despite excessive pressure to convince her not to do so.",
	  "airDate": "1995-11-19T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BOGY4NjZhOGYtY2FjYi00Y2VmLWIyZWUtMDQxOTA5Yzk0ODQ0XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 133
	},
	{
	  "season": 7,
	  "episode": 6,
	  "name": "Treehouse of Horror VI",
	  "rating": 8.5,
	  "description": "A freak lightning storm causes giant advertising mascots to come to life, Groundskeeper Willie dies and swears revenge on the kids in their dreams, and Homer accidentally finds himself trapped in another dimension.",
	  "airDate": "1995-11-05T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxMjU0OTU2NF5BMl5BanBnXkFtZTgwMzczMzQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 134
	},
	{
	  "season": 7,
	  "episode": 7,
	  "name": "King Size Homer",
	  "rating": 9,
	  "description": "Determined to avoid a work exercise program, Homer intentionally gains weight in order to qualify for disability and work from home. However, he soon realizes that being morbidly obese comes with its own problems.",
	  "airDate": "1996-01-07T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyODQ4MjM3NF5BMl5BanBnXkFtZTgwNTk5NjA1MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 135
	},
	{
	  "season": 7,
	  "episode": 8,
	  "name": "Mother Simpson",
	  "rating": 8.5,
	  "description": "After faking his own death, Homer meets a woman in the cemetery who turns out to be his mother. While he is shocked by her reappearance as he was always told she was dead, she harbors a deep secret.",
	  "airDate": "1995-12-17T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNWExNjE0NTEtNGUwMS00OTYzLWJjMDktYmIyOTQxZmU0NTU3XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 136
	},
	{
	  "season": 7,
	  "episode": 9,
	  "name": "Sideshow Bob's Last Gleaming",
	  "rating": 8,
	  "description": "Sideshow Bob again escapes from prison and takes control of a TV screen at an air show, demanding all television stations immediately go off the air.",
	  "airDate": "1996-01-28T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZDgyN2RhNWMtODBkYi00OGI3LWI0NGMtNDQxMDA5NzFmM2I0XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 137
	},
	{
	  "season": 7,
	  "episode": 10,
	  "name": "The 138th Episode Spectacular",
	  "rating": 7.5,
	  "description": "Troy McClure hosts a retrospective of the first 137 episodes of The Simpsons.",
	  "airDate": "1996-02-04T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BODgyZjFlNjMtYWQ2My00ZjFhLTg1ZjAtNzg4ODEyZjdmNjMyXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 138
	},
	{
	  "season": 7,
	  "episode": 11,
	  "name": "Marge Be Not Proud",
	  "rating": 8.4,
	  "description": "Marge's relationship with Bart is strained when he is caught shoplifting before Christmas.",
	  "airDate": "1995-12-24T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYmZkZDFjMGMtNjZiNC00ZDNkLTg5OTQtM2E3ODEwOWMwZDhkXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 139
	},
	{
	  "season": 7,
	  "episode": 12,
	  "name": "Team Homer",
	  "rating": 8.3,
	  "description": "Homer starts a bowling team with Moe, Apu and Otto, but when Mr. Burns discovers the team was funded with his money, he insists on joining. Meanwhile, Springfield Elementary introduces uniforms.",
	  "airDate": "1996-03-31T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMmY4NDY5MDUtOGVkNS00OWE1LTg3MDktNTQwYWY2OGNiYTFkXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 140
	},
	{
	  "season": 7,
	  "episode": 13,
	  "name": "Two Bad Neighbors",
	  "rating": 8.7,
	  "description": "Former President George Bush and his wife, Barbara, move into the Simpsons' neighborhood and soon clash with Bart and Homer.",
	  "airDate": "1996-03-10T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYTM3MzUxYmItNWI4ZC00YWE4LTgyYjgtOTQwYzczYTJkNjYyXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 141
	},
	{
	  "season": 7,
	  "episode": 14,
	  "name": "Scenes from the Class Struggle in Springfield",
	  "rating": 7.7,
	  "description": "After buying a Chanel suit at a bargain price, Marge finds herself invited to a country club by a former schoolmate. Taken in by the opulence of the place, she is soon overcome by a desperation to fit in.",
	  "airDate": "1996-04-13T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzY4NzM0MTctYzdkNS00NGQ3LTljM2MtYjA5YjcwYTBlOGE5XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 142
	},
	{
	  "season": 7,
	  "episode": 15,
	  "name": "Bart the Fink",
	  "rating": 7.7,
	  "description": "Bart gets a check he wanted signed by Krusty back stamped. As Krusty was supposed to autograph it, Bart wants it taken back to sign, but inadvertently reveals Krusty as a tax fraud. Krusty's lifestyle is stripped down to that of an average citizen, his show ruined and most of his possessions sold in an auction. Bart is mad at himself, particularly after a sobbing Krusty commits suicide by piloting his plane, the I'm-Onna-Rolla-Gay, into a mountainside. Bart sees visions of Krusty everywhere, but are they illusions or real life?",
	  "airDate": "1996-04-20T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzU4YTYxNzktMWFmMS00ZTkwLWI5NjgtOTU4NzVlYzFjODZmXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 143
	},
	{
	  "season": 7,
	  "episode": 16,
	  "name": "Lisa the Iconoclast",
	  "rating": 8.1,
	  "description": "Lisa discovers that her town's beloved founder Jebediah Springfield was in fact a vicious pirate.",
	  "airDate": "1996-05-18T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNGRlZTZkYWItY2VhZi00MzNhLThlOGYtYzQwY2M0NDI5NTdiXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 144
	},
	{
	  "season": 7,
	  "episode": 17,
	  "name": "Homer the Smithers",
	  "rating": 8.9,
	  "description": "When Smithers is forced to take a vacation, he appoints Homer as his temporary replacement.",
	  "airDate": "1996-05-25T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk1NzMzNjE2MF5BMl5BanBnXkFtZTgwNzk5NjA1MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 145
	},
	{
	  "season": 7,
	  "episode": 18,
	  "name": "The Day the Violence Died",
	  "rating": 8,
	  "description": "Bart and Lisa meet a homeless person who claims to have created Itchy, one half of the cat and mouse team of their favorite cartoon series, \"Itchy & Scratchy.\"",
	  "airDate": "1996-06-08T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTg1ODFjMGItNGRkMy00MDhhLWFkNWMtZjE0MjljMjEwNjA1XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 146
	},
	{
	  "season": 7,
	  "episode": 19,
	  "name": "A Fish Called Selma",
	  "rating": 8.2,
	  "description": "Washed-up movie star Troy McClure starts dating Selma in an attempt to silence bizarre rumors about his personal life and resuscitate his career.",
	  "airDate": "1996-06-01T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BODU3YmI2NDktOThjYS00OGU3LTkxMzctNTczNGE0YWY4YzQ1XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 147
	},
	{
	  "season": 7,
	  "episode": 20,
	  "name": "Bart on the Road",
	  "rating": 8.6,
	  "description": "Unable to get out of a mis-scheduled spring vacation, Principal Skinner makes up the holiday \"Go to Work with Your Parents Day,\" giving Lisa the chance to spend time with Homer, and Bart the chance to work with Patty & Selma at the DMV. When Bart makes his own fake driver's license and Martin wins a bundle at the stock market, Bart rents a car, and takes Milhouse, Martin, and Nelson Muntz on a huge road trip.",
	  "airDate": "1996-06-29T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzZmNzFkNjAtNzUxOS00OTM5LWJlZWUtNzQxMThjYWVhNDk1XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 148
	},
	{
	  "season": 7,
	  "episode": 21,
	  "name": "22 Short Films About Springfield",
	  "rating": 8.8,
	  "description": "A series of vignettes highlights a day in the life of various Springfield residents.",
	  "airDate": "1996-08-17T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYmIyMzMwNTMtY2U1MS00NWQ4LWE4MmMtZGU3NGViMzAwY2VkXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 149
	},
	{
	  "season": 7,
	  "episode": 22,
	  "name": "Raging Abe Simpson and His Grumbling Grandson in 'The Curse of the Flying Hellfish'",
	  "rating": 8.4,
	  "description": "Another member of Grampa Simpson's WWII platoon dies, leaving only him and Mr. Burns. Years earlier, the men stole a number of priceless masterpieces from Nazi Germany, and now Mr. Burns aims to ensure he is the one to inherit them.",
	  "airDate": "1996-07-27T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzMzYmYxNDEtZDcxYy00YWUwLWI1YTEtNWExODhjMTkxZDVkXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 150
	},
	{
	  "season": 7,
	  "episode": 23,
	  "name": "Much Apu About Nothing",
	  "rating": 8,
	  "description": "Anti-immigration fever sweeps Springfield, which threatens to lead to the deportation of Apu, until Homer decides to reject the mob mentality and help him become a legal citizen.",
	  "airDate": "1996-08-17T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYjdmZmViZGYtMzdhOS00M2RhLTkyYjQtOTc2MjdmNGI2YWI1XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 151
	},
	{
	  "season": 7,
	  "episode": 24,
	  "name": "Homerpalooza",
	  "rating": 8,
	  "description": "Determined to prove he is still cool, Homer takes Bart and Lisa to the Hullabalooza music festival, where he finds he has a talent for being shot in the stomach, and joins the festival's freak show.",
	  "airDate": "1996-09-28T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzhkMzA0OWUtMGZmMS00ZWNhLTllZGYtYWViZGRmNzhmNjg1XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 152
	},
	{
	  "season": 7,
	  "episode": 25,
	  "name": "Summer of 4'2\"",
	  "rating": 8.3,
	  "description": "After realizing how unpopular she is at school, a disillusioned Lisa sees the vacation to Ned Flanders' beach house that the family has planned as an opportunity to reinvent herself and make some friends.",
	  "airDate": "1996-09-14T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZTY2MDhlODEtYmEwNi00YjE5LWJhOWUtZWRjZGViYmY4ZjEzXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 153
	},
	{
	  "season": 8,
	  "episode": 1,
	  "name": "Treehouse of Horror VII",
	  "rating": 8.3,
	  "description": "Bart discovers his Siamese twin Hugo in the attic. Then, Lisa becomes a god after she accidentally creates life in a science fair project. Finally, Kang and Kodos plot to conquer the planet disguised as Bill Clinton and Bob Dole.",
	  "airDate": "1996-11-03T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxNTY1OTI4MV5BMl5BanBnXkFtZTgwOTcyMzQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 154
	},
	{
	  "season": 8,
	  "episode": 2,
	  "name": "You Only Move Twice",
	  "rating": 9.2,
	  "description": "Homer takes a new job in a new town. However, his friendly new boss might be a super villain bent on world domination.",
	  "airDate": "1997-01-05T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZGRlMTYwYTAtNDM5Ni00YmFmLWExYjAtNjA1NTA0NTY4YjgzXkEyXkFqcGdeQXVyNjQwNzY3OTQ@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 155
	},
	{
	  "season": 8,
	  "episode": 3,
	  "name": "The Homer They Fall",
	  "rating": 8,
	  "description": "Homer becomes a boxer after Moe discovers his amazing ability to take a punch.",
	  "airDate": "1996-11-24T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZmQzNmZlODEtZjcwNC00ZDYyLWEzN2UtYWNkNmU5YzQ5NzMxXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 156
	},
	{
	  "season": 8,
	  "episode": 4,
	  "name": "Burns, Baby Burns",
	  "rating": 7.7,
	  "description": "The Simpsons try to reunite Homer's boss, Mr. Burns, with Larry, Burns' long-lost son.",
	  "airDate": "1996-12-29T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzkwN2ViNmMtZWM0Ni00ZDg4LTkzM2YtNTU2MjMwYmUxZDcwXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 157
	},
	{
	  "season": 8,
	  "episode": 5,
	  "name": "Bart After Dark",
	  "rating": 8.2,
	  "description": "Marge leads a crusade against a local burlesque house after she discovers Bart working there.",
	  "airDate": "1997-01-19T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI3NzhlNGQtNWEwYS00ZGUwLTljYTgtY2M0ZjE2NTI4ZTM4XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 158
	},
	{
	  "season": 8,
	  "episode": 6,
	  "name": "A Milhouse Divided",
	  "rating": 8,
	  "description": "Milhouse's parents divorce, leading Homer to question the strength of his own marriage.",
	  "airDate": "1996-12-22T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZjRiYWI5OTgtODMyMy00MjRiLTkyNDMtNzE3NTRjYzQ4M2Q4XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 159
	},
	{
	  "season": 8,
	  "episode": 7,
	  "name": "Lisa's Date with Density",
	  "rating": 7.8,
	  "description": "At school, Nelson is caught with a cache of stolen items in his locker (including the \"H\" hood emblem from Supt. Chalmers' car) and is assigned to do chores with Groundskeeper Willie. Lisa is caught observing the goings-on and is assigned detention, where she develops a crush on Nelson. Lisa tries to reform Nelson, and it works for awhile. However, as the old saying goes, you can't teach a juvenile delinquent new tricks and it isn't long before Nelson is back to his old ways; he and his buddies had been caught throwing spoiled food at Skinner's house and tries to lie ...",
	  "airDate": "1997-02-16T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYjU1YTdlYTAtNTg2NC00NGRjLTk3NDEtMDYxNTA3NTI2Yzg4XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 160
	},
	{
	  "season": 8,
	  "episode": 8,
	  "name": "Hurricane Neddy",
	  "rating": 8.8,
	  "description": "After a hurricane hits Springfield and destroys Ned Flanders' house, he suffers a breakdown and is forced to confront problems from his childhood.",
	  "airDate": "1997-02-02T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYWE1M2RjM2UtZWJiNS00ZDc5LWFiOGEtNDY4OGM0ZTQ3NDJhXkEyXkFqcGdeQXVyNjQwNzY3OTQ@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 161
	},
	{
	  "season": 8,
	  "episode": 9,
	  "name": "The Mysterious Voyage of Our Homer",
	  "rating": 8.5,
	  "description": "At Springfield's annual chili cook-off, Homer eats a spicy concoction containing hallucinogenic peppers from Guatemala, and subsequently has a vision which makes him doubt Marge is his soul mate.",
	  "airDate": "1997-03-30T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNWQ4ZDgwOTEtYjU1ZS00MDU0LWFjOWYtMjZhNjQ2M2Y3MjA4XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 162
	},
	{
	  "season": 8,
	  "episode": 10,
	  "name": "The Springfield Files",
	  "rating": 9,
	  "description": "In yet another crazed crossover, Leonard Nimoy narrates another tale of the supernatural, reminiscent of his days with \"In Search Of.\" Realizing that even he's too drunk to drive after a night at Moe's Tavern, Homer stumbles through the woods and encounters a green glowing alien. Needless to say, nobody takes him seriously, except for \"X-Files\" FBI Agent Fox Mulder, who once again drags along his partner Dana Scully on another quest to prove the government is hiding the presence of UFO's from the public. However, even this mission may make a skeptic out of Mulder.",
	  "airDate": "1997-03-30T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMmQzYzViMTYtMDNmNy00OWYyLWFmZTEtMGU2YzZlMmYyOGQzXkEyXkFqcGdeQXVyNjQwNzY3OTQ@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 163
	},
	{
	  "season": 8,
	  "episode": 11,
	  "name": "The Twisted World of Marge Simpson",
	  "rating": 7.8,
	  "description": "Marge enters the pretzel vending business, but when she fails, Homer recruits some help from the mob.",
	  "airDate": "1997-04-05T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM0N2ZmZjctMzJmYS00ZTIxLTg4N2ItZTM2NTBkN2IzNTE0XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 164
	},
	{
	  "season": 8,
	  "episode": 12,
	  "name": "Mountain of Madness",
	  "rating": 8.6,
	  "description": "Homer and Mr. Burns get trapped in a snowed-in cabin during a company retreat.",
	  "airDate": "1997-03-09T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYTdmOGZkMTgtMmY4OC00MWYzLThkMWMtYWE1MjJiMmZkMzYyXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 165
	},
	{
	  "season": 8,
	  "episode": 13,
	  "name": "Simpsoncalifragilisticexpiala-Annoyed-Grunt-cious",
	  "rating": 7.7,
	  "description": "After a little bit of hair loss caused by stress, the Simpson family decide that a nanny to help around the house may be a good idea, causing them to come into contact with a very odd character named Shary Bobbins.",
	  "airDate": "1997-09-06T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYmVmZDhiM2ItMDA1Ni00MDUyLTk4MWItMzJkOGJlNjM3MWM5XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UY112_CR13,0,200,112_AL_.jpg",
	  "id": 166
	},
	{
	  "season": 8,
	  "episode": 14,
	  "name": "The Itchy & Scratchy & Poochie Show",
	  "rating": 7.9,
	  "description": "Krusty becomes alarmed at the flagging ratings for \"The Itchy & Scratchy Show\" and demands it be corrected. The producers reason some new gimmicks are needed to inject fresh air and - after a focus group doesn't quite go as well as planned - decide to introduce a new character named Poochie, a rapping cartoon dog that is supposed to become friends with Itchy and Scratchy. Homer auditions to do Poochie's voice and wins the part. Poochie's first cartoon, \"The Beagle Has Landed,\" premieres to great fanfare but is poorly received to say the least. The producers decide ...",
	  "airDate": "1997-04-12T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYzQxMDE5MTEtYjZmOS00M2IyLWJhNjItMDJiZDZjNDA5NjIyXkEyXkFqcGdeQXVyNjQwNzY3OTQ@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 167
	},
	{
	  "season": 8,
	  "episode": 15,
	  "name": "Homer's Phobia",
	  "rating": 8.9,
	  "description": "After Marge befriends John, a gay store owner, Homer worries that his presence will have a negative effect on Bart's sexuality.",
	  "airDate": "1997-05-03T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDE3OTMzMzg5MF5BMl5BanBnXkFtZTgwOTE2NDE4MTE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 168
	},
	{
	  "season": 8,
	  "episode": 16,
	  "name": "Brother from Another Series",
	  "rating": 8.2,
	  "description": "Grudge against his cousin Side Show Bob, Cecil tries to kill Springfield with hydro-electric dam explosion which was fonded hollowed structure by him. Side Show Bob also has a good Side.",
	  "airDate": "1997-05-17T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYmZkMDFmY2UtNjEzZC00OTk5LTkzOGQtOGMwMTY0NWEwZDcwXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 169
	},
	{
	  "season": 8,
	  "episode": 17,
	  "name": "My Sister, My Sitter",
	  "rating": 8.1,
	  "description": "Bart is outraged when Lisa becomes his babysitter.",
	  "airDate": "1997-05-24T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYzA2NWMyMDgtYzcwYS00ZTliLThiMDEtMGI3YTU1MWY2NDE3XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 170
	},
	{
	  "season": 8,
	  "episode": 18,
	  "name": "Homer vs. the 18th Amendment",
	  "rating": 8.8,
	  "description": "After Bart inadvertently becomes drunk at a St. Patrick's Day celebration, an old prohibition law banning drinking in Springfield is rediscovered and enforced. Desperate to keep alcohol in the city, Homer takes matters into his own hands.",
	  "airDate": "1998-03-17T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYjg2ZTYzODgtOTYzMS00NzA0LTk4YmYtNzNlNTljNGQ2YzZiXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 171
	},
	{
	  "season": 8,
	  "episode": 19,
	  "name": "Grade School Confidential",
	  "rating": 8.2,
	  "description": "Martin's birthday party is predictably dull until nearly all the guests become ill with food poisoning. The only ones not to get sick are Bart (who didn't want to eat the spoiled oysters), and Principal Skinner and Mrs. Krabappel, who fall in love with each other. Bart catches his principal and teacher kissing passionately, but they immediately find out and want to swear him to secrecy. They make him his gofer, making his life miserable at school and calling him at all hours of the night (all for the reward of Milhouse inheriting Bart's poor school record). Bart ...",
	  "airDate": "1997-05-31T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZThkOGUzMGQtZDYxYi00ODg0LThlZWItOTg4NDdkZTMyYmUwXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 172
	},
	{
	  "season": 8,
	  "episode": 20,
	  "name": "The Canine Mutiny",
	  "rating": 7.6,
	  "description": "After he fraudulently obtains a credit card, Bart buys a new dog named Laddie. When the items he purchased are repossessed, he lies that Santa's Little Helper is the dog he bought, and soon misses his pet.",
	  "airDate": "1997-06-21T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzRmOTI2MzgtMDdjMy00NDY1LWJhY2UtZDc1MGExYWE1MWNlXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 173
	},
	{
	  "season": 8,
	  "episode": 21,
	  "name": "The Old Man and the Lisa",
	  "rating": 7.9,
	  "description": "Burns loses his fortune and recruits Lisa to help him get it back.",
	  "airDate": "1997-07-05T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZjE2ZWM5MTAtODgwMC00ZmUxLWExZDYtZDNmZWM0MDIyYjFlXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 174
	},
	{
	  "season": 8,
	  "episode": 22,
	  "name": "In Marge We Trust",
	  "rating": 8,
	  "description": "Marge becomes a church counselor to compensate for Reverend Lovejoy's lack of interest. Meanwhile, Homer discovers a Japanese detergent is using his face for their logo.",
	  "airDate": "1997-07-19T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZDNlZThhZDgtYTYyMy00MDk4LTg1NmEtODI5NGY3N2M4MDU4XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 175
	},
	{
	  "season": 8,
	  "episode": 23,
	  "name": "Homer's Enemy",
	  "rating": 9.2,
	  "description": "Industrious Frank Grimes starts working at the plant beside Homer. He complains to the other employees about how useless Homer is, which causes them to wonder why Frank is being so troublesome.",
	  "airDate": "1997-08-09T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZTdkNzE4NDItZjU5NC00MjM4LTlkOGMtOGUzOTE5MzE4MjNhXkEyXkFqcGdeQXVyNjQwNzY3OTQ@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 176
	},
	{
	  "season": 8,
	  "episode": 24,
	  "name": "The Simpsons Spin-Off Showcase",
	  "rating": 7.3,
	  "description": "Troy McClure introduces three \"potential spin-offs\" of The Simpsons. The fictional pilots include: \"Chief Wiggum, P.I. (Wiggum and Principal Skinner are detectives in New Orleans, and must contend with the evil Big Daddy, who kidnaps Ralph); \"The Love-Matic Grandpa\" (a spoof of the failed 1960s-era sitcom \"My Mother the Car,\" where Grampa's ghost inhabits a Love Tester machine at Moe's Tavern); and \"The Simpson Family Smile-Time Variety Hour\" (the Simpsons - along with a teen-aged \"Lisa\" - star in a comedy-variety show, much like the Bradys did in 1977).",
	  "airDate": "1997-08-23T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjg5YmE2OTMtMDg1Ni00ODg1LWEyYzctMjA3MjUwY2RiN2I2XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 177
	},
	{
	  "season": 8,
	  "episode": 25,
	  "name": "The Secret War of Lisa Simpson",
	  "rating": 7.8,
	  "description": "After a prank destroys half the town, Bart is shipped away to military school. Lisa, seeking a challenge, decides to enroll with him, but is faced with discrimination as the school's only girl cadet.",
	  "airDate": "1998-01-25T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTU0NTY5MzQtMTZlNC00MDc5LWIzM2UtNWY5OWFmMDVlMTJiXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 178
	},
	{
	  "season": 9,
	  "episode": 1,
	  "name": "The City of New York vs. Homer Simpson",
	  "rating": 9.1,
	  "description": "Homer must travel to New York to get his car back, which is illegally parked at World Trade Center Plaza.",
	  "airDate": "1997-10-04T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI3OTczMTExM15BMl5BanBnXkFtZTgwOTM1NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 179
	},
	{
	  "season": 9,
	  "episode": 2,
	  "name": "The Principal and the Pauper",
	  "rating": 7.4,
	  "description": "After holding a surprise tribute to Principal Skinner, the town of Springfield is shocked to find out that Seymour Skinner is actually an impostor.",
	  "airDate": "1997-10-18T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZjRjZTNhNWItNjEyMS00MmVmLWE5NWQtMDU0YmRhNzZjMDVjXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 180
	},
	{
	  "season": 9,
	  "episode": 3,
	  "name": "Lisa's Sax",
	  "rating": 8.1,
	  "description": "Homer recounts the story of Bart's first day of school, which corresponds with the story of how Lisa got her saxophone.",
	  "airDate": "1997-11-09T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDIzZDA0NmEtNGFkNi00OWVlLTgxYjYtNzA0ODY1NTI4NTZkXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 181
	},
	{
	  "season": 9,
	  "episode": 4,
	  "name": "Treehouse of Horror VIII",
	  "rating": 8.2,
	  "description": "In \"The Homega Man,\" Homer battles mutants after Springfield is annihilated by a neutron bomb. Then, Bart has his DNA mixed with a fly in \"Fly vs. Fly.\" Finally, Marge is revealed to be a witch in colonial Springfield in \"Easy Bake Coven.\"",
	  "airDate": "1997-11-02T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDU5MjIyNzE1Ml5BMl5BanBnXkFtZTgwODcyMzQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 182
	},
	{
	  "season": 9,
	  "episode": 5,
	  "name": "The Cartridge Family",
	  "rating": 8.3,
	  "description": "After a massive soccer riot, Homer decides to invest in a home security system but can't afford the high price. He does the next best thing: He purchases a gun. This is despite Marge's stern opposition to having a gun. Homer plays with the gun like a toy and almost causes an accident at the dinner table. Marge warns Homer to get rid of the gun now; Homer agrees, but Bart finds the gun later in the refrigerator. Marge sees this, takes the gun away and tells Homer she is taking the kids and moving out. Homer eventually is kicked out of the local NRA chapter (for his ...",
	  "airDate": "2001-10-25T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZDAyMDBiNWYtZGE4YS00YjI5LWI4MzAtYzlmNGE1Y2ViYmU5XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 183
	},
	{
	  "season": 9,
	  "episode": 6,
	  "name": "Bart Star",
	  "rating": 7.7,
	  "description": "A damning report on childhood obesity in Springfield leads to the formation of a pee-wee football team. After belittling Ned Flanders, Homer ends up coaching the team, but his favoring of Bart makes him unpopular.",
	  "airDate": "1997-12-07T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzIzN2Q3ZmEtZjQ1Yi00YTdhLTkxOWQtZmYyZjE4YmFhNjgxXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 184
	},
	{
	  "season": 9,
	  "episode": 7,
	  "name": "The Two Mrs. Nahasapeemapetilons",
	  "rating": 7.7,
	  "description": "Marge must pose as Apu's wife to prevent his upcoming arranged marriage.",
	  "airDate": "1997-11-30T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BN2ViMzBiNGUtNGZkYy00OTA3LTgyZDctMTViNmVhNTdhOGI5XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 185
	},
	{
	  "season": 9,
	  "episode": 8,
	  "name": "Lisa the Skeptic",
	  "rating": 8,
	  "description": "Another day at Springfield Elementary School, another field trip - this time to an archaeological dig. During the dig, Lisa unearths what appears to be a fossilized human skeleton with wings.",
	  "airDate": "1997-12-28T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZjk5YzhkM2MtY2I1ZS00N2FjLWE0ZmItM2RkYzU0NTRkYjRkXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 186
	},
	{
	  "season": 9,
	  "episode": 9,
	  "name": "Realty Bites",
	  "rating": 7.6,
	  "description": "Marge becomes a real-estate agent.",
	  "airDate": "1998-01-11T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjZkMzEyMzctYTc5NC00MTIzLTk1NjMtZjM0MzMwNjQ3MTcxXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 187
	},
	{
	  "season": 9,
	  "episode": 10,
	  "name": "Miracle on Evergreen Terrace",
	  "rating": 7.6,
	  "description": "On Christmas Eve, Marge admonishes the family not to open presents until 7 a.m. the next morning. Bart finds a way around the directive and opens his gifts at 5 a.m. However, his prized gift - a remote-controlled fire truck - overheats and causes a fire that engulfs the tree and presents. The family investigates and Bart tells them that a burglar has struck. As a result of Kent Brockman's human interest story, the entire town donates gifts and cash to the Simpsons for their \"misfortune.\" Eventually, Bart admits the truth, angering his clueless family but angering the ...",
	  "airDate": "1998-12-20T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwMzc2MDI4Nl5BMl5BanBnXkFtZTgwODc2NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 188
	},
	{
	  "season": 9,
	  "episode": 11,
	  "name": "All Singing, All Dancing",
	  "rating": 5.1,
	  "description": "Homer is disappointed when the western he rented turns out to be a musical, so the family reminds him of the musical moments in the show's history.",
	  "airDate": "1998-02-08T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYmQ4Nzk0NzgtZjM3My00MmRhLTk0NmUtZTY2MzEwYjMyMmJmXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 189
	},
	{
	  "season": 9,
	  "episode": 12,
	  "name": "Bart Carny",
	  "rating": 7.7,
	  "description": "Bart and Homer befriend two carnies and invite them to stay with them, but the carnies soon swindle the Simpsons out of their house.",
	  "airDate": "1998-02-22T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDY4YzA0ODQtYzg3MC00ZGU2LTk2ZmYtMjgyZjhkODA2ZjRmXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 190
	},
	{
	  "season": 9,
	  "episode": 13,
	  "name": "The Joy of Sect",
	  "rating": 8.2,
	  "description": "An evil cult called the Movementarians brainwashes the citizens of Springfield and it's up to Marge to get them back.",
	  "airDate": "1998-03-15T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNmI2MzdlZTktNTZiNy00ZmYyLTg1MmItNTNiN2Y3OTA2MWUyXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 191
	},
	{
	  "season": 9,
	  "episode": 14,
	  "name": "Das Bus",
	  "rating": 8.1,
	  "description": "While the kids become stranded on a desert island, Homer attempts to cash in on the Internet.",
	  "airDate": "1998-03-29T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDA0NzUwMDAtOWI3MS00OTljLWI0NDEtM2UwNjlkZThjYTNlXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 192
	},
	{
	  "season": 9,
	  "episode": 15,
	  "name": "The Last Temptation of Krusty",
	  "rating": 7.5,
	  "description": "After a disastrous performance, Krusty changes his image and becomes an edgy stand-up.",
	  "airDate": "1998-04-04T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BODk4NTE3YTQtM2MwNy00ZGM0LWE0YTYtNTEwZTgyMTY1Y2Y1XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 193
	},
	{
	  "season": 9,
	  "episode": 16,
	  "name": "Dumbbell Indemnity",
	  "rating": 7.6,
	  "description": "Homer and Moe attempt insurance fraud so that Moe can support his new girlfriend. When Homer ends up in jail, Moe has to decide whether or not to come forward.",
	  "airDate": "1998-04-18T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzk4YWQyMzktNDE1Ny00NjRjLWE3MWUtMjA4ZjU5OTMzZTViXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 194
	},
	{
	  "season": 9,
	  "episode": 17,
	  "name": "Lisa the Simpson",
	  "rating": 8,
	  "description": "Lisa fears she is losing her intelligence when she learns about the fabled Simpson gene. Meanwhile, Jasper freezes himself in the Kwik-E-Mart freezer.",
	  "airDate": "1998-05-30T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZDdkMmUyNTctMzE2Ni00N2UxLTg1ZjYtNWViYzZjMzdkMTBiXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 195
	},
	{
	  "season": 9,
	  "episode": 18,
	  "name": "This Little Wiggy",
	  "rating": 7.9,
	  "description": "Bart is reluctant to hang out with Ralph Wiggum, until he gains access to Chief Wiggum's master key to the city.",
	  "airDate": "1998-05-16T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BN2I1N2JkM2UtOGUwYy00MWYyLWI5YjctYjUyMzkwY2I1OTdhXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 196
	},
	{
	  "season": 9,
	  "episode": 19,
	  "name": "Simpson Tide",
	  "rating": 8.3,
	  "description": "Homer causes an international incident after he joins the Naval reserves.",
	  "airDate": "1998-07-04T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzg2NTkxMGQtOGMxMy00OWU0LWI0ZTgtZDhmMDM1ZjY2N2Y2XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 197
	},
	{
	  "season": 9,
	  "episode": 20,
	  "name": "The Trouble with Trillions",
	  "rating": 7.9,
	  "description": "Homer is forced to spy for the IRS after an audit. But when he is asked to retrieve a trillion dollar bill from Mr. Burns, he switches sides and the two flee to Cuba for refuge.",
	  "airDate": "1998-06-06T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZTg1N2EzZTgtMDY3ZC00OTBhLTlkNTAtZDUwYWZmNDRlMzI4XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 198
	},
	{
	  "season": 9,
	  "episode": 21,
	  "name": "Girlie Edition",
	  "rating": 7.9,
	  "description": "Bart and Lisa become locked in competition when they anchor a children's news program. Meanwhile, Homer adopts a helper monkey.",
	  "airDate": "1998-06-13T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZTAwOTYyMTEtN2ZiYi00NDVkLWJjMWQtNTM2OWRlOTg3ZWYzXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 199
	},
	{
	  "season": 9,
	  "episode": 22,
	  "name": "Trash of the Titans",
	  "rating": 8.5,
	  "description": "Homer becomes the sanitation commissioner for Springfield. His ineptitude pollutes the town and leads to a drastic solution.",
	  "airDate": "1998-05-30T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYmY5ODcxZWEtYTRhMS00YWY0LTk4NDktMWEwYzhmZjY0YmUyXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 200
	},
	{
	  "season": 9,
	  "episode": 23,
	  "name": "King of the Hill",
	  "rating": 8.3,
	  "description": "After humiliating Bart at a church picnic, Homer resolves to get in shape. Soon, he is contacted by an energy bar company that wants him to climb a mountain as a promotion.",
	  "airDate": "1998-07-18T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZGM1YzczNjMtYWNhYi00M2NhLTkwMTEtZjBlMWI2ZjBhNWQ4XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 201
	},
	{
	  "season": 9,
	  "episode": 24,
	  "name": "Lost Our Lisa",
	  "rating": 7.7,
	  "description": "Lisa gets lost after she tries to take a bus to a museum.",
	  "airDate": "1998-09-12T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDAzYTAyMDktZjAzMS00ZDlmLWE1MjItZDQ2Zjk5MTg2ODUyXkEyXkFqcGdeQXVyMTYzMzI5MzY@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 202
	},
	{
	  "season": 9,
	  "episode": 25,
	  "name": "Natural Born Kissers",
	  "rating": 8.1,
	  "description": "Homer and Marge's attempt to spice up their marriage leads to the couple being chased naked through Springfield.",
	  "airDate": "1998-09-19T23:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNmRiMTdiOTctMWEyZC00ZTBlLTk2NzktYjRmYmI0OGEyMWM5XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 203
	},
	{
	  "season": 10,
	  "episode": 1,
	  "name": "Lard of the Dance",
	  "rating": 7.6,
	  "description": "A new girl arrives at Springfield Elementary and becomes instantly popular, with Lisa forced to organize a dance at her school, while Homer and Bart try to start their own grease business.",
	  "airDate": "1998-10-04T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYjFiMzA2MGMtNjQwMC00YmVkLWFiODgtZWVkMmU4Yzg2YTQ3XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 204
	},
	{
	  "season": 10,
	  "episode": 2,
	  "name": "The Wizard of Evergreen Terrace",
	  "rating": 8.2,
	  "description": "Homer's midlife crisis leads to a disastrous attempt at being an inventor.",
	  "airDate": "1998-10-25T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZDI3YTU4Y2UtMDg0ZC00YWNjLTk3MDItNzg1YzNlNTczMGE2XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 205
	},
	{
	  "season": 10,
	  "episode": 3,
	  "name": "Bart the Mother",
	  "rating": 7.5,
	  "description": "When Bart accidentally kills a mother bird, he tries to make amends by raising the eggs.",
	  "airDate": "1998-11-22T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYmMwZmE1YTctNTM5Mi00MThkLWFlYmMtZDMxMWYyYThkZWRhXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 206
	},
	{
	  "season": 10,
	  "episode": 4,
	  "name": "Treehouse of Horror IX",
	  "rating": 8,
	  "description": "Homer receives an evil hair transplant; Bart and Lisa get trapped in an Itchy and Scratchy cartoon; Maggie is revealed to be an alien.",
	  "airDate": "1998-11-01T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzMDU4NTMyNV5BMl5BanBnXkFtZTgwMDM1NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 207
	},
	{
	  "season": 10,
	  "episode": 5,
	  "name": "When You Dish Upon a Star",
	  "rating": 7.3,
	  "description": "Homer becomes a Hollywood insider when he befriends Alec Baldwin and Kim Basinger.",
	  "airDate": "1998-12-06T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BODc2N2U0YWYtYTUwYy00ZjhkLWFjN2EtMjNlNmI5Y2YxZTNiXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 208
	},
	{
	  "season": 10,
	  "episode": 6,
	  "name": "D'oh-in' in the Wind",
	  "rating": 7.6,
	  "description": "Homer becomes a hippie after a revelation about his middle name.",
	  "airDate": "1999-01-03T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTk3OTQyYWYtZmI0My00Zjk0LTlkN2UtNmY2MGFhYTcwMjRkXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 209
	},
	{
	  "season": 10,
	  "episode": 7,
	  "name": "Lisa Gets an 'A'",
	  "rating": 8.1,
	  "description": "Lisa cheats on a test and has a moral crisis when her perfect score qualifies the school for grant money. Meanwhile, Homer cannot bring himself to cook a lobster, so he adopts it as a pet instead.",
	  "airDate": "1999-01-17T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BY2NhZjY0NTItMjc4MC00ZWYyLWEwNDMtMDU1NDU5MTU4NjJlXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 210
	},
	{
	  "season": 10,
	  "episode": 8,
	  "name": "Homer Simpson in: 'Kidney Trouble'",
	  "rating": 7.3,
	  "description": "Homer gets cold feet before a transplant operation which could save Grampa's life.",
	  "airDate": "1999-02-07T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZDE4MWI1NTQtMTk4NS00YjM3LWFmZTgtYTE5M2E4YjU1ZjAwXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 211
	},
	{
	  "season": 10,
	  "episode": 9,
	  "name": "Mayored to the Mob",
	  "rating": 8.2,
	  "description": "Homer deals with corruption when he becomes Mayor Quimby's bodyguard.",
	  "airDate": "1999-08-15T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMGM4ODQxZTAtNWY3Ni00ZDQ4LThjM2EtNDE4MWFiNmJhNzBmXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 212
	},
	{
	  "season": 10,
	  "episode": 10,
	  "name": "Viva Ned Flanders",
	  "rating": 7.8,
	  "description": "When Homer takes Ned to Las Vegas in an attempt to get him to loosen up, the two end up drunkenly marrying a pair of cocktail waitresses.",
	  "airDate": "1999-03-14T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk0NjQyMDg2M15BMl5BanBnXkFtZTgwNDU0NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 213
	},
	{
	  "season": 10,
	  "episode": 11,
	  "name": "Wild Barts Can't Be Broken",
	  "rating": 7.7,
	  "description": "The children of Springfield revolt after a curfew is enforced.",
	  "airDate": "1999-02-28T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYWI3NDUyNTYtNjM3ZC00YTQxLTk3YTctZjRmYWQzZTRkN2Y3XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 214
	},
	{
	  "season": 10,
	  "episode": 12,
	  "name": "Sunday, Cruddy Sunday",
	  "rating": 6.9,
	  "description": "Homer and his friends head to the Superbowl, but are forced to sneak in when they discover their tickets are counterfeit.",
	  "airDate": "1999-03-28T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDQ5ZTE1NDYtYTgwMC00OWNhLWI1ZGUtYTNhZWNjNWYwNDNmXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 215
	},
	{
	  "season": 10,
	  "episode": 13,
	  "name": "Homer to the Max",
	  "rating": 7.7,
	  "description": "After a dimwitted TV character is coincidentally named Homer Simpson, Homer changes his name to Max Power.",
	  "airDate": "1999-09-19T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMGU5MDc1ODgtNTkxMC00MDRiLWI1ZGMtMmEzMTc1MDJiODFiXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 216
	},
	{
	  "season": 10,
	  "episode": 14,
	  "name": "I'm with Cupid",
	  "rating": 7.3,
	  "description": "The husbands of Springfield plot revenge after Apu outshines them on Valentine's Day.",
	  "airDate": "1999-04-04T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZTY0NWFmMTItYTljZi00NmJlLWJiNGItYjIyZTk2YjQ4ZjU3XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 217
	},
	{
	  "season": 10,
	  "episode": 15,
	  "name": "Marge Simpson in 'Screaming Yellow Honkers'",
	  "rating": 7.3,
	  "description": "Marge's new SUV gives her a potent case of road rage.",
	  "airDate": "1999-04-18T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZWI2YjE3NWYtYTE1Yy00OGIyLWJkYTItNzMwNDJkOTA1NDYzXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 218
	},
	{
	  "season": 10,
	  "episode": 16,
	  "name": "Make Room for Lisa",
	  "rating": 7.5,
	  "description": "Lisa feels that her relationship with her father will never be close, and she develops stress-induced stomach pains; Marge inadvertently knocks out Milhouse.",
	  "airDate": "1999-04-25T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZjEwNDc5NGItYmMwNi00MGU2LWEzYjYtNTZjN2Y2NDIwOTJhXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 219
	},
	{
	  "season": 10,
	  "episode": 17,
	  "name": "Maximum Homerdrive",
	  "rating": 7.7,
	  "description": "Homer completes a cross country delivery for a trucker who dies before completing it, and takes Bart along for the ride. Meanwhile, Marge and Lisa experience problems with a novelty doorbell they purchase.",
	  "airDate": "1999-05-09T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzE5Mjg0NjQtNzRmOS00NTI4LWIyY2QtZmQzNzEzODM5N2Y0XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 220
	},
	{
	  "season": 10,
	  "episode": 18,
	  "name": "Simpsons Bible Stories",
	  "rating": 7.3,
	  "description": "Three famous religious stories are retold Simpsons style as the family nods off at church.",
	  "airDate": "1999-05-23T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNmFhYzZkMzctZmU0OC00Y2NiLTg1MDQtYmEyNjg2OTJjM2M2XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 221
	},
	{
	  "season": 10,
	  "episode": 19,
	  "name": "Mom and Pop Art",
	  "rating": 7.6,
	  "description": "Homer becomes the talk of the Springfield art community when a failed barbecue pit he worked on is mistaken for an art project.",
	  "airDate": "1999-06-06T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc4OGI2MmItMWEwMC00OThjLTg2MjItYzhiZGI1OGIwZjg1XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 222
	},
	{
	  "season": 10,
	  "episode": 20,
	  "name": "The Old Man and the 'C' Student",
	  "rating": 7.3,
	  "description": "Bart is punished with community service at the Retirement Castle after he ruins Springfield's chances of hosting the Olympics.",
	  "airDate": "1999-06-20T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZjNjZDQ0NzMtODk2Mi00NDc0LWIxOTUtNzE3YzAxYjc0ZmU0XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 223
	},
	{
	  "season": 10,
	  "episode": 21,
	  "name": "Monty Can't Buy Me Love",
	  "rating": 7.2,
	  "description": "When a wealthy man moves to Springfield, Mr. Burns begins to feel that he is losing his grasp on the citizens and decides to enlist the help of Homer.",
	  "airDate": "1999-07-04T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZWFiYmFiMjQtMzc4OS00ZDNiLWE0MjktNzM5ZWQyY2Y4Yjk0XkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 224
	},
	{
	  "season": 10,
	  "episode": 22,
	  "name": "They Saved Lisa's Brain",
	  "rating": 7.3,
	  "description": "Lisa is invited to join the Springfield chapter of MENSA and after Mayor Quimby flees, the group ends up running the city. Meanwhile, Homer poses for a series of erotic photos.",
	  "airDate": "1999-07-18T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZGY2YzA5ZjAtODljMS00OGE0LWFjODAtNDdlOTNkYjI3YzMzXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 225
	},
	{
	  "season": 10,
	  "episode": 23,
	  "name": "Thirty Minutes Over Tokyo",
	  "rating": 8,
	  "description": "The Simpsons must perform on a Japanese game show after Homer loses their money on a vacation.",
	  "airDate": "1999-10-10T00:00:00.000Z",
	  "thumbnailUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZmFiZjdiMGEtODc4YS00MWRhLTg4ZWUtNDE5NmE3ZGE0MzcwXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_UX200_CR0,0,200,112_AL_.jpg",
	  "id": 226
	}
  ]