class AjaxRequest{

	constructor(url){
		this.url = url;
	}

	get(callback){
		const xhr = new XMLHttpRequest();
		xhr.open('GET', this.url);
		xhr.onload = () =>{
			if(xhr.status === 200){
				this.data = xhr.responseText;
				const jsonData = JSON.parse(xhr.responseText);
				callback(jsonData);
			}
		}

		xhr.send();
	}

  post(data){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", this.url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data))
   	}
}

export default AjaxRequest