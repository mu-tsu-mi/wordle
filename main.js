/* State Variable */
const instructionButton = document.getElementById("instruction-button")
const playButton = document.getElementById("play-button")
const instructions = document.querySelector(".instructions")
const wordEntryButton = document.getElementById("key-enter")
const keyboard = document.querySelector(".keyboard")
const guess_1 = document.getElementById("guess-1")
const wordleSource = ['ABACK','ABASE','ABATE','ABBEY','ABIDE','ABOUT','ABOVE','ABYSS','ACRID','ACTOR','ACUTE','ADAPT','ADMIT','ADOBE','ADOPT','ADORE','ADULT','AFTER','AGAIN','AGAPE','AGATE','AGENT','AGILE','AGING','AGLOW','AGONY','AGREE','AHEAD','ALBUM','ALIEN','ALIKE','ALIVE','ALLOW','ALOFT','ALONE','ALOOF','ALOUD','ALPHA','ALTAR','ALTER','AMBER','AMISS','AMPLE','ANGEL','ANGER','ANGRY','ANODE','ANTIC','AORTA','APART','APHID','APPLE','APPLY','APRON','APTLY','ARBOR','ARDOR','ARGUE','AROMA','ASCOT','ASIDE','ASKEW','ASSET','ATOLL','ATONE','AUDIO','AUDIT','AVAIL','AVERT','AWAIT','AWAKE','AWFUL','AXIOM','AZURE','BACON','BADGE','BADLY','BAGEL','BAKER','BALSA','BANAL','BARGE','BASIC','BATHE','BATON','BATTY','BAYOU','BEACH','BEADY','BEAST','BEEFY','BEGET','BEGIN','BEING','BELCH','BELIE','BELLY','BELOW','BENCH','BERET','BERTH','BESET','BINGE','BIOME','BIRCH','BIRTH','BLACK','BLAME','BLAND','BLEAK','BLEED','BLEEP','BLOCK','BLOKE','BLOND','BLOWN','BLUFF','BLURB','BLURT','BLUSH','BOOBY','BOOST','BOOZE','BOOZY','BORAX','BOUGH','BRAID','BRAKE','BRASH','BRAVE','BREAD','BREAK','BRIAR','BRIBE','BRIDE','BRIEF','BRINE','BRING','BRINK','BRISK','BROKE','BROOK','BROOM','BRUSH','BUGGY','BUILD','BUILT','BULKY','BULLY','BUNCH','BURLY','CABLE','CACAO','CACHE','CANDY','CANNY','CANOE','CAPER','CARAT','CARGO','CAROL','CARRY','CATCH','CATER','CAULK','CAUSE','CEDAR','CHAFE','CHAIN','CHAMP','CHANT','CHARD','CHARM','CHART','CHEAT','CHEEK','CHEER','CHEST','CHIEF','CHILD','CHILL','CHIME','CHOIR','CHOKE','CHORD','CHUNK','CHUTE','CIDER','CIGAR','CINCH','CIRCA','CIVIC','CLASS','CLEAN','CLEAR','CLEFT','CLERK','CLICK','CLING','CLOCK','CLONE','CLOSE','CLOTH','CLOWN','CLUCK','COACH','COAST','COCOA','COLON','COMET','COMMA','CONDO','CONIC','CORNY','COULD','COUNT','COURT','COVET','COWER','COYLY','CRAMP','CRANE','CRANK','CRASS','CRATE','CRAVE','CRAZE','CRAZY','CREAK','CREDO','CREPT','CRIME','CRIMP','CROAK','CRONE','CROSS','CRUMB','CRUST','CURLY','CYNIC','DADDY','DAISY','DANCE','DANDY','DEATH','DEBUG','DECAY','DELTA','DELVE','DENIM','DEPOT','DEPTH','DEVIL','DIGIT','DINER','DISCO','DITTO','DODGE','DOING','DONOR','DONUT','DOUBT','DOWRY','DOZEN','DRAIN','DREAM','DRINK','DRIVE','DROLL','DROOP','DUCHY','DUTCH','DUVET','DWARF','DWELL','DWELT','EARLY','EARTH','EGRET','EJECT','ELDER','ELOPE','ELUDE','EMAIL','EMBER','EMPTY','ENEMA','ENJOY','ENNUI','ENTER','EPOCH','EPOXY','EQUAL','ERODE','ERROR','ERUPT','ESSAY','ETHIC','ETHOS','EVADE','EVERY','EVOKE','EXACT','EXCEL','EXERT','EXIST','EXPEL','EXTRA','EXULT','FARCE','FAULT','FAVOR','FEAST','FEIGN','FERRY','FEWER','FIELD','FIEND','FIFTY','FINAL','FINER','FIRST','FISHY','FIXER','FJORD','FLAIL','FLAIR','FLAME','FLANK','FLARE','FLASK','FLESH','FLICK','FLING','FLIRT','FLOAT','FLOCK','FLOOD','FLOOR','FLORA','FLOSS','FLOUT','FLUFF','FLUME','FLYER','FOCAL','FOCUS','FOGGY','FOLLY','FORAY','FORGE','FORGO','FORTH','FORTY','FOUND','FOYER','FRAME','FRANK','FRESH','FRIED','FROCK','FRONT','FROST','FROTH','FROZE','FUNGI','FUNNY','GAMER','GAMMA','GAUDY','GAUZE','GAWKY','GECKO','GENRE','GHOUL','GIANT','GIDDY','GIRTH','GIVEN','GLASS','GLAZE','GLEAN','GLOAT','GLOBE','GLOOM','GLORY','GLOVE','GLYPH','GNASH','GOLEM','GONER','GOOSE','GORGE','GOUGE','GRACE','GRADE','GRAIL','GRAND','GRAPH','GRASP','GRATE','GREAT','GREEN','GREET','GRIEF','GRIME','GRIMY','GRIPE','GROIN','GROUP','GROUT','GROVE','GROWL','GRUEL','GUANO','GUARD','GUEST','GUIDE','GUILD','GULLY','GUPPY','HAIRY','HAPPY','HATCH','HATER','HAVOC','HEADY','HEARD','HEART','HEATH','HEAVE','HEAVY','HEIST','HELIX','HELLO','HERON','HINGE','HOARD','HOBBY','HOMER','HORDE','HORSE','HOTEL','HOUND','HOUSE','HOWDY','HUMAN','HUMID','HUMOR','HUMPH','HUNCH','HUNKY','HURRY','HUTCH','HYPER','IGLOO','IMAGE','IMPEL','INANE','INDEX','INEPT','INERT','INFER','INPUT','INTER','IONIC','IRATE','IRONY','ISLET','ITCHY','IVORY','JAUNT','JAZZY','JOKER','JOUST','JUDGE','KARMA','KAYAK','KAZOO','KEBAB','KHAKI','KIOSK','KNEEL','KNELT','KNOCK','KNOLL','KOALA','LABEL','LABOR','LAPEL','LAPSE','LARGE','LARVA','LATTE','LAYER','LEAFY','LEAKY','LEAPT','LEARN','LEASH','LEAVE','LEDGE','LEERY','LEGGY','LEMON','LIBEL','LIGHT','LILAC','LIMIT','LINEN','LINER','LINGO','LIVER','LOCAL','LOCUS','LOFTY','LOGIC','LOOPY','LOSER','LOVER','LOWLY','LOYAL','LUCKY','LUNAR','LUNCH','LUNGE','LUSTY','LYING','MADAM','MAGIC','MAGMA','MAIZE','MAJOR','MANIA','MANLY','MANOR','MAPLE','MARCH','MARRY','MARSH','MASON','MASSE','MATEY','MATCH','MAXIM','MAYBE','MEALY','MEANT','MEDAL','MERCY','MERIT','MERRY','METAL','METRO','MICRO','MIDGE','MIDST','MIMIC','MINCE','MODEL','MOIST','MOLAR','MONEY','MONTH','MOOSE','MOSSY','MOTOR','MOTTO','MOULT','MOUNT','MOURN','MOUSE','MOVIE','MUCKY','MUMMY','MURAL','MUSIC','NAIVE','NANNY','NASTY','NATAL','NAVAL','NEEDY','NEVER','NIGHT','NINJA','NINTH','NOBLE','NOISE','NORTH','NYMPH','OCCUR','OCEAN','OFFAL','OFTEN','OLDER','OLIVE','ONION','ONSET','OPERA','OTHER','OUGHT','OUTDO','OXIDE','PANEL','PANIC','PAPER','PARER','PARRY','PARTY','PASTA','PATTY','PAUSE','PEACE','PEACH','PERCH','PERKY','PESKY','PHASE','PHONE','PHONY','PHOTO','PIANO','PICKY','PIETY','PILOT','PINEY','PINKY','PINTO','PIPER','PIQUE','PITHY','PIXEL','PIXIE','PLACE','PLANK','PLANT','PLATE','PLAZA','PLEAT','PLUCK','PLUNK','POINT','POISE','POKER','POLKA','POLYP','POUND','POWER','PRICE','PRICK','PRIDE','PRIME','PRIMO','PRINT','PRIZE','PROBE','PROVE','PROXY','PSALM','PULPY','PURGE','QUALM','QUART','QUEEN','QUERY','QUEST','QUEUE','QUICK','QUIET','QUIRK','QUOTE','RADIO','RAINY','RAMEN','RANCH','RANGE','RATIO','RAYON','REACT','REBUS','REBUT','RECAP','REGAL','RELIC','RENEW','REPAY','REPEL','RESIN','RETCH','RETRO','RETRY','REVEL','RHINO','RHYME','RIDGE','RIGHT','RIPER','RISEN','RIVAL','ROBIN','ROBOT','ROCKY','RODEO','ROGUE','ROOMY','ROUGE','ROUND','ROUSE','ROUTE','ROYAL','RUDDY','RUDER','RUPEE','RUSTY','SAINT','SALAD','SALSA','SALTY','SASSY','SAUTE','SCALD','SCANT','SCARE','SCARF','SCOLD','SCOPE','SCORN','SCOUR','SCOUT','SCRAM','SCRAP','SCRUB','SEDAN','SEEDY','SENSE','SERVE','SEVER','SHADE','SHAKE','SHALL','SHAME','SHARD','SHARP','SHAWL','SHIFT','SHINE','SHIRE','SHIRK','SHORN','SHOWN','SHOWY','SHRUB','SHRUG','SHYLY','SIEGE','SIGHT','SINCE','SISSY','SKILL','SKIMP','SKIRT','SKUNK','SLATE','SLEEK','SLEEP','SLOPE','SLOSH','SLOTH','SLUMP','SLUNG','SMALL','SMART','SMASH','SMEAR','SMELT','SMILE','SMIRK','SMITE','SMITH','SNACK','SNAFU','SNAIL','SNAKE','SNAKY','SNARE','SNARL','SNEAK','SNORT','SNOUT','SOGGY','SOLAR','SOLID','SOLVE','SONIC','SOUND','SOWER','SPACE','SPADE','SPELL','SPELT','SPEND','SPENT','SPICE','SPICY','SPIEL','SPIKE','SPILL','SPIRE','SPLAT','SPOKE','SPRAY','SPURT','SQUAD','SQUAT','STAFF','STAGE','STAID','STAIR','STALE','STAND','START','STASH','STATE','STEAD','STEED','STEIN','STICK','STIFF','STILL','STING','STINK','STOCK','STOLE','STOMP','STONE','STONY','STOOL','STORE','STORY','STOUT','STOVE','STRAP','STRAW','STUDY','STYLE','SUGAR','SULKY','SURER','SURLY','SUSHI','SWEAT','SWEEP','SWEET','SWILL','SWINE','SWIRL','SYRUP','TABLE','TACIT','TAKEN','TALON','TANGY','TAPER','TAPIR','TARDY','TASTE','TASTY','TAUNT','TAWNY','TEARY','TEASE','TEMPO','TENTH','TEPID','THEIR','THEME','THERE','THESE','THIEF','THING','THINK','THIRD','THORN','THOSE','THREE','THREW','THROW','THUMB','THUMP','THYME','TIARA','TIBIA','TIGER','TILDE','TIPSY','TODAY','TONIC','TOPAZ','TOPIC','TORSO','TOTEM','TOUCH','TOUGH','TOXIC','TOXIN','TRACE','TRACT','TRADE','TRAIN','TRAIT','TRASH','TRAWL','TREAT','TREND','TRIAD','TRICE','TRITE','TROLL','TROPE','TROVE','TRUSS','TRUST','TRUTH','TRYST','TWANG','TWEED','TWEAK','TWICE','TWINE','TWIRL','ULCER','ULTRA','UNCLE','UNDER','UNDUE','UNFED','UNFIT','UNIFY','UNITE','UNLIT','UNMET','UNTIE','UNTIL','UNZIP','UPSET','URBAN','USAGE','USHER','USING','USUAL','USURP','UTTER','VAGUE','VALET','VALID','VENOM','VERGE','VERVE','VIGOR','VIOLA','VIRAL','VITAL','VIVID','VODKA','VOICE','VOTER','VOUCH','WACKY','WALTZ','WASTE','WATCH','WEARY','WEDGE','WHACK','WHALE','WHEEL','WHELP','WHERE','WHICH','WHIFF','WHILE','WHINE','WHIRL','WHISK','WHOOP','WINCE','WINDY','WOKEN','WOMAN','WOOER','WORDY','WORLD','WORRY','WORSE','WORST','WOULD','WOVEN','WRATH','WRITE','WRONG','WROTE','WRUNG','YACHT','YEARN','YIELD','YOUNG','YOUTH','ZESTY']
const computerChoice = wordleSource[Math.floor(Math.random() * wordleSource.length)]

