const mongoose = require('mongoose');
const {DateTime} = require('luxon');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: {type: String, required: true, maxLength: 100},
  family_name: {type: String, required: true, maxLength: 100},
  date_of_birth: {type: Date},
  date_of_death: {type: Date}
});

// Virtual for author's full name
AuthorSchema.virtual('name').get(function () {
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

// Virtual for formated date of birth
AuthorSchema.virtual('date_of_birth_formated').get(function() {
	return this.date_of_birth ? DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED) : '';
});

// Virtual for formated date of death
AuthorSchema.virtual('date_of_death_formated').get(function() {
	return this.date_of_death ? DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED) : '';
});

// Export Model
module.exports = mongoose.model('Author', AuthorSchema);
