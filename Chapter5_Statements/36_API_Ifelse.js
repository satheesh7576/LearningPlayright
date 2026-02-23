let statusCode = 404; // APIs are working fine

if (statusCode == 200) {
    console.log("Working fine!")
} else if (statusCode == "404") {
    console.log("Page not found!");
} else {
    console.log("Not mathcing status code!")
}