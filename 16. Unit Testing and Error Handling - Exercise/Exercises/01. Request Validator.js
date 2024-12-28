function URIvalidator(obj) {
  const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
  const URIpattern = /^[a-zA-Z0-9.]+$/g;
  const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
  const messagePattern = /^[a-zA-Z0-9\s<>&'"\\]*$/g;

  if ( !methods.includes(obj.method) ) {
    throw new Error("Invalid request header: Invalid Method");
  } 

  if ( obj.uri === '*' || !URIpattern.test(obj.uri) ) {
    throw new Error("Invalid request header: Invalid URI");
  }

  if ( !versions.includes(obj.version) ) {
    throw new Error("Invalid request header: Invalid Version");
  } 

  if ( !('message' in obj) && !messagePattern.test(obj.message)) {
    throw new Error("Invalid request header: Invalid Message");
  }

  return obj;
}

console.log( URIvalidator(
  {
    method: "GET",
    uri: "svn.public.catalog",
    version: "HTTP/1.1",
    message: ""
  })
);