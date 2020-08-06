// window.onload = function () {
    var select = document.getElementById("select");
    var select2 = document.getElementById("select2");

    var input = document.getElementById("value");
    var button = document.getElementById("generate");
    var inputResult = document.getElementById("result");
    var settingsWhell = document.getElementById("wheel");
    var hiddenWindow = document.getElementById("hidden");
    var applyBtn = document.getElementById("apply");
    var langSelect = document.getElementById("lang");
    var h2 = document.getElementById("h2");
    var p = document.getElementById("p");
    input.value = localStorage.getItem("input");

    button.addEventListener("click", generateValue);
    applyBtn.addEventListener("click", changeLang);
    settingsWhell.addEventListener("click", hideWindow);

    input.onkeydown = function (e) {
        if (e.key == "e" || e.key == "-" || e.key == "+") {
            return false
        }
    }
// }
function generateValue(e) {

    var option = select.options[select.selectedIndex].value;
    var option2 = select2.options[select2.selectedIndex].value;
    localStorage.setItem('input', input.value);
    secondConvert(option, option2, input, inputResult);

}

var allConvertmeters = {
    1:1,
    2: 1609.34,
    3: 0.9144,
    4: 1066.8,
    5: 0.3048,

};
function converToMetr(option, input){
    var resMetr = input.value;
    return resMetr * allConvertmeters[option];
}

function secondConvert(option, option2, input, inputResult){

    var resMetr = converToMetr(option, input);

    inputResult.value = resMetr/allConvertmeters[option2];
}
//to test set arg hiddenWindow
function hideWindow() {
    hiddenWindow.classList.toggle("hidden");
}


var changeLangRu = {
    meters:"метры",
    miles: "мили",
    yard: "ярды",
    verst: "версты",
    foot: "футы",
    "متر":"метры",
    "ميل": "мили",
    "ياردة": "ярды",
    "ميل": "версты",
    "قدم": "футы"
};
var changeLangAr = {
    meters:"متر",
    miles: "ميل",
    yard: "ياردة",
    verst: "ميل",
    foot: "قدم",
    "метры":  "متر",
    "мили": "ميل",
    "ярды":  "ياردة",
    "версты":"ميل",
    "футы":"قدم"
};
function NewObjNotSelectItems(buttonGenerate, applyBtn, inputValue, inputResult, h2Text, pText){
        this.buttonGenerate = buttonGenerate;
        this.applyBtn = applyBtn;
        this.inputValue =inputValue;
        this.inputResult = inputResult;
        this.h2Text = h2Text;
        this.pText = pText;
}
var notSelectElemRU = new NewObjNotSelectItems("Сгенерировать", "Применить",
    "Введите число для конвертации", "Результат","Настройки", "Язык");

var notSelectElemAR = new NewObjNotSelectItems("توليد","للتقديم","أدخل الرقم للتحويل",
    "يؤدي", "إعدادات", "لغة");

function setTextValues(objValues, button, applyBtn, input, inputResult, h2, p){
    button.innerText = objValues.buttonGenerate;
    applyBtn.innerText = objValues.applyBtn;
    input.placeholder = objValues.inputValue;
    inputResult.placeholder = objValues.inputResult;
    h2.innerText = objValues.h2Text;
    p.innerText = objValues.pText;
}
var block = document.getElementById("icon");
//to test comment block classlist
 function changeLang() {
     var option = langSelect.options[langSelect.selectedIndex].text;

     if(option == "RU"){
         selectLang(select, changeLangRu);
         selectLang(select2, changeLangRu);
         setTextValues(notSelectElemRU, button, applyBtn, input, inputResult, h2, p);
         hiddenWindow.classList.toggle("hidden");
         document.body.classList.remove("direction");
         block.classList.remove("right");
         block.classList.add("left");
         hiddenWindow.classList.remove("hiddenleft");
         hiddenWindow.classList.add("hiddenright");
     } else if(option == "AR"){
         document.body.classList.add("direction");
         selectLang(select, changeLangAr);
         selectLang(select2, changeLangAr);
         setTextValues(notSelectElemAR, button, applyBtn, input, inputResult, h2, p);
         block.classList.remove("left");
         block.classList.add("right");
         hiddenWindow.classList.remove("hiddenright");
         hiddenWindow.classList.add("hiddenleft");
         hiddenWindow.classList.toggle("hidden");
     } else {
         document.location.reload()
     }
 }
function selectLang(select, changeLang){
    for(var key in select.children){
        select.children[key].text = changeLang[select.children[key].text];
    }
}


// module.exports = {
//     converToMetr,
//     secondConvert,
//     hideWindow,
//     setTextValues,
//     selectLang,
//     changeLang
//  }

//import "./style/index.less"
