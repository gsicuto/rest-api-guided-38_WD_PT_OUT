const { Schema, model } = require('mongoose');

const followUpSchema = new Schema(
  {
    content: String,
    created_by: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  },
);

module.exports = model('FollowUp', followUpSchema);
