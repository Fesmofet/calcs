const app = require("../index");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
let container;
let hiddenWindow;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);

});

afterEach(() => {
    container.remove();
    container = null;
});

describe("testing  hiddenWindow func", ()=> {
     test("test hiddenWindow",async ()=>{
         hiddenWindow = dom.window.document.createElement("div");
         global.hiddenWindow = hiddenWindow;
         app.hideWindow();
         expect(hiddenWindow.classList.contains("hidden")).toBe(true);
     });
});

describe("testing  converToMetr func", ()=> {
    test("should return 101.4984 if select option value:3 and input value:111", async () => {
        let select = dom.window.document.createElement("select");
        container.append(select);
        let firstOpt = dom.window.document.createElement("option");
        firstOpt.value = 3;
        select.append(firstOpt);
        var allConvertmeters = {
            1: 1,
            2: 1609.34,
            3: 0.9144,
            4: 1066.8,
            5: 0.3048
        };
        let input = dom.window.document.createElement("input");
        input.value = "111";


        expect(app.converToMetr(firstOpt.value, input)).toBe(101.4984);
    });
})

describe("testing  secondConvert func", ()=> {
    test("should return 0.06306833857357676 if " +
        "first select option value: 3, second value: 2 and input value:111",async ()=>{
        const select = dom.window.document.createElement("select");
        container.append(select);
        const firstOpt = dom.window.document.createElement("option");
        firstOpt.value = 3;
        select.append(firstOpt);
        const secondOpt = dom.window.document.createElement("option");
        secondOpt.value = 2;
        select.append(secondOpt);
        const inputResult = dom.window.document.createElement("input");
        container.append(inputResult);
        let allConvertmeters = {
            1:1,
            2: 1609.34,
            3: 0.9144,
            4: 1066.8,
            5: 0.3048
        };
        let input = dom.window.document.createElement("input");
        container.append(input);
        input.value = 111;
        app.secondConvert(firstOpt.value, secondOpt.value, input, inputResult);
        expect(inputResult.value).toBe("0.06306833857357676");
    });
});
 describe("testing  setTextValues func", ()=> {
     test("should change text language from generatedObj", async () => {
         const buttonGenerate = dom.window.document.createElement("button");
         container.append(buttonGenerate);
         const applyBtn = dom.window.document.createElement("button");
         container.append(applyBtn);
         const input = dom.window.document.createElement("input");
         container.append(input);
         const inputResult = dom.window.document.createElement("input");
         container.append(inputResult);
         const h2 = dom.window.document.createElement("h2");
         container.append(h2);
         const p = dom.window.document.createElement("p");
         container.append(p);
         const generatedObj = {
             buttonGenerate: "Сгенерировать",
             applyBtn: "Применить",
             inputValue: "Введите число для конвертации",
             inputResult: "Результат",
             h2Text: "Настройки",
             pText: "Язык",
         };

         app.setTextValues(generatedObj, buttonGenerate, applyBtn, input, inputResult, h2, p);
         expect(buttonGenerate.innerText).toBe("Сгенерировать");
         expect(applyBtn.innerText).toBe("Применить");
         expect(input.placeholder).toBe("Введите число для конвертации");
         expect(inputResult.placeholder).toBe("Результат");
         expect(h2.innerText).toBe("Настройки");
         expect(p.innerText).toBe("Язык");
     });
 });
 describe("testing  selectLang func", ()=> {
     test("It should change select text lang in to rus lang",  () => {
         const selectr = dom.window.document.createElement("select");
         container.append(selectr);
         global.selectr = selectr;
         const firstOpt = dom.window.document.createElement("option");
         firstOpt.innerHTML = "meters";
         selectr.append(firstOpt);
         const secondOpt = dom.window.document.createElement("option");
         secondOpt.innerHTML = "miles";
          selectr.append(secondOpt);
         const changeLangRu = {
             meters: "метры",
             miles: "мили",
             yard: "ярды",
             verset: "версты",
             "foot": "футы",
             "متر": "метры",
             "ميل": "мили",
             "ياردة": "ярды",
             "ميل": "версты",
             "قدم": "футы"
         };

         app.selectLang(selectr, changeLangRu);
         expect(firstOpt.innerHTML).toBe("метры");
         expect(secondOpt.innerHTML).toBe("мили");
     });
 });