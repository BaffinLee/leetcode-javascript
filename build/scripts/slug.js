function getSlug (name) {
	return name.toLowerCase()
						.replace(/\s+/g, '-')
						.replace(/[^a-z0-9\-\._~]/g, '')
						.replace(/\-+/g, '-');
};

module.exports = getSlug;
