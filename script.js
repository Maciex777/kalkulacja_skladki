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
