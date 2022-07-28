// document.querySelector(".btn").addEventListener('click', function() {
//     document.querySelector('.testclasa').textContent = "Acesta este un test";
// })

    document.querySelector('.verify') .addEventListener('click', function () {
        const valoare1 = document.querySelector('.nume').value;
        const valoare2 = document.querySelector('.an').value;
        const valoare3 = document.querySelector('.inaltime').value;
        const valoare4 = document.querySelector('.greutate').value;

    
let BMI = (valoare4 / (valoare3 **2)) 
        console.log(valoare1);
        console.log(valoare2);
        console.log(valoare3);
        console.log(valoare4);
        let rezultat = `${valoare1} are ${BMI}`
        

        document.querySelector('.testclasa').textContent = rezultat;
    })
