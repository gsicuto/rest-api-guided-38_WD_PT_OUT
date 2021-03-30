const { Schema, model } = require('mongoose');

const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
  },
  {
    timestamps: true,
  },
);

module.exports = model('Student', studentSchema);
