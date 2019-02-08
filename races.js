import { global } from './vars.js';

export const races = {
    protoplasm: {
        name: 'Protoplasm',
        desc: "Your race has yet to evolve into a complex lifeform, currently you're nothing but protoplasm in the primortal ooze.",
        type: 'organism'
    },
    human: {
        name: 'Human',
        desc: "Humans are versatile creatures who are adept at bending the enviroment around them to suit their needs. They are a ambitious race who seek to expand their knowledge of the universe around them and build great empires.",
        type: 'humanoid',
        home: 'Earth',
        entity: 'bipedal creatures',
        traits: {
            adaptable: 1,
            xenophobic: 1
        }
    },
    elven: {
        name: 'Elf',
        desc: 'Elves are typically tall and slender creatures with pointy ears, they tend to be reclusive but sharp of wit. Elves live long lives and often devote themsevles to study seeking answers to the deep fundamental questsions of the universe.',
        type: 'humanoid',
        home: 'Valinor',
        entity: 'pointy eared bipedal creatures',
        traits: { 
            studious: 1,
            arrogant: 1
        }
    },
    orc: {
        name: 'Orc',
        desc: "Orcs tend to be large and muscular creatures who are slow of wit but contain immense brute stength. They typically try to solve problems with violance first, then seek a more rational solution only when that doesn't work.",
        type: 'humanoid',
        home: 'Roneard',
        entity: 'green skinned bipedal creatures',
        traits: { 
            brute: 1,
            angry: 1
        }
    },
    cath: {
        name: 'Cath',
        desc: 'The cath are a feline race who are typically lazy. They are stealthy and adapt at hunting when motivated, however most cath prefer to laze about rather then work hard.',
        type: 'animal',
        home: 'Kath',
        entity: 'cat people',
        traits: { 
            lazy: 1,
            carnivore: 1
        }
    },
    wolven: {
        name: 'Wolven',
        desc: 'The wolven are a canine race who usally move in organized packs. They are a highly social species and rarely undertake any task alone.',
        type: 'animal',
        home: 'Wolvar',
        entity: 'dog people',
        traits: { 
            pack_mentality: 1,
            tracker: 1
        }
    },
    centaur: {
        name: 'Centaur',
        desc: 'Centaur are a species of horse creatures who have human like upper bodies. They are fast moving and strong.',
        type: 'animal',
        home: 'Sagittarius',
        entity: 'horse people',
        traits: {
            beast_of_burdon: 1,
            herbivore: 1,
        }
    },
    kobold: {
        name: 'Kobold',
        desc: 'Kobolds are small humanoid creatures who are known for their infatuation with candles. They are adapt at hoarding as much stuff as possible.',
        type: 'small',
        home: 'Wax',
        entity: 'small red skinned humanoids',
        traits: {
            pack_rat: 1,
            paranoid: 1
        }
    },
    goblin: {
        name: 'Goblin',
        desc: 'Goblins are small humanoid creatures who are known for their greed and cunning. They are highly intellegent but typically selfish in nature.',
        type: 'small',
        home: 'Crassus',
        entity: 'small green skinned bipedal creatures',
        traits: { 
            greedy: 1,
            merchant: 1
        }
    },
    gnome: {
        name: 'Gnome',
        desc: 'Gnomes are small humanoid creatures who are known for their superior intelligence. They are natural scientists and seek to expand their knowledge, often at the cost of safetly and morality.',
        type: 'small',
        home: 'Lawn',
        entity: 'small humanoids',
        traits: { 
            smart: 1,
            puny: 1
        }
    },
    orge: {
        name: 'Ogre',
        desc: 'Ogres are large humanoid creatures who are known for being kind of dumb. They are very strong with few other races being able to match their physical prowess, however they learn slowly.',
        type: 'giant',
        home: 'Mourn',
        entity: 'giant humanoids',
        traits: { 
            dumb: 1,
            tough: 1
        }
    },
    cyclops: {
        name: 'Cyclops',
        desc: 'Cyclops are large humanoid creatures who have a single giant eye. They have poor depth perception but are fairly social and intelligent.',
        type: 'giant',
        home: 'Unus',
        entity: 'one-eyed giant humanoids',
        traits: {
            nearsighted: 1
        } 
    },
    troll: {
        name: 'Troll',
        desc: 'Trolls are large humanoid creatures who are knwon for their regenerative powers. They are a hardy race highly resistent to disease and injury.',
        type: 'giant',
        home: 'Brücke',
        entity: 'large green humanoids',
        traits: {
            regenerative: 1,
            gluttony: 1
        }
    },
    tortollan: {
        name: 'Tortollan',
        desc: 'Tortollans are a reptillan species with shells on their backs, they are slow moving and good at hiding.',
        type: 'reptillian',
        home: 'Splinter',
        entity: 'turtle people',
        traits: { 
            slow: 1,
            armored: 1
        }
    },
    gecko: {
        name: 'Gecko',
        desc: 'The gecks are a lizard species who can natually camouflage themselves to their surroundings. They are very agile and fast moving.',
        type: 'reptillian',
        home: 'Ijsabom',
        entity: 'lizard people',
        traits: {
            chameleon: 1
        }
    },
    slitheryn: {
        name: 'Slitheryn',
        desc: 'Slitheryn are a reptillian species who evolved from snakes. They have humanoid upper bodies but retain snake like lower halves.',
        type: 'reptillian',
        home: 'Viper',
        entity: 'snake creatures',
        traits: {
            venomous: 1,
            forked_tongue: 1
        }
    },
    arraak: {
        name: 'Arraak',
        desc: 'Arraak are a feathered species of flghtless birds. Long ago they may have taken to the skies but modern Arraak are too heavy to fly.',
        type: 'avian',
        home: 'Daphne',
        entity: 'bird people',
        traits: {
            resourceful: 1,
        } 
    },
    pterodacti: {
        name: 'Pterodacti',
        desc: 'Pterodacti are decended from large featherless flying creatures. Their skin is leathery and they have long, narrow heads.',
        type: 'avian',
        home: 'Crichton',
        entity: 'leathery winged creatures',
        traits: {
            
        } 
    },
    dracnid: {
        name: 'Dracnid',
        desc: 'Dracnid are decended from large scaly flying creatures. They are tough being naturally armored, however they tend to be anti-social and greedy.',
        type: 'avian',
        home: 'Draco',
        entity: 'scaly winged creatures',
        traits: {
            hoarder: 1,
            solitary: 1
        } 
    },
    entish: {
        name: 'Ent',
        desc: 'Ents are basically sentient trees who can uproot themselvs and move around. They are large and slow moving, but fearsome and can get most of their nutrients from the sun.',
        type: 'plant',
        home: 'Fangorn',
        entity: 'sentient trees',
        traits: {
            kindling_kindred: 1,
            pyrophobia: 1
        } 
    },
    cacti: {
        name: 'Cacti',
        desc: 'Cacti are small sentient plant creatures convered in spines. They are suprisingly fast moving, but easily startled.',
        type: 'plant',
        home: 'Bikanel',
        entity: 'sentient cactuses',
        traits: {
            hyper: 1,
            skittish: 1
        }
    },
    sporgar: {
        name: 'Sporgar',
        desc: 'Sporgar are bizarre species that evolved from mold. They like to settle in damp humid places.',
        type: 'fungi',
        home: 'Zanger',
        entity: 'sentient mold',
        traits: {
            mushy: 1,
            hydrophilic: 1
        } 
    },
    shroomi: {
        name: 'Shroomi',
        desc: 'The Shroomi are a race of mushroom like creatures. They like dark places away from sunlight.',
        type: 'fungi',
        home: 'Armillaria',
        entity: 'sentient shrooms',
        traits: {
            toxic: 1,
            nyctophilia: 1
        } 
    },
    mantis: {
        name: 'Mantis',
        desc: 'Mantis are an insectoid species that resemble giant... mantis. They are quick but fragile.',
        type: 'insectoid',
        home: 'Chryssalid',
        entity: 'insects',
        traits: {
            fraile: 1,
            quick: 1
        } 
    },
    scorpid: {
        name: 'Scorpid',
        desc: 'Scorpid are a bipedal species with large claw hands and barbed tails. They are tough figters naturally equiped for close combat.',
        type: 'insectoid',
        home: 'Scorpio',
        entity: 'scorpians',
        traits: {
            claws: 1
        } 
    },
    antid: {
        name: 'Antid',
        desc: 'Antid are a hivemind species decended from ants. Individually they are not intelligent but as their swarm gets bigger so does their collective intellegnce.',
        type: 'insectoid',
        home: 'Menzel',
        entity: 'intelligent ants',
        traits: {
            hivemind: 1
        } 
    }
};

