const mongoose = require('mongoose');
const { DateTime } = require('luxon');

const Schema = mongoose.Schema;

const BookInstanseSchema = new Schema({
  // reference to the associated book
  book: { type: Schema.Types.ObjectId, ref: "Book", required: true },   imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Maintenance", "Loaned", "Reserved"],
    default: "Maintenance",
  },
  due_back: { type: Date, default: Date.now },
});

// Virtual for bookinstance url
BookInstanseSchema.virtual('url').get(function() {
  return `/catalog/bookInstanse/${this._id}`;
});

// Virtual for bookinstance due dates
BookInstanseSchema.virtual('due_back_formated').get(function() {
	return DateTime.fromJSDate(this.due_back).toLocaleString(DateTime.DATE_MED);
});

// Export Model
module.exports = mongoose.model('bookInstanse', BookInstanseSchema);
