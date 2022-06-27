const {PassThrough} = require('stream')
const { createReadStream, createWriteStream } = require('fs')
async function streamData(req, res, next) {
    try{
        const readStream = createReadStream('./dummy.mp4')
        const writeStream = createWriteStream('./copy_dummy.mp4')

        readStream.pipe(writeStream).on('error', console.log(error) )
    } catch(err){
        return res.send(err)
    }
}

async function writeTxtFile(){
    const writeStream = createWriteStream('./dummy_input.txt')
    process.stdin.pipe(writeStream).on('error', console.log(error) )

}

async function duplexStream(){
    try{
        const readStream = createReadStream('../dummy.mp4')
        const writeStream = createWriteStream('../copy_dummys.mp4')
        const report  = new PassThrough()
        let total = 0
        report.on('data',(chunk) => {
            total += chunk.length
            console.log('byte: ', total)
        })
        readStream.pipe(report).pipe(writeStream).on('error', console.log(error) )
    } catch(err){
        console.log(err);
    }
}
duplexStream()
// module.exports = {streamData, writeTxtFile}


