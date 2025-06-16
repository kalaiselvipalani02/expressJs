require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const PORT = 3000 || process.env.PORT;
//Instance of express
const app = express();

const URL = process.env.URL;

//Connect to mongodb
const connectToDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Mongodb connected successfully");
  } catch (error) {
    console.log("Error to connecting DB", error);
  }
};

//call db DBConnection
connectToDB();

//Step1: Design Schema /Define Schema
const userProfileSchema = new mongoose.Schema({
  username: String,
  age: Number,
  birthday: Date,
  isActive: Boolean,
  hobby: [String],
  ObjectId: mongoose.Schema.Types.ObjectId,
  address: {
    street: String,
    city: String,
    postCode: Number,
  },
  customData: mongoose.Schema.Types.Mixed,
});

//Step2: Compile the schema to form Model
const User = mongoose.model("User", userProfileSchema); //model starts with caps

//Step3: CRUD operations
//----Create Doc -----
//.save()
/*const newUser = new User({
  username: "Masynctech",
  age: 27,
  birthday: new Date("2001-09-21"),
  isActive: true,
  hobbies: ["Cricket", "Reading", "Coding"],
  address: {
    street: "45 Oak Street",
    city: "Kumasi",
    postCode: 5661,
  },
  customData: {
    country: "USA",
  },
});

newUser
  .save()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
*/
//.create()
/*User.create({
  username: "Masynctech2",
  age: 27,
  birthday: new Date("2001-09-21"),
  isActive: true,
  hobbies: ["Cricket", "Reading", "Coding"],
  address: {
    street: "45 Oak Street",
    city: "Kumasi",
    postCode: 5661,
  },
  customData: {
    country: "USA",
  },
})
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });*/

//.insertMany()
/*User.insertMany([
  {
    username: "Masynctech4",
    age: 27,
    birthday: new Date("2001-09-21"),
    isActive: true,
    hobbies: ["Cricket", "Reading", "Coding"],
    address: {
      street: "45 Oak Street",
      city: "Kumasi",
      postCode: 5661,
    },
    customData: {
      country: "USA",
    },
  },
  {
    username: "Masynctech5",
    age: 27,
    birthday: new Date("2001-09-21"),
    isActive: true,
    hobbies: ["Cricket", "Reading", "Coding"],
    address: {
      street: "45 Oak Street",
      city: "Kumasi",
      postCode: 5661,
    },
    customData: {
      country: "USA",
    },
  },
])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });*/

//! Read Operation
//! .find()
/*User.find()
  .then((user) => {
    console.log(user);
  })
  .catch((e) => {
    console.log(e);
  }); */
//! .findOne() - show first find element
/*User.findOne({
  age: 27,
})
  .then((user) => {
    console.log(user);
  })
  .catch((e) => {
    console.log(e);
  }); */

//!.findById()
/*User.findById("685015972683b101806429ca")
  .then((user) => {
    console.log(user);
  })
  .catch((e) => {
    console.log(e);
  });*/

//!--- where() ---
/*const findUsers = async () => {
  try {
    const users = await User.find().where("age").gte(20);
    console.log(users);
  } catch (err) {
    console.log(err);
  }
};
findUsers(); */
//!---- sort() ---
// const findUsers = async () => {
//   try {
//     const users = await User.find().where("age").gte(20).sort({ username: 1 });console.log(users);

//   } catch (err) {
//     console.log(err);
//   }
// };
// findUsers();
//!---limit()---
// const findUsers = async () => {
//   try {
//     const users = await User.find()
//       .where("age")
//       .gte(20)
//       .sort({ username: 1 })
//       .limit(2);
//     console.log(users);
//   } catch (err) {
//     console.log(err);
//   }
// };
// findUsers();

//! ---- Update Operation
//updateOne()
// const updateDoc = async () => {
//   try {
//     const updatedDoc = await User.updateOne(
//       { username: "Masynctech" },
//       { isActive: false, age: 30 },
//       {
//         new: true,
//       }
//     );
//     console.log(updatedDoc);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateDoc();
//findByIdAndUpdate()
// const updateDoc = async () => {
//   try {
//     const updatedDoc = await User.findByIdAndUpdate(
//       "6850173a6e774bbb072250e7",
//       { isActive: false, age: 30 },
//       {
//         new: true,
//       }
//     );
//     console.log(updatedDoc);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateDoc();
//findOneAndUpdate()
const updateDoc = async () => {
  try {
    const updatedDoc = await User.findOneAndUpdate(
      { username: "Masynctech4" },
      { isActive: false, age: 50, username: "Masynctech46" },
      {
        new: true,
      }
    );
    console.log(updatedDoc);
  } catch (error) {
    console.log(error);
  }
};
updateDoc();
//!--- Delete Operation
//Start the server
app.listen(PORT, console.log(`Server is running on ${PORT}`));
