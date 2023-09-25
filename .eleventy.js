module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css")
    eleventyConfig.addPassthroughCopy("src/js")
    eleventyConfig.addPassthroughCopy("src/images")
    return {
        dir: {
            input: "src",
            output: "docs",
        },
    }
}