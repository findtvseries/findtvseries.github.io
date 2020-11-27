
 page =localStorage.getItem("page");
let params = (new URL(document.location)).searchParams;
let listid = params.get("listid");
alert(listid);
const lang = navigator.languages && navigator.languages[0] || // Chrome / Firefox
               navigator.language ||   // All browsers
               navigator.userLanguage;
const language=lang.split("-",1);

  function pagereload(newpage)
  {
 localStorage.setItem("page",newpage);
location.reload(); 

  }
$(document).ready(function(){
    $("#myCarousel").carousel({
        interval : 5000
    });
});


$(document).ready(
	function pagetions(){		
 var languageapi ="https://ihaletr.com/findtvseries/language.php?lang="+language;
var jsonlanguage=$.getJSON( languageapi); 
	jsonlanguage.done(function( datalanguage ) {
		document.getElementById("bestcontent").innerHTML =datalanguage.best;
		document.getElementById("worstcontent").innerHTML =datalanguage.bad;
		document.getElementById("newcontent").innerHTML =datalanguage.new;
		document.getElementById("backtotop").innerHTML =datalanguage.backtotop;
		document.getElementById("slogan1").innerHTML =datalanguage.slogan1;
		document.getElementById("slogan2").innerHTML =datalanguage.slogan2;
		document.getElementById("slogan3").innerHTML =datalanguage.slogan3;
		document.getElementById("slogan4").innerHTML =datalanguage.slogan4;
		var pagetion='<nav aria-label="Page navigation "><ul class="pagination justify-content-center">';
	var previouspage=0;
	var nextpage=Number(page)+1;
		if(page>=0){
		previouspage=Number(page)-1;
		pagetion+= '<li class="page-item"><button type="button"  class="btn btn-light" id="'+datalanguage.previous+'" onClick="pagereload(this.id)"   data="'+datalanguage.previous+'" >'+datalanguage.previous+'</button></li>';
		}else{
		pagetion+='<li class="page-item disabled"><button type="button"  class="btn btn-light" disabled tabindex="-1" aria-disabled="true" >'+datalanguage.previous+'</button></li>';
		}
		
		if(page>=4){
		      var i;
	for (i =Number(page)-3; i < Number(page)+3; i++) {
		if(i==page){
	pagetion+= '<li class="page-item " ><button type="button" class="btn btn-primary" onClick="pagereload(this.id)"   data="'+i+'">'+i+'<span class="sr-only">(current)</span></button></li>';
		}else{
		pagetion+= '<li class="page-item"><button type="button"  class="btn btn-light"  onClick="pagereload(this.id)"  id="'+i+'" >'+i+'</button></li>';
		}
		}
		}else{
			for (i =1; i < 7; i++) {
			if(i==page){
	pagetion+= '<li class="page-item " ><button type="button" class="btn btn-primary" onClick="pagereload(this.id)"   id="'+i+'">'+i+'</button></li>';
		}else{
		pagetion+= '<li class="page-item"><button type="button"  class="btn btn-light"  onClick="pagereload(this.id)"  id="'+i+'" >'+i+'</button></li>';
		}
		}
		}
		pagetion+= '<li class="page-item"><button type="button"  class="btn btn-light"  onClick="pagereload(this.id)" id="'+datalanguage.next+'" >'+datalanguage.next+'</a></li>';
		
		pagetion+='</ul></nav>';
		document.getElementById("pagination").innerHTML =pagetion;
		
	});


}
);
(function Listidload(){
	if(window.list_id!=null){
	alert(window.list_id);
	}
})();
(function Badlistload() {
var badlist='<div class="row">';
  var badapi = "https://ihaletr.com/findtvseries/list.php?desc=ASC&orderby=rate&page="+window.page+"&lang="+language;

  var jsonbad=$.getJSON( badapi);
	
    jsonbad.done(function( baddata ) {
		
      var i;
for (i = 0; i < baddata.shows.length; i++) {
  badlist +='<div class="col-xs-12 col-sm-6 col-md-4"><div class="image-flip" > <div class="mainflip flip-0"><div class="frontside"><div class="card"> <div class="card-body text-center"><p><img class=" img-fluid" src="'+baddata.shows[i].poster+'" alt="'+baddata.shows[i].title+'"></p><h4 class="card-title">'+baddata.shows[i].title +'</h4> </div></div> </div><div class="backside"><div class="card"><div class="card-body text-center mt-4"><h4 class="card-title">'+baddata.shows[i].title+'</h4><p class="card-text"><div class="row"><div class="col-6 col-md-4">'+baddata.langdata.point+':</div><div class="col-6 col-md-8"><div class="progress"><div class="progress-bar progress-bar-dange" role="progressbar" aria-valuenow="'+baddata.shows[i].rate+'"aria-valuemin="0" aria-valuemax="100" style="width:'+baddata.shows[i].rate+'%">'+baddata.shows[i].rate+'</div></div></div></div><div class="row"><div class="col-6 col-md-4">'+baddata.langdata.year+':</div><div class="col-12 col-md-8">'+baddata.shows[i].year+'</div></div><div class="row"><div class="col-6 col-md-4">'+baddata.langdata.language+':</div><div class="col-12 col-md-8">'+baddata.shows[i].language+'</div></div><div class="row"><div class="col-6 col-md-4">'+baddata.langdata.genre+':</div><div class="col-12 col-md-8">'+baddata.shows[i].genre+'</div></div><div class="row"><div class="col-6 col-md-4">'+baddata.langdata.cast+':</div><div class="col-12 col-md-8">'+baddata.shows[i].cast+'</div></div><div class="row"><div class="col-6 col-md-4">'+baddata.langdata.country+':</div><div class="col-12 col-md-8">'+baddata.shows[i].country+'</div></div></p>  </div></div></div></div></div></div>';
} 
	
		document.getElementById("bad").innerHTML ='<div class="row">'+badlist+'</div>';

    });

})();


