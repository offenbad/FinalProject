

// var item = {
// 	number: 
// 	title: 
// 	department:
// 	period: 
// 	year_created: 
// 	year_acquired: 
// 	medium: 
// 	provenance:
// 	creditline:
// 	colors:
// 	image: 
// }

var item004 = {
	number: "1979-91-553",
	title: "toad",
	department: "Amphibians, small",
	period: "Art Deco",
	year_created: 1927,
	year_acquired: 1972,
	medium: "carbon",
	provenance: "forrest",
	creditline: "Gift of Henry Clay Frick",
	colors: ["#bdb76b", "#eee8aa", "#f5f5dc"],
	image: "objects/004.jpg",
}

$(".item__image").append("<img src="+item004.image+">");
$(".item__number").append("<p>ACCESSION NUMBER: "+item004.number+"</p>");
$(".item__title").append("<p>TITLE: "+item004.title+"</p>");
$(".item__department").append("<p>DEPARTMENT: "+item004.department+"</p>");
$(".item__period").append("<p>PERIOD: "+item004.period+"</p>");
$(".item__year_created").append("<p>YEAR CREATED: "+item004.year_created+"</p>");
$(".item__year_acquired").append("<p>YEAR ACQUIRED: "+item004.year_acquired+"</p>");
$(".item__medium").append("<p>MEDIUM: "+item004.medium+"</p>");
$(".item__provenance").append("<p>PROVENANCE: "+item004.provenance+"</p>");
$(".item__creditline").append("<p>"+item004.creditline+"</p>");
$(".item__colors").append("<p>COLOURS: "+item004.colors+"</p>");
