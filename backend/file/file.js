const fs = require('fs');

function readFilePromise(path) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  });
}

function readDirPromise(path) {
  return new Promise(function (resolve, reject) {
    fs.readdir(path, function (err, files) {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    })
  });
}

function statPromise(path) {
  return new Promise(function (resolve, reject) {
    fs.stat(path, function (err, stats) {
      if (err) {
        reject(err);
      } else {
        resolve(stats);
      }
    })
  })
}

async function iterateDir(directory) {
  // add backslash if the directoy does not end with
  if (!directory.endsWith('/')) {
    directoy = directoy + '/';
  }
  console.log('after adding backslash, the directory now is', directory);
  try {
    // first judge whether the parameter is a directoy
    let dirState = await statPromise(directory);
    if (!dirState.isDirectory()) {
      console.log(`The path ${directory} is not a directory, exit`);
      return;
    }
    // if it is directory, read the directory
    let dirArray = await readDirPromise(directory);
    let end = false;
    // make a loop to read all the files until there is no more directory
    while (!end) {
      // judge if every element in the array is a directory
      let promises = dirArray.map((dir) => statPromise(directory + dir));
      // get the stats array
      let stats = await Promise.all(promises);
      for (let i = 0; i < stats.length; i++) {
        if (stats[i].isFile()) {
          console.log(`${directory + dirArray[i]} is a File`);
        } else {
          console.log(`${directory + dirArray[i]} is a directory`);
        }
      }
      end = true;
    }
  } catch (error) {
    console.log(error);
  }
}

iterateDir('/Users/Jeremy/GitHub/jeremy-linchao.github.io/source/_posts/');