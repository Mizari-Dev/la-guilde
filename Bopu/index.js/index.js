const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('pong');
  }
  
  if (msg.content === 'roll') {
    var random = Math.floor(Math.random() * maxRandom ) + 1;
    msg.channel.send(random);
  }

  if (msg.content === 'name'){
  	var namerandom = Math.floor(Math.random() * 100 ) + 1;
  	if (namerandom === 1){
  		one = 'A';
  	}
  	if (namerandom === 2){
  		one = 'E';
  	}
  	if (namerandom === 3){
  		one = 'I';
  	}
  	if (namerandom === 4){
  		one = 'O';
  	}
  	if (namerandom === 5){
  		one = 'U';
  	}
  	if (namerandom === 6){
  		one = 'Ba';
  	}
  	if (namerandom === 7){
  		one = 'Be';
  	}
  	if (namerandom === 8){
  		one = 'Bi';
  	}
  	if (namerandom === 9){
  		one = 'Bo';
  	}
  	if (namerandom === 10){
  		one = 'Bu';
  	}
  	if (namerandom === 11){
  		one = 'Ca';
  	}
  	if (namerandom === 12){
  		one = 'Ce';
  	}
  	if (namerandom === 13){
  		one = 'Ci';
  	}
  	if (namerandom === 14){
  		one = 'Co';
  	}
  	if (namerandom === 15){
  		one = 'Cu';
  	}
  	if (namerandom === 16){
  		one = 'Da';
  	}
  	if (namerandom === 17){
  		one = 'De';
  	}
  	if (namerandom === 18){
  		one = 'Di';
  	}
  	if (namerandom === 19){
  		one = 'Do';
  	}
  	if (namerandom === 20){
  		one = 'Du';
  	}
  	if (namerandom === 21){
  		one = 'Fa';
  	}
  	if (namerandom === 22){
  		one = 'Fe';
  	}
  	if (namerandom === 23){
  		one = 'Fi';
  	}
  	if (namerandom === 24){
  		one = 'Fo';
  	}
  	if (namerandom === 25){
  		one = 'Fu';
  	}
  	if (namerandom === 26){
  		one = 'Ga';
  	}
  	if (namerandom === 27){
  		one = 'Ge';
  	}
  	if (namerandom === 28){
  		one = 'Gi';
  	}
  	if (namerandom === 29){
  		one = 'Go';
  	}
  	if (namerandom === 30){
  		one = 'Gu';
  	}
  	if (namerandom === 31){
  		one = 'Ja';
  	}
  	if (namerandom === 32){
  		one = 'Je';
  	}
  	if (namerandom === 33){
  		one = 'Ji';
  	}
  	if (namerandom === 34){
  		one = 'Jo';
  	}
  	if (namerandom === 35){
  		one = 'Ju';
  	}
  	if (namerandom === 36){
  		one = 'Ka';
  	}
  	if (namerandom === 37){
  		one = 'Ke';
  	}
  	if (namerandom === 38){
  		one = 'Ki';
  	}
  	if (namerandom === 39){
  		one = 'Ko';
  	}
  	if (namerandom === 40){
  		one = 'Ku';
  	}
  	if (namerandom === 41){
  		one = 'La';
  	}
  	if (namerandom === 42){
  		one = 'Le';
  	}
  	if (namerandom === 43){
  		one = 'Li';
  	}
  	if (namerandom === 44){
  		one = 'Lo';
  	}
  	if (namerandom === 45){
  		one = 'Lu';
  	}
  	if (namerandom === 46){
  		one = 'Ma';
  	}
  	if (namerandom === 47){
  		one = 'Me';
  	}
  	if (namerandom === 48){
  		one = 'Mi';
  	}
  	if (namerandom === 49){
  		one = 'Mo';
  	}
  	if (namerandom === 50){
  		one = 'Mu';
  	}
  	if (namerandom === 51){
  		one = 'Na';
  	}
  	if (namerandom === 52){
  		one = 'Ne';
  	}
  	if (namerandom === 53){
  		one = 'Ni';
  	}
  	if (namerandom === 54){
  		one = 'No';
  	}
  	if (namerandom === 55){
  		one = 'Nu';
  	}
  	if (namerandom === 56){
  		one = 'Pa';
  	}
  	if (namerandom === 57){
  		one = 'Pe';
  	}
  	if (namerandom === 58){
  		one = 'Pi';
  	}
  	if (namerandom === 59){
  		one = 'Po';
  	}
  	if (namerandom === 60){
  		one = 'Pu';
  	}
  	if (namerandom === 61){
  		one = 'Qu';
  	}
  	if (namerandom === 62){
  		one = 'Ra';
  	}
  	if (namerandom === 63){
  		one = 'Re';
  	}
  	if (namerandom === 64){
  		one = 'Ri';
  	}
  	if (namerandom === 65){
  		one = 'Ro';
  	}
  	if (namerandom === 66){
  		one = 'Ru';
  	}
  	if (namerandom === 67){
  		one = 'Sa';
  	}
  	if (namerandom === 68){
  		one = 'Se';
  	}
  	if (namerandom === 69){
  		one = 'Si';
  	}
  	if (namerandom === 70){
  		one = 'So';
  	}
  	if (namerandom === 71){
  		one = 'Su';
  	}
  	if (namerandom === 72){
  		one = 'Ta';
  	}
  	if (namerandom === 73){
  		one = 'Te';
  	}
  	if (namerandom === 74){
  		one = 'Ti';
  	}
  	if (namerandom === 75){
  		one = 'To';
  	}
  	if (namerandom === 76){
  		one = 'Tu';
  	}
  	if (namerandom === 77){
  		one = 'Va';
  	}
  	if (namerandom === 78){
  		one = 'Ve';
  	}
  	if (namerandom === 79){
  		one = 'Vi';
  	}
  	if (namerandom === 80){
  		one = 'Vo';
  	}
  	if (namerandom === 81){
  		one = 'Vu';
  	}
  	if (namerandom === 82){
  		one = 'Wa';
  	}
  	if (namerandom === 83){
  		one = 'We';
  	}
  	if (namerandom === 84){
  		one = 'Wi';
  	}
  	if (namerandom === 85){
  		one = 'Wo';
  	}
  	if (namerandom === 86){
  		one = 'Wu';
  	}
  	if (namerandom === 87){
  		one = 'Xa';
  	}
  	if (namerandom === 88){
  		one = 'Xe';
  	}
  	if (namerandom === 89){
  		one = 'Xi';
  	}
  	if (namerandom === 90){
  		one = 'Xo';
  	}
  	if (namerandom === 91){
  		one = 'Xu';
  	}
  	if (namerandom === 92){
  		one = 'Ya';
  	}
  	if (namerandom === 93){
  		one = 'Ye';
  	}
  	if (namerandom === 94){
  		one = 'Yo';
  	}
  	if (namerandom === 95){
  		one = 'Yu';
  	}
  	if (namerandom === 96){
  		one = 'Za';
  	}
  	if (namerandom === 97){
  		one = 'Ze';
  	}
  	if (namerandom === 98){
  		one = 'Zi';
  	}
  	if (namerandom === 99){
  		one = 'Zo';
  	}
  	if (namerandom === 100){
  		one = 'Zu';
  	}

  	var namerandomtow = Math.floor(Math.random() * 120 ) + 1;
  	if (namerandomtow === 1){
  		tow = 'a';
  	}
  	if (namerandomtow === 2){
  		tow = 'e';
  	}
  	if (namerandomtow === 3){
  		tow = 'i';
  	}
  	if (namerandomtow === 4){
  		tow = 'o';
  	}
  	if (namerandomtow === 5){
  		tow = 'u';
  	}
  	if (namerandomtow === 6){
  		tow = 'ba';
  	}
  	if (namerandomtow === 7){
  		tow = 'be';
  	}
  	if (namerandomtow === 8){
  		tow = 'bi';
  	}
  	if (namerandomtow === 9){
  		tow = 'bo';
  	}
  	if (namerandomtow === 10){
  		tow = 'bu';
  	}
  	if (namerandomtow === 11){
  		tow = 'ca';
  	}
  	if (namerandomtow === 12){
  		tow = 'ce';
  	}
  	if (namerandomtow === 13){
  		tow = 'ci';
  	}
  	if (namerandomtow === 14){
  		tow = 'co';
  	}
  	if (namerandomtow === 15){
  		tow = 'cu';
  	}
  	if (namerandomtow === 16){
  		tow = 'da';
  	}
  	if (namerandomtow === 17){
  		tow = 'de';
  	}
  	if (namerandomtow === 18){
  		tow = 'di';
  	}
  	if (namerandomtow === 19){
  		tow = 'do';
  	}
  	if (namerandomtow === 20){
  		tow = 'du';
  	}
  	if (namerandomtow === 21){
  		tow = 'fa';
  	}
  	if (namerandomtow === 22){
  		tow = 'fe';
  	}
  	if (namerandomtow === 23){
  		tow = 'fi';
  	}
  	if (namerandomtow === 24){
  		tow = 'fo';
  	}
  	if (namerandomtow === 25){
  		tow = 'fu';
  	}
  	if (namerandomtow === 26){
  		tow = 'ga';
  	}
  	if (namerandomtow === 27){
  		tow = 'ge';
  	}
  	if (namerandomtow === 28){
  		tow = 'gi';
  	}
  	if (namerandomtow === 29){
  		tow = 'go';
  	}
  	if (namerandomtow === 30){
  		tow = 'gu';
  	}
  	if (namerandomtow === 31){
  		tow = 'ja';
  	}
  	if (namerandomtow === 32){
  		tow = 'je';
  	}
  	if (namerandomtow === 33){
  		tow = 'ji';
  	}
  	if (namerandomtow === 34){
  		tow = 'jo';
  	}
  	if (namerandomtow === 35){
  		tow = 'ju';
  	}
  	if (namerandomtow === 36){
  		tow = 'ka';
  	}
  	if (namerandomtow === 37){
  		tow = 'ke';
  	}
  	if (namerandomtow === 38){
  		tow = 'ki';
  	}
  	if (namerandomtow === 39){
  		tow = 'ko';
  	}
  	if (namerandomtow === 40){
  		tow = 'ku';
  	}
  	if (namerandomtow === 41){
  		tow = 'la';
  	}
  	if (namerandomtow === 42){
  		tow = 'le';
  	}
  	if (namerandomtow === 43){
  		tow = 'li';
  	}
  	if (namerandomtow === 44){
  		tow = 'lo';
  	}
  	if (namerandomtow === 45){
  		tow = 'lu';
  	}
  	if (namerandomtow === 46){
  		tow = 'ma';
  	}
  	if (namerandomtow === 47){
  		tow = 'me';
  	}
  	if (namerandomtow === 48){
  		tow = 'mi';
  	}
  	if (namerandomtow === 49){
  		tow = 'mo';
  	}
  	if (namerandomtow === 50){
  		tow = 'mu';
  	}
  	if (namerandomtow === 51){
  		tow = 'na';
  	}
  	if (namerandomtow === 52){
  		tow = 'ne';
  	}
  	if (namerandomtow === 53){
  		tow = 'ni';
  	}
  	if (namerandomtow === 54){
  		tow = 'no';
  	}
  	if (namerandomtow === 55){
  		tow = 'nu';
  	}
  	if (namerandomtow === 56){
  		tow = 'pa';
  	}
  	if (namerandomtow === 57){
  		tow = 'pe';
  	}
  	if (namerandomtow === 58){
  		tow = 'pi';
  	}
  	if (namerandomtow === 59){
  		tow = 'po';
  	}
  	if (namerandomtow === 60){
  		tow = 'pu';
  	}
  	if (namerandomtow === 61){
  		tow = 'qu';
  	}
  	if (namerandomtow === 62){
  		tow = 'ra';
  	}
  	if (namerandomtow === 63){
  		tow = 're';
  	}
  	if (namerandomtow === 64){
  		tow = 'ri';
  	}
  	if (namerandomtow === 65){
  		tow = 'ro';
  	}
  	if (namerandomtow === 66){
  		tow = 'ru';
  	}
  	if (namerandomtow === 67){
  		tow = 'sa';
  	}
  	if (namerandomtow === 68){
  		tow = 'se';
  	}
  	if (namerandomtow === 69){
  		tow = 'si';
  	}
  	if (namerandomtow === 70){
  		tow = 'so';
  	}
  	if (namerandomtow === 71){
  		tow = 'su';
  	}
  	if (namerandomtow === 72){
  		tow = 'ta';
  	}
  	if (namerandomtow === 73){
  		tow = 'te';
  	}
  	if (namerandomtow === 74){
  		tow = 'ti';
  	}
  	if (namerandomtow === 75){
  		tow = 'to';
  	}
  	if (namerandomtow === 76){
  		tow = 'tu';
  	}
  	if (namerandomtow === 77){
  		tow = 'va';
  	}
  	if (namerandomtow === 78){
  		tow = 've';
  	}
  	if (namerandomtow === 79){
  		tow = 'vi';
  	}
  	if (namerandomtow === 80){
  		tow = 'vo';
  	}
  	if (namerandomtow === 81){
  		tow = 'vu';
  	}
  	if (namerandomtow === 82){
  		tow = 'wa';
  	}
  	if (namerandomtow === 83){
  		tow = 'we';
  	}
  	if (namerandomtow === 84){
  		tow = 'wi';
  	}
  	if (namerandomtow === 85){
  		tow = 'wo';
  	}
  	if (namerandomtow === 86){
  		tow = 'wu';
  	}
  	if (namerandomtow === 87){
  		tow = 'xa';
  	}
  	if (namerandomtow === 88){
  		tow = 'xe';
  	}
  	if (namerandomtow === 89){
  		tow = 'xi';
  	}
  	if (namerandomtow === 90){
  		tow = 'xo';
  	}
  	if (namerandomtow === 91){
  		tow = 'xu';
  	}
  	if (namerandomtow === 92){
  		tow = 'ya';
  	}
  	if (namerandomtow === 93){
  		tow = 'ye';
  	}
  	if (namerandomtow === 94){
  		tow = 'yo';
  	}
  	if (namerandomtow === 95){
  		tow = 'yu';
  	}
  	if (namerandomtow === 96){
  		tow = 'za';
  	}
  	if (namerandomtow === 97){
  		tow = 'ze';
  	}
  	if (namerandomtow === 98){
  		tow = 'zi';
  	}
  	if (namerandomtow === 99){
  		tow = 'zo';
  	}
  	if (namerandomtow === 100){
  		tow = 'zu';
  	}
  	
  	var namerandomthree = Math.floor(Math.random() * 120 ) + 1;
  	if (namerandomthree === 1){
  		three = 'a';
  	}
  	if (namerandomthree === 2){
  		three = 'e';
  	}
  	if (namerandomthree === 3){
  		three = 'i';
  	}
  	if (namerandomthree === 4){
  		three = 'o';
  	}
  	if (namerandomthree === 5){
  		three = 'u';
  	}
  	if (namerandomthree === 6){
  		three = 'ba';
  	}
  	if (namerandomthree === 7){
  		three = 'be';
  	}
  	if (namerandomthree === 8){
  		three = 'bi';
  	}
  	if (namerandomthree === 9){
  		three = 'bo';
  	}
  	if (namerandomthree === 10){
  		three = 'bu';
  	}
  	if (namerandomthree === 11){
  		three = 'ca';
  	}
  	if (namerandomthree === 12){
  		three = 'ce';
  	}
  	if (namerandomthree === 13){
  		three = 'ci';
  	}
  	if (namerandomthree === 14){
  		three = 'co';
  	}
  	if (namerandomthree === 15){
  		three = 'cu';
  	}
  	if (namerandomthree === 16){
  		three = 'da';
  	}
  	if (namerandomthree === 17){
  		three = 'de';
  	}
  	if (namerandomthree === 18){
  		three = 'di';
  	}
  	if (namerandomthree === 19){
  		three = 'do';
  	}
  	if (namerandomthree === 20){
  		three = 'du';
  	}
  	if (namerandomthree === 21){
  		three = 'fa';
  	}
  	if (namerandomthree === 22){
  		three = 'fe';
  	}
  	if (namerandomthree === 23){
  		three = 'fi';
  	}
  	if (namerandomthree === 24){
  		three = 'fo';
  	}
  	if (namerandomthree === 25){
  		three = 'fu';
  	}
  	if (namerandomthree === 26){
  		three = 'ga';
  	}
  	if (namerandomthree === 27){
  		three = 'ge';
  	}
  	if (namerandomthree === 28){
  		three = 'gi';
  	}
  	if (namerandomthree === 29){
  		three = 'go';
  	}
  	if (namerandomthree === 30){
  		three = 'gu';
  	}
  	if (namerandomthree === 31){
  		three = 'ja';
  	}
  	if (namerandomthree === 32){
  		three = 'je';
  	}
  	if (namerandomthree === 33){
  		three = 'ji';
  	}
  	if (namerandomthree === 34){
  		three = 'jo';
  	}
  	if (namerandomthree === 35){
  		three = 'ju';
  	}
  	if (namerandomthree === 36){
  		three = 'ka';
  	}
  	if (namerandomthree === 37){
  		three = 'ke';
  	}
  	if (namerandomthree === 38){
  		three = 'ki';
  	}
  	if (namerandomthree === 39){
  		three = 'ko';
  	}
  	if (namerandomthree === 40){
  		three = 'ku';
  	}
  	if (namerandomthree === 41){
  		three = 'la';
  	}
  	if (namerandomthree === 42){
  		three = 'le';
  	}
  	if (namerandomthree === 43){
  		three = 'li';
  	}
  	if (namerandomthree === 44){
  		three = 'lo';
  	}
  	if (namerandomthree === 45){
  		three = 'lu';
  	}
  	if (namerandomthree === 46){
  		three = 'ma';
  	}
  	if (namerandomthree === 47){
  		three = 'me';
  	}
  	if (namerandomthree === 48){
  		three = 'mi';
  	}
  	if (namerandomthree === 49){
  		three = 'mo';
  	}
  	if (namerandomthree === 50){
  		three = 'mu';
  	}
  	if (namerandomthree === 51){
  		three = 'na';
  	}
  	if (namerandomthree === 52){
  		three = 'ne';
  	}
  	if (namerandomthree === 53){
  		three = 'ni';
  	}
  	if (namerandomthree === 54){
  		three = 'no';
  	}
  	if (namerandomthree === 55){
  		three = 'nu';
  	}
  	if (namerandomthree === 56){
  		three = 'pa';
  	}
  	if (namerandomthree === 57){
  		three = 'pe';
  	}
  	if (namerandomthree === 58){
  		three = 'pi';
  	}
  	if (namerandomthree === 59){
  		three = 'po';
  	}
  	if (namerandomthree === 60){
  		three = 'pu';
  	}
  	if (namerandomthree === 61){
  		three = 'qu';
  	}
  	if (namerandomthree === 62){
  		three = 'ra';
  	}
  	if (namerandomthree === 63){
  		three = 're';
  	}
  	if (namerandomthree === 64){
  		three = 'ri';
  	}
  	if (namerandomthree === 65){
  		three = 'ro';
  	}
  	if (namerandomthree === 66){
  		three = 'ru';
  	}
  	if (namerandomthree === 67){
  		three = 'sa';
  	}
  	if (namerandomthree === 68){
  		three = 'se';
  	}
  	if (namerandomthree === 69){
  		three = 'si';
  	}
  	if (namerandomthree === 70){
  		three = 'so';
  	}
  	if (namerandomthree === 71){
  		three = 'su';
  	}
  	if (namerandomthree === 72){
  		three = 'ta';
  	}
  	if (namerandomthree === 73){
  		three = 'te';
  	}
  	if (namerandomthree === 74){
  		three = 'ti';
  	}
  	if (namerandomthree === 75){
  		three = 'to';
  	}
  	if (namerandomthree === 76){
  		three = 'tu';
  	}
  	if (namerandomthree === 77){
  		three = 'va';
  	}
  	if (namerandomthree === 78){
  		three = 've';
  	}
  	if (namerandomthree === 79){
  		three = 'vi';
  	}
  	if (namerandomthree === 80){
  		three = 'vo';
  	}
  	if (namerandomthree === 81){
  		three = 'vu';
  	}
  	if (namerandomthree === 82){
  		three = 'wa';
  	}
  	if (namerandomthree === 83){
  		three = 'we';
  	}
  	if (namerandomthree === 84){
  		three = 'wi';
  	}
  	if (namerandomthree === 85){
  		three = 'wo';
  	}
  	if (namerandomthree === 86){
  		three = 'wu';
  	}
  	if (namerandomthree === 87){
  		three = 'xa';
  	}
  	if (namerandomthree === 88){
  		three = 'xe';
  	}
  	if (namerandomthree === 89){
  		three = 'xi';
  	}
  	if (namerandomthree === 90){
  		three = 'xo';
  	}
  	if (namerandomthree === 91){
  		three = 'xu';
  	}
  	if (namerandomthree === 92){
  		three = 'ya';
  	}
  	if (namerandomthree === 93){
  		three = 'ye';
  	}
  	if (namerandomthree === 94){
  		three = 'yo';
  	}
  	if (namerandomthree === 95){
  		three = 'yu';
  	}
  	if (namerandomthree === 96){
  		three = 'za';
  	}
  	if (namerandomthree === 97){
  		three = 'ze';
  	}
  	if (namerandomthree === 98){
  		three = 'zi';
  	}
  	if (namerandomthree === 99){
  		three = 'zo';
  	}
  	if (namerandomthree === 100){
  		three = 'zu';
  	}
  	if (namerandomthree === 101 || namerandomthree === 102 || namerandomthree === 103 || namerandomthree === 104 || namerandomthree === 105 || namerandomthree === 106 || namerandomthree === 107 || namerandomthree === 108 || namerandomthree === 109 || namerandomthree === 110 || namerandomthree === 111 || namerandomthree === 112 || namerandomthree === 113 || namerandomthree === 114 || namerandomthree === 115 || namerandomthree === 116 || namerandomthree === 117 || namerandomthree === 118 || namerandomthree === 119 || namerandomthree === 120) {
  		three = ' ';
  	}
  	var nameTotal = one + tow + three
  	msg.channel.send(nameTotal);
  	console.log(nameTotal);
  }

  if(msg.content === 'help'){
  	var embed = new Discord.RichEmbed()
  		.setTitle('Comandes')
  		.setDescription('voici une liste des commandes')
  		.addField('help', 'affiche la liste des commandes')
  		.addField('ping', 'repond par pong c\'est drole')
      .addField('name', 'génère un nom aléatoiremment')
  		.setColor('#ff0000')
  	msg.channel.send(embed);
  }
  
});

client.login('');
