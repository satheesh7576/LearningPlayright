let status=401;

if(status == 200){
    console.log("PASS - OK: Request successfully");
}   else if(status == 201){
    console.log("PASS - Created: Resource created successfully");
} 
else if(status == 301){
    console.log("WARNING - Moved Permanently: URL has changed");
} else if(status == 400){
    console.log("FAIL - Bad Request: Check request payload");
} else if(status == 401){
    console.log("FAIL - Unauthorized: Check auth token");
} else if(status == 403){
    console.log("FAIL - FAIL - Forbidden: Insufficient permissions");
}else if(status == 404){
    console.log("FAIL - Not Found: Check endpoint URLn");
}else if(status == 500){
    console.log("FAIL - Internal Server Error: Backend issue"   );
}   else{
    console.log("UNKNOWN - Unhandled status code");
} 
