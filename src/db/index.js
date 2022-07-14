const mongoose = require("mongoose")

const main = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/graphql-test")
    console.log("connected succefully!")
  } catch (e) {
    console.log("Unfortunately, i could not connect to the database bro!")
  }
}

main()
