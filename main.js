var grid = $('#grid');

var numbers = [];

for (var i = 1; i <= 9; i++) {
  grid.append('<div class="card">' + i + '</div>');
  numbers.push(i);
}

$(".btn_shuffle").click(function() {
console.log(numbers)
  var theLength = numbers.length - 1;
  var toSwap;
  var temp;

  for (var i = theLength; i > 0; i--) {
    toSwap = Math.floor(Math.random() * (i + 1));
    temp = numbers[i];
    numbers[i] = numbers[toSwap];
    numbers[toSwap] = temp;
  }

  i = 0;

  $('.card').each(function() {
    this.innerHTML = numbers[i];
    i++;
  });
});

$(".btn_sort").click(function() {
  numbers.sort();

  i = 0;

  $('.card').each(function() {
    this.innerHTML = numbers[i];
    i++;
  });
  });
