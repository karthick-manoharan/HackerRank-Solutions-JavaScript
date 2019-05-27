function matchingStrings(strings, queries) {
    let arrayStr = strings.join(" ");
    let result = [];
    queries.forEach((query) => {
        result.push((arrayStr.match(
            new RegExp("\\b" + query + "\\b", "g")) || [])
            .length);
    });
    return result;
}