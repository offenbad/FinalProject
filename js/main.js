
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







var items = {
		item001 : {
			accession_number: "1999-91-001",
			title: "moth",
			creator: "god",
			department: "Lepeodoptera",
			period: "Art Nouveau",
			medium: "fauna",
			year_created: 1999,
			year_acquired: 1999,
			provenance: "outdoors",
			creditline: null,
			colors: ["light-faun", "warm-faun", "cool-stone", "warm-stone", "almost-black"],
			image: "objects/001.jpg"
		},

		item002 : {
			accession_number: "1972-387-002",
			title: "lichen",
			creator: "god",
			department: "Fungi?",
			period: "Art Deco",
			medium: "flora",
			year_created: 1933,
			year_acquired: 1972,
			provenance: "outdoors",
			creditline: "Gift of Henry Clay Frick",
			colors: ["sea-green", "bluey-sonicsilver"],
			image: "objects/002.jpg"
		},

		item003 : {
			accession_number: "2015-37-003",
			title: "plant",
			creator: "god",
			department: "Houseplants, potential",
			period: "Art Brut",
			medium: "flora",
			year_created: 2014,
			year_acquired: 2015,
			provenance: "outdoors",
			creditline: null,
			colors: ["plant-green"],
			image: "objects/003.jpg"
		},

		item004 : {
			accession_number: "1972-91-004",
			title: "toad",
			creator: "god",
			department: "Amphibians, small",
			period: "Art Deco",
			medium: "fauna",
			year_created: 1937,
			year_acquired: 1972,
			provenance: "outdoors",
			creditline: "Gift of Henry Clay Frick",
			colors: ["warm-faun", "warm-stone", "goldenrod"],
			image: "objects/004.jpg"
		},

		item005 : {
			accession_number: "1187-87-005",
			title: "waterdroplets on plateglass",
		 	creator: "god, man",
			department: "Ephemera",
			period: "Contemporary",
		 	medium: "water, time",
			year_created: "2005",
			year_acquired: "2010",
			provenance: "indoors",
			creditline: "gift of the artist",
			colors: null,
			image: "objects/005.jpg"
		},

		item006 : {
			accession_number: "1972-87-006",
			title: "sunset in rearview mirror",
		 	creator: "god, man",
			department: "Ephemera",
			period: "Contemporary",
		 	medium: "light, physics",
			year_created: null,
			year_acquired: "1972",
			provenance: "outdoors",
			creditline: "private donor",
			colors: null,
			image: "objects/006.jpg"
		},

		item007 : {
			accession_number: "2011-22-007",
			title: "Leonard Lovecraft",
		 	creator: "god",
			department: "Birds",
			period: "Cretaceous",
		 	medium: "fauna",
			year_created: "2009",
			year_acquired: "2011",
			provenance: "indoors",
			creditline: "On loan from K. F. L. Offenbacher",
			colors: ["light-faun", "raw-umber", "sepia", "really-almost-black"],
			image: "objects/007.jpg"
		},

		item008 : {
			accession_number: "2011-22-008",
			title: "Mr. Kafka",
		 	creator: "god",
			department: "Birds",
			period: "Cretaceous",
		 	medium: "fauna",
			year_created: "2009",
			year_acquired: "2011",
			provenance: "indoors",
			creditline: "On loan from K. F. L. Offenbacher",
			colors: ["light-faun", "raw-umber", "sepia", "really-almost-black"],
			image: "objects/008.jpg"
		},

			item009 : {
			accession_number: "2015-00-009",
			title: "boy in light in window",
		 	creator: "man, god",
			department: "Ephemera",
			period: "Contemporary",
		 	medium: "light, architecture",
			year_created: "2014",
			year_acquired: "2015",
			provenance: "indoors",
			creditline: "private donor",
			colors: null,
			image: "objects/009.jpg"
		},

			item010 : {
			accession_number: "2014-00-010",
			title: "house I like that's going to be torn down",
		 	creator: "man",
			department: "Ephemera, architectural",
			period: "Victorian",
		 	medium: "architecture",
			year_created: "unknown",
			year_acquired: "2014",
			provenance: "outdoors",
			creditline: "gift of the artist",
			colors: ["warm-stone", "warm-faun", "goldenrod", "almost-black"],
			image: "objects/010.jpg"
		},

		item011 : {
			accession_number: "1970-00-011",
			title: "caterpillar in stilllife",
		 	creator: "man",
			department: "Drawings and prints",
			period: "unknown",
		 	medium: "print on paper",
			year_created: "unknown",
			year_acquired: "1970",
			provenance: "indoors",
			creditline: "on loan from Cooper Hewitt",
			colors: ["light-faun", "realy-almost-black"],
			image: "objects/011.jpg"
		},

			item012 : {
			accession_number: "1987-00-011",
			title: "Woman in Black Hat",
		 	creator: "Bil Donovan",
			department: "Drawings and prints",
			period: "Contemporary",
		 	medium: "watercolour on paper",
			year_created: "1982",
			year_acquired: "1987",
			provenance: "indoors",
			creditline: "gift of the artist",
			colors: ["light-faun", "sonic-silver", "bluey-sonic-silver", "realy-almost-black", "good-brick"],
			image: "objects/012.jpg"
		},

			item013 : {
			accession_number: "1920-00-013",
			title: "Portrait of the Artist's Grandfather as a Young Man",
		 	creator: "man",
			department: "Photography, nostalgia",
			period: "Modern",
		 	medium: "photograph",
			year_created: "1916",
			year_acquired: "1920",
			provenance: "indoors",
			creditline: null,
			colors: ["light-faun", "warm-faun", "raw-umber", "sepia"],
			image: "objects/013.jpg"
		},

			item014 : {
			accession_number: "2015-01-014",
			title: "house in Richmond, VA",
		 	creator: "man",
			department: "Architecture, Edward Hopper lighting",
			period: "unknown",
		 	medium: "architecture",
			year_created: "unknown",
			year_acquired: "2015",
			provenance: "outdoors",
			creditline: null,
			colors: ["light-faun", "sea-green", "really-almost-black"],
			image: "objects/014.jpg"
		},

			item015 : {
			accession_number: "2015-01-015",
			title: "sailboat in Annapolis, MD",
		 	creator: "man",
			department: "Boats, envy",
			period: "unknown",
		 	medium: "mixed-media",
			year_created: "unknown",
			year_acquired: "2015",
			provenance: "outdoors",
			creditline: "Memory on loan from Devon Danz",
			colors: ["goldenrod"],
			image: "objects/015.jpg"
		},

			item016 : {
			accession_number: "2015-01-016",
			title: "dead baby bird in Annapolis, MD",
		 	creator: "god",
			department: "Birds, ephemera",
			period: "Cretaceous",
		 	medium: "fauna",
			year_created: "unknown",
			year_acquired: "2015",
			provenance: "outdoors",
			creditline: "Memory on loan from Devon Danz",
			colors: ["warm-stone", "goldenrod", "raw-umber", "sepia"],
			image: "objects/016.jpg"
		},

			item017 : {
			accession_number: "2015-03-017",
			title: "shade under pier",
		 	creator: "man, god",
			department: "Ephemera, architectural",
			period: "Contemporary",
		 	medium: "concrete, light",
			year_created: "2015",
			year_acquired: "2015",
			provenance: "outdoors",
			creditline: "temporary loan from Victoria and Albert Museum",
			colors: ["light-faun", "sonic-silver", "bluey-sonic-silver", "outer-space", "almost-black"],
			image: "objects/017.jpg"
		},

			item018 : {
			accession_number: "2015-03-018",
			title: "chicken on stoop",
		 	creator: "god",
			department: "Birds",
			period: "Cretaceous",
		 	medium: "fauna",
			year_created: "unknown",
			year_acquired: "2015",
			provenance: "outdoors",
			creditline: "temporary loan from Victoria and Albert Museum",
			colors: ["goldenrod", "good-brick", "fire-brick", "raw-umber", "sepia"],
			image: "objects/018.jpg"
		},

			item019 : {
			accession_number: "2015-88-019",
			title: "paint on fingers",
		 	creator: "man",
			department: "Ephemera",
			period: "Contemporary",
		 	medium: "paint on fauna",
			year_created: "2015",
			year_acquired: "2015",
			provenance: "indoors",
			creditline: "temporary loan from Devon Danz",
			colors: ["sea-green"],
			image: "objects/019.jpg"
		},

			item020 : {
			accession_number: "2014-88-020",
			title: "Lawrence",
		 	creator: "god, man",
			department: "Trees, domestic",
			period: "Contemporary",
		 	medium: "flora",
			year_created: "unknown",
			year_acquired: "2014",
			provenance: "indoors",
			creditline: "private donor",
			colors: ["sea-green", "plant-green", "sepia"],
			image: "objects/020.jpg"
		},

			item021 : {
			accession_number: "1966-88-021",
			title: "unknown",
		 	creator: "George Bellows",
			department: "Painting",
			period: "unknown",
		 	medium: "painting on canvas",
			year_created: "unknown",
			year_acquired: "1966",
			provenance: "indoors",
			creditline: "on loan from National Gallery",
			colors: ["light-faun", "sonic-silver", "bluey-sonicsilver", "cool-stone", "warm-stone", "warm-faun", "peaty-tan", "warm-seagreen", "sea-green", "plant-green", "outer-space", "almost-black", "really-almost-black", "good-brick", "fire-brick", "goldenrod", "raw-umber", "sepia"],
			image: "objects/021.jpg"
		},

	};

$(".item__image").append("<img src="+item004.image+">");
$(".item__number").append("<p>ACCESSION NUMBER: "+item004.number+"</p>");
$(".item__title").append("<p>TITLE: "+item004.title+"</p>");
$(".item__creator").append("<p>CREATOR:"+item004.creator+"</p>");
$(".item__department").append("<p>DEPARTMENT: "+item004.department+"</p>");
$(".item__period").append("<p>PERIOD: "+item004.period+"</p>");
$(".item__year_created").append("<p>YEAR CREATED: "+item004.year_created+"</p>");
$(".item__year_acquired").append("<p>YEAR ACQUIRED: "+item004.year_acquired+"</p>");
$(".item__medium").append("<p>MEDIUM: "+item004.medium+"</p>");
$(".item__provenance").append("<p>PROVENANCE: "+item004.provenance+"</p>");
$(".item__creditline").append("<p>"+item004.creditline+"</p>");
$(".item__colors").append("<p>COLOURS: "+item004.colors+"</p>");






