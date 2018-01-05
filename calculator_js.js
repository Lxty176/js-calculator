var field = document.getElementById('result_field');

var numbers = document.getElementsByClassName("display");

for (i=0; i<numbers.length; i++){
    numbers[i].setAttribute('onclick', 'post(this)');
};


function erase(){
    field.value = '';
};

/*gets number that is represented by html 
and posts it to result_field*/
function post(me){
    field.value += me.innerHTML;
};

function submit(){
    var input = field.value;
    result_field.value = eval(input);
};