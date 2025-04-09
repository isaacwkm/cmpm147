// project.js - purpose and description here
// Author: Your Name
// Date:

// NOTE: This is how we might start a basic JavaaScript OOP project

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file

// define a class
class MyProjectClass {
  // constructor function
  constructor(param1, param2) {
    // set properties using 'this' keyword
    this.property1 = param1;
    this.property2 = param2;
  }

  // define a method
  myMethod() {
    // code to run when method is called
  }
}

function main() {
  const fillers = {
    adventurer: [
      "My Nautical Friend",
      "Pirate",
      "Sailor",
      "Sea Adventurer",
      "Sea Traveller",
      "Fellow Landlubber",
      "Citizen of the Sky",
      "Sea Dog",
      "$adventurer and $adventurer",
      "$adventurer, $adventurer, and $adventurer",
    ],
    pre: ["Edelweiss", "Circadia", "Moss", "Canyon", "Fischer's"],
    post: ["", " Island", " Isle", "Lookout"],
    people: [
      "kindly",
      "meek",
      "brave",
      "wise",
      "sacred",
      "cherished",
      "honored",
      "forgotten",
      "apathetic",
      "mystic",
      "orca",
    ],
    item: [
      "axe",
      "staff",
      "book",
      "cloak",
      "shield",
      "club",
      "sword",
      "magic gloves",
      "galvel",
      "fists",
      "mace",
      "potato",
    ],
    num: [
      "two",
      "three",
      "eleven",
      "so many",
      "too many",
      "an unsatisfying number of",
      "barely any",
      "an unspecified amount of",
      "surely a satisfactory number of",
    ],
    looty: [
      "gleaming",
      "valuable",
      "esteemed",
      "rare",
      "exalted",
      "scintillating",
      "plunderable",
    ],
    loots: [
      "coins",
      "chalices",
      "ingots",
      "gems",
      "scrolls",
      "treasure",
      "booty",
    ],
    baddies: [
      "skeletons",
      "glubs",
      "fishmen",
      "cordungles",
      "college (of winterhold) professors",
      "sea dragon",
      "evil $adventurer",
    ],
    message: ["call", "post", "decree", "hearkens", "harkening"],
  };

  const template = `$adventurer, heed this $message!
  
  I have just come from $pre$post where the $people folk are in desperate need. Their town has been overrun by $baddies. You must venture forth at once, taking my $item, and help them.
  
  It is told that the one who can rescue them will be awarded with $num $looty $loots. Surely this must tempt one such as yourself!
  `;

  // STUDENTS: You don't need to edit code below this line.

  const slotPattern = /\$(\w+)/;

  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }

  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }

    /* global box */
    $("#box").text(story);
  }

  /* global clicker */
  $("#clicker").click(generate);

  generate();
}

// let's get this party started - uncomment me
main();
