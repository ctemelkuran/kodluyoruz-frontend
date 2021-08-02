let username = "ctemelkuran"
const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN

console.log("Merhaba", username , "hosgeldin mail adrsin: ", email)

let info = `Merhaba ${username} hosgeldin 
mail uzunluğu ${email.length}
Yaşın: ${(new Date().getFullYear() - 1997)}
kısa isim: ${username[0]}.`

console.log(info)

// Upper, lower case
console.log(username.toUpperCase())
console.log(username.toLowerCase())

// Search
console.log(email.search("@"))
console.log(email[11])
console.log(email.search("olmayan")) // -1 getirir

// Belli bir kısmı almak
let domainPart = email.slice(email.search("@")+1)
console.log(domainPart)

// index bulma ve sadece kodluyoruz kısmını al
console.log(domainPart.slice(0, domainPart.indexOf('.')))

//