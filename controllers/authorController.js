const Author = require('../models/author');
const asyncHandler = require('express-async-handler');

// Display list of all authors
exports.author_list = asyncHandler(async (_req, res, next) => {
	res.send('NOT IMPLEMENTED!!: Author List');
});

// Display detail page for a single author
exports.author_detail = asyncHandler(async (req, res, next) => {
	res.send(`NOT IMPLEMENTED!!: Author Detail: ${req.params.id}`);
});

// Display Author create from GET
exports.author_create_get = asyncHandler(async (_req, res, next) => {
	res.send('NOT IMPLEMENTED!!: Author create GET');
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