console.log(computerChoice)

/* Model / State */
const playerChoice = {
    //Add player's count
    firstUserChoice: [],
    secondUserChoice: [],
    thirdUserChoice: [],
    fourthUserChoice: [],
    fifthUserChoice: [],
    sixthUserChoice: []
}

/* Function / Controller */
function clickedLetter(letter) {
    if(letter === undefined) {
        return
    }
    if(playerChoice.firstUserChoice.length <= 4) {
        playerChoice.firstUserChoice.push(letter)
        const letterElement = document.createElement("span")
        letterElement.innerHTML = letter
        guess_1.appendChild(letterElement)   
    }
}

// Check on player's word and paint
function wordCheck(userChoice){
    const firstGussContainer = document.getElementById("guess-1")

    for (let i = 0; i < 5; i++) {
        const letterToModify = firstGussContainer.getElementsByTagName("span")[i]
        const keyToModify = document.querySelector(`[data-letter='${userChoice[i]}']`)
        if(userChoice[i] === computerChoice.charAt(i)) {
            console.log(`${i + 1}th character matched. ${userChoice[i]}`)
            letterToModify.classList.add("green")
            keyToModify.classList.add("green")
        } else if(computerChoice.includes(userChoice[i]) && userChoice[i] !== computerChoice.charAt(i)) {
            letterToModify.classList.add("yellow")
            keyToModify.classList.add("yellow")
        } else {
            letterToModify.classList.add("grey")
            keyToModify.classList.add("grey")
        }
   }
}

/* eventlistener */
instructionButton.addEventListener("click", function(event) {
    event.preventDefault()
    //replace with toggle func later.
    instructions.style.display = "block"
})

playButton.addEventListener("click", function(event) {
    event.preventDefault()
    //replace with toggle func later.
    instructions.style.display = "none"
})

// eventlistener for keyboard and word-box
keyboard.addEventListener("click", function(event) {
    event.preventDefault()
    clickedLetter(event.target.dataset.letter)
})

// eventlistener for enter button
wordEntryButton.addEventListener("click", function(event) {
    event.preventDefault()
    wordCheck(playerChoice.firstUserChoice)
}) 
