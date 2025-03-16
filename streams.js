const fs = require('fs')

// readstream
const readStream = fs.createReadStream('./file2.pdf', {encoding : 'utf8'})

readStream.on('data',(chunk) => {
    console.log('----- NEW CHUNK -------')

    console.log(chunk)
})

//writestream
const writeStream = fs.createWriteStream('./newFile.txt')

readStream.pipe(writeStream)