var screen = 0,teller=0,geld=0, energie=10;//0=startscreen 1= MM 2=Läden,3=pizzaladen,4=eis,5=fritz mitte 6=munzur
var text ='';
var zeile='';
 
    var obj0 = document.getElementById('Z0');
	var obj1 = document.getElementById('Z1');
	var obj2 = document.getElementById('Z2');
	var obj3 = document.getElementById('Z3');
	var obj4 = document.getElementById('Z4');

    obj0.addEventListener('click', button0);
	obj1.addEventListener('click', button1);
	obj2.addEventListener('click', button2);
	obj3.addEventListener('click', button3);
	obj4.addEventListener('click', button4);

 
  function button0()
  {
	  switch (screen)
	  {
		 case 0:
		 	{
				ausg("STARTE...",'T1');
				startS();
				return 0;
			}
		 case 1:
			{
				putzen();
				return 0;				
			} 
		case 2:
		{
			pizzaladen();
			screen=3;
			return 0;
		}
		case 3:
		{
			essen(5);
			return 0;
		}
		case 4:
		{
			essen(1);
			return 0;
		}
		case 5:
		{
			essen(1);
			return 0;
		}
		case 6:
		{
			essen(2);
			return 0;
		}
	  }
  }

  function button1()
  {
  	switch (screen)
	{
		case 1:
		{
			console.log("button 1");	
			ausg("Auf dem Tellerchen lagen "+teller+" Euro ","T1");
			del("T2");
			geld+=teller;
			teller=0;
			startS();
			return 0;
		}
		case 2:
		{
			eisladen();
			screen=4;
			return 0;
		}
		case 3:
		{
			essen(10);
			return 0;
		}
		case 4:
		{
			essen(2);
			return 0;
		}
		case 5:
		{
			essen(2);
			return 0;
		}
		case 6:
		{
			essen(4);
			return 0;
		}		
	}
  }
  function button2()
  {
	switch (screen)
		{
		 case 1:
		{
			klauen();
			del("T2");
			startS();
			return 0;
		}
		case 2:
		{
			fritzmitte();
			screen=5;
			return 0;
		}
		case 3:
		{
			essen(20);
			return 0;
		}		
		case 4:
		{
			essen(3);
			return 0;
		}
		case 5:
		{
			essen(5);
			return 0;
		}
		case 6:
		{
			essen(6);
			return 0;
		}	
	}	  
  }
  function button3()
  {
	  	  switch (screen)
		  {
			case 1:
			{
				screen++;
				ladenauswahl();
				return 0;
			}
			case 2:
			{
				munzur();
				screen=6;
				return 0;
			}				
		  }	
  }
  function button4()
  {
	  console.log("button5");
	  startS();
  }
  function ladenauswahl()
  {
	  console.log("ladenauswahl");
	    ausg("Du bist in der Stadt.","T1");
		ausg("Wo möchtrest du essen gehen?","T2");
		
        ausg("Pizzaladen","Z0");
        ausg("Eisladen","Z1");
        ausg("Fritz Mitte","Z2");
        ausg("Munzur Kebap","Z3");
		ausg("Zurück zum Klo","Z4");
  }
  
  function startS(){
	screen =1;
	refresh();
	ausg('Klo putzen','Z0');
    ausg('Geld vom Klotellerchen nehmen','Z1');
	ausg('Leute unterm Kloturschlitz durch beklauen','Z2');
    ausg('Pause, Essen holen','Z3');
	del("Z4");
  }

  function refresh()
  {
	var balken="";
	for(var i= 0 ; i<energie ; i++)balken=balken+'|';
	var werte= balken+"Energie: "+energie+"% , Geld: "+geld+"€";
	ausg(werte, "T3");
  }
  
  function putzen()
  {
	  if(energie>0)
	  {
		var rand = Math.floor(Math.random() * 5); 
		if(rand>0)
		{
			ausg("Gut geputzt! Ein weiterer zahlender Kunde lachelt dich an!","T1");
			teller++;
			energie-=1;
		}
		else 
		{
			ausg("Gut geputzt! Der nette Herr hier mag dich.Er legt die nen 2er hin!","T1");
			teller+=2;
			energie-=1;
		}
		ausg(teller+" Euro auf dem Tellerchen","T2");
		startS();
		}
		else
		{
			ausg("Du bist zu schwach...","T1");		
		}
  }
  function klauen()
  {     
		var rand = Math.floor(Math.random() * 20); 
        if (rand<11)
        {
        if (rand > 0)
        {
		geld+=5;
        ausg("Langfinger! Du hast 5 Euro geklaut!", "T1");
		}
        else
        {
		geld+=20;
		ausg("Jungejunge! Du hast einer alten Dame nen Zwanni geklaut!!", "T1");
        }
		}
        else
        {
		geld-=8;
		ausg("Du wurdest angezeigt.\n8 Euro Strafe!", "T1");
		}
  }
  
  function pizzaladen()
  {
	  console.log("pizza");
	    ausg("Vor dir steht ein Töp mit weißer Mütze","T1");
		ausg("'Ciau Pizza Luigi pervavore Magharita?'","T2");
		
        ausg("Kleine Pizza büdde (5€)","Z0");
        ausg("Mittlere Pizza büdde (10€)","Z1");
        ausg("Große Pizza büdde (20€)","Z2");
		del("Z3");
  }  
  
   function eisladen()
  {
	  console.log("eis");
	    ausg("Ein Typ vor einer Theke mit genau einer Sorte Eis","T1");
		ausg("'Ciau gelato Giovanni pervavore Eiscreme?'","T2");
		
        ausg("Eine Kugel (1€)","Z0");
        ausg("Zwei Kugeln (2€)","Z1");
        ausg("Drei Kugeln(3€)","Z2");
		del("Z3");
  }   
   function fritzmitte()
  {
	  console.log("fritz");
	    ausg("Links werden Pommes fritiert. Der komische Hipsterver-","T1");
		ausg("käufer schaut dich an. 'Was kriegsten?'","T2");
		
        ausg("Kleine Pommes (1€)","Z0");
        ausg("Große Pommes (2€)","Z1");
        ausg("Pommes mit Körriworscht(5€)","Z2");
		del("Z3");
  }     
    function munzur()
  {
	  console.log("munzur");
	    ausg("Im Munzur Kebab Haus. Der eine nette Arbeiter schneidet,","T1");
		ausg("der andere schaut dich an 'Was gibts bei dir?'","T2");
		
        ausg("Vegetarisch Döner (2€)","Z0");
        ausg("1 Normal mit alles (4€)","Z1");
        ausg("Döner Teller (6€)","Z2");
		del("Z3");
  }   
  function essen(preis)
  {
	  if(geld>=preis)
	  {
		  geld-=preis;
		  energie+=preis;
	   	  refresh();
	  }
	  else
	  {
		  ausg("Du bist zu arm.","T1");
		  ausg("Geh arbeiten!","T2");
	  }

  }
	 
  function ausg(text,zeile) {
    var ausgabe = document.getElementById(zeile);
	console.log("ausgabe aufgerufen"+text+" "+zeile);	
    ausgabe.innerHTML = text;
  }
  
  function del(zeile) {
    var ausgabe = document.getElementById(zeile);
	console.log("delete zeile "+zeile);	
    ausgabe.innerHTML = "<br>";
  }  
 