/*
Rickety Clickety: Kelly Wang and Michael Ruvinshteyn
SoftDev1 pd07
HW#16: Sequential Progression
2017-12-08  
*/

//current last element number
var currElem = 7;
var currElem_fib = 0;
var currElem_tri = 0;
var currElem_pasc = 0;

//adds element to list upon button-press
var addElement = function(){
    currElem += 1;
    var elem = document.createElement("li");
    elem.innerHTML = "item " + currElem;
    document.getElementById("thelist").appendChild(elem);
    elem.setAttribute('id','theitem');
    run(elem); //activates other functions on inserted element
    console.log(currElem + 1 + " items total");
};

//button used to add element to list
var button_elem = document.getElementById("b");
b.addEventListener('click', addElement);

var getNumber = function(s){
    var x = s.length - 1;
    while (s.substring(x,x+1) != ' '){
        x -= 1;
    }
    return parseInt(s.substring(x+1));
}

//adds nth fibonacci number upon button-press
var addFib = function(){
    var elem = document.createElement("li");
    elem.setAttribute('id','fibitem');
    if (currElem_fib < 2){
        elem.innerHTML =  "fibonacci number " + currElem_fib + ": " + currElem_fib;
    }
    else{
        var lis = fibonaccilist.getElementsByTagName('li');
        var str1 = lis[lis.length - 1].innerHTML;
        var str2 = lis[lis.length - 2].innerHTML;
        var num1 = getNumber(str1);
	    var num2 = getNumber(str2);
        var num = num1 + num2;
        elem.innerHTML = "fibonacci number " + currElem_fib + ": " + num;
    };
    document.getElementById("fibonaccilist").appendChild(elem);
    run(elem); //activates other functions on inserted element
    console.log(currElem_fib + 1 + " fib numbers total");
    currElem_fib += 1;

};

var button_fib = document.getElementById("b2");
b2.addEventListener('click', addFib);

//adds nth triangular number to list upon button-press
var addTriangle = function(){
    var elem = document.createElement("li");
    elem.innerHTML = "triangular number " + currElem_tri + ": " + triangle(currElem_tri + 1);
    document.getElementById("trianglelist").appendChild(elem);
    elem.setAttribute('id','triangleitem');
    run(elem); //activates other functions on inserted element
    console.log(currElem_tri+1 + " triangular numbers total");
    currElem_tri += 1;
};

var triangle = function( n ){
    return ( ( n * (n - 1) ) / 2 );
}

var button_triangle = document.getElementById("b3");
b3.addEventListener('click', addTriangle);

//adds nth row for Pascal's Triangle to list upon button-press
var addPascal = function(){
    var elem = document.createElement("li");
    var lis = pascallist.getElementsByTagName('li');
    if (lis.length == 0){
        elem.innerHTML = 1;
    }
    else{
        elem.innerHTML = pascal(lis[lis.length - 1].innerHTML);
    }
    document.getElementById("pascallist").appendChild(elem);
    elem.setAttribute('id','pascalitem');
    run(elem);
    console.log(currElem_pasc+1 + " rows of pascal's triangle");
    currElem_pasc += 1;
}

//helper function for determining the next row of pascal's triangle given the current row
var pascal = function(s){
    var l = s.split(' ');
    if (l.length == 1){
        return '1 1';
    }
    else{
        var ret = ['1','1'];
        for (i = 1; i < l.length; i++){
            num = parseInt(l[i-1]) + parseInt(l[i]);
            ret.splice(i,0,num + "");
        }
    };
    return ret.join(' ');
}

//helper function for determining the nth row of pascal's triangle
var nthPascal = function(n){
    var x = 1;
    var l = '1';
    while (x < n){
        l = pascal(l);
        x++;
    }
    return l;
}

var button_pascal = document.getElementById("b4");
b4.addEventListener('click',addPascal);

//changes text of heading after hovering over item in the list
var changeHeading = function(){
    var h = document.getElementById('h');
    h.innerHTML = this.innerHTML;
    //console.log('heading has been changed');
};

//changes text of heading back to normal after mousing away from item in the list
var changeHeadingBack = function(){
    var h = document.getElementById('h');
    h.innerHTML = 'Hello World!';
    //console.log('heading has been changed back');
};

//removes element from list upon mouse-click
var removeElement = function(){
    //removes elements from thelist
    if (this.getAttribute('id') == 'theitem'){
        currElem -= 1;
        this.remove();
        //sets item names to correspond to their numbers
        var lis = thelist.getElementsByTagName('li');
        for (li = 0; li < lis.length; li++){
            lis[li].innerHTML = "item " + li;
        }
        console.log(currElem+1 + " items total");
    }
    //removes elements from fibonaccilist
    if (this.getAttribute('id') == 'fibitem'){
        currElem_fib -= 1;
        this.remove();
        //sets item names to correspond to their numbers
        var lis = fibonaccilist.getElementsByTagName('li');
        for (li = 0; li < lis.length; li ++){
            if (li < 2){
                lis[li].innerHTML = "fibonacci number " + li + ": " + li;
            }
            else{
                var str1 = lis[li - 1].innerHTML;
                var str2 = lis[li - 2].innerHTML;
                var num1 = getNumber(str1);
                var num2 = getNumber(str2);
                var num = num1 + num2;
                lis[li].innerHTML = "fibonacci number " + li + ": " + num;
            };
        }
        console.log(currElem_fib + " fibonacci numbers total");
    }
    //removes elements from trianglelist
    if (this.getAttribute('id') == 'triangleitem'){
        currElem_tri -= 1;
        this.remove();
        //sets item names to correspond to their numbers
        var lis = trianglelist.getElementsByTagName('li');
        for (li = 0; li < lis.length; li++){
            lis[li].innerHTML = "triangular number " + li + ": " + triangle(li + 1);
        }
        console.log(currElem_tri + " triangular numbers total");
    }
    //remove elements from pascallist
    if (this.getAttribute('id') == 'pascalitem'){
        currElem_pasc -= 1;
        this.remove();
        //sets item names to correspond to their numbers
        var lis = pascallist.getElementsByTagName('li');
        for (li = 0; li < lis.length; li++){
            lis[li].innerHTML = nthPascal(li+1);
        }
        console.log(currElem_pasc + " rows of pascal's triangle");
    }
};

//function to activate changeHeading, changeHeadingBack, and removeELement for an item
var run = function(item){
    if (item.getAttribute('id') != 'pascalitem'){
        item.addEventListener('mouseover', changeHeading);
        item.addEventListener('mouseout', changeHeadingBack);
    }
    item.addEventListener('click', removeElement);
};

//creates an array of all elements in the list
var LIs = document.getElementsByTagName('li');
for (li = 0; li < LIs.length; li++){
    run(LIs[li]); //activates each item in the list
};
