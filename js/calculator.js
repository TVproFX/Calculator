function insert(num) {
	// Добавить к полю ввода только что набранную цифру
	document.form.textview.value = document.form.textview.value + num;
}

function clean() {
	// Очистить поле ввода
	document.form.textview.value = "";
}

function back() {
	// Сохранить значение поля ввода в переменную exp
	var exp = document.form.textview.value;
	// Сохранить в поле ввода значение переменной exp без последней цифры (первая справа)
	document.form.textview.value = exp.substring(0, exp.length - 1);
}

function equal() {
	// Сохранить значение поля ввода в переменную exp
	var exp = document.form.textview.value;
	if (exp) { // Если поле ввода содержит хоть одну цифру или знак
	// Посчитать введенную формулу
		document.form.textview.value = eval(exp);
	}
}