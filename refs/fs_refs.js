const fs = require("fs");
const path = require("path");

// *  mkdir
// fs.mkdir(path.join(__dirname, "dir"), (err) => {
//   if (err) throw new Error(err);

//   console.log("Папка была создана");
// });

// * writeFile
// fs.writeFile(
//   path.join(__dirname, "dir", "text.txt"),
//   "hello World \nthis is content",
//   (err) => {
//     if (err) throw err;

//     console.log("Файл был создан");
// * appendFile
//     fs.appendFile(
//       path.join(__dirname, "dir", "text.txt"),
//       "\nNew line",
//       (err) => {
//         if (err) throw err;

//         console.log("Добавлена строчка!");
//       }
//     );
//   }
// );
// * second argument 'utf-8
// fs.readFile(path.join(__dirname, "dir", "text.txt"), (err, data) => {
//   if (err) throw err;

//   // buffer - read buffer

//   console.log(Buffer.from(data).toString());
// });

// fs.readFile(path.join(__dirname, "dir", "text.txt"), "utf-8", (err, data) => {
//   if (err) throw err;

//   // buffer - read buffer

//   console.log(Buffer.from(data).toString());
// });

//
// fs.writeFile(
//   path.join(__dirname, "dir", "text.txt"),
//   "hello World \nthis is content",
//   (err) => {
//     if (err) throw err;
//     console.log("Файл был создан");

//     fs.appendFile(
//       path.join(__dirname, "dir", "text.txt"),
//       "\nNew line",
//       (err) => {
//         if (err) throw err;
//         console.log("Добавлена строчка!");

//         fs.readFile(
//           path.join(__dirname, "dir", "text.txt"),
//           "utf-8",
//           (err, data) => {
//             if (err) throw err;
//             console.log(data);
//           }
//         );
//       }
//     );
//   }
// );

// * rename

// fs.rename(
//   path.join(__dirname, "dir", "text.txt"),
//   path.join(__dirname, "dir", "newName.txt"),
//   (err) => {
//     if (err) throw err;

//     console.log("succesful file rename");
//   }
// );
