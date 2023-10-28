import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  characters: [
    {
      name: "Queen of Grimtol",
      description:"Closest to the sickly king, she had a large role in the kingdoms flourishing educational institutions. Now leading the kingdom through it's eternal tragedy"
    },
    {
      name: "King of Grimtol",
      description:"The beloved king, cursed with the eternal life he was promised, but at the cost of eternal hunger for the blood of his subjects loved..."
    },
    {
      name: "Humble Baker",
      description:"Known for their great baked goods, they were invited many times to the castle for feasts and celebrations... until all his bread was cursed with rot, maggots and flies"
    },
    {
      name: "The Most Loyal Knight",
      description:"Their loyalty to the city was and the law was honored above all else. Even when he discovered his partner had been stealing coin for the poor."
    },
    {
      name: "Magic Merchant",
      description:"Known by may names and faces, this merchant specialized in goods to rejuvenate the body and mind. Unfortunately the products sold were more akin to a snake oils than restorative serums."
    },
    {
      name: "Mason's Apprentice",
      description:"With skills comparable to her master at half the age, she was cursed before many to live in her master's shadow. At least now when people see her, they will know her stonework."
    },
    {
      name: "Spirit Healer",
      description:"Not a resident of the city, this renowned healer traveled there for the kings bounty. Unfortunately she did not arrive before the stranger. Even more unfortunate that she took a liking to the city and wished not to leave."
    },
    {
      name: "Wise Wizard",
      description:"Once a seeker of knowledge, gathering the greatest minds the realm offered to the city. Now reduced to a crude creature searching for a different form of brain power."
    },
  ],
})
