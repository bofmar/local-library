const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: {type: String, required: true, maxLength: 100},
  family_name: {type: String, required: true, maxLength: 100},
  date_of_birth: {type: Date},
  date_of_death: {type: Date}
});

// Virtual for author's full name
AuthorSchema.virtual('name').get(() => {
  // to avoid errors in case an author has neither a first name or a family name we handle
  // the exception by returning an empty string
  let fullName = '';
  if(this.first_name && this.family_name) {
    fullName = `${this.first_name} ${this.family_name}`;
  }

  return fullName
});

// Virtual for author's URL
AuthorSchema.virtual('url').get(function() {
  return `/catalog/author/${this._id}`
});

// Export Model
module.exports = mongoose.model('Author', AuthorSchema);
