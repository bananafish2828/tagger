const db = require('../server/db');
const Note = require('../server/models/Note.model');

const data = [
  {
    "title": "Eat In-N-Out",
    "text": "Spiderman, Spiderman, does whatever a spider can. Spins a web, any size, catches thieves just like flies, look out! Here comes the Spiderman. Is he strong?"
  },
  {
    "title": "Go Buy Pizza",
    "text": "Listen bud, he's got radioactive blood. Can he swing from a thread? Take a look overhead. Hey there, there goes the Spiderman. In the chill of night at the scene of a crime, like a streak of light he arrives just in time! Spiderman, Spiderman, friendly neighborhood Spiderman. Wealth and fame, He's ignored. Action is his reward. To him, life is a great big bang up. Whenever there's a hang up, you'll find the Spiderman!"
  },
  {
    "title": "Complete Sprint",
    "text": "One thousand years ago, superstition and the sword ruled. It was a time of darkness. It was a world of fear. It was the age of gargoyles. Stone by day, warriors by night, we were betrayed by the humans we had sworn to protect, frozen in stone by a magic spell for a thousand years. Now, here in Manhattan, the spell is broken, and we live again! We are defenders of the night! We are Gargoyles!"
  },
  {
    "title": "Go to Meeting",
    "text": "We got a right to pick a little fight, Bonanza! If anyone fights anyone of us, he's gotta fight with me! We're not a one to saddle up and run, Bonanza! Anyone of us who starts a little fuss knows he can count on me! One for four, four for one, this we guarantee. We got a right to pick a little fight, Bonanza! If anyone fights anyone of us he's gotta fight with me!"
  }
];

db.authenticate()
  .then(() => {
    return Note.sync({force: true});
  })
  .then(() => {
    return Promise.all(
      data.map(dataObj => {
        return Note.create(dataObj)
      })
    );
  })
  .then(() => console.log('seeding complete'))
  .catch(err => {
    console.log('err = ', err);
    console.log('error seeding database');
  });
