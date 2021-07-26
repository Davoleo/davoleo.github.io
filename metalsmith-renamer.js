const minimatch = require('minimatch');

module.exports = function metalsmithRenamer(match, newExt) {
    return function(files, metalsmith, done) {
        Object.keys(files).forEach(filename => {
            if (minimatch(filename, match)) {
                const splitName = filename.split('.');
                //Keep a referece to actual file
                const fileRef = files[filename];
                //Delete the old property at the filename key
                delete files[filename];

                //Assign the new extension
                splitName[splitName.length - 1] = newExt;
                //Build the new filename by joining extension and base name
                const newFName = splitName.join('.');
                //Assign file ref to a property with the new filename
                files[newFName] = fileRef;
            }
        })

        done();
    }
}