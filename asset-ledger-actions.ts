type ActionConfig = {
  display: string;
  msg?: ({
    amount,
    nestName,
    quizName,
  }: {
    amount?: number;
    nestName?: string;
    quizName?: string;
  }) => string;
};
export const ACTIONS: Record<string, ActionConfig> = {
  "buy-egg": {
    display: "Eggs Purchased",
    msg: ({ amount }) => `You bought ${amount} eggs`,
  },
  breakEggToGem: {
    display: "Eggs broken",
    msg: ({ amount }) => `You broke ${amount} eggs to get gems`,
  },
  convertedEggFromGem: {
    display: "Eggs Purchased",
    msg: ({ amount }) => `You bought ${amount} eggs from gems`,
  },
  inNest: {
    display: "Eggs Nested",
    msg: ({ amount, nestName }) =>
      `Your ${amount} eggs are nested in ${nestName}`,
  },
  "egging-egg": {
    display: "Eggs returned",
    msg: ({ amount, nestName }) =>
      `${amount} eggs returned after nesting from ${nestName}`,
  },
  returnNestEgg: {
    display: "Eggs returned",
    msg: ({ amount, nestName }) =>
      `${amount} eggs returned due to cancellation of ${nestName}`,
  },
  "egg-giveaway": {
    display: "Eggs airdropped",
    msg: ({ amount }) => `${amount} eggs airdropped to you`,
  },

  /* Gem-side */
  "sell-gem-intent": {
    display: "Sell gems initiated",
    msg: ({ amount }) => `Sale of ${amount} gems started`,
  },
  "sell-gem-reject": {
    display: "Sell gems rejected",
    msg: ({ amount }) => `Sale of ${amount} gems failed`,
  },
  breakedGemFromEgg: {
    display: "Gems Received",
    msg: ({ amount }) => `You received ${amount} gems for breaking eggs`,
  },
  convertGemToEgg: {
    display: "Gems used",
    msg: ({ amount }) => `You used ${amount} gems to buy eggs`,
  },
  "egging-gem": {
    display: "Gems earned",
    msg: ({ amount, nestName }) =>
      `You earned ${amount} gems from nesting in ${nestName}`,
  },
  "gem-giveaway": {
    display: "Gems airdropped",
    msg: ({ amount }) => `${amount} gems airdropped to you`,
  },
  "gem-charge": {
    display: "Gems charged",
    msg: ({ amount }) => `${amount} gems charged to your account`,
  },

  /* Coin-side */
  convertCoinToGem: {
    display: "Coins used",
    msg: ({ amount }) => `You used ${amount} coins to buy gems`,
  },
  convertedGemFromCoin: {
    display: "Gems Purchased",
    msg: ({ amount }) => `You bought ${amount} gems from coins`,
  },
  convertCoinToEgg: {
    display: "Coins used",
    msg: ({ amount }) => `You used ${amount} coins`,
  },
  convertedEggFromCoin: {
    display: "Eggs purchased",
    msg: ({ amount }) => `You bought ${amount} eggs from coins`,
  },
  "unlock-nest": {
    display: "Nest unlocked",
    msg: ({ nestName }) => `Nest ${nestName} unlocked`,
  },
  "quiz-attempt-reward": {
    display: "Quiz Attempt Reward",
    msg: ({ amount, quizName }) =>
      `You earned ${amount} coins for answering quiz ${quizName}`,
  },
  "nest-coin-giveaway": {
    display: "Coins airdropped",
    msg: ({ amount }) => `${amount} coins airdropped to you`,
  },
  "gem-referral-bonus": {
    display: "Gem Referral Bonus",
    msg: ({ amount }) => `You earned ${amount} gems for referring your friends`,
  },
};

