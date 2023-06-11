// let hlwbuttton = document.querySelector('button');
// hlwbuttton.addEventListener('click', showMsg);

// function showMsg()
// {
//     alert("Hlw World!");
// }

let hlwbuttton = document.querySelector('button');
hlwbuttton.addEventListener('click', inputMsg);

function inputMsg()
{
    let name = prompt('Enter name of student');
    hlwbuttton.textContent = 'Roll No. 1:' + name;
}