var n1 = true || false || false//логические операторы ИЛИ

var n2 = true && false && false//логические операторы И



console.log(n1)
console.log(n2)

//=========================выполнение хотя бы одного из условий
var v1 = 10
var v2 = 20
var v3 = 100

var r1 = 30


if (r1 > v2 || r1 > v3) {
    console.log('Result == TRUE')
} else {
    console.log('Result == FALSE')
}

//=========================выполнение хотя бы одного из условий
if (r1 > v2 && r1 > v3 || r1 == v1) {
    console.log('Result == TRUE')
} else {
    console.log('Result == FALSE')
}

//==================циклы while //бесконечный цикл
// var count = 0

// while (true) {
//     console.log(count)
//     count++
//     count = count + 1
// }

//==================циклы while //выполнять пока что 
var v1 = 10
var v2 = 20
var v3 = 100

var r1 = 30

var count = 0

while (v2 > v1) {
    console.log(count, v1, v2)
    count++
    v1++

    if (v1 == 15) {
        break
    }
}

//==================циклы while // повторяться
var v1 = 10
var v2 = 20
var v3 = 100

var r1 = 30

var count = 0
while (v2 > v1) {

        v1++


    if (v1 == 15) {
         console.log('==============')
        continue
    }

    console.log(count, v1, v2)
    count++
        
}

//===================циклы for счетчик
var code_list = [100, 200, 300, 400, 500, 600, 700, 800]
console.log(code_list.length)

for (var i = 0; i < 10; i++){

    console.log('iter --', i)
}



//===================циклы for итератор
var code_list = [100, 200, 300, 400, 500, 600, 700, 800]
console.log(code_list.length)

console.log(code_list[0])

for (var i = 0; i < 10; i++){

    console.log('iter --', i, 'arr_item = ', code_list[i] + 20)
}


//===================циклы for вывод элемента
for(var i of code_list){

    console.log(i)
}

//===============
var code_list = [100, 200, 300, 400, [401, 402, 403, 404], 500, 600, 700, 800]
console.log(typeof(code_list))

for(var i of code_list){

    if (typeof(i) == 'object'){
        for (var ii of i){
            console.log('Inner_item == ', ii)
        }
        continue
    }

    console.log(i)
}

//=============итерация json
var users = {
    'p1': 'Alex',
    'p2': 'Elena',
    'p3': 'Anna',
    'p4': 'Misha',
    'p5': 'Inna',
}
var new_users = Object.keys(users)
for(var i of new_users){

    console.log(users[i])
}