(function Bestlistload() {
var bestlist='<div class="row">';
  var bestapi = "https://ihaletr.com/findtvseries/list.php?desc=DESC&page="+window.page+"&lang="+language;
  var jsonbest=$.getJSON( bestapi);
	
    jsonbest.done(function( bestdata ) {
		
      var i;
for (i = 0; i < bestdata.shows.length; i++) {
  bestlist +='<div class="col-xs-12 col-sm-6 col-md-4"><div class="image-flip" > <div class="mainflip flip-0"><div class="frontside"><div class="card"> <div class="card-body text-center"><p><img class=" img-fluid" src="'+bestdata.shows[i].poster+'" alt="'+bestdata.shows[i].title+'"></p><h4 class="card-title">'+bestdata.shows[i].title +'</h4> </div></div> </div><div class="backside"><div class="card"><div class="card-body text-center mt-4"><h4 class="card-title">'+bestdata.shows[i].title+'</h4><p class="card-text"><div class="row"><div class="col-6 col-md-4">'+bestdata.langdata.point+':</div><div class="col-6 col-md-8"><div class="progress"><div class="progress-bar progress-bar-dange" role="progressbar" aria-valuenow="'+bestdata.shows[i].rate+'"aria-valuemin="0" aria-valuemax="100" style="width:'+bestdata.shows[i].rate+'%">'+bestdata.shows[i].rate+'</div></div></div></div><div class="row"><div class="col-6 col-md-4">'+bestdata.langdata.year+':</div><div class="col-12 col-md-8">'+bestdata.shows[i].year+'</div></div><div class="row"><div class="col-6 col-md-4">'+bestdata.langdata.language+':</div><div class="col-12 col-md-8">'+bestdata.shows[i].language+'</div></div><div class="row"><div class="col-6 col-md-4">'+bestdata.langdata.genre+':</div><div class="col-12 col-md-8">'+bestdata.shows[i].genre+'</div></div><div class="row"><div class="col-6 col-md-4">'+bestdata.langdata.cast+':</div><div class="col-12 col-md-8">'+bestdata.shows[i].cast+'</div></div><div class="row"><div class="col-6 col-md-4">'+bestdata.langdata.country+':</div><div class="col-12 col-md-8">'+bestdata.shows[i].country+'</div></div></p>  </div></div></div></div></div></div>';
} 

		document.getElementById("best").innerHTML ='<div class="row">'+bestlist+'</div>';

    });

})();

(function Newlistload() {
var newlist='<div class="row">';
  var flickerAPI = "https://ihaletr.com/findtvseries/list.php?desc=DESC&orderby=id&page="+window.page+"&lang="+language;
  var json=$.getJSON( flickerAPI);
	
    json.done(function( data ) {
		
      var i;
for (i = 0; i < data.shows.length; i++) {
	     

 
	newlist +='<div class="col-xs-12 col-sm-6 col-md-4"><div class="image-flip" > <div class="mainflip flip-0"><div class="frontside"><div class="card"> <div class="card-body text-center"><p><img class=" img-fluid" src="'+data.shows[i].poster+'" alt="'+data.shows[i].title+'"></p><h4 class="card-title">'+data.shows[i].title +'</h4> </div></div> </div><div class="backside"><div class="card"><div class="card-body text-center mt-4"><h4 class="card-title">'+data.shows[i].title+'</h4><p class="card-text"><div class="row"><div class="col-6 col-md-4">'+data.langdata.point+':</div><div class="col-6 col-md-8"><div class="progress"><div class="progress-bar progress-bar-dange" role="progressbar" aria-valuenow="'+data.shows[i].rate+'"aria-valuemin="0" aria-valuemax="100" style="width:'+data.shows[i].rate+'%">'+data.shows[i].rate+'</div></div></div></div><div class="row"><div class="col-6 col-md-4">'+data.langdata.year+':</div><div class="col-12 col-md-8">'+data.shows[i].year+'</div></div><div class="row"><div class="col-6 col-md-4">'+data.langdata.language+':</div><div class="col-12 col-md-8">'+data.shows[i].language+'</div></div><div class="row"><div class="col-6 col-md-4">'+data.langdata.genre+':</div><div class="col-12 col-md-8">'+data.shows[i].genre+'</div></div><div class="row"><div class="col-6 col-md-4">'+data.langdata.cast+':</div><div class="col-12 col-md-8">'+data.shows[i].cast+'</div></div><div class="row"><div class="col-6 col-md-4">'+data.langdata.country+':</div><div class="col-12 col-md-8">'+data.shows[i].country+'</div></div></p>  </div></div></div></div></div></div>';
} 
	
		document.getElementById("new").innerHTML ='<div class="row">'+newlist+'</div>';

    });

})();



