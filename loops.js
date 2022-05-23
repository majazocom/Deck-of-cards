let user = {
    name: "Pelle Jönsson",
    age: 32,
    occupation: "Carpenter"
}

for (prop in user) {
    console.log(prop);
    console.log(user[prop])
}

let users = ["Pelle", "Doris", "Gösta"];

for (element of users) {
    console.log(element);
}

//for-in i arrayer får fram varje index(in)
for (element in users) {
    console.log(element);
}

//List-metoder
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array