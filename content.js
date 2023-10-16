// content.js

// Define the list of banned words as an array
const bannedWords = ["abduct","abducted","abducting","abduction","admireme","animal","asphyxia","asphyxiate","asphyxiation","asphyxicate","asphyxication","bait","ballbusting","bareback","beastiality","bestiality","blacked","blackmail","bleeding","blood","bloodplay","bukkake","caned","caning","cannibal","cbt","cervics","cerviks","cervix","child","chloroform","chloroformed","chloroforming","choke","choking","coma","comatose","consent","cp","cycle","diapers","dog","doze","drinking","drunk","drunken","enema","entrance","escort","escorting","fanfuck","farm","fecal","fetal","fisted","fisting","flogging","foetal","forced","forcedbi","forceful","forcing","fuckafan","fuckfan","gangbang","gangbangs","gaping","golden","hardsports","hooker","hypno","hypnotize","hypnotized","hypnotizing","inbreed","inbreeded","inbreeding","incapacitate","incapacitation","incest","intox","inzest","jail","jailbait","kidnap","kidnapped","kidnapping","knock","knocked","lactate","lactation","lolicon","lolita","medicalplay","menstrate","menstrual","menstruate","menstruating","menstruation","meet","molest","molested","molesting","mutilate","mutilation","necrophilia","nigger","paddling","paralyzed","passed","pedo","pedophile","pedophilia","pee","peeplay","pegging","piss","pissing","poo","poop","preteen","prostituted","prostituting","prostitution","pse","rape","raping","rapist","restrictedwordtestzulu","scat","showers","skat","snuff","strangled","strangling","strangulation","suffocate","suffocation","teen","toilet","toiletslave","toiletslavery","torture","tortured","trance","unconscious","unconsciousness","underage","unwilling","vomit","vomitted","vomitting","watersports","whipping","young","zoophilia"];

document.addEventListener('input', function (event) {
  if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
    const inputText = event.target.value.toLowerCase();
    bannedWords.forEach(word => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      event.target.value = event.target.value.replace(regex, match => {
        return `**Banned Word**`;
      });
    });
  }
});
