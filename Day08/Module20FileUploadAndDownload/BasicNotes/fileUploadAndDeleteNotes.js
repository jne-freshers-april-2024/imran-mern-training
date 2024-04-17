/*
  Upload file

  // bodyparse can not parse incoming data in bodyparse in file data in byte format
  // we need 3rd party package multer to handle file data or text data
  // enctyp field in form for multipart/form-data

  // novalidate --- to avoid form validation
  // npm i --save multer

*/

// we can sotre the image path in database not original file
// serving file mean heavy lefting done by express statically
// app.use(express.static(path.join(_dirname,'images')));
// path module used for it can work with all operating system 

// before send we can setHeader('Content-Type','application/pdf')
/*
  Download file

*/

// PDFKit   create the pdf file