//obliczenie składki z uwzględnieniem zniżek/zwyżek, a także zaokrąglenie i wyświetlenie sumy całkowitej. Skróty: prc - suma całk., prc1 - zniżka 5%, prc2 - zwyżka 8%, prc3 - zniżka 2%, prc4 - zwyżka 4%, lb1 - składka w zależn. od wpisanej sumy, bez zniżek/zwyżek
function total(){
	  if(document.getElementById('bezszkod').checked==true && document.getElementById('jednoraz').checked==true){		  
		prc1 = ( (parseInt(lb1) * 5) / 100 ); 
		lb2 = parseInt(lb1) - parseInt(prc1);
		prc3 = ( (parseInt(lb2) * 2) / 100 ); 
		prc = parseInt(lb2) - parseInt(prc3);
		document.getElementById('totalInput').innerHTML=(Math.round(prc/5)*5) + " PLN";
	  } else if(document.getElementById('bezszkod').checked==true && document.getElementById('jednoraz').checked==false && document.getElementById('czteryraty').checked==true){		  
		prc1 = ( (parseInt(lb1) * 5) / 100 ); 
		lb2 = parseInt(lb1) - parseInt(prc1);
		prc4 = ( (parseInt(lb2) * 4) / 100 );
		prc = parseInt(lb2) + parseInt(prc4);
		document.getElementById('totalInput').innerHTML=(Math.round(prc/5)*5) + " PLN";
	  } else if(document.getElementById('zeszkod').checked==true && document.getElementById('jednoraz').checked==true){		  
		prc2 = ( (parseInt(lb1) * 8) / 100 ); 
		lb2 = parseInt(lb1) + parseInt(prc2);
		prc3 = ( (parseInt(lb2) * 2) / 100 ); 
		prc = parseInt(lb2) - parseInt(prc3);
		document.getElementById('totalInput').innerHTML=(Math.round(prc/5)*5) + " PLN";
	  } else if(document.getElementById('zeszkod').checked==true && document.getElementById('czteryraty').checked==true){		  
		prc2 = ( (parseInt(lb1) * 8) / 100 ); 
		lb2 = parseInt(lb1) + parseInt(prc2);
		prc4 = ( (parseInt(lb2) * 4) / 100 );
		prc = parseInt(lb2) + parseInt(prc4);
		document.getElementById('totalInput').innerHTML=(Math.round(prc/5)*5) + " PLN";
	  } else if(document.getElementById('zeszkod').checked==true && document.getElementById('dwieraty').checked==true){		  
		prc2 = ( (parseInt(lb1) * 8) / 100 ); 
		lb2 = parseInt(lb1) + parseInt(prc2);
		prc = parseInt(lb2);	
		document.getElementById('totalInput').innerHTML=(Math.round(prc/5)*5) + " PLN";	
	  } else if(document.getElementById('bezszkod').checked==true && document.getElementById('dwieraty').checked==true){		  
		prc1 = ( (parseInt(lb1) * 5) / 100 ); 
		lb2 = parseInt(lb1) - parseInt(prc1);
		prc = parseInt(lb2);
		document.getElementById('totalInput').innerHTML=(Math.round(prc/5)*5) + " PLN";
	  } else {
	    document.getElementById('totalInput').innerHTML="Zaznacz status ubezpieczenia i formę płatności";
	  }	
};

//obliczenie składki bez zniżek/zwyżek i podświetlenie info w tabeli po przesunięciu suwaka
function updateTextInput(val) {
	  document.getElementById('textInput').value=val; 	
	  var t = document.getElementsByClassName('td');
        for (var g = 0; g < t.length; g++) {
            t[g].classList.remove("highlighted");
        }
	if(val < 1001){
	  document.getElementById("first").classList.add("highlighted");
	  document.getElementById("first2").classList.add("highlighted");
	  lb1 = 20;
	  total();
	} else if (val > 1000 && val < 3001){
	  document.getElementById("second").classList.add("highlighted");
	  document.getElementById("second2").classList.add("highlighted");
	  lb1 = 70;
	  total();
	} else if (val > 3000 && val < 6001){
	  document.getElementById("third").classList.add("highlighted");
	  document.getElementById("third2").classList.add("highlighted");
	  lb1 = 130;
	  total();
	} else if (val > 6000 && val < 9001){
	  document.getElementById("fourth").classList.add("highlighted");
	  document.getElementById("fourth2").classList.add("highlighted");
	  lb1 = 180;
	  total();
	} else if (val > 9000){
	  document.getElementById("fifth").classList.add("highlighted");
	  document.getElementById("fifth2").classList.add("highlighted");
	  lb1 = 200;
	  total();
	}	
};
	
//obliczenie składki bez zniżek/zwyżek i podświetlenie info w tabeli po wprowadzeniu liczby w pole	
function updateSumInput(val) {			
		var t = document.getElementsByClassName('td');
        for (var g = 0; g < t.length; g++) {
            t[g].classList.remove("highlighted");
        }
	if(val < 1001){
	  document.getElementById("first").classList.add("highlighted");
	  document.getElementById("first2").classList.add("highlighted");
	  lb1 = 20;
	  total();
	} else if (val > 1000 && val < 3001){
	  document.getElementById("second").classList.add("highlighted");
	  document.getElementById("second2").classList.add("highlighted");
	  lb1 = 70;
	  total();
	} else if (val > 3000 && val < 6001){
	  document.getElementById("third").classList.add("highlighted");
	  document.getElementById("third2").classList.add("highlighted");
	  lb1 = 130;
	  total();
	} else if (val > 6000 && val < 9001){
	  document.getElementById("fourth").classList.add("highlighted");
	  document.getElementById("fourth2").classList.add("highlighted");
	  lb1 = 180;
	  total();
	} else if (val > 9000){
	  document.getElementById("fifth").classList.add("highlighted");
	  document.getElementById("fifth2").classList.add("highlighted");
	  lb1 = 200;
	  total();
	}	
};

//obliczenie składki bez zniżek/zwyżek - osobna sekcja dla natychmiastowej reakcji dla pól wyboru
function count(){
	var val = document.getElementById('textInput').value;
	if(val < 1001){
	  lb1 = 20;
	  total();
	} else if (val > 1000 && val < 3001){
	  lb1 = 70;
	  total();
	} else if (val > 3000 && val < 6001){
	  lb1 = 130;
	  total();
	} else if (val > 6000 && val < 9001){
	  lb1 = 180;
	  total();
	} else if (val > 9000){
	  lb1 = 200;
	  total();
	}	
}

//podświetlenie info w tabeli po wybraniu pól wyboru w sekcji "status ubezpieczenia" i uruchomienie funkcji count()
function updateStatusInput() {
	var d = document.getElementsByClassName('td2');
        for (var g = 0; g < d.length; g++) {
            d[g].classList.remove('highlighted');			
            d[g].classList.remove('highlighted2');			
        }
	if(document.getElementById('bezszkod').checked==true){
		document.getElementById('bezszkody').classList.add('highlighted');
		document.getElementById('procent1').classList.add('highlighted');   
		count();
	}else if(document.getElementById('zeszkod').checked==true){
		document.getElementById('szkoda').classList.add('highlighted');
		document.getElementById('procent2').classList.add('highlighted');
		count();
		if(document.getElementById('zeszkod').checked==true && document.getElementById('jednoraz').checked==true){
			document.getElementById('jednoraz2').classList.add('highlighted2');
		} 
	}
};

//podświetlenie info w tabeli po wybraniu pól wyboru w sekcji "możliwe formy płatności" i uruchomienie funkcji count()
function updateRatyInput() {
		var f = document.getElementsByClassName('td3');
        for (var g = 0; g < f.length; g++) {
            f[g].classList.remove('highlighted');			
            f[g].classList.remove('highlighted2');			
        }
	if(document.getElementById('jednoraz').checked==true){
		document.getElementById('procent3').classList.add('highlighted');
		if(document.getElementById('zeszkod').checked==true && document.getElementById('jednoraz').checked==true){
			document.getElementById('jednoraz2').classList.add('highlighted2');
		} else {
		document.getElementById('jednoraz2').classList.add('highlighted');
		}
		count();
	}else if(document.getElementById('dwieraty').checked==true){
		count();	
	}else if(document.getElementById('czteryraty').checked==true){
		document.getElementById('czteryraty2').classList.add('highlighted');
		document.getElementById('procent4').classList.add('highlighted');
		count();	
	}
};
