//Module for working with files.
const fs = require('fs')


//Read Stream used to read a large file | encoding = utf-8.
const readStream = fs.createReadStream('files/read.txt', { encoding: 'utf-8' });
//Write Stream used to write a large file | encoding = utf-8.
const writeStream = fs.createWriteStream('files/write.txt');



//Read Stream large data with chunks(buffers)
readStream.on('data', (chunk) => {
    console.log('------- New Chunk --------');
    console.log(chunk);

    //Write Stream writes the chunks from read file.txt into write file.txt.
    writeStream.write('\n------- New Chunk --------\n');
    writeStream.write(chunk);
});


//Work same as the above code. Will write the read.txt into write.txt
readStream.pipe(writeStream);
