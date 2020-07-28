var logic = require("../src/helpers/helpers");
window.onload = function () {


    document.getElementById("btnConvert").addEventListener("click", convertValue);
    document.getElementById("inputNumber").addEventListener("keyup", checkInput);
    document.getElementById("btnSettings").addEventListener("click", generateModal);
    document.getElementById("btnCloseSettingsWindow").addEventListener("click", closeModalWindow);
    document.getElementById("btnSaveSettings").addEventListener("click", saveSettings);
    document.getElementById("inputResult").disabled = true;
    document.getElementById("covertFrom").addEventListener("change", changeList);
    document.getElementById("covertTo").addEventListener("change", changeList);
    initializedApp();
    changeList();
    defaultInputCheck();

};
function defaultInputCheck() {
    if (document.getElementById("inputNumber").value === "") {
        document.getElementById("btnConvert").disabled = true;
    }
    else {
        document.getElementById("btnConvert").disabled = false;
    }
}
function checkInput(e) {
    if (this.value === "") {
        document.getElementById("btnConvert").disabled = true;
    } else {
        document.getElementById("btnConvert").disabled = false;

        const pattern = /^\d+(\.?)\d*$/g;
        const allowedCodes = [8, 37, 39, 46];
        const value = this.value;

        if (!(value.match(pattern) || allowedCodes.some(code => code === e.keyCode))) {
            this.value = value.slice(0, -1);
        }
    }
    //  this.value = this.value.match(/[0-9]+/)
}

function getLanguageSet() {
    let retrievedObject = localStorage.getItem('languages');
    let languageNumber = convertLanguageTextToNumber(localStorage.getItem('languageText'));
    let languageArray = JSON.parse(retrievedObject)[languageNumber];
    return languageArray;
}

function generateModal() {
    var modalWindow = document.getElementById('dlgSettings');
    modalWindow.classList = "show";
    var arr = getLanguageSet();
    document.getElementById('lblSettings').innerText = arr.settingText;
    document.getElementById('content').classList.toggle("blur-bg")
    document.getElementById('content').classList.toggle("dis")
}

function closeModalWindow() {
    document.getElementById('content').disabled = false;
    document.getElementById('dlgSettings').classList = "hide";
    document.getElementById('content').classList.toggle("blur-bg")
    document.getElementById('content').classList.toggle("dis")
}

function convertLanguageTextToNumber(languageText) {
    let mainLang;
    if (languageText === "RU") {
        mainLang = 0;
    }
    if (languageText === "EN") {
        mainLang = 1;
    }
    if (languageText === "AR") {
        mainLang = 2;
    }
    return mainLang;
}

