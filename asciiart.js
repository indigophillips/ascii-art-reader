module.exports = {
  listOfAscii,
  welcome,
  pressEnter
}
var fs = require('fs')

function welcome () {
  console.log('Welcome!')
  console.log('-------')
  console.log('       ')
  console.log('Choose an artwork to display, or:')
  console.log('`c`  to comment')
  console.log('`e`  to erase comments')
  console.log('`v`  to view comments')
  console.log('`q`  to quit')
  console.log('       ')
}

function listOfAscii () {
  var tmp
  fs.readdir('data', function (err, files) {
    if (err) {
      console.error("Couldn't read file:", err.message)
    } else {
      // console.log(files)
      // console.log(files.length)
      var tmpFile = files
      for (let i = 0; i < tmpFile.length; i++) {
        const tmpSeq = i + 1
        var tmpStr = tmpSeq + ': ' + tmpFile[i]
        console.log(tmpStr)
      }
      tmp = files
    }
  })
  return tmp
}

function drawFunc (choice) {
  fs.readFile('data/kea.txt', (err, data) => {
    if (err) console.error("Couldn't read file:", err.message)
    console.log(data)
  })
}

const readline = require('readline')

function pressEnter () {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('choice > ', function (input) {
    rl.close()

    // Call any functions you like here. For example:
    console.log(input)
    drawFunc(input)
  })
}



welcome()
listOfAscii()
pressEnter()
