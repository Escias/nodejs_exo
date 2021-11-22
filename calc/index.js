var args = process.argv.slice(2)
console.log(args)

var calc = args.join("")
calc = calc.replaceAll("x", "*")
console.log(calc)
console.log(
    new Function("return " + calc)(),
    new Function("return 1 + 2"), // on cree sans exec
    new Function("return 1 + 2")() // on cree et on exec
)

process.exit(0)









function calcul(calc) {
    return new Function('return ' + calc)();
}
args.forEach((item) => {
    if (item === "x"){
        calc = calc + "*"
    }else if (item === "+" || item === "-" || item ==="/"){
        calc = calc + item
    }
    else {
        calc = calc + item
    }
})
console.log(calcul(calc))
