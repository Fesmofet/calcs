function setFocus()
{
    document.getElementById("result").focus();
}
var histor=[];
var testNum="";
var point=0;
var firstNum=[];
var lastNum=[];
let i=0;
var dlinaPole;
let j=0;
var firstLastNum=1;
var znak="";
var result;
var ravno=0;
var ctrlravno=0;
// //______________________________________________keydown
    document.addEventListener('keydown', function(event) {
       
       
        if (event.code === 'Digit1'){funKey1()}
        if (event.code === 'Digit2'){funKey2()}
        if (event.code === 'Digit3'){funKey3()}
        if (event.code === 'Digit4'){funKey4()}
        if (event.code === 'Digit5'){funKey5()}
        if (event.code === 'Digit6'){funKey6()}
        if (event.code === 'Digit7'){funKey7()}
        if (event.code === 'Digit8'){funKey8()}
        if (event.code === 'Digit9'){funKey9()}
        if (event.code === 'Digit0'){funKey0()}
        if (event.code === 'Period'){funKeyPeriod()}
        if (event.code === 'Backspace'){funBackspace()}

        if (event.code === 'Enter'){funResult()} 
        else {
console.log(event.code);
        }
      });
function funKey0(){
    if (ctrlravno===1 ){return setFocus()}
    if (znak==="" & firstLastNum === 2){return setFocus();}
    if (document.getElementById("result").value.length ===13){
return setFocus();
    }
    else {
        if (testNum===""){
            if (firstLastNum===1){
                firstNum[i]=document.getElementById("result").value="0";
                document.getElementById("result").value=firstNum.join("");
                // i++;   
                testNum=0;
            }
            if (firstLastNum===2){
                lastNum[i]=document.getElementById("result").value="0";
                document.getElementById("result").value=lastNum.join("");
                // i++;   
                testNum=0;
            }

        }
        if (testNum==="0"){testNum="0";
            return setFocus();
        }
          console.log(i);
            console.log(testNum);
        if (testNum===1 || testNum===2){
            if (firstLastNum===1){
                firstNum[i]=document.getElementById("result").value="0";
                document.getElementById("result").value=firstNum.join("");
                i++;   
            }
            if (firstLastNum===2){
                lastNum[i]=document.getElementById("result").value="0";
                document.getElementById("result").value=lastNum.join("");
                i++;   
            }
        }
    }
    // testNum=document.getElementById("result").value;
    // console.log(i);
    // console.log(histor);
setFocus();
}
function funC(){
    histor=[];
    testNum="";
    firstNum=[];
    lastNum=[];
    i=0;
    dlinaPole=0;
    document.getElementById("result").value = "";
    document.getElementById("arhiv").innerHTML = "";
    firstLastNum=1;
    znak="";
    point=0;
    result="";
    ravno=0;
    ctrlravno=0;
    setFocus();
}
function funKey1(){
    if (ctrlravno===1 ){return setFocus()}
    if (znak==="" & firstLastNum === 2){return setFocus();}
    if (document.getElementById("result").value.length===13){
        return setFocus(); 
    }
    else {
        //
        // console.log(i)
        if (testNum==="0"){
            i--;
            testNum=2;
        }
        if (lastNum==="0"){
            i--;
            testNum=2;
        }

        if (firstLastNum===1){
        firstNum[i]=document.getElementById("result").value="1";
        document.getElementById("result").value=firstNum.join("");
        testNum=2;
        
        }
        if (firstLastNum===2){
            lastNum[i]=document.getElementById("result").value="1";
            document.getElementById("result").value=lastNum.join("");
            testNum=2;
            }
        
        i++;
console.log(i);
testNum=2;
    }
        // console.log(document.getElementById("result").value);
        testNum[j]=document.getElementById("result").value;
setFocus();
}
function funKey2(){
    if (ctrlravno===1 ){return setFocus()}
    if (znak==="" & firstLastNum === 2){return setFocus();}
    if (document.getElementById("result").value.length===13){
        return setFocus(); ;
    }
    else {
        if (testNum==="0"){
            i--;
            testNum=2;
        }
        if (lastNum==="0"){
            i--;
            testNum=2;
        }
        if (firstLastNum===1){
        firstNum[i]=document.getElementById("result").value="2";
        document.getElementById("result").value=firstNum.join("");
        testNum=2;
        }
        if (firstLastNum===2){
            lastNum[i]=document.getElementById("result").value="2";
            document.getElementById("result").value=lastNum.join("");
            testNum=2;
            }
        i++;
    }
        testNum[j]=document.getElementById("result").value;
setFocus();
}
function funKey3(){
    if (ctrlravno===1 ){return setFocus()}
    if (znak==="" & firstLastNum === 2){return setFocus();}
    if (document.getElementById("result").value.length===13){
        return setFocus(); ;
    }
    else {
        if (testNum==="0"){
            i--;
            testNum=2;
        }
        if (lastNum==="0"){
            i--;
            testNum=2;
        }
        if (firstLastNum===1){
        firstNum[i]=document.getElementById("result").value="3";
        document.getElementById("result").value=firstNum.join("");
        testNum=2;
        }
        if (firstLastNum===2){
            lastNum[i]=document.getElementById("result").value="3";
            document.getElementById("result").value=lastNum.join("");
            testNum=2;
            }
        i++;
    }
        testNum[j]=document.getElementById("result").value;
setFocus();
}
function funKey4(){
    if (ctrlravno===1 ){return setFocus()}
    if (znak==="" & firstLastNum === 2){return setFocus();}
    if (document.getElementById("result").value.length===13){
        return setFocus(); ;
    }
    else {
        if (testNum==="0"){
            i--;
            testNum=2;
        }
        if (lastNum==="0"){
            i--;
            testNum=2;
        }
        if (firstLastNum===1){
        firstNum[i]=document.getElementById("result").value="4";
        document.getElementById("result").value=firstNum.join("");
        testNum=2;
        }
        if (firstLastNum===2){
            lastNum[i]=document.getElementById("result").value="4";
            document.getElementById("result").value=lastNum.join("");
            testNum=2;
            }
        i++;
    }
        testNum[j]=document.getElementById("result").value;
setFocus();
}
function funKey5(){
    if (ctrlravno===1 ){return setFocus()}
    if (znak==="" & firstLastNum === 2){return setFocus();}
    if (document.getElementById("result").value.length===13){
        return setFocus(); ;
    }
    else {
        if (testNum==="0"){
            i--;
            testNum=2;
        }
        if (lastNum==="0"){
            i--;
            testNum=2;
        }
        if (firstLastNum===1){
        firstNum[i]=document.getElementById("result").value="5";
        document.getElementById("result").value=firstNum.join("");
        testNum=2;
        }
        if (firstLastNum===2){
            lastNum[i]=document.getElementById("result").value="5";
            document.getElementById("result").value=lastNum.join("");
            testNum=2;
            }
        i++;
    }
        testNum[j]=document.getElementById("result").value;
setFocus();
}
function funKey6(){
    if (ctrlravno===1 ){return setFocus()}
    if (znak==="" & firstLastNum === 2){return setFocus();}
    if (document.getElementById("result").value.length===13){
        return setFocus(); ;
    }
    else {
        if (testNum==="0"){
            i--;
            testNum=2;
        }
        if (lastNum==="0"){
            i--;
            testNum=2;
        }
        if (firstLastNum===1){
        firstNum[i]=document.getElementById("result").value="6";
        document.getElementById("result").value=firstNum.join("");
        testNum=2;
        }
        if (firstLastNum===2){
            lastNum[i]=document.getElementById("result").value="6";
            document.getElementById("result").value=lastNum.join("");
            testNum=2;
            }
        i++;
    }
        testNum[j]=document.getElementById("result").value;
setFocus();
}
function funKey7(){
    console.log(ctrlravno);
    if (ctrlravno===1 ){return setFocus()}
    if (znak==="" & firstLastNum === 2){return setFocus();}
    if (document.getElementById("result").value.length===13){
        return setFocus(); ;
    }
    else {
        if (testNum==="0"){
            i--;
            testNum=2;
        }
        if (lastNum==="0"){
            i--;
            testNum=2;
        }
        if (firstLastNum===1){
        firstNum[i]=document.getElementById("result").value="7";
        document.getElementById("result").value=firstNum.join("");
        testNum=2;
        }
        if (firstLastNum===2){
            lastNum[i]=document.getElementById("result").value="7";
            document.getElementById("result").value=lastNum.join("");
            testNum=2;
            }
        i++;
    }
        testNum[j]=document.getElementById("result").value;
setFocus();
}
function funKey8(){
    if (ctrlravno===1 ){return setFocus()}
    if (znak==="" & firstLastNum === 2){return setFocus();}
    if (document.getElementById("result").value.length===13){
        return setFocus(); ;
    }
    else {
        if (testNum==="0"){
            i--;
            testNum=2;
        }
        if (lastNum==="0"){
            i--;
            testNum=2;
        }
        if (firstLastNum===1){
        firstNum[i]=document.getElementById("result").value="8";
        document.getElementById("result").value=firstNum.join("");
        testNum=2;
        }
        if (firstLastNum===2){
            lastNum[i]=document.getElementById("result").value="8";
            document.getElementById("result").value=lastNum.join("");
            testNum=2;
            }
        i++;
    }
        testNum[j]=document.getElementById("result").value;
setFocus();
}
function funKey9(){
    console.log(ctrlravno);
    if (ctrlravno===1 ){return setFocus()}
    if (znak==="" & firstLastNum === 2){return setFocus();}
    if (document.getElementById("result").value.length===13){
        return setFocus(); ;
    }
    else {
        if (testNum==="0"){
            i--;
            testNum=2;
        }
        if (lastNum==="0"){
            i--;
            testNum=2;
        }
        if (firstLastNum===1){
        firstNum[i]=document.getElementById("result").value="9";
        document.getElementById("result").value=firstNum.join("");
        testNum=2;
        }
        if (firstLastNum===2){
            lastNum[i]=document.getElementById("result").value="9";
            document.getElementById("result").value=lastNum.join("");
            testNum=2;
            }
        i++;
    }
        testNum[j]=document.getElementById("result").value;
setFocus();
}
function funsum(){
    if (ravno===0){
        if (firstNum.length===0){return setFocus()}
        if (firstLastNum===2 & lastNum.length!==0){return setFocus()}
        if (znak==="+"){return setFocus()}
        if (znak!==""){
            document.getElementById("arhiv").innerHTML=firstNum.join("") + "+";
            znak="+";
            return setFocus();
        }
        if (znak===""){
            document.getElementById("arhiv").innerHTML=firstNum.join("") + "+";
            znak="+";
            firstLastNum=2;
            i=0;
            histor[j]=document.getElementById("result").value;
            j++;
            testNum="";
            dlinaPole=0;
            point=0;
            document.getElementById("result").value = "";
        } 
    }
    else if (ravno===1){
        document.getElementById("arhiv").innerHTML=result;
        document.getElementById("result").value = "";
        console.log(lastNum.length);
        lastNum=[]
        document.getElementById("arhiv").innerHTML=result + "+";
        ctrlravno=2;
        if (firstLastNum===2 & lastNum.length!==0){return setFocus()}
        if (znak==="+"){return setFocus()}
        if (znak!==""){
            document.getElementById("arhiv").innerHTML=result + "+";
            znak="+";
            return setFocus();
        }
        if (znak===""){
            document.getElementById("arhiv").innerHTML=result + "+";
            znak="+";
            firstLastNum=2;
            i=0;
            histor[j]=document.getElementById("result").value;
            j++;
            testNum="";
            dlinaPole=0;
            point=0;
            document.getElementById("result").value = "";
        } 
    }

}  
function funre(){
    if (ravno===0){
        if (firstNum.length===0){return setFocus()}
        if (firstLastNum===2 & lastNum.length!==0){return setFocus()}

        if (znak==="-"){return setFocus()}
        if (znak!==""){
            document.getElementById("arhiv").innerHTML=firstNum.join("") + "-";
            znak="-";
            return setFocus();
        }
        if (znak===""){
            document.getElementById("arhiv").innerHTML=firstNum.join("") + "-";
            znak="-";
            firstLastNum=2;
            i=0;
            histor[j]=document.getElementById("result").value;
            j++;
            testNum="";
            dlinaPole=0;
            point=0;
            document.getElementById("result").value = "";
        } 
    }
    else if (ravno===1){
        document.getElementById("arhiv").innerHTML=result;
        document.getElementById("result").value = "";
        console.log(lastNum.length);
        lastNum=[]  //--------------------error
        document.getElementById("arhiv").innerHTML=result + "-";
        ctrlravno=2;
        if (firstLastNum===2 & lastNum.length!==0){return setFocus()}
        if (znak==="-"){return setFocus()}
        if (znak!==""){
            document.getElementById("arhiv").innerHTML=result + "-";
            znak="-";
            return setFocus();
        }
        if (znak===""){
            document.getElementById("arhiv").innerHTML=result + "-";
            znak="-";
            firstLastNum=2;
            i=0;
            histor[j]=document.getElementById("result").value;
            j++;
            testNum="";
            dlinaPole=0;
            point=0;
            document.getElementById("result").value = "";
        } 
    }
}  
function fundel(){
    if (ravno===0){
        if (firstNum.length===0){return setFocus()}
        console.log(lastNum.length);
        if (firstLastNum===2 & lastNum.length!==0){return setFocus()}
        if (znak==="/"){return setFocus()}
        if (znak!==""){
            document.getElementById("arhiv").innerHTML=firstNum.join("") + "/";
            znak="/";
            return setFocus();
        }
        if (znak===""){
            document.getElementById("arhiv").innerHTML=firstNum.join("") + "/";
            znak="/";
            firstLastNum=2;
            i=0;
            histor[j]=document.getElementById("result").value;
            j++;
            testNum="";
            dlinaPole=0;
            point=0;
            document.getElementById("result").value = "";
        }
    } 
    else if (ravno===1){
        document.getElementById("arhiv").innerHTML=result;
        document.getElementById("result").value = "";
        console.log(lastNum.length);
        lastNum=[]  //--------------------error
        document.getElementById("arhiv").innerHTML=result + "/";
        ctrlravno=2;
        if (firstLastNum===2 & lastNum.length!==0){return setFocus()}
        if (znak==="/"){return setFocus()}
        if (znak!==""){
            document.getElementById("arhiv").innerHTML=result + "/";
            znak="/";
            return setFocus();
        }
        if (znak===""){
            document.getElementById("arhiv").innerHTML=result + "/";
            znak="/";
            firstLastNum=2;
            i=0;
            histor[j]=document.getElementById("result").value;
            j++;
            testNum="";
            dlinaPole=0;
            point=0;
            document.getElementById("result").value = "";
        } 
    }
}  
function funss(){
    if (ravno===0){
        if (firstNum.length===0){return setFocus()}
        if (firstLastNum===2 & lastNum.length!==0){return setFocus()}

        if (znak==="x"){return setFocus()}
        if (znak!==""){
            document.getElementById("arhiv").innerHTML=firstNum.join("") + "x";
            znak="x";
            return setFocus();
        }
        if (znak===""){
            document.getElementById("arhiv").innerHTML=firstNum.join("") + "x";
            znak="x";
            firstLastNum=2;
            i=0;
            histor[j]=document.getElementById("result").value;
            j++;
            testNum="";
            dlinaPole=0;
            point=0;
            document.getElementById("result").value = "";
        }
    }
    else if (ravno===1){
        document.getElementById("arhiv").innerHTML=result;
        document.getElementById("result").value = "";
        console.log(lastNum.length);
        lastNum=[]  //--------------------error
        document.getElementById("arhiv").innerHTML=result + "x";
        if (firstLastNum===2 & lastNum.length!==0){return setFocus()}
        ctrlravno=2;
        if (znak==="x"){return setFocus()}
        if (znak!==""){
            document.getElementById("arhiv").innerHTML=result + "x";
            znak="x";
            return setFocus();
        }
        console.log(znak);
        if (znak===""){
            document.getElementById("arhiv").innerHTML=result + "x";
            znak="x";
            firstLastNum=2;
            i=0;
            histor[j]=document.getElementById("result").value;
            j++;
            testNum="";
            dlinaPole=0;
            point=0;
            document.getElementById("result").value = "";
        } 
    }
}  
    function funBackspace(){
        if (ravno===1 & firstLastNum===2 & znak!=="" & lastNum.join("")===""){
            znak="";
            document.getElementById("arhiv").innerHTML=result + ""    
            return setFocus(); 
 
        }
        if (znak!=="" & lastNum.join("")===""){
            znak="";
            document.getElementById("arhiv").innerHTML=firstNum.join("") + ""    
            return setFocus(); 
        }
        if(i===0){return setFocus();
        }
        i--;
        if (firstLastNum===1){
            firstNum.pop();
            console.log(firstNum);
            document.getElementById("result").value=firstNum.join("");
            console.log(testNum);
            console.log(i);
            if (testNum===1 || testNum===2 & i===1 ){
                testNum="";
            }
        }
        if (firstLastNum===2){
            lastNum.pop();
            console.log(lastNum);
            document.getElementById("result").value=lastNum.join("");
            console.log(testNum);
            console.log(i);
            if (testNum===1 || testNum===2 & i===1 ){
                testNum="";
            }
        }

        return setFocus(); 
        }
    function funKeyPeriod(){
        console.log(document.getElementById("result").value.length);
        if (document.getElementById("result").value.length!==0 & point===0 & firstLastNum===2 & ravno===1 & testNum===""){return setFocus()}
        if (ravno===1 & point===1){return setFocus();}
        if (testNum===1){return setFocus()}
        if (point===1){return setFocus()}
        else if(testNum===""){
              console.log(testNum);
                if (firstLastNum===1) {
                    testNum=1;
                    i++;
                    firstNum[i]=document.getElementById("result").value="0";
                    i++;
                    firstNum[i]=document.getElementById("result").value=".";
                    i++;
                    document.getElementById("result").value=firstNum.join("");
                    return setFocus();
                }
                if (firstLastNum===2) {
                    testNum=1;
                    i++;
                    lastNum[i]=document.getElementById("result").value="0";
                    i++;
                    lastNum[i]=document.getElementById("result").value=".";
                    i++;
                    document.getElementById("result").value=lastNum.join("");
                    return setFocus();
                }

                    
        }
        else if (testNum===0){

        }
        else if (testNum===2){
                if (firstLastNum===1){
                firstNum[i]=document.getElementById("result").value=".";
                document.getElementById("result").value=firstNum.join("");
                point=1;
                }
                if (firstLastNum===2){
                    lastNum[i]=document.getElementById("result").value=".";
                    document.getElementById("result").value=lastNum.join("");
                    point=1;
                    }
        }
                i++;
        console.log(i);
        }
