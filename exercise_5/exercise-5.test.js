const fs = require('fs');
const pool = require('../lib/utils/pool');

describe('exercise 5', () => {
  afterAll(() => pool.end());

  it('find all film titles that an actor with the last_name Davis appears in', async () => {
    const { rows } = await pool.query(fs.readFileSync(`${__dirname}/exercise-5.sql`, 'utf-8'));
    expect(rows).toEqual([
      { title: 'Anaconda Confessions' },
      { title: 'Angels Life' },
      { title: 'Barefoot Manchurian' },
      { title: 'Bed Highball' },
      { title: 'Blade Polish' },
      { title: 'Boondock Ballroom' },
      { title: 'Ghostbusters Elf' },
      { title: 'Greedy Roots' },
      { title: 'Hanover Galaxy' },
      { title: 'Instinct Airport' },
      { title: 'Jumanji Blade' },
      { title: 'National Story' },
      { title: 'Oklahoma Jumanji' },
      { title: 'Poseidon Forever' },
      { title: 'Raiders Antitrust' },
      { title: 'Random Go' },
      { title: 'Reds Pocus' },
      { title: 'Silverado Goldfinger' },
      { title: 'Splash Gump' },
      { title: 'Submarine Bed' },
      { title: 'Treasure Command' },
      { title: 'Unforgiven Zoolander' },
      { title: 'Beast Hunchback' },
      { title: 'Beneath Rush' },
      { title: 'Bonnie Holocaust' },
      { title: 'Chitty Lock' },
      { title: 'Creatures Shakespeare' },
      { title: 'Dragon Squad' },
      { title: 'Driving Polish' },
      { title: 'Durham Panky' },
      { title: 'Egypt Tenenbaums' },
      { title: 'Eve Resurrection' },
      { title: 'Jumping Wrath' },
      { title: 'Karate Moon' },
      { title: 'Lawrence Love' },
      { title: 'Memento Zoolander' },
      { title: 'Murder Antitrust' },
      { title: 'Natural Stock' },
      { title: 'Panther Reds' },
      { title: 'Paths Control' },
      { title: 'Prix Undefeated' },
      { title: 'Pulp Beverly' },
      { title: 'Saints Bride' },
      { title: 'Searchers Wait' },
      { title: 'Shining Roses' },
      { title: 'Spiking Element' },
      { title: 'Star Operation' },
      { title: 'Uptown Young' },
      { title: 'Valley Packer' },
      { title: 'Vanishing Rocky' },
      { title: 'Videotape Arsenic' },
      { title: 'Wisdom Worker' },
      { title: 'Wizard Coldblooded' },
      { title: 'Wonderful Drop' },
      { title: 'Worker Tarzan' },
      { title: 'Airport Pollock' },
      { title: 'Anonymous Human' },
      { title: 'Bed Highball' },
      { title: 'Caribbean Liberty' },
      { title: 'Casualties Encino' },
      { title: 'Clerks Angels' },
      { title: 'Excitement Eve' },
      { title: 'Full Flatliners' },
      { title: 'Glass Dying' },
      { title: 'Goodfellas Salute' },
      { title: 'Hotel Happiness' },
      { title: 'Leathernecks Dwarfs' },
      { title: 'Loathing Legally' },
      { title: 'Luck Opus' },
      { title: 'Madness Attacks' },
      { title: 'None Spiking' },
      { title: 'Pacific Amistad' },
      { title: 'Sister Freddy' },
      { title: 'Trojan Tomorrow' },
      { title: 'Wash Heavenly' },
      { title: 'Words Hunter' }
    ]);
  });
});
