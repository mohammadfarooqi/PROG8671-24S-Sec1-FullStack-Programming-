const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');

mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true });

/*
  (error, blogpost) => {
    console.log(error, blogpost);
  }
*/

// CREATE

// 1. Creating a BlogPost
// BlogPost.create({
//   title: 'The Mythbuster Guide to Saving Money on Energy Bills',
//   body: `If you have been here a long time, you might remember when I
//         went on ITV Tonight to dispense a masterclass in saving money on energy
//         bills. Energy-saving is one of my favourite money topics, because once
//         you get past the boring bullet-point lists, a whole new world of thrifty
//         nerdery opens up. You know those bullet-point lists. You start spotting
//         them everything at this time of year. They go like this:`,
// })
//   .then((blogpost) => {
//     console.log(blogpost);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// READ

// 2. Find all BlogPost
// BlogPost.find({})
//   .then((blogpost) => {
//     console.log(blogpost);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// 3. Find a specific BlogPost where Title is 'The Mythbuster Guide to Saving Money on Energy Bills'
// BlogPost.find({
//   title: 'The Mythbuster Guide to Saving Money on Energy Bills',
// })
//   .then((blogpost) => {
//     console.log(blogpost);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// 4. Find all documents in BlogPosts collection with 'The' in the title
// BlogPost.find({
//   title: /The/,
// })
//   .then((blogpost) => {
//     console.log(blogpost);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// 5. get single database documents, i.e. to retrieve single documents with unique id _id
// BlogPost.findById('666c59cc831f6ddc13d8fec8')
//   .then((blogpost) => {
//     console.log(blogpost);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// https://docs.mongodb.com/manual/tutorial/query-documents/

// UPDATE

// 6. Update the record '666c59cc831f6ddc13d8fec8' with title 'Updated title'
// NOTE: the document it sends back is the copy of document before the update
// BlogPost.findByIdAndUpdate('666c59cc831f6ddc13d8fec8', {
//   title: 'Updated title 1',
// })
//   .then((blogpost) => {
//     console.log(blogpost);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// DELETE

// 7. Delete the record '666c59cc831f6ddc13d8fec8' with title 'Updated title'
// BlogPost.findByIdAndDelete('666c59cc831f6ddc13d8fec8')
//   .then((blogpost) => {
//     console.log(blogpost);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
