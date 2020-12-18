let legume = document.getElementById('legume');
let fruit = document.getElementById('fruit');
let confiture = document.getElementById('confiture');
let boisson = document.getElementById('boisson');
//button 1 to show only leg
let legOnly = document.getElementById('button1');

legOnly.addEventListener("click", function() {
	legume.style.display = "block";
	fruit.style.display = "none";
	confiture.style.display = "none";
	boisson.style.display = "none";
});

//button 2 to show only fruits
let fruitOnly = document.getElementById('button2');

fruitOnly.addEventListener("click", function() {
	legume.style.display = "none";
	fruit.style.display = "block";
	confiture.style.display = "none";
	boisson.style.display = "none";
});
//button 3 to show only confitures
let confitureOnly = document.getElementById('button3');

confitureOnly.addEventListener("click", function() {
	legume.style.display = "none";
	fruit.style.display = "none";
	confiture.style.display = "block";
	boisson.style.display = "none";
});
//button 4 to show only drinks
let boissonOnly = document.getElementById('button4');

boissonOnly.addEventListener("click", function() {
	legume.style.display = "none";
	fruit.style.display = "none";
	confiture.style.display = "none";
	boisson.style.display = "block";
});
//button 5 to show all products
let showAll = document.getElementById('button5');

showAll.addEventListener("click", function() {
	legume.style.display = "block";
	fruit.style.display = "block";
	confiture.style.display = "block";
	boisson.style.display = "block";
});
