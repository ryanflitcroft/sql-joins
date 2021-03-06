const fs = require('fs');
const pool = require('../lib/utils/pool');

describe('exercise 8', () => {
  afterAll(() => pool.end());

  it('find all film titles rented out by customers who live in the country of Peru', async () => {
    const { rows } = await pool.query(fs.readFileSync(`${__dirname}/exercise-8.sql`, 'utf-8'));
    expect(rows).toEqual([
      { title: 'Microcosmos Paradise' },
      { title: 'American Circus' },
      { title: 'Slipper Fidelity' },
      { title: 'Robbery Bright' },
      { title: 'Goodfellas Salute' },
      { title: 'Sleuth Orient' },
      { title: 'Disturbing Scarface' },
      { title: 'Gandhi Kwai' },
      { title: 'Platoon Instinct' },
      { title: 'Rocketeer Mother' },
      { title: 'Sweet Brotherhood' },
      { title: 'Strangers Graffiti' },
      { title: 'Fellowship Autumn' },
      { title: 'Flash Wars' },
      { title: 'Forward Temple' },
      { title: 'Ferris Mother' },
      { title: 'Smoochy Control' },
      { title: 'Drop Waterfront' },
      { title: 'Moon Bunch' },
      { title: 'Brooklyn Desert' },
      { title: 'Pulp Beverly' },
      { title: 'Independence Hotel' },
      { title: 'Novocaine Flight' },
      { title: 'Musketeers Wait' },
      { title: 'Academy Dinosaur' },
      { title: 'Maiden Home' },
      { title: 'Crow Grease' },
      { title: 'Island Exorcist' },
      { title: 'Rouge Squad' },
      { title: 'Soldiers Evolution' },
      { title: 'Sting Personal' },
      { title: 'Divine Resurrection' },
      { title: 'Ridgemont Submarine' },
      { title: 'Midsummer Groundhog' },
      { title: 'Reign Gentlemen' },
      { title: 'Tomatoes Hellfighters' },
      { title: 'Motions Details' },
      { title: 'Haunted Antitrust' },
      { title: 'Disciple Mother' },
      { title: 'Saturn Name' },
      { title: 'Vanished Garden' },
      { title: 'Satisfaction Confidential' },
      { title: 'Network Peak' },
      { title: 'Groove Fiction' },
      { title: 'Sun Confessions' },
      { title: 'Splash Gump' },
      { title: 'Mallrats United' },
      { title: 'Unfaithful Kill' },
      { title: 'Disciple Mother' },
      { title: 'Soup Wisdom' },
      { title: 'Flatliners Killer' },
      { title: 'Chaplin License' },
      { title: 'Rugrats Shakespeare' },
      { title: 'Bikini Borrowers' },
      { title: 'Orient Closer' },
      { title: 'Honey Ties' },
      { title: 'Sinners Atlantis' },
      { title: 'Million Ace' },
      { title: 'Karate Moon' },
      { title: 'Stepmom Dream' },
      { title: 'Train Bunch' },
      { title: 'Reap Unfaithful' },
      { title: 'Slipper Fidelity' },
      { title: 'Sea Virgin' },
      { title: 'Darling Breaking' },
      { title: 'Fargo Gandhi' },
      { title: 'Blindness Gun' },
      { title: 'Wolves Desire' },
      { title: 'Undefeated Dalmations' },
      { title: 'Rage Games' },
      { title: 'Bugsy Song' },
      { title: 'Cheaper Clyde' },
      { title: 'Disciple Mother' },
      { title: 'Moon Bunch' },
      { title: 'Garden Island' },
      { title: 'Roots Remember' },
      { title: 'Carol Texas' },
      { title: 'Orient Closer' },
      { title: 'Fugitive Maguire' },
      { title: 'Closer Bang' },
      { title: 'Peach Innocent' },
      { title: 'Horror Reign' },
      { title: 'Invasion Cyclone' },
      { title: 'Impact Aladdin' },
      { title: 'Freddy Storm' },
      { title: 'Madison Trap' },
      { title: 'Ghost Groundhog' },
      { title: 'Jeepers Wedding' },
      { title: 'Frida Slipper' },
      { title: 'Matrix Snowman' },
      { title: 'Chance Resurrection' },
      { title: 'Musketeers Wait' },
      { title: 'Nemo Campus' },
      { title: 'Mallrats United' },
      { title: 'Mile Mulan' },
      { title: 'Patient Sister' },
      { title: 'Nemo Campus' },
      { title: 'Seven Swarm' },
      { title: 'Groove Fiction' },
      { title: 'Maltese Hope' },
      { title: 'Champion Flatliners' },
      { title: 'Crooked Frogmen' },
      { title: 'Musketeers Wait' },
      { title: 'Wasteland Divine' },
      { title: 'Telegraph Voyage' },
      { title: 'Mockingbird Hollywood' },
      { title: 'Mask Peach' },
      { title: 'Slums Duck' },
      { title: 'Fury Murder' },
      { title: 'Freaky Pocus' },
      { title: 'Holiday Games' },
      { title: 'Indian Love' },
    ]);
  });
});
