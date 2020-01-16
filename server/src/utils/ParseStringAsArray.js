module.exports = function parseStringAsArray(arrayAsString) {
        return arrayAsString.split(',').map(function(tech) {
            return tech.trim()
        })
    }