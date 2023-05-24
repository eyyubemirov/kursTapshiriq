import inquirer from "inquirer";
import fs  from 'fs';


const prompts=inquirer.createPromptModule();





function showMyBalance () {
    const data = fs.readFileSync('./balans.txt', 'utf-8');

    if (!data.trim()) {
        return 0;
    }

    return data
        .trim()
        .split(',')
        .filter(str => str.trim().length > 0)
        .reduce((a, b) => parseFloat(a) + parseFloat(b));
}


function pullchek(amount){
    const dat=fs.readFileSync('nominallar.txt','utf-8');
    const myBalance=showMyBalance();
    if(myBalance>amount){
    fs.appendFileSync('./balans.txt',-amount+",",'utf-8');
    var ayir=dat.split(" ");
    var bazaarr=[];
    var bankarr=[];
    
   
    const nominal=[100,50,20,10,5,1];
    for(let i=0;i<nominal.length;i++){
        let say=Math.floor(amount/nominal[i]);
        var nominalqiymet=ayir[i].split("-")[0];
        var pullsayi=ayir[i].split("-")[1];
        var pullInt=parseInt(pullsayi);

        if(say<=pullInt){
            var numsay2=pullInt-say;
            var str=nominalqiymet+"-"+numsay2;
            bazaarr.push(str);
            bankarr.push(say);

            str="";
            amount=amount%nominal[i];
        }
        else{
            return "pul yoxdur";
        }
    }
    var son_str=bazaarr.join(" ");
    fs.writeFileSync('./nominallar.txt', son_str,'utf-8');
    return bankarr.reverse();
}
else{
    return "balansinizda kifayet qeder vesait yoxdur";
}

}



function nominal_artirmaq(nominal,count){

    const data2 =fs.readFileSync('nominallar.txt','utf-8');
    var num=data2.split(" ");
    
        var arr=[];
    for(let i=0;i<num.length;i++){
    let say=num[i].split("-")[1];
    let n=num[i].split("-")[0];
    let sayint=parseInt(say);
    
    if(nominal==n){
    var say2=sayint+count;
    var fsr=nominal+"-"+say2;
    arr.push(fsr);
    }
    
    else{
        let fsr2=n+"-"+say;
        arr.push(fsr2);
    }
    
    
    }
    const str2=arr.join(" ");
    fs.writeFileSync('nominallar.txt',str2,'utf-8');
    return "balans ugurla artirildi:)";
    
    }
    

function see_numinal(){
    const data=fs.readFileSync('./nominallar.txt','utf-8');
    let nominal=data.split(" ");
    var arr=[];
    var nominallar=[100,50,20,10,5,1];
    for(let i=0;i<nominallar.length;i++){
        let say=nominal[i].split("-")[1];
        let str=nominallar[i]+"azn"+"-"+say+"eded";
        arr.push(str);
        str="";
    }
    return arr;
    
}


/*terminaldaki suallar*/

async function bashlamaq(){
    while(true){
        var netice=await prompts([
            {
                massage:'emeliyyat secin',
                type:'list',
                choices:['Balans','Pul chek','nominallara bax','nominallari artir'],
                name:"secim"

            }
        ]);
        switch(netice.secim){
            case 'Balans':
            const balance = showMyBalance();
            console.log("Sizin balansiniz:", balance, '$');
            console.log("============================");
            break;
           
            case 'Pul chek':
                const cavab2 = await prompts([
                    {
                        message: 'meblegi daxil edin',
                        type: 'number',
                        name: 'amount'
                    }
                ]);

                console.log(pullchek(cavab2.amount));
                break;
            case 'nominallara bax':
                    const pul=see_numinal();
                    console.log(pul);
                    break;

                    case 'nominallari artir':
                        const cav=await prompts([{
                            massage:'artirmaq istediyiniz eskinasi   secin',
                            type:'list',
                            choices:['100','50','20','10','5','1'],
                            name:'secim2'
                        }]);
                        switch(cav.secim2){
                            case '100':
                                const sual1=await prompts([{
                                    massage:'miqdar daxil edin',
                                    type:'number',
                                    name:'say'
                                }])
                                console.log(nominal_artirmaq(cav.secim2,sual1.say));

                                break;
                                case '50':
                                const sual2=await prompts([{
                                    massage:'miqdar daxil edin',
                                    type:'number',
                                    name:'say'
                                }])
                                console.log(nominal_artirmaq(cav.secim2,sual2.say));

                                break;
                                case '20':
                                const sual3=await prompts([{
                                    massage:'miqdar daxil edin',
                                    type:'number',
                                    name:'say'
                                }])
                                console.log(nominal_artirmaq(cav.secim2,sual3.say));

                                break;
                                case '10':
                                const sual4=await prompts([{
                                    massage:'miqdar daxil edin',
                                    type:'number',
                                    name:'say'
                                }])
                                console.log(nominal_artirmaq(cav.secim2,sual4.say));

                                break;
                                case '5':
                                const sual5=await prompts([{
                                    massage:'miqdar daxil edin',
                                    type:'number',
                                    name:'say'
                                }])
                                console.log(nominal_artirmaq(cav.secim2,sual5.say));

                                break;
                                case '1':
                                const sual6=await prompts([{
                                    massage:'miqdar daxil edin',
                                    type:'number',
                                    name:'say'
                                }])
                                console.log(nominal_artirmaq(cav.secim2,sual6.say));

                                break;
                        }
                       break;
        }
        const secim = await prompts([
            {
                message: 'Davam etmek isteyirsinizmi?',
                type: 'confirm',
                name: 'secim'
            }
        ]);

        if (!secim.secim) {
            console.log("sagolun:)");
            break;
        }
    }
}
    
console.log(bashlamaq());