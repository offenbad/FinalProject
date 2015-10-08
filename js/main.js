var base = 'https://raw.githubusercontent.com/offenbad/FinalProject/gh-pages/';
var items = [
		 {
			accession_number: "1999-91-001",
			title: "moth",
			creator: "god",
			department: "Lepeodoptera, common",
			period: "Art Nouveau",
			medium: "fauna",
			year_created: 1999,
			year_acquired: 1999,
			provenance: "outdoors",
			creditline: null,
			colors: ["light-faun", "warm-faun", "cool-stone", "warm-stone"],
			image: "objects/001.jpg"
		},

		 {
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

		{
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

		{
			accession_number: "1972-91-004",
			title: "toad",
			creator: "god",
			department: "Amphibians, small",
			period: "Neoclassical",
			medium: "fauna",
			year_created: 1937,
			year_acquired: 1972,
			provenance: "outdoors",
			creditline: "Gift of Henry Clay Frick",
			colors: ["warm-faun", "warm-stone", "goldenrod"],
			image: "objects/004.jpg"
		},

		{
			accession_number: "2010-87-005",
			title: "waterdroplets on plateglass",
		 	creator: "god, man",
			department: "Ephemera, water event",
			period: "Contemporary",
		 	medium: "ephemera",
			year_created: "2005",
			year_acquired: "2010",
			provenance: "indoors",
			creditline: "Gift of the artist",
			colors: [],
			image: "objects/005.jpg"
		},

		{
			accession_number: "1972-87-006",
			title: "sunset in rearview mirror",
		 	creator: "god, man",
			department: "Ephemera, light event",
			period: "Contemporary",
		 	medium: "ephemera",
			year_created: "1954",
			year_acquired: "1972",
			provenance: "outdoors",
			creditline: null,
			colors: [],
			image: "objects/006.jpg"
		},

		{
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
			colors: ["almost-black", "sepia", "really-almost-black"],
			image: "objects/007.jpg"
		},

		{
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
			colors: ["raw-umber", "sepia", "really-almost-black"],
			image: "objects/008.jpg"
		},

		{
			accession_number: "2015-00-009",
			title: "boy in light in window",
		 	creator: "man, god",
			department: "Ephemera, light event",
			period: "Contemporary",
		 	medium: "ephemera",
			year_created: 2014,
			year_acquired: 2015,
			provenance: "indoors",
			creditline: "Gift of the artist",
			colors: [],
			image: "objects/009.jpg"
		},

		{
			accession_number: "2014-00-010",
			title: "house I like that's going to be torn down",
		 	creator: "man",
			department: "Ephemera, architectural",
			period: "Victorian",
		 	medium: "art",
			year_created: "unknown",
			year_acquired: 2014,
			provenance: "outdoors",
			creditline: null,
			colors: ["warm-stone", "goldenrod"],
			image: "objects/010.jpg"
		},

		{
			accession_number: "2015-00-011",
			title: "caterpillar in stilllife",
		 	creator: "Jean-Baptiste Monnoyer.",
			department: "Drawings & prints",
			period: "Baroque",
		 	medium: "art",
			year_created: "ca. 1680",
			year_acquired: 2015,
			provenance: "indoors",
			creditline: "On loan from Cooper Hewitt",
			colors: ["light-faun", "realy-almost-black"],
			image: "objects/011.jpg"
		},

		{
			accession_number: "2015-00-012",
			title: "Woman in Black Hat",
		 	creator: "Bil Donovan",
			department: "Drawings & prints",
			period: "Contemporary",
		 	medium: "art",
			year_created: "unknown",
			year_acquired: 2015,
			provenance: "indoors",
			creditline: "On loan from the artist",
			colors: ["light-faun", "sonic-silver", "bluey-sonic-silver", "realy-almost-black", "good-brick"],
			image: "objects/012.jpg"
		},

		{
			accession_number: "1920-00-013",
			title: "Portrait of the Artist's Grandfather as a Young Man",
		 	creator: "man",
			department: "Photography, nostalgia",
			period: "Modern",
		 	medium: "art",
			year_created: 1916,
			year_acquired: 1920,
			provenance: "indoors",
			creditline: null,
			colors: ["light-faun", "warm-faun", "raw-umber", "sepia"],
			image: "objects/013.jpg"
		},

		{
			accession_number: "2015-01-014",
			title: "house; Richmond, VA",
		 	creator: "man",
			department: "Architecture, Edward Hopper lighting",
			period: "unknown",
		 	medium: "art",
			year_created: "unknown",
			year_acquired: 2015,
			provenance: "outdoors",
			creditline: null,
			colors: ["light-faun", "sea-green"],
			image: "objects/014.jpg"
		},

		{
			accession_number: "2015-01-015",
			title: "sailboat",
		 	creator: "man",
			department: "Boats, envy",
			period: "unknown",
		 	medium: "art",
			year_created: "unknown",
			year_acquired: 2015,
			provenance: "outdoors",
			creditline: "Memory on loan from Devon Danz",
			colors: ["goldenrod", "warm-seagreen"],
			image: "objects/015.jpg"
		},

		{
			accession_number: "2015-01-016",
			title: "dead baby bird",
		 	creator: "god",
			department: "Birds, ephemera",
			period: "Cretaceous",
		 	medium: "fauna",
			year_created: "unknown",
			year_acquired: 2015,
			provenance: "outdoors",
			creditline: "Memory on loan from Devon Danz",
			colors: ["warm-stone", "goldenrod", "raw-umber", "sepia"],
			image: "objects/016.jpg"
		},

		{
			accession_number: "2015-03-017",
			title: "shade under pier; Wilmington, NC",
		 	creator: "man, god",
			department: "Ephemera, light event",
			period: "Contemporary",
		 	medium: "ephemera",
			year_created: 2015,
			year_acquired: 2015,
			provenance: "outdoors",
			creditline: "On loan from Victoria and Albert Museum",
			colors: ["light-faun", "sonic-silver", "bluey-sonic-silver", "outer-space", "almost-black"],
			image: "objects/017.jpg"
		},

		{
			accession_number: "2015-03-018",
			title: "chicken on stoop",
		 	creator: "god",
			department: "Birds, ephemera",
			period: "Cretaceous",
		 	medium: "fauna",
			year_created: "unknown",
			year_acquired: 2015,
			provenance: "outdoors",
			creditline: "On loan from Victoria and Albert Museum",
			colors: ["goldenrod", "good-brick", "fire-brick", "raw-umber", "sepia"],
			image: "objects/018.jpg"
		},

		{
			accession_number: "2015-88-019",
			title: "paint on fingers",
		 	creator: "man",
			department: "Ephemera, spills",
			period: "Contemporary",
		 	medium: "ephemera",
			year_created: 2015,
			year_acquired: 2015,
			provenance: "indoors",
			creditline: "Temporary loan from Devon Danz",
			colors: ["sea-green"],
			image: "objects/019.jpg"
		},

		{
			accession_number: "2014-88-020",
			title: "Lawrence",
		 	creator: "god, man",
			department: "Trees, domestic",
			period: "Contemporary",
		 	medium: "flora",
			year_created: "unknown",
			year_acquired: 2014,
			provenance: "indoors",
			creditline: "Private donor",
			colors: ["warm-seagreen", "plant-green", "sepia"],
			image: "objects/020.jpg"
		},

		{
			accession_number: "2014-88-021",
			title: "The Lone Tenement",
		 	creator: "George Bellows",
			department: "Painting",
			period: "Ashcan school",
		 	medium: "art",
			year_created: 1909,
			year_acquired: 2014,
			provenance: "indoors",
			creditline: "On loan from National Gallery",
			colors: ["sonic-silver", "bluey-sonicsilver", "cool-stone", "warm-stone", "warm-faun", "sea-green", "outer-space", "almost-black", "really-almost-black", "good-brick", "fire-brick", "goldenrod", "raw-umber", "sepia"],
			image: "objects/021.jpg"
		},

		{
			accession_number: "2015-82-022",
			title: "painting of a horse",
		 	creator: "Eugene Delacroix",
			department: "Painting",
			period: "Romantic",
		 	medium: "art",
			year_created: "unknown",
			year_acquired: 2015,
			provenance: "indoors",
			creditline: "Permenant loan fron Virginia Museum of Fine Arts",
			colors: [ "goldenrod", "raw-umber", "sepia", "really-almost-black"],
			image: "objects/022.jpg"
		},

		{
			accession_number: "2015-00-023",
			title: "mailing label",
		 	creator: "man",
			department: "Ephemera",
			period: "Contemporary",
		 	medium: "ephemera",
			year_created: "unknown",
			year_acquired: 2015,
			provenance: "indoors",
			creditline: "Unintentional loan from Alexandra von Trapp",
			colors: ["warm-stone", "really-almost-black"],
			image: "objects/023.jpg"
		},

		{
			accession_number: "2015-00-024",
			title: "toad",
			creator: "god",
			department: "Amphibians, small",
			period: "Roamntic",
			medium: "fauna",
			year_created: 1928,
			year_acquired: 1915,
			provenance: "outdoors",
			creditline: "Memory on loan from Devon Danz",
			colors: ["peaty-tan", "goldenrod"],
			image: "objects/024.jpg"
		},

		{
			accession_number: "1944-00-025",
			title: "Parker Duofold pen",
			creator: "man",
			department: "Writing implements, nostalgia",
			period: "Modern",
			medium: null,
			year_created: 1943,
			year_acquired: 1944,
			provenance: "indoors",
			creditline: "Gift of Denton Welch",
			colors: ["fire-brick", "goldenrod", "really-almost-black"],
			image: "objects/025.jpg"
		},

		{
			accession_number: "2015-00-026",
			title: "sunrise from automobile",
			creator: "god, man",
			department: "Ephemera, light events",
			period: "Contemporary",
			medium: "ephemera",
			year_created: 2015,
			year_acquired: 2015,
			provenance: "outdoors",
			creditline: "Gift of Devon Danz",
			colors: ["warm-faun", "sonic-silver", "bluey-sonicsilver"],
			image: "objects/026.jpg"
		},

		{
			accession_number: "2015-00-027",
			title: "praying mantis",
			creator: "god",
			department: "Insects, carnivorous",
			period: "Art Nouveau",
			medium: "fauna",
			year_created: 1995,
			year_acquired: 2015,
			provenance: "outdoors",
			creditline: "Gift of Devon Danz",
			colors: ["bluey-sonicsilver", "peaty-tan", "warm-seagreen", "sea-green", "warm-stone"],
			image: "objects/027.jpg"
		},

		{
			accession_number: "2015-00-028",
			title: "cat in window",
			creator: "god, man",
			department: "Ephemera, light events",
			period: "Art Nouveau",
			medium: "fauna",
			year_created: 2015,
			year_acquired: 2015,
			provenance: "ephemera",
			creditline: "Gift of Devon Danz",
			colors: ["really-almost-black"],
			image: "objects/028.jpg"
		},

		{
			accession_number: "1938-00-029",
			title: "cocktail shaker",
			creator: "man",
			department: "Functional objects",
			period: "Art Deco",
			medium: "art",
			year_created: 1927,
			year_acquired: 1938,
			provenance: "indoors",
			creditline: "Gift of Devon Danz",
			colors: [],
			image: "objects/029.jpg"
		},

		{
			accession_number: "1933-00-030",
			title: "house",
			creator: "man",
			department: "Architecture",
			period: "Victorian",
			medium: "art",
			year_created: "unknown",
			year_acquired: 1933,
			provenance: "outdoors",
			creditline: null,
			colors: ["good-brick", "fire-brick", "raw-umber", "outer-space"],
			image: "objects/030.jpg"
		},

		{
			accession_number: "1978-00-031",
			title: "tortoise caryatid",
			creator: "man",
			department: "Fauna, architectural",
			period: "unknown",
			medium: "art",
			year_created: "unknown",
			year_acquired: 1978,
			provenance: "indoors",
			creditline: "On loan from Boston Public Library",
			colors: ["warm-stone"],
			image: "objects/031.jpg"
		},

		{
			accession_number: "1978-00-032",
			title: "dolphins on wallpaper",
			creator: "man",
			department: "Fauna, decorative",
			period: "unknown",
			medium: "art",
			year_created: "unknown",
			year_acquired: 1978,
			provenance: "indoors",
			creditline: "On loan from Cooper Hewitt",
			colors: ["goldenrod", "really-almost-black"],
			image: "objects/032.jpg"
		},

		{
			accession_number: "1990-00-033",
			title: "horse, carriage in motion",
			creator: "god, man",
			department: "Fauna, functional",
			period: "Reformation",
			medium: "fauna",
			year_created: 1672,
			year_acquired: 1990,
			provenance: "outdoors",
			creditline: null,
			colors: ["outer-space", "almost-black", "really-almost-black"],
			image: "objects/033.jpg"
		},

		{
			accession_number: "1900-00-034",
			title: "light through leaves",
			creator: "god",
			department: "Ephemera, light events",
			period: "Modern",
			medium: "flora",
			year_created: 1890,
			year_acquired: 1900,
			provenance: "outdoors",
			creditline: null,
			colors: ["plant-green", "warm-seagreen"],
			image: "objects/034.jpg"
		},

		{
			accession_number: "2015-06-035",
			title: "clouds in, out of rearview mirror",
			creator: "god, man",
			department: "Ephemera, light events",
			period: "Contemporary",
			medium: "ephemera",
			year_created: 2015,
			year_acquired: 2015,
			provenance: "outdoors",
			creditline: null,
			colors: [],
			image: "objects/035.jpg"
		},

		{
			accession_number: "2015-06-036",
			title: "Great Aunt Dee in Japan",
			creator: "man",
			department: "Photography, nostalgia",
			period: "Modern",
		 	medium: "art",
			year_created: "unknown",
			year_acquired: 2015,
			provenance: "indoors",
			creditline: "Memory on loan from Devon Danz",
			colors: ["warm-faun", "sea-green", "sepia"],
			image: "objects/036.jpg"
		},

		{
			accession_number: "1967-00-037",
			title: "Bacchus",
			creator: "man",
			department: "Sculpture, Roman",
			period: "unknown",
			medium: "art",
			year_created: "unknown",
			year_acquired: 1967,
			provenance: "indoors",
			creditline: "On loan from Virginia Museum of Fine Arts",
			colors: ["warm-faun", "warm-stone"],
			image: "objects/037.jpg"
		},

		{
			accession_number: "1931-00-038",
			title: "Atlas",
			creator: "John Singer Sargent",
			department: "Painting, mural",
			period: "Beaux Arts",
			medium: "art",
			year_created: 1925,
			year_acquired: 1931,
			provenance: "indoors",
			creditline: null,
			colors: [ "light-faun", "sonic-silver", "bluey-sonicsilver", "cool-stone", "warm-faun", "warm-stone", "peaty-tan", "outer-space", "almost-black" ],
			image: "objects/038.jpg"
		},

		{
			accession_number: "2015-00-039",
			title: "Paul Helleu",
			creator: "John Singer Sargent",
			department: "Drawings & prints",
			period: "Beaux Arts",
			medium: "art",
			year_created: "early 1880s",
			year_acquired: 2015,
			provenance: "indoors",
			creditline: "On loan from Metropolitan Museum of Art",
			colors: [ "light-faun", "cool-stone", "warm-faun", "warm-stone", "really-almost-black" ],
			image: "objects/039.jpg"
		},

		{
			accession_number: "2015-00-040",
			title: "two dresses",
			creator: "Karl Lagerfeld",
			department: "Costume, fanciful",
			period: "Contemporary",
			medium: "art",
			year_created: "unknown",
			year_acquired: 2015,
			provenance: "indoors",
			creditline: null,
			colors: [ "good-brick", "fire-brick", "goldenrod" ],
			image: "objects/040.jpg"
		},

		{
			accession_number: "2015-00-041",
			title: "metal screws in reused timber",
			creator: "man, god",
			department: "Flooring, rather good",
			period: "Contemporary",
			medium: "art",
			year_created: 2014,
			year_acquired: 2015,
			provenance: "indoors",
			creditline: "Borrowed from the Whitney",
			colors: [ "light-faun", "warm-faun", "outer-space" ],
			image: "objects/041.jpg"
		},

		{
			accession_number: "2015-00-42",
			title: "beach, pre-picnic",
			creator: "man, god",
			department: "Leisure, summer",
			period: "Contemporary",
			medium: "flora",
			year_created: 2015,
			year_acquired: 2015,
			provenance: "outdoors",
			creditline: "Memory on loan from Devon Danz",
			colors: [ "light-faun", "warm-faun", "almost-black", "plant-green"],
			image: "objects/042.jpg"
		},

		{
			accession_number: "2014-00-43",
			title: "my favourite building on 5th avenue",
			creator: "man",
			department: "Architecture, envy",
			period: "Beaux Arts",
			medium: "art",
			year_created: "unknown",
			year_acquired: 2014,
			provenance: "outdoors",
			creditline: "Gift of the artist",
			colors: [ "good-brick"],
			image: "objects/043.jpg"
		},

		{
			accession_number: "2015-00-44",
			title: "inkstain",
			creator: "man",
			department: "Ephemera, spills",
			period: "Fin de Siecle",
			medium: "ephemera",
			year_created: 2015,
			year_acquired: 2015,
			provenance: "outdoors",
			creditline: "Gift of the artist",
			colors: [ "really-almost-black"],
			image: "objects/044.jpg"
		},

		{
			accession_number: "2015-00-45",
			title: "water on stones",
			creator: "god",
			department: "Picnic spots, summer",
			period: "Pre-cambrian",
			medium: "ephemera",
			year_created: "unknown",
			year_acquired: 2015,
			provenance: "outdoors",
			creditline: "",
			colors: [ "warm-stone", "cool-stone"],
			image: "objects/045.jpg"
		},

		{
			accession_number: "2014-00-46",
			title: "Sevres cup and saucer",
			creator: "man",
			department: "Tablewear, nostalgia",
			period: "unknown",
			medium: "art",
			year_created: "ca. 1780",
			year_acquired: 2014,
			provenance: "indoors",
			creditline: "On loan from Cooper Hewitt, suggested by Denton Welch",
			colors: [ "goldenrod"],
			image: "objects/046.jpg"
		},

		{
			accession_number: "2014-82-47",
			title: "Poor Artist's Cupboard",
			creator: "Charles Bird King",
			department: "Painting",
			period: "unknown",
			medium: "art",
			year_created: 1815,
			year_acquired: 2014,
			provenance: "indoors",
			creditline: "On loan from National Gallery",
			colors: [ "goldenrod", "warm-faun", "outer-space", "really-almost-black", "fire-brick", "almost-black"],
			image: "objects/047.jpg"
		},

		{
			accession_number: "2013-82-48",
			title: "Portrait of the Artist in an Improbable Hat",
			creator: "Igor Gnedo",
			department: "Drawings & prints",
			period: "Contemporary",
			medium: "art",
			year_created: 2013,
			year_acquired: 2013,
			provenance: "indoors",
			creditline: "Captured on Instagram",
			colors: [ "really-almost-black"],
			image: "objects/048.jpg"
		},

	];

if ( $('#element-item-template--small').length !== 0 ) {
	var compiled = _.template($('#element-item-template--small').html());
};

for (var i =0; i<items.length; i++){
	if ( $('#element-item-template--small').length !== 0 ) {
		var output = compiled( items[ i ] );
		$(".grid").append( output );

	}

};


var compiledBig = _.template($('#element-item-template--large').html());
$( ".js-element-item" ).on ("click", function() {

	
	var outputBig = compiledBig( items[ $( this ).index() ] );

	$(".modal").html( outputBig );	
	console.log( outputBig )
	$(".modal").addClass("modal--visible");
});

$(".modal").on ("click", function() {
	$(".modal").removeClass("modal--visible");
});

 







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

$grid.isotope({ filter: '.light-faun' });

$grid.isotope({ filter: '.sonic-silver' });

$grid.isotope({ filter: '.bluey-sonicsilver' });

$grid.isotope({ filter: '.cool-stone' });

$grid.isotope({ filter: '.warm-stone' });

$grid.isotope({ filter: '.warm-faun' });

$grid.isotope({ filter: '.peaty-tan' });

$grid.isotope({ filter: '.warm-seagreen' });

$grid.isotope({ filter: '.sea-green' });

$grid.isotope({ filter: '.plant-green' });

$grid.isotope({ filter: '.outer-space' });

$grid.isotope({ filter: '.almost-black' });

$grid.isotope({ filter: '.really-almost-black' });

$grid.isotope({ filter: '.good-brick' });

$grid.isotope({ filter: '.fire-brick' });

$grid.isotope({ filter: '.goldenrod' });

$grid.isotope({ filter: '.raw-umber' });

$grid.isotope({ filter: '.sepia' });


// show all items
$grid.isotope({ filter: '*' });

// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});






