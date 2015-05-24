$.validator.addMethod("phone",function(value,element,params){
    if(/^\d{11}$/.test(value)){
        return true;
    }else{
        return false;
    }
},"请输入正确的手机号码");

jQuery.validator.addMethod("length", function(value,element) {
    if(value.length==5){
        return true;
    }else{
        return false;
    }

}, "请正确填写您的联系电话");