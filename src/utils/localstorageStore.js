import store from './store';
// localstorage에 Data set
function setArrayInLocalstorage(key, formData) {
  const value = JSON.stringify(formData);
  var str = localStorage.getItem(key);
  var obj = {};
  try {
    obj = JSON.parse(str);
  } catch {
    obj = {};
  }
  if (!obj) {
    obj = {};
    obj[key] = [];
  }
  obj[key].push(value);
  localStorage.setItem(key, JSON.stringify(obj));
}

// localstorage에서 Data get
function getMemberInLocalstorage(key, formData) {
  const localStorageData = store.getData(key);
  const array = localStorageData.member;
  // Localstorage의 email, password 값과 일치해야만 ture값 반환 --> 배열로 정의, 리턴
  const validate = array.map((data) => {
    let parsedData = JSON.parse(data);
    if (
      parsedData.email === formData.email &&
      parsedData.password === formData.password
    ) {
      return true;
    }
  });
  return validate;
}

// localstorage에서 Data remove
function removeInLocalstorage(key) {
  localStorage.removeItem(key);
}
export {
  setArrayInLocalstorage,
  getMemberInLocalstorage,
  removeInLocalstorage,
};
