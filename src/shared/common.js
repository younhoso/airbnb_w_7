//콤마함수
export const comma = (str) => {
	str = String(str);
	return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
};

//콤마풀기
export const uncomma = (str) => {
	str = String(str);
	return str.replace(/[^\d]+/g, '');
};

// 로컬 스토리지 저장 
export const localStorageSet = (name, value) => { 
	if(typeof(Storage) !== "undefined"){ 
		window.localStorage.setItem(name, JSON.stringify(value))
	}
}; 

// 로컬 스토리지 해당 key 조회 
export const localStorageGet = (name) => { 
	return JSON.parse(window.localStorage.getItem(name))
};

// 로컬 스토리지 해당 key 삭제
export const localStorageRemove = (name) => { 
	return window.localStorage.removeItem(name) 
};

