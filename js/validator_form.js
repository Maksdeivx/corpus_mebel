document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('authForm-2').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name-2').value.trim();
    const phone = document.getElementById('phone-number-2').value.trim();
    const agree = document.getElementById('agree2').checked;

    const errors = [];
  console.log("Name:", name, "Length:", name.length);
  console.log("Phone:", phone);
    if (!name || name.length < 2) {
      errors.push("Введите ваше имя (не менее 2 символов).");
    }

    if (!/^\+?\d{10,15}$/.test(phone)) {
      errors.push("Введите корректный номер телефона.");
    }

    if (!agree) {
      errors.push("Вы должны согласиться на обработку персональных данных.");
    }

    const errorBox = document.getElementById('form-2-errors');
    if (errors.length > 0) {
      errorBox.innerHTML = errors.join("<br>");
    } else {
      errorBox.innerHTML = "";
      // document.getElementById('authForm').submit(); // для отправки
      alert("Форма прошла валидацию!");
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('authForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone-number').value.trim();
    const agree = document.getElementById('agree1').checked;

    const errors = [];
  console.log("Name:", name, "Length:", name.length);
  console.log("Phone:", phone);
    if (!name || name.length < 2) {
      errors.push("Введите ваше имя (не менее 2 символов).");
    }

    if (!/^\+?\d{10,15}$/.test(phone)) {
      errors.push("Введите корректный номер телефона.");
    }

    if (!agree) {
      errors.push("Вы должны согласиться на обработку персональных данных.");
    }

    const errorBox = document.getElementById('form-1-errors');
    if (errors.length > 0) {
      errorBox.innerHTML = errors.join("<br>");
    } else {
      errorBox.innerHTML = "";
      // document.getElementById('authForm').submit(); // для отправки
      alert("Форма прошла валидацию!");
    }
  });
});
document.getElementById('ModalForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Отключаем стандартную отправку

  const name = document.getElementById('modal-name').value.trim();
  const phone = document.getElementById('phone-number-modal').value.trim();
  const agree = document.getElementById('agree-modal').checked;

  const errors = [];

  if (name.length < 2) {
    errors.push("Введите ваше имя (не менее 2 символов).");
  }

  // Простой паттерн: +7XXXXXXXXXX или 89XXXXXXXXX и т.п.
  if (!/^\+?\d{10,15}$/.test(phone)) {
    errors.push("Введите корректный номер телефона.");
  }

  if (!agree) {
    errors.push("Вы должны согласиться на обработку персональных данных.");
  }

  const errorBox = document.getElementById('form3-errors');
  if (errors.length > 0) {
    errorBox.innerHTML = errors.join("<br>");
  } else {
    errorBox.innerHTML = "";
    // Тут можно отправить форму через AJAX или просто:
    this.submit(); // Раскомментируй, если хочешь обычную отправку
  }
});