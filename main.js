//getAllShows().then(shows => console.log(shows))

// const show1 = {
//     "title": "Rick & Morty",
//     "author": "Justin Roiland",
//     "isOver": "false",
//     "imageUrl": "https://resources5.eaglepictures.com/image/1/630/945/5b509f00ceb60/rick-and-morty-stagione-1-cover.jpg",
//     "upvotes": 0,
//     "downvotes": 0,
//     "id": "1"
//   }

//   console.log(show1);

// //   updateShow(show1).then(show => console.log(show));



// DBService.upvote(show1).then(show => console.log(show));


// DBService.getAllShows().then(shows => console.log(shows));

const app = new AppController();

app.init();