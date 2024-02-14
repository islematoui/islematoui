/*
function max2(a,b){
    if(a>b)
    return a
    else 
    return b
}
console.log(max2(5,8))
console.log(max2(15,8))
console.log(max2(18,18))
*/

/*
function direbonjour(){
    console.log("bonjour")
}
direbonjour()
*/

/*function somme2(s,m){
    var s = parseFloat(prompt("Entrez le premier nombre :"))
    var m = parseFloat(prompt("Entrez le deuxieme nombre :"))
  
    return s+m

}
console.log(somme2(5,8))
*/
/*function into() {
    document.getElementById("zone").innerHTML = "enter"
}

function out() {
    document.getElementById("zone").innerHTML = "Out"
}

function bgColor() {
    var couleur = prompt("Entrez une couleur de fond (green) :")
    document.getElementById("zone").style.backgroundColor = couleur
}

document.getElementById("zone").onmousemove = into
document.getElementById("zone").onmouseout = out
document.getElementById("zone").onkeydown = bgColor
*/

/*function isString(data) {
    return typeof data === 'string'
}

console.log("Exercice 1 : ")
console.log(isString('hello65656'))
console.log(isString([1, 6, 9]))
console.log(isString(5))
console.log(isString("Is54545et"))
*/

/*function isBlank(input) {
    return input.trim() === ''
}

console.log(isBlank(''))
console.log(isBlank('hjhjh'))
*/
/*function stringToArray(str) {
   return str.split(' ')  
}
console.log(stringToArray ("ISET Tataouine 2023 Groupe1er"))
*/

/*function extractString(str1, length) 
{
  return str1.substring(0, length)     
}
console.log(extractString("Robin Singh",4))
console.log(extractString("ISET Tataouine",7))
*/
function protectEmail (user_email) {
    var parts = user_email.split('@')
    var username = charAt[0]
    var domain = charAt[1]
    var len = username.length
    var madUsername = username.substring(0, 6) + "..."
    return madUsername + "@" + domain
    
}
console.log(protectEmail("isettataouine@gmail.com"))

