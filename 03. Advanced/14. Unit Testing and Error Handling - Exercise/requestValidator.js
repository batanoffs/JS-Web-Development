function requestValidator(obj) {
    //LOCAL VARIABLES
    const validMethods = [`GET`, `POST`, `DELETE`, `CONNECT`];
    const validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    const regexURI = /^[a-zA-Z.0-9]+$/gm;
    const regexMessage = /[<>&'"\\]/gm;

    // checks

    if (!obj.hasOwnProperty("method") || !validMethods.includes(obj.method)) {
        throw new Error(`Invalid request header: Invalid Method`);
    }

    if (
        !obj.hasOwnProperty("uri") ||
        !obj.uri.match(regexURI) ||
        obj.uri === ""
    ) {
        throw new Error(`Invalid request header: Invalid URI`);
    }
    if (
        !obj.hasOwnProperty("version") ||
        !validVersions.includes(obj.version)
    ) {
        throw new Error(`Invalid request header: Invalid Version`);
    }
    if (!obj.hasOwnProperty("message") || obj.message.match(regexMessage)) {
        throw new Error(`Invalid request header: Invalid Message`);
    }

    return obj;
}
console.log(
    requestValidator({
        method: "GET",
        uri: "svn.public.catalog",
        version: "HTTP/1.1",
        message: "",
    })
);

console.log(
    requestValidator({
        method: "OPTIONS",
        uri: "git.master",
        version: "HTTP/1.1",
        message: "-recursive",
    })
);
