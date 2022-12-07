let frases = [
    'Você é a coisa mais linda desse mundo',
     'Tudo vai dar certo dengosinha',
     'Tu é a mulher mais gostosa desse mundo',
     'Eu te amo mais que tudo',
     'Você é chatinha as vezes',
     'Você é a pessoa mais doce e gentil que ja conheci',
     'Casa comigo cheirosinha'


  ];
  
  function gerarFrase(){
      let frase = frases[
        Math.floor(Math.random() *       
        frases.length)
      ]
      
      document.querySelector('#resultado').textContent=frase;
  }