var processSentence = function(name,age,address,hobby){
    return (`Nama saya ${name}, umur saya ${age} tahun, alamat saya ${address}, dan saya punya hobbi yaitu ${hobby}`)
}
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence)