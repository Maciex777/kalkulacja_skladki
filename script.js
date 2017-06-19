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
            $(t[g]).removeClass('highlighted');
        }
	if(val < 1001){
	  $('#first').addClass('highlighted');
	  $('#first2').addClass('highlighted');
	  lb1 = 20;
	  total();
	} else if (val > 1000 && val < 3001){
	  $('#second').addClass('highlighted');
	  $('#second2').addClass('highlighted');
	  lb1 = 70;
	  total();
	} else if (val > 3000 && val < 6001){
	  $('#third').addClass('highlighted');
	  $('#third2').addClass('highlighted');
	  lb1 = 130;
	  total();
	} else if (val > 6000 && val < 9001){
	  $('#fourth').addClass('highlighted');
	  $('#fourth2').addClass('highlighted');
	  lb1 = 180;
	  total();
	} else if (val > 9000){
	  $('#fifth').addClass('highlighted');
	  $('#fifth2').addClass('highlighted');
	  lb1 = 200;
	  total();
	}	
};
	
//obliczenie składki bez zniżek/zwyżek i podświetlenie info w tabeli po wprowadzeniu liczby w pole	
function updateSumInput(val) {			
		var t = document.getElementsByClassName('td');
        for (var g = 0; g < t.length; g++) {
            $(t[g]).removeClass('highlighted');
        }
	if(val < 1001){
	  $('#first').addClass('highlighted');
	  $('#first2').addClass('highlighted');
	  lb1 = 20;
	  total();
	} else if (val > 1000 && val < 3001){
	  $('#second').addClass('highlighted');
	  $('#second2').addClass('highlighted');
	  lb1 = 70;
	  total();
	} else if (val > 3000 && val < 6001){
	  $('#third').addClass('highlighted');
	  $('#third2').addClass('highlighted');
	  lb1 = 130;
	  total();
	} else if (val > 6000 && val < 9001){
	  $('#fourth').addClass('highlighted');
	  $('#fourth2').addClass('highlighted');
	  lb1 = 180;
	  total();
	} else if (val > 9000){
	  $('#fifth').addClass('highlighted');
	  $('#fifth2').addClass('highlighted');
	  lb1 = 200;
	  total();
	}	
};
