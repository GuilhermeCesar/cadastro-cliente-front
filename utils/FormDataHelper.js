const FormDataHelper = (object) => {
    let formData = new FormData();
    for(let propsObject in object){
        if(object.hasOwnProperty(propsObject)){
            formData.append(propsObject,object[propsObject]);
        }
    }
    return formData;
};

export default FormDataHelper;