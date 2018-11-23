var s = navigator.appVersion
var arr = s.split('/')
for(let i = 0; i < arr.length; i++){
	if(!arr[i].includes('Safari')){
		continue;
	} else{
		var version = arr[i].slice(0,-7)
	}
}
console.log(version)
