let username = "ctemelkuran"
const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN

console.log("Merhaba", username , "hosgeldin mail adrsin: ", email)

let info = `Merhaba ${username} hosgeldin 
mail uzunluğu ${email.length}
Yaşın: ${(new Date().getFullYear() - 1997)}`

console.log(info)
