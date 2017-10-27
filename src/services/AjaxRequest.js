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

	post(params){
		const xhr = new XMLHttpRequest();
		xhr.open('POST', this.url);
		xhr.onload = () =>{
			if(xhr.status === 200){
				this.data = xhr.responseText;
				const jsonData = JSON.parse(xhr.responseText);
			}
		}
		
		xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
		xhr.send(params)
	}
}

export default AjaxRequest