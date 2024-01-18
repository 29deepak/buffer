const fs = require('fs')
let a = "./1.txt"

// console.log(fs.readFileSync('./1.txt', "utf-8"))
//attach afile that to readfile sync
let b = fs.readFileSync(a)
// it give fs.readfilesync that is in buffer form
//something like that <Buffer 64 63 66 63 67 68 76 6a 63 20 6b 76 6a 76 6e 6b 64 6d 73 66 64 76 20 6e 6d 64 62 6e 73 6d 63 76 20 76 6a 6e 63 6d 64 73 63 76 62 6e 20>
console.log("buffer", b)

let c = b.toString('base64')

//convert it in to base64 it gives something like that -----ZGNmY2dodmpjIGt2anZua2Rtc2ZkdiBubWRibnNtY3YgdmpuY21kc2N2Ym4g

console.log("base64", c)

// if we want to restore that file again change base 64 to buffer
let e = Buffer.from(c, 'base64')
//it gives like that <Buffer 64 63 66 63 67 68 76 6a 63 20 6b 76 6a 76 6e 6b 64 6d 73 66 64 76 20 6e 6d 64 62 6e 73 6d 63 76 20 76 6a 6e 63 6d 64 73 63 76 62 6e 20>
console.log(e)
//create a new file that file all text copied to that file which you created in write file sync
let d = fs.writeFileSync("./fg1bv34.txt", e)



console.log(d)
