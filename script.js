function dec2bin8(dec){
    var binario = (dec >>> 0).toString(2);
    return ("0".repeat(8) + binario).substr(-8);
}

function calculaip(){
    var inp1 = document.getElementById("inp1").value;
    var resultado = document.getElementById("resultado");
    var selectIp = document.getElementById("selectIp");
    var ip = inp1.split('.');
    var mask = (selectIp.options[selectIp.selectedIndex].text).split('.');

    var retornoIp = "", retornoMask = "", retornoIpRede = "", retornoIpBroadcast = "";
    var soma;

    if(inp1 == "")
        alert("Informe o IP ô trouxa!")
    else{
        for(var i = 0; i <= 3; i++){
            retornoIp += dec2bin8(ip[i]);
            retornoMask += dec2bin8(mask[i]);
        
            if(mask[i] == 255){
                retornoIpRede += ip[i];
                retornoIpBroadcast += ip[i];
            }
            else{
                retornoIpRede += ip[i] & mask[i];
                soma = parseInt(retornoIpRede.split('.')[i]) + (mask[i] ^ 255);
                retornoIpBroadcast += (soma);
            }

            if(i != 3){
                retornoIp += '.';
                retornoMask += '.';
                retornoIpRede += '.';
                retornoIpBroadcast += '.';
            }
        }

        resultado.innerHTML = "<p> IP Binário: " + retornoIp + "</p>" +
                              "<p> Máscara Binária: " + retornoMask + "</p>" +
                              "<p>" + "IP da Rede: " + retornoIpRede + "</p>" +
                              "<p>" + "IP de Broadcast: " + retornoIpBroadcast + "</p>"


    }


}