function funResult(){
    if (firstNum.length===0 || lastNum.length===0){return setFocus()}

    if (ravno===0){
        document.getElementById("arhiv").innerHTML=firstNum.join("") + znak + lastNum.join("");
        if (znak==="+"){
            result=Number(firstNum.join("")) + Number(lastNum.join(""));
        }
        else if (znak==="x"){
            result = (Number(firstNum.join(""))) * (Number(lastNum.join("")));
        }
        else if (znak==="/"){
            result=Number(firstNum.join("")) / Number(lastNum.join(""));
        }
        else if (znak==="-"){
            result=Number(firstNum.join("")) - Number(lastNum.join(""));
        }
    }
    else if (ravno===1){
        document.getElementById("arhiv").innerHTML=result + znak + lastNum.join("");
        if (znak==="+"){
            result=result + Number(lastNum.join(""));
        }
        else if (znak==="x"){
            result = result * (Number(lastNum.join("")));
        }
        else if (znak==="/"){
            result=result / Number(lastNum.join(""));
        }
        else if (znak==="-"){
            result=result - Number(lastNum.join(""));
        }
    }

    if (String(result).length>=13){
        document.getElementById("result").value = result.toPrecision(8)
    }
    else if (String(result).length<13){
        document.getElementById("result").value = result;
    }
    ravno=1;
    testNum="";
    ctrlravno=1;
    return setFocus();
}



