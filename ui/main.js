var button = document.getElementById('counter');
var counter = o;
button.onclick = function(){
    counter = counter + 1;
    var span = documentgetElementById('count');
    span.innerHTML = counter.toString();
};