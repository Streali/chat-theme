import chance from 'chance'
import { parse } from 'simple-tmi-emotes'
import { TwitchMessage } from '../types'

const kBadgeWhitelist = [
  'admin',
  'broadcaster',
  'vip',
  'moderator',
  'partner',
  'artist',
]
const kBadgeWhiteListKick = ['moderator', 'verified', 'vip']

const exampleMessages = [
  {
    message: ':):)',
    emotes: {
      '1': ['0-1', '2-3'],
    },
  },
  {
    message: 'Hello HeyGuys',
    emotes: {
      '30259': ['6-12'],
    },
  },
  {
    message: 'Are you sure? Kappa',
    emotes: {
      '25': ['14-19'],
    },
  },
  {
    message: 'How are you?',
  },
  {
    message: 'What are you doing? NotLikeThis',
    emotes: {
      '58765': ['20-30'],
    },
  },
  {
    message:
      "They say that dogs are man's best friend, but this cat was setting out to sabotage that theory.",
  },
  {
    message: 'It is beneficial for them to work with each other LUL',
    emotes: {
      '425618': ['50-60'],
    },
  },
  {
    message: 'I have been busier these days due to having a lot on my plate.',
  },
  {
    message: 'Norrin Radd has cosmic awareness.',
  },
  {
    message: 'They are widely known around the planet.',
  },
  {
    message: 'This picture is truly beautiful.',
  },
  {
    message: 'This place is full of smart people.',
  },
  {
    message: 'Her favorite color is black.',
  },
  {
    message: 'The cell phone is next to the laptop.',
  },
  {
    message: "Barry Allen's movement is the fastest on the planet.",
  },
  {
    message: 'They stated an opinion on how they felt.',
  },
  {
    message: 'I am thinking positively about the future.',
  },
  {
    message: 'His jokes were funny.',
  },
  {
    message: 'His question is confusing.',
  },
  {
    message: "Please don't be rude.",
  },
  {
    message: 'I am going to the store.',
  },
  {
    message: 'Her presentation was good enough for me personally.',
  },
]

const exampleUsernames = [
  'xX_d4rK_1337_Xx',
  'John',
  'willtraore',
  'Brunooo',
  'MisterPoop',
  'LeGek',
  'Noxitanoooo',
  'YellowPlaystation',
  'abi',
  'romainlanz',
]

const exampleColors = [
  '#15e64c',
  '#15b8e6',
  '#151ce6',
  '#7315e6',
  '#e615db',
  '#e61553',
  '#e61515',
  '#99e615',
  '#e6c615',
  '#e66f15',
]

function randomizeBadges(provider: string) {
  const badgeWhitelist =
    provider === 'twitch' ? kBadgeWhitelist : kBadgeWhiteListKick

  const badges = new Set()
  const badgesCount = chance().integer({ min: 0, max: 3 })

  for (let i = 0; i < badgesCount; i++) {
    badges.add(
      badgeWhitelist[
        chance().integer({ min: 0, max: badgeWhitelist.length - 1 })
      ]
    )
  }

  return Array.from(badges)
}

export function generateTwitchMessage(provider = 'twitch'): TwitchMessage {
  const badges = randomizeBadges(provider)
  const color = exampleColors[Math.floor(Math.random() * exampleColors.length)]
  const username =
    exampleUsernames[Math.floor(Math.random() * exampleUsernames.length)]
  const { message, emotes } =
    exampleMessages[Math.floor(Math.random() * exampleMessages.length)]!

  return {
    username,
    emotes,
    color,
    badges,
    id: chance().guid(),
    twitch: chance().guid(),
    date: new Date(),
    // @ts-ignore
    message: parse(message, emotes ?? {}, {
      format: 'default',
      themeMode: 'light',
      scale: '3.0',
    }),
    mod: false,
    subscriber: false,
  }
}
