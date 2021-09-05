let input_value = '';
const user_input = document.getElementById('user_input');
const output = document.getElementById('output');

function calc(value) {
  input_value += value;
  user_input.value = input_value;
}

function del() {
  input_value = input_value.substring(0, input_value.length - 1);
  user_input = input_value;
}

function equal() {
  try {
    ans = eval(input_value);
    output.value = ans;
  } catch (err) {
    alert('Invalid Input');
  }
}

function reset() {
  input_value = '';
  user_input.value = '';
  output.value = '';
}
