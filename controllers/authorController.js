const Author = require('../models/author');
const Book = require('../models/book');

const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');

// Display list of all authors
exports.author_list = asyncHandler(async (_req, res, next) => {
	const allAuthors = await Author.find().sort({ family_name: 1}).exec();

	res.render('author_list', { title: 'Author List', author_list: allAuthors });
});

// Display detail page for a single author
exports.author_detail = asyncHandler(async (req, res, next) => {
	// Get details of author and all their books (in parallel)
	const [author, allBooksByAuthor] = await Promise.all([
		Author.findById(req.params.id).exec(),
		Book.find({ author: req.params.id }, "title summary").exec(),
	]);

	if (author === null) {
		// No results.
		const err = new Error("Author not found");
		err.status = 404;
		return next(err);
	}

	res.render("author_detail", {
		title: "Author Detail",
		author: author,
		author_books: allBooksByAuthor,
	});
});

// Display Author create from GET
exports.author_create_get = asyncHandler(async (_req, res, next) => {
	res.render('author_form', { title: 'Create Author' });
});

// Handle Author create from POST
exports.author_create_post = asyncHandler(async (_req, res, next) => {
	res.send('NOT IMPLEMENTED!!: Author create POST');
});

// Display Author delete from GET
exports.author_delete_get = asyncHandler(async (_req, res, next) => {
	res.send('NOT IMPLEMENTED!!: Author delete GET');
});

// Handle Author delete from POST
exports.author_delete_post = asyncHandler(async (_req, res, next) => {
	res.send('NOT IMPLEMENTED!!: Author delete POST');
});

// Display Author update from GET
exports.author_update_get = asyncHandler(async (_req, res, next) => {
	res.send('NOT IMPLEMENTED!!: Author update GET');
});

// Handle Author update from POST
exports.author_update_post = asyncHandler(async (_req, res, next) => {
	res.send('NOT IMPLEMENTED!!: Author update POST');
});