document.querySelector('#Key0').addEventListener('click', () => {
    funKey0()
})
document.querySelector('#Key1').addEventListener('click', () => {
    funKey1()
})
document.querySelector('#Key2').addEventListener('click', () => {
    funKey2()
})
document.querySelector('#Key3').addEventListener('click', () => {
    funKey3()
})
document.querySelector('#Key4').addEventListener('click', () => {
    funKey4()
})
document.querySelector('#Key5').addEventListener('click', () => {
    funKey5()
})
document.querySelector('#Key6').addEventListener('click', () => {
    funKey6()
})
document.querySelector('#Key7').addEventListener('click', () => {
    funKey7()
})
document.querySelector('#Key8').addEventListener('click', () => {
    funKey8()
})
document.querySelector('#Key9').addEventListener('click', () => {
    funKey9()
})
document.querySelector('#ravno').addEventListener('click', () => {
    funResult()
})
document.querySelector('#point').addEventListener('click', () => {
    funKeyPeriod()
})
document.querySelector('#c').addEventListener('click', () => {
    funC()
})
document.querySelector('#bs').addEventListener('click', () => {
    funBackspace()
})
document.querySelector('#del').addEventListener('click', () => {
    fundel()
})
document.querySelector('#ss').addEventListener('click', () => {
    funss()
})
document.querySelector('#re').addEventListener('click', () => {
    funre()
})
document.querySelector('#sum').addEventListener('click', () => {
    funsum()
})
