var s = navigator.appVersion
var arr = s.split('/')
for(let i = 0; i < arr.length; i++){
	if(!arr[i].includes('Chrome')){
		continue;
	} else{
		var version = arr[i+1].trim().split(" ")
    break;
	}
}

var container = document.querySelector('#id-div-container')
var ver = document.createElement('p')
ver.id = 'id-p-version'
ver.innerText = version[0]
container.appendChild(ver)
