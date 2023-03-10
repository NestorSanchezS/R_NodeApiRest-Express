const mongoose = require("mongoose");

const TracksSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    albun: {
      type: Stringr,
    },
    cover: {
      type: String,
      validate: {
        validator: (req) => {
          return true;
        },
        message: "ERROR_URL",
      },
    },
    artist: {
      name: {
        type: String,
      },
      nickname: {
        type: String,
      },
      nationality: {
        type: String,
      },
    },
    duration: {
      start: {
        type: Number,
      },
      end: {},
    },
    mediaId: {
      type: mooongose.Types.ObjectId,
    },
  },
  {
    timestamps: true, //TODO createdAt, updatedAt
    versionKey: false,
  }
);

module.exports = mongoose.model("tracks", TracksSchema);
