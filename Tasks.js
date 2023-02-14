console.log("BINARY SEARCH");

function binSearch(array, val, start, end) 
{
	if (start > end) 
    {
        return -1;
    }
	var mid=Math.floor((start + end)/2);
	if (array[mid]===val)
    {
        return mid;
    }
	if(array[mid] > val)
	{
        return binSearch(array, val, start, mid-1);
    }
	else
    {
		return binSearch(array, val, mid+1, end);
    }
}
var array = [23,34,45,56,67,89];
var val = 56;
var index=binSearch(array, val, 0, array.length-1);
if (index>-1)
{
	console.log("Element found at",index+1+" position");
}
else
{ 
    console.log("Element not present in the array");
}


console.log("ODD OR EVEN");
function oddishOrEvenish(num){
    var sum=0;
    var digits = [];
    while (num != 0) {
        digits.push(num % 10);
        num = Math.trunc(num / 10);
    }
    digits.reverse();
    for(var iter=0;iter<digits.length;iter++){
        sum=sum+digits[iter];
    }
    console.log(sum);
    if(sum%2==0){
        return "Evenish";
    }
    else{
        return "Oddish";
    }
}
console.log(oddishOrEvenish(43));
console.log(oddishOrEvenish(373));
console.log(oddishOrEvenish(4433));

console.log("STRING CONCATENATION");
function concat(){
    var my_array=[];
    for (var iter_array = 0; iter_array < arguments.length; iter_array++) {
        single_array=arguments[iter_array];
        for(var iter=0;iter<single_array.length;iter++){
            my_array=my_array.concat(single_array[iter]);
        }
    }
    console.log(my_array);
}
concat([1, 2, 3], [4, 5], [6, 7]);
concat([1], [2], [3], [4], [5], [6], [7]);
concat([1, 2], [3, 4]);