export const genus_traits = {
    humanoid: {
        // Base experience
    },
    animal: {
        beast: 1,
        cautious: 1
    },
    small: {
        small: 1,
        weak: 1
    },
    giant: {
        large: 1,
        strong: 1
    },
    reptillian: {
        cold_blooded: 1,
        scales: 1
    },
    avian: {
        hollow_bones: 1,
        agile: 1
    },
    insectoid: {
        fast_growth: 1,
        high_metabolism: 1
    },
    plant: {
        photosynth: 1,
        asymmetrical: 1
    },
    fungi: {
        spores: 1,
        spongy: 1
    }
};

export const traits = {
    beast: {
        desc: '',
        ranks: 0,
        type: 'genus',
    },
    cautious: {
        desc: '',
        ranks: 0,
        type: 'genus',
    },
    small: { // Reduces cost creep multipliers by 0.01
        desc: 'Your race is small and thus requires less materials to build things.',
        ranks: 0,
        type: 'genus',
    },
    weak: { // Lumberjacks, miners, and quarry workers are 10% less effective
        desc: 'Your race is ineffective at tough manual labor tasks.',
        ranks: 0,
        type: 'genus',
    },
    large: { // Increases cost creep mutipliers by 0.01
        desc: 'Your race is large and thus requires extra materials to build things.',
        ranks: 0,
        type: 'genus',
    },
    strong: { // Increased manual resource gain
        desc: 'Your race has great strength and can harvest the basics in greater quantity.',
        ranks: 1,
        type: 'genus',
    },
    cold_blooded: { // Weather affects productivity
        desc: 'Your species is sensitive to the outside temperature.',
        ranks: 0,
        type: 'genus',
    },
    scales: { // Minor decrease of soliders killed in combat
        desc: 'Your species is protected by scales which act as a kind of natural armor.',
        ranks: 0,
        type: 'genus',
    },
    hollow_bones: {
        desc: '',
        ranks: 0,
        type: 'genus',
    },
    agile: {
        desc: '',
        ranks: 0,
        type: 'genus',
    },
    fast_growth: { // Greatly increases odds of population growth each cycle
        desc: 'Your species gestates quickly, population thus raises faster then other species.',
        ranks: 0,
        type: 'genus',
    },
    high_metabolism: { // Food requirements increased by 10%
        desc: 'Your species metabolises food quickly, as a result you need more of it.',
        ranks: 0,
        type: 'genus',
    },
    photosynth: { // Reduces food requirements dependant on sunshine.
        desc: 'Your race produces part of its food requirements through photosynthesis with the sun',
        ranks: 0,
        type: 'genus',
    },
    asymmetrical: { // Trade selling prices are slightly worse then normal
        desc: 'Your species is asymmetrical. This gives you a more monstrous appearance making trade more difficult.',
        ranks: 0,
        type: 'genus',
    },
    spores: {
        desc: '',
        ranks: 0,
        type: 'genus',
    },
    spongy: {
        desc: '',
        ranks: 0,
        type: 'genus',
    },
    adaptable: {
        desc: '',
        ranks: 0,
        type: 'major',
    },
    xenophobic: {
        desc: '',
        ranks: 0,
        type: 'major',
    },
    studious: { // Professors generate an extra 0.25 Knowledge per tick
        desc: 'Your race is more focused when studying then average. Knowledge is gained faster as a result.',
        ranks: 0,
        type: 'major',
    },
    arrogant: { // Market prices are higher
        desc: 'The inherent arrogance of your species often leads to you overpaying in negotiations.',
        ranks: 0,
        type: 'major',
    },
    brute: { // Recruitment costs are 1/2 price
        desc: 'Your race loves fighting and is easier to recruit for battle.',
        ranks: 0,
        type: 'major',
    },
    angry: { // When hungry you get hangry, low food penalty is more severe
        desc: 'Your race is quick to get angry when hungry.',
        ranks: 0,
        type: 'major',
    },
    lazy: { // All production randomly stops periodically
        desc: 'Your race loves nothing more then a lazy afternoon. Productivity is often lost as a result.',
        ranks: 0,
        type: 'major',
    },
    carnivore: {
        desc: '',
        ranks: 0,
        type: 'major',
    },
    pack_mentality: { // Cabins cost more, but cottages cost less.
        desc: 'Your race prefers to live in groups.',
        ranks: 0,
        type: 'major',
    },
    tracker: {
        desc: '',
        ranks: 0,
        type: 'major',
    },
    beast_of_burdon: { // Gains more loot during raids
        desc: 'Your race is able to carry away more loot when winning a military conflict.',
        ranks: 0,
        type: 'major',
    },
    herbivore: {
        desc: '',
        ranks: 0,
        type: 'major',
    },
    pack_rat: { // Storage space is increased
        desc: 'Your species is adept at packing the most stuff into any storage space.',
        ranks: 0,
        type: 'major',
    },
    paranoid: { // Bank capacity reduced by 10%
        desc: `Your race is paranoid and doesn't trust banks.`,
        ranks: 0,
        type: 'major',
    },
    greedy: { // Lowers income from taxes
        desc: 'Your race is greedy and will not willingly part with money, reduces income from taxes.',
        ranks: 0,
        type: 'major',
    },
    merchant: { // Better commodity selling prices
        desc: 'Your race has an innate gift for haggling.',
        ranks: 0,
        type: 'major',
    },
    smart: { // Knowledge costs reduced by 10%
        desc: 'Your race more easily understands new concepts.',
        ranks: 0,
        type: 'major',
    },
    puny: { // Lowers minium bound for army score roll
        desc: 'Your race is less effective in combat.',
        ranks: 0,
        type: 'major',
    },
    dumb: { // Knowledge costs increased by 5%
        desc: 'Your race does not easily understand new concepts.',
        ranks: 0,
        type: 'major',
    },
    tough: { // Mining output increased by 10%
        desc: 'Your race is tough and can withstand the most grueling jobs without sucumbing to weakness.',
        ranks: 0,
        type: 'major',
    },
    nearsighted: { // Libraries are less effective
        desc: 'Your species is nearsighted and requires bigger font sizes to read.',
        ranks: 0,
        type: 'major',
    },
    regenerative: { // Wounded soliders heal twice as fast
        desc: 'Your race inherently heals quickly.',
        ranks: 0,
        type: 'major',
    },
    gluttony: { // Eats 25% more food per rank
        desc: 'Your species is always hungry and eats extra food.',
        ranks: 1,
        type: 'major',
    },
    slow: { // The game moves at a 10% slower pace
        desc: 'Your species is slow moving and rarely in a hurry to get anything done.',
        ranks: 0,
        type: 'major',
    },
    armored: { // Less soliders die in combat
        desc: 'Your race is naturally armored and thus less likely to be fatally wounded in battle.',
        ranks: 0,
        type: 'major',
    },
    chameleon: {
        desc: '',
        ranks: 0,
        type: 'major',
    },
    venomous: {
        desc: '',
        ranks: 0,
        type: 'major',
    },
    forked_tongue: {
        desc: '',
        ranks: 0,
        type: 'major',
    },
    resourceful: {
        desc: '',
        ranks: 0,
        type: 'major',
    },
    hoarder: { // Banks can store 10% more money
        desc: 'Your race loves to hoard money.',
        ranks: 0,
        type: 'major',
    },
    solitary: { // Cabins are cheaper however cottages cost more
        desc: 'Your race perfers to live alone rather then with others.',
        ranks: 0,
        type: 'major',
    },
    kindling_kindred: { // Lumber is no longer a resource, however other costs are increased for anything that would have used lumber to compensate.
        desc: 'Your race is adverse to cutting down trees for lumber, all lumber costs are removed but other costs are increased.',
        ranks: 0,
        type: 'major',
    },
    pyrophobia: {
        desc: '',
        ranks: 0,
        type: 'major',
    },
    hyper: { // The game moves at a 5% faster pace
        desc: 'Your race can never sit still and is always doing something.',
        ranks: 0,
        type: 'major',
    },
    skittish: {
        desc: '',
        ranks: 0,
        type: 'major',
    },
    mushy: {
        desc: '',
        ranks: 0,
        type: 'major',
    },
    hydrophilic: { // none factory jobs are reduced by 25% when raining
        desc: 'Your species does not like rain.',
        ranks: 0,
        type: 'major',
    },
    toxic: {
        desc: '',
        ranks: 0,
        type: 'major',
    },
    fraile: { // More soliders die in combat
        desc: 'Your race is fraile and is more likely to die in combat.',
        ranks: 0,
        type: 'major',
    },
    quick: {
        desc: '',
        ranks: 0,
        type: 'major',
    },
    claws: { // Raises maximum bound for army score roll
        desc: 'Your race is more effective in comabt.',
        ranks: 0,
        type: 'major',
    },
    hivemind: { // Jobs with low citizen counts assigned to them have reduced output, but those with high numbers have increased output. 
        desc: 'Your citizens are highly ineffectual when working as individuals but gain potency as they work in bigger groups.',
        ranks: 0,
        type: 'major',
    }
};

