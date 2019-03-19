document.querySelector('.img__btn').addEventListener('click', function() {
    document.querySelector('.cont').classList.toggle('s--signup');
});
// function validateForm() {
//     var x = document.forms["myForm"]["firstName"].value;
//     if (x == "") {
//         alert("Name must be filled out");
//         return false;
//     }
//     var y =document.forms["myForm"]["lastName"].value;
//     if (y == "") {
//         alert("Last name must be filled out");
//         return false;
//     }
//     var z =document.forms["myForm"]["email"].value;
//     if (z == "") {
//         alert("Email must be filled out");
//         return false;
//     }
//     var xx =document.forms["myForm"]["password"].value;
//     if (xx == "") {
//         alert("Password must be filled out");
//         return false;
//     }
//     var yy =document.forms["myForm"]["username"].value;
//     if (yy == "") {
//         alert("Username must be filled out");
//         return false;
//     }
// }