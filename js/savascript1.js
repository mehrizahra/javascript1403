let s1=new String("hello world!")
console.log(typeof s1)
let string1="welcome class to javascript class"
console.log(typeof string1)
console.log(s1.toLocaleUpperCase())
console.log(s1.length)
console.log(s1)
console.log(string1.search("to"))
console.log(string1[0])
console.log(string1[3])
let len=string1.length
console.log(string1[len-1])
string1[0]="QQQ"
console.log(string1)
result=string1.concat("|",s1," end.")
console.log(result)
console.log(string1.indexOf("c",10))
console.log(string1.indexOf("class"))
console.log(string1.lastIndexOf("class"))
console.log(string1.at(-1))
console.log(string1.at(-5))
console.log(string1.startsWith("w",1))
console.log(string1.startsWith("Welcome"))
console.log(string1.endsWith("s"))
let s2="    hello  "
console.log("**"+s2.trimStart()+"**")
console.log("**"+s2.trimEnd()+"**")
console.log("**"+s2.trim()+"**")
console.log("*".repeat(20))
string1="welcome class to javascript class"
console.log(string1.replace("javascript","js"))
console.log(string1.split(" "))
console.log(string1.split("c"))
console.log(string1.substring(5,12))
console.log(string1.substring(0,5))
console.log(string1.substr(0,10))
console.log(string1.substr(5,10))
console.log(string1.slice(0,6))