function initializedApp() {
    let languages =
        [{
            "btnConvertText": "Конвертировать",
            "title": "Конвертер",
            "btnSaveText": "Сохранить",
            "settingText": "Выберите язык",
            "inputNumberLabel": "Введите число",
            "inputResultLabel": "Результат",
            "values": ["versts", "meters", "yards", "miles", "foots"],
            "options": ["Версты", "Метры", "Ярды", "Мили", "Футы"]
        },
            {
                "btnConvertText": "Convert",
                "title": "Converter",
                "btnSaveText": "Save",
                "settingText": "Choose language",
                "inputNumberLabel": "Enter value",
                "inputResultLabel": "Result",
                "values": ["versts", "meters", "yards", "miles", "foots"],
                "options": ["Versts", "Meters", "Yard", "Miles", "Foots"]
            },
            {
                "btnConvertText": "تحويل",
                "title": "محول",
                "btnSaveText": "حفظ",
                "settingText": "اختر اللغة",
                "inputNumberLabel": "أدخل رقم",
                "inputResultLabel": "يؤدي",
                "values": ["versts", "meters", "yards", "miles", "foots"],
                "options": ["ميل", "طوله متر", "ياردة", "اميال", "يمشي على الأقدام"]
            }];
    localStorage.setItem('languages', JSON.stringify(languages));



    let element = document.getElementById("wrapper");
    if (localStorage.getItem('languageText') === "AR") {
        document.getElementById("AR").selected = true;
        document.getElementById("AR").hidden = true;
        document.getElementById("RU").hidden = false;
        document.getElementById("EN").hidden = false;
        element.classList.remove("ltr");
        element.classList.add("rtl");
    } else {
        element.classList.remove("rtl");
        element.classList.add("ltr")
    }
    if (localStorage.getItem('languageText') === null) {
        localStorage.setItem('languageText', "EN");
    }
    if (localStorage.getItem('languageText') === "EN") {
        document.getElementById("EN").selected = true;
        document.getElementById("EN").hidden = true;
        document.getElementById("RU").hidden = false;
        document.getElementById("AR").hidden = false;
    }
    if (localStorage.getItem('languageText') === "RU") {
        document.getElementById("RU").selected = true;
        document.getElementById("RU").hidden = true;
        document.getElementById("EN").hidden = false;
        document.getElementById("AR").hidden = false;
    }
    if (localStorage.getItem('inputNumber') === null) {
        localStorage.setItem('inputNumber', "");
    }
    if (localStorage.getItem('inputResult') === null) {
        localStorage.setItem('inputResult', "");
    }
    if (localStorage.getItem('fromText') === null) {
        localStorage.setItem('fromText', "versts");
    }
    if (localStorage.getItem('toText') === null) {
        localStorage.setItem('toText', "versts");
    }

    fixState();

}
function fixState() {

    let languageArray = getLanguageSet();
    let convertFrom = document.getElementById("covertFrom");
    let convertTo = document.getElementById("covertTo");
    convertFrom.innerHTML = "";
    convertTo.innerHTML = "";
    document.title = languageArray.title;
    document.getElementById("btnConvert").value = languageArray.btnConvertText;
    document.getElementById("inputNumber").value = localStorage.getItem('inputNumber');
    document.getElementById("inputResult").value = localStorage.getItem('inputResult');
    document.getElementById("inputNumberLabel").innerText = languageArray.inputNumberLabel;
    document.getElementById("inputResultLabel").innerText = languageArray.inputResultLabel;
    document.getElementById("btnSaveSettings").innerText = languageArray.btnSaveText;
    document.getElementById("lblSettings").innerText = languageArray.settingText;

    for (let i = 0, l = languageArray["options"].length; i < l; i++) {
        convertFrom.options.add(new Option(languageArray.options[i], languageArray.values[i]));
        convertTo.options.add(new Option(languageArray.options[i], languageArray.values[i]));
        if (languageArray.values[i] === localStorage.getItem('fromText')) {
            convertFrom.getElementsByTagName('option')[i].selected = 'selected';
        }
        if (languageArray.values[i] === localStorage.getItem('toText')) {
            convertTo.getElementsByTagName('option')[i].selected = 'selected';
        }
    }
}

function changeList() {
    var e = document.getElementById("covertFrom");
    for (var i = 0; i < e.length; i++) {
        e.options[i].hidden = false;
        if (i === e.selectedIndex) {
            e.options[e.selectedIndex].hidden = true;
        }
    }
    var r = document.getElementById("covertTo");
    for (var j = 0; j < r.length; j++) {
        r.options[j].hidden = false;
        if (j === r.selectedIndex) {
            r.options[r.selectedIndex].hidden = true;
        }
    }
}

function convertValue() {

    var inputNumber = document.getElementById("inputNumber").value;
    var inputResult = document.getElementById("inputResult");
    var convertFrom = document.getElementById("covertFrom").value;
    var convertTo = document.getElementById("covertTo").value;
    var result = logic.calculate(inputNumber, convertFrom, convertTo);
    inputResult.value = result;
    saveConvertResults(inputNumber, result, convertTo, convertFrom);
}

function saveConvertResults(inputNumber, inputResult, convertTo, convertFrom) {
    localStorage.setItem('inputNumber', inputNumber);
    localStorage.setItem('inputResult', inputResult);
    localStorage.setItem('toText', convertTo);
    localStorage.setItem('fromText', convertFrom);
}

function saveSettings() {
    let lang = document.getElementById("languageList").value;
    if (lang !== localStorage.getItem("languageText")) {
        localStorage.setItem('languageText', lang);
        let element = document.getElementById("wrapper");
        if (lang === "AR") {
            document.getElementById("btnCloseSettingsWindow").classList = "modal_close_button_arabic"
            document.getElementById("settingsPanel").classList = "settings_button_arabic"
            element.classList.remove("ltr");
            element.classList.add("rtl");
        } else {
            document.getElementById("settingsPanel").classList = "settings_button"
            document.getElementById("btnCloseSettingsWindow").classList = "modal_close_button"
            element.classList.remove("rtl");
            element.classList.add("ltr")
        }
        initializedApp();
    }
}
