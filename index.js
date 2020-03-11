const fs = require("fs");

fs.readdir(process.cwd()), (error, files) => {
  if (error) {
    throw new Error(error);
  }
  console.log(files);
});
