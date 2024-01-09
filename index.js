const resulted= document.getElementById("resulted");

 function IMC(){
    const nome= document.getElementById('nome').value;
    const altura= document.getElementById('altura').value;
    const peso= document.getElementById('Peso').value; 
    if(nome !=='' && altura !== '' && peso !== ''){
        
        const ValorIMC= (peso/(altura*altura)).toFixed(1);
        resulted.textContent= ValorIMC;

        let classification= "";
        if(ValorIMC<18.5){
            classificatio="Abaixo do Peso!";
        } else if(ValorIMC<25){
              classification="Peso Normal!"

        } else if(ValorIMC<30){
         classification ="Você está levemente acima do Peso"
        }
    resulted.textContent= `${nome}  o seu  valor do  seu IMC foi: ${ValorIMC}, e a sua Classificação ${classification}` 
      
{}
    

    } else{
        resulted.textContent="Preencha todos os Campos!"; 
    }
 }


Calcular.addEventListener("click", IMC);  