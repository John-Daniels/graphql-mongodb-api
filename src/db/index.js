const mongoose = require("mongoose")

const main = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("connected succefully!")
  } catch (e) {
    console.log("Unfortunately, i could not connect to the database bro!")
  }
}

main()