/*
types: farmer, miner, lumberjack, science, factory, army
*/
export function racialTrait(workers,type){
    let modifier = 1; 
    if (global.race['hivemind']){
        if (workers <= 10){
            modifier *= (workers * 0.05) + 0.5;
        }
        else {
            modifier *= 1 + (1 - (0.95 ** (workers - 10)));
        }
    }
    if(global.race['cold_blooded'] && type !== 'army' && type !== 'factory' && type !== 'science'){
        switch(global.city.calendar.temp){
            case 0:
                modifier *= 0.8;
                break;
            case 2:
                modifier *= 1.1;
                break;
            default:
                modifier *= 1;
                break;
        }
        switch(global.city.calendar.weather){
            case 0:
                modifier *= 0.8;
                break;
            case 2:
                modifier *= 1.1;
                break;
            default:
                modifier *= 1;
                break;
        }
    }
    if (global.race['weak'] && (type === 'miner' || type === 'lumberjack')){
        modifier *= 0.9;
    }
    if (global.race['hydrophilic'] && global.city.calendar.weather === 0 && global.city.calendar.temp > 0 && type !== 'factory'){
        modifier *= 0.75;
    }
    return modifier;
}

export const biomes = {
    grassland: '',
    oceanic: '',
    forest: '',
    desert: '',
    volcanic: '',
    tundra: ''
};
