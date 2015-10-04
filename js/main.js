
// init Isotope
var $grid = $('.grid').isotope({
  // options
});

// filter items
$grid.isotope({ filter: '.flora' });

$grid.isotope({ filter: '.fauna' });

$grid.isotope({ filter: '.ephemera' });

$grid.isotope({ filter: '.indoors' });

$grid.isotope({ filter: '.outdoors' });

$grid.isotope({ filter: '.art' });

// show all items
$grid.isotope({ filter: '*' });

// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});



// /////////////COLLECTION PAGE JS//////////////

// $( ".js-collection__nav--color" ).on('click',function() {
// 	$( ".collection--first" ).remove();
// 	$( ".collection--second--color" ).addClass( "collection--second--showing" );
//   });

// $( ".js-collection__nav--medium" ).on('click',function() {
// 	$( ".collection--first" ).remove();
// 	$( ".collection--second--medium" ).addClass( "collection--second--showing" );
// });






// var item = {
// 	accession_number: 
// 	title:
//  	creator: 
// 	department:
// 	period: 
//  	medium: 
// 	year_created: 
// 	year_acquired: 
// 	provenance:
// 	creditline:
// 	colors:
// 	image: 
// }

// var items = {
// 		item001 : {
// 			accession_number: "1999-91-001",
// 			title: "moth",
// 			creator: "god",
// 			department: "Lepeodoptera",
// 			period: "Art Nouveau",
// 			medium: "fauna",
// 			year_created: 1999,
// 			year_acquired: 1999,
// 			provenance: "outdoors",
// 			creditline: null,
// 			colors: ["light-faun", "warm-faun", "cool-stone", "warm-stone", "almost-black"],
// 			image: "objects/001.jpg"
// 		},

// 		item002 : {
// 			accession_number: "1972-387-002",
// 			title: "lichen",
// 			creator: "god",
// 			department: "Fungi?",
// 			period: "Art Deco",
// 			medium: "flora",
// 			year_created: 1933,
// 			year_acquired: 1972,
// 			provenance: "outdoors",
// 			creditline: "Gift of Henry Clay Frick",
// 			colors: ["sea-green", "bluey-sonicsilver"],
// 			image: "objects/002.jpg"
// 		},

// 		item003 : {
// 			accession_number: "2015-37-003",
// 			title: "plant",
// 			creator: "god",
// 			department: "Houseplants, potential",
// 			period: "Art Brut",
// 			medium: "flora",
// 			year_created: 2014,
// 			year_acquired: 2015,
// 			provenance: "outdoors",
// 			creditline: null,
// 			colors: ["plant-green"],
// 			image: "objects/003.jpg"
// 		},

// 		item004 : {
// 			accession_number: "1972-91-004",
// 			title: "toad",
// 			creator: "god",
// 			department: "Amphibians, small",
// 			period: "Art Deco",
// 			medium: "fauna",
// 			year_created: 1937,
// 			year_acquired: 1972,
// 			provenance: "outdoors",
// 			creditline: "Gift of Henry Clay Frick",
// 			colors: ["warm-faun", "warm-stone", "goldenrod"],
// 			image: "objects/004.jpg"
// 		},

// 		item005 : {
// 			accession_number: "1187-87-005",
// 			title: "waterdroplets on plateglass",
// 		 	creator: "god, man",
// 			department: "Ephemera",
// 			period: "Contemporary",
// 		 	medium: "water, time",
// 			year_created: "2005",
// 			year_acquired: "2010",
// 			provenance: "indoors",
// 			creditline: "gift of the artist",
// 			colors: null,
// 			image: "objects/005.jpg"
// 		},

// 		item006 : {
// 			accession_number: "1972-87-006",
// 			title: "sunset in rearview mirror",
// 		 	creator: "god, man",
// 			department: "Ephemera",
// 			period: "Contemporary",
// 		 	medium: "light, physics",
// 			year_created: null,
// 			year_acquired: "1972",
// 			provenance: "outdoors",
// 			creditline: "private donor",
// 			colors: null,
// 			image: "objects/006.jpg"
// 		},

// 		item007 : {
// 			accession_number: "2011-22-007",
// 			title: "Leonard Lovecraft",
// 		 	creator: "god",
// 			department: "Birds",
// 			period: "Mezozoic",
// 		 	medium: "fauna",
// 			year_created: "2009",
// 			year_acquired: "2011",
// 			provenance: "indoors",
// 			creditline: "On loan from K. F. L. Offenbacher",
// 			colors: ["light-faun", "raw-umber", "sepia", "really-almost-black"],
// 			image: "objects/007.jpg"
// 		},

// 		item008 : {
// 			accession_number: 
// 			title:
// 		 	creator: 
// 			department:
// 			period: 
// 		 	medium: 
// 			year_created: 
// 			year_acquired: 
// 			provenance:
// 			creditline:
// 			colors:
// 			image: 
// 		},

// 	};

// $(".item__image").append("<img src="+item004.image+">");
// $(".item__number").append("<p>ACCESSION NUMBER: "+item004.number+"</p>");
// $(".item__title").append("<p>TITLE: "+item004.title+"</p>");
// $(".item__creator").append("<p>CREATOR:"+item004.creator+"</p>");
// $(".item__department").append("<p>DEPARTMENT: "+item004.department+"</p>");
// $(".item__period").append("<p>PERIOD: "+item004.period+"</p>");
// $(".item__year_created").append("<p>YEAR CREATED: "+item004.year_created+"</p>");
// $(".item__year_acquired").append("<p>YEAR ACQUIRED: "+item004.year_acquired+"</p>");
// $(".item__medium").append("<p>MEDIUM: "+item004.medium+"</p>");
// $(".item__provenance").append("<p>PROVENANCE: "+item004.provenance+"</p>");
// $(".item__creditline").append("<p>"+item004.creditline+"</p>");
// $(".item__colors").append("<p>COLOURS: "+item004.colors+"</p>");