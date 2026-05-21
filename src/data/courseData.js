export const courseModules = [
  {
    id: 'intro-aurum',
    title: 'Module 1: Getting Started with Aurum',
    topics: [
      {
        id: 'what-is-aurum',
        title: 'What is Aurum?',
        presenterSummary: [
          'A simple bridge between traditional banking and the future of money.',
          'Led by CEO Bryan Benson (former Binance director) and co-founders Drei Menza and Ahmad Zen.',
          'Provides automated AI assistants to help grow your savings.'
        ],
        deepDive: `
### Simplifying the Future of Finance
Aurum is a technology platform that makes digital assets and blockchain products easy and accessible. We build automated AI programs that work to grow your assets while keeping security at the center.

> **Analogy: The Digital Bridge**
> Think of traditional banking (like bank accounts with USD or EUR) as a secure island, and the blockchain world as a new continent full of opportunity. Aurum is the high-speed bridge connecting them—allowing you to use your cards to pay, or use automated systems to grow your money without needing to be a tech wizard.

### Leadership Team
Aurum is led by a team of experienced professionals from both blockchain and traditional finance backgrounds:
- **Bryan Benson (CEO)**: Leads the overall vision of Aurum, bringing institutional expertise from his former role as a director at Binance.
- **Drei Menza (Co-Founder & Director of Trading Operations)**: Leads the development and execution of the AI trading algorithms.
- **Ahmad Zen (Co-Founder & Marketing Director)**: Spearheads marketing, community development, and partner network growth.

#### Visualizing the Aurum Ecosystem
Here is how the different products inside Aurum work together to simplify your money:

\`\`\`mermaid
flowchart TD
  User([User]) --> Card[Aurum Card & Neobank]
  User --> bots[AI Bots: EX-A1 & Neyro]
  Card <--> Fiat[Traditional Money: USD/EUR]
  Card <--> Crypto[Digital Money: USDT/Crypto]
  bots --> Yield[Automated Returns / Profit Share]
  classDef default fill:#14141f,stroke:#ffffff1a,color:#fff
  classDef accent fill:#8b5cf61a,stroke:#8b5cf6,color:#fff
  classDef gold fill:#fbbf241a,stroke:#fbbf24,color:#fff
  class Card,bots accent
  class Yield gold
\`\`\`

**Core Products Made Simple:**
- **AI Trading Bots**: Intelligent programs like [EX-A1 Bot](#tooltip:Aurum's%20fully%20automated%20trading%20system%20that%20capitalizes%20on%20low-risk%20price%20differences%20across%20exchanges) that scan markets 24/7.
- **Aurum Card & Neobank**: A card that lets you spend crypto at physical stores just like a standard debit card.
- **Neyro AI Agent**: A smart trading companion that executes actions directly inside your personal, secure [wallet](#tooltip:A%20digital%20keyring%20used%20to%20securely%20store%2C%20receive%2C%20and%20send%20your%20digital%20assets).
- **Aurum RWA**: Connects stable physical assets like **Gold** with the blockchain.

#### The Backoffice Interface
Once logged in, the Aurum Backoffice dashboard aggregates your main balances, bot deposit stats, and affiliate progress in one clean page.

![Aurum Backoffice Dashboard](/images/backoffice_dashboard.png)
        `,
        relatedTopics: [
          { label: 'Explore Aurum AI Products', moduleId: 'trading-products' }
        ]
      },
      {
        id: 'creating-account',
        title: 'Account Creation',
        presenterSummary: [
          'Register with your Email, Phone Number, and Password.',
          'An Invite Code from an existing partner is required.',
          'Verification unlocks access to all AI trading products.\n(Note: VPN required for US and Canada)'
        ],
        deepDive: `
### Step-by-Step Onboarding
Joining Aurum is simple, but because we grow through our network, you must be invited by an existing member.

> **Analogy: Club Membership**
> Aurum is like an exclusive private club. You cannot walk in off the street; you need an invitation code from a current member. This keeps the community trusted and helps us support every user.

**1. Initial Sign-Up:**
- Fill in your Email Address and Phone Number.
- Choose a strong password to protect your account.
- **Invite Code**: code provided by the partner who invited you.

**2. Profile Setup:**
- Provide your basic details (Name, Date of Birth, Country). Country = "CRYPTONATION"
- Choose a unique Nickname (this will represent you in the partner system).
- Complete standard [KYC verification](#tooltip:Know%20Your%20Customer%3A%20A%20standard%20verification%20process%20like%20uploading%20an%20ID%20card%20to%20comply%20with%20laws%20and%20prevent%20fraud) to ensure your account is fully verified.
- Set up [2-Factor Authentication (2FA)](#tooltip:2FA%20(Two-Factor%20Authentication)%3A%20A%20security%20process%20requiring%20two%20forms%20of%20verification%20to%20identify%20yourself%20and%20secure%20your%20account) to secure your account credentials.


**3. Activating Your Access:**
- Confirm your email using the verification code sent to your inbox.
- Connect your [Web3 wallet](#tooltip:Web3%20Wallet%3A%20A%20decentralized%20wallet%20(like%20MetaMask%20or%20Trust%20Wallet)%20that%20allows%20users%20to%20interact%20with%20decentralized%20applications%20(dApps)%20directly).
- Once registered, "Connect Wallet" goto "Partner Portal" Membership and pay 19.99 [USDT](#tooltip:A%20stablecoin%20cryptocurrency%20pegged%201:1%20to%20the%20US%20Dollar) to unlock full platform access for one year. This allows access to all bots and participation in the Partner Program.
        `
      }
    ]
  },
  {
    id: 'trading-products',
    title: 'Module 2: Aurum Products',
    topics: [
      {
        id: 'neyro-agent',
        title: 'Neyro AI Agent',
        presenterSummary: [
          'A non-custodial trading assistant operating directly from your wallet.',
          'Executes AI trading strategy while you retain 100% control of your capital.',
          'Quantum Alpha is the active beta strategy with zero profit fees.'
        ],
        deepDive: `
### Your Personal AI Trading Assistant
Neyro represents a massive shift in trading safety. Instead of sending your money to a company or a broker, Neyro connects to your personal digital account and trades on your behalf.

> **Analogy: The Remote Control Pilot**
> Imagine hiring a pilot to fly your helicopter, but you keep the keys and fuel in your own hangar. The pilot (Neyro AI) controls the movements, but they can never steal the helicopter (your money) because they do not have keys to the hangar (your private wallet passwords).

#### How Neyro Operates Securely:
\`\`\`mermaid
flowchart LR
  UserWallet[User's Personal Wallet] <-->|1. Connects & Approves| Neyro[Neyro AI Agent]
  Neyro -->|2. Scans Markets 24/7| Market[Crypto Exchange]
  Neyro -->|3. Sends Safe Trade Commands| UserWallet
  UserWallet -->|4. Funds Never Leave Wallet| Profit[Profitable Trade Executed]
  classDef default fill:#14141f,stroke:#ffffff1a,color:#fff
  classDef wallet fill:#60a5fa1a,stroke:#60a5fa,color:#fff
  classDef ai fill:#8b5cf61a,stroke:#8b5cf6,color:#fff
  classDef green fill:#10b9811a,stroke:#10b981,color:#fff
  class UserWallet wallet
  class Neyro ai
  class Profit green
\`\`\`

**Key Features of Neyro:**
- **[Non-custodial](#tooltip:Having%20complete%20control%20over%20your%20own%20money.%20No%20company%20or%20bank%20holds%20or%20can%20freeze%20your%20funds)**: You hold your own keys and control when to deposit or withdraw.
- **Disciplined AI**: Removes human panic, greed, or exhaustion.
- **Quantum Alpha (Beta Trial)**: The first active Neyro strategy. During this trial period, you keep 100% of the trading profits, with a 0% performance fee.
        `
      },
      {
        id: 'exa1-bot',
        title: 'EX-A1 Trading Bot',
        presenterSummary: [
          'A fully automated bot executing low-risk spot trading.',
          'Uses arbitrage to capture price differences between global exchanges.',
          'Offers profit shares scaling up to 85% based on your package tier.'
        ],
        deepDive: `
### Smart Arbitrage Trading
The EX-A1 Bot is a passive trading package. It uses advanced algorithms to find price discrepancies between digital exchanges, capturing small, consistent gains.

> **Analogy: The Digital Discount Shopper**
> Imagine you buy concert tickets for $10 at a booth outside, and immediately walk 10 feet to sell them to a line of people inside for $12. You have made a low-risk $2 profit. The EX-A1 Bot does this on digital exchanges in a fraction of a second, buying on cheaper platforms and selling on more expensive ones.

#### How Arbitrage Works in Real Time:
\`\`\`mermaid
flowchart TD
  EXA1[EX-A1 Bot] -->|Scans Price Difference| ExchangeA[Exchange A: Buy Asset at $100]
  EXA1 -->|Same Millisecond| ExchangeB[Exchange B: Sell Asset at $102]
  ExchangeA --> Profit[+$2 Arbitrage Profit]
  ExchangeB --> Profit
  Profit --> Share[Profit Distribution: Up to 85% to Client]
  classDef default fill:#14141f,stroke:#ffffff1a,color:#fff
  classDef active fill:#8b5cf61a,stroke:#8b5cf6,color:#fff
  classDef gold fill:#fbbf241a,stroke:#fbbf24,color:#fff
  class EXA1 active
  class Share gold
\`\`\`

**Deposit Packages & Shares:**
Your share of the profits generated by the bot scales with your total package tier:
- **Basic (100 - 249 USDT)**: You get 60% of profits, company takes 40%.
- **Comfort (1,000 - 2,499 USDT)**: You get 70% of profits, company takes 30%.
- **VIP (10,000 - 24,999 USDT)**: You get 85% of profits, company takes 15%.

![EX-AI Bot Deposit Packages in Backoffice](/images/backoffice_bot_packages.png)

**Operation Rules:**
- The bot begins trading within 12-24 hours of package activation.
- Profits are credited daily.
- If you withdraw your initial deposit before 365 days, a 35% early termination fee is applied.
        `
      },
      {
        id: 'zeus-ai',
        title: 'Zeus AI Bot',
        presenterSummary: [
          'An AI-powered spot trading assistant integrated via Telegram.',
          'Performs automated portfolio tracking and market scans.',
          'Provides instant mobile alerts and execution for spot markets.'
        ],
        deepDive: `
### Spot Trading Made Accessible
Zeus AI is an automated spot trading assistant that puts market analytics and action directly in your pocket. Because it trades in the spot market (buying actual tokens, not leveraged bets), it represents a lower-risk strategy.

> **Analogy: The Alert Personal Secretary**
> Imagine having a personal assistant who stands inside the stock market hall, watches your stock sheets, and immediately texts you on Telegram when prices change, letting you text them back to buy or sell instantly.

#### Zeus Telegram Spot Tracking Model:
\`\`\`mermaid
flowchart LR
  User[User via Telegram / Web] <-->|Commands & Alerts| Zeus[Zeus AI Bot]
  Zeus -->|Tracks Portfolio| Wallet[User's Wallet / Exchange API]
  Zeus -->|Executes Spot Trades| Spot[Spot Markets]
  classDef default fill:#14141f,stroke:#ffffff1a,color:#fff
  classDef telegram fill:#229ED91a,stroke:#229ED9,color:#fff
  classDef gold fill:#fbbf241a,stroke:#fbbf24,color:#fff
  class Zeus telegram
  class Spot gold
\`\`\`

**Key Features:**
- **Telegram Native**: Access balances, execute trades, and check market charts through a text-based chat interface.
- **Spot Trading Focus**: Operates without leverage, acquiring real digital assets to eliminate the risk of account liquidation.
- **24/7 Alerts**: Scans price structures and alerts you the moment target criteria are met.
        `
      },
      {
        id: 'aurum-card-neobank',
        title: 'Aurum Card & Neobank',
        presenterSummary: [
          'Mastercard debit card bridging digital crypto and real-world cash.',
          'Neobank account managing both traditional fiat (USD/EUR) and crypto.',
          'Instant conversion at checkout with zero conversion friction.'
        ],
        deepDive: `
### Spend Crypto Anywhere
The Aurum Card and Neo-banking system bridge the gap between digital savings and everyday spending. You do not need to withdraw funds to a traditional bank account; you can spend directly from your crypto balances.

> **Analogy: The Instant Currency Exchanger**
> Imagine traveling to a foreign country with gold coins, and having a magic pocket that instantly converts the gold to local paper money the exact millisecond you hand it to the shopkeeper. The Aurum Card does this automatically with your digital assets at any store cash register globally.

#### Card Purchase Conversion Flow:
\`\`\`mermaid
flowchart TD
  Card[Aurum Debit Card] -->|1. Tap at Merchant Store| POS[Point-of-Sale Terminal]
  POS -->|2. Authorizes Transaction| Bank[Aurum Neobank Layer]
  Bank -->|3. Automatically Converts Assets| Wallet[User's Crypto/Fiat Wallet]
  Wallet -->|4. Settles USD/EUR instantly| POS
  classDef default fill:#14141f,stroke:#ffffff1a,color:#fff
  classDef accent fill:#8b5cf61a,stroke:#8b5cf6,color:#fff
  classDef gold fill:#fbbf241a,stroke:#fbbf24,color:#fff
  class Card,Bank accent
  class POS gold
\`\`\`

**The Neo-Banking Features:**
- **Multi-Asset Accounts**: Hold fiat currency like US Dollars and Euros alongside USDT, Bitcoin, or Ethereum.
- **Global Acceptance**: Mastercard-backed physical or virtual card, usable at millions of stores and ATMs worldwide.
- **Card Tiers**: Tiers (such as Nova, Imperium, World Elite, and Infinity) offer increasing cashbacks, higher spending limits, and travel benefits.
        `
      },
      {
        id: 'aurum-exchange',
        title: 'Aurum Exchange',
        presenterSummary: [
          'Decentralized perpetual trading platform built on Polygon.',
          'Allows trading of major assets with up to 50x leverage.',
          'Non-custodial design with pricing fed by secure Chainlink Oracles.'
        ],
        deepDive: `
### Decentralized Perpetual Futures
The Aurum Exchange is a high-speed, institutional-grade decentralized platform for advanced users who want to trade perpetual contracts (futures contracts without expiration dates).

> **Analogy: The Self-Service Trading Arena**
> Traditional stock brokers require you to register, submit documents, wait for approvals, and trade through their database. Aurum Exchange is like a public self-service trading arena where you connect your own wallet keys, trade directly against a smart pool, and settle your contracts instantly without any broker acting as a middleman.

#### Exchange Liquidity and Oracle Model:
\`\`\`mermaid
flowchart LR
  Trader[Trader] <-->|1. Trades up to 50x Leverage| AurumEx[Aurum Perpetual Exchange]
  AurumEx <-->|2. Liquid Execution via Smart Contracts| Poly[Polygon Network]
  AurumEx <-->|3. Accurate Real-Time Prices| Oracles[Chainlink Price Oracles]
  classDef default fill:#14141f,stroke:#ffffff1a,color:#fff
  classDef active fill:#8b5cf61a,stroke:#8b5cf6,color:#fff
  classDef poly fill:#7b3fe41a,stroke:#7b3fe4,color:#fff
  class AurumEx active
  class Poly poly
\`\`\`

**Key Specifications:**
- **High Leverage**: Trade long or short positions on major crypto tokens with up to 50x leverage.
- **On-Chain Settle**: Every open, close, and fee calculation is handled transparently on the [Polygon network](#tooltip:A%20secondary%20blockchain%20built%20on%20top%20of%20Ethereum%20that%20enables%20near-instant%20and%20extremely%20cheap%20transactions).
- **Oracle-Driven Pricing**: Leverages secure [Oracles](#tooltip:A%20secure%20service%20that%20brings%20real-world%20data%20such%20as%20live%20prices%20onto%20the%20blockchain) to protect traders against market manipulation and local exchange price spikes.
        `
      },
      {
        id: 'aurum-token-staking',
        title: 'Aurum Token & Staking',
        presenterSummary: [
          'Ecosystem utility token built on Polygon with 100M total supply.',
          'Fuels all platform services, gas fees, and licensing algorithms.',
          'Flexible staking options yielding up to 120.00% annual returns.'
        ],
        deepDive: `
### The Fuel of the Ecosystem
The Aurum Token is a versatile utility asset designed to power network operations, transaction fees, and gas fees within the Aurum blockchain environment.

> **Analogy: The Theme Park Token**
> Think of the Aurum Token like a gold coin you buy at the entrance of a high-tech theme park. You use it to pay for rides (fees), activate premium features (trading algorithms), and if you lock them in the park's locker (staking), the park rewards you with additional coins over time for helping keep the park secure.

#### Aurum Token Core Utilities
The token is designed with native utilities split across four main categories:
1. **Flash Algorithm Access**: Enables users to secure software licenses for trading.
2. **Platform Gas Fees**: Powers all internal blockchain transactions.
3. **Staking Programs**: Locking tokens provides high flexible rewards.
4. **Deflationary Burn**: 50% of the tokens used to purchase licenses are permanently burned (removed from circulation), increasing rarity.

![Aurum Token Utility & Economics](/images/token_utility.png)

### Tokenomics and Growth Model
The total supply of the Aurum Token is capped at **100,000,000** tokens on the Polygon network. The growth and valuation model is directly tied to platform adoption and software license sales:

![Tokenomics Allocation](/images/token_distribution.png)

> **Growth Mechanism**: For every $1 million in software license sales, the token's circulating supply expands by 2.5%, driving a steady, controlled expansion curve designed to scale with actual user utility.

![Token Growth Model Chart](/images/token_growth_model.png)

### High-Yield Staking Options
Users can choose to stake their Aurum Tokens to earn passive returns directly. Staking helps secure the network infrastructure while rewarding holders.

![Staking Options APY Card](/images/staking_options.png)

**Staking Tier Breakdown:**
- **1 Month**: 2.00% APY
- **3 Months**: 12.00% APY
- **6 Months**: 36.00% APY
- **9 Months**: 72.00% APY
- **12 Months**: 120.00% APY

**Potential Earnings Calculator:**
By locking tokens, you generate daily distributed rewards. A 12-month lock increases your token holdings by 2.2x over the period.

![Staking Potential Earnings](/images/staking_earnings.png)
        `
      },
      {
        id: 'aurum-flash',
        title: 'Aurum Flash (DeFi Arbitrage)',
        presenterSummary: [
          'Advanced DeFi arbitrage tool using no-collateral Flash Loans.',
          'Executes multiple token purchase and sales within a single transaction.',
          'Access managed via NFT software license packages.'
        ],
        deepDive: `
### Zero-Capital Decentralized Arbitrage
Aurum Flash leverages the unique blockchain concept of [Flash Loans](#tooltip:A%20special%20DeFi%20loan%20where%20funds%20are%20borrowed%20and%20repaid%20within%20the%20exact%20same%20blockchain%20transaction%20block.%20If%20the%20loan%20isn't%20repaid%20in%20that%20block%2C%20the%20transaction%20instantly%20fails%2C%20meaning%20there%20is%20zero%20risk%20to%20the%20lending%20pool) to secure large trading volumes, execute profitable market sweeps, and return the capital—all in the span of a single second.

> **Analogy: The Zero-Capital Home Flip**
> Imagine finding a house on sale for $100,000, and a buyer willing to pay $110,000 for it. You borrow $100,000 from a lender, buy the house, instantly sell it to the buyer, pay back the $100,000 loan + a tiny fee, and pocket the $10,000 difference. If the buyer backs out, the deal vanishes as if it never happened. Aurum Flash does this with digital assets inside a single block.

#### How the Flash Loan Arbitrage Cycle Works:
\`\`\`mermaid
flowchart TD
  Contract[Aurum Flash Smart Contract] -->|1. Request Flash Loan| LendingPool[Lending Protocol: e.g. Aave]
  LendingPool -->|2. Transfers Capital without Collateral| Contract
  Contract -->|3. Buys Asset Cheap| ExchangeA[DEX A: Buy at $100]
  Contract -->|4. Sells Asset High| ExchangeB[DEX B: Sell at $102]
  Contract -->|5. Repays Loan + Fee| LendingPool
  Contract -->|6. Transmits Net Profits| UserWallet[User's Wallet]
  classDef default fill:#14141f,stroke:#ffffff1a,color:#fff
  classDef active fill:#8b5cf61a,stroke:#8b5cf6,color:#fff
  classDef yield fill:#10b9811a,stroke:#10b981,color:#fff
  class Contract active
  class UserWallet yield
\`\`\`

### NFT Software License Tiers
To use Aurum Flash, users purchase software licenses. Higher license tiers grant access to larger flash loan margins and yield daily profit shares:

![License Tiers Packages](/images/license_packages.png)

**Key License Packages:**
- **Starter ($100)**: Grants up to 0.3% daily percentage yield.
- **Explorer ($300)**: Grants up to 0.5% daily percentage yield.
- **Pro ($600)**: Grants up to 0.5% daily percentage yield.
- **Advanced ($1,000)**: Grants up to 0.5% daily percentage yield (up to 250% limit).
- **Premium ($2,500)**: Grants up to 0.6% daily percentage yield.
- **Executive ($5,000)**: Grants up to 0.65% daily percentage yield.
- **Elite ($10,000)**: Grants up to 0.7% daily percentage yield (up to 300% limit).
- **VIP ($25,000)**: Grants up to 0.75% daily percentage yield (up to 350% limit).
        `
      },
      {
        id: 'what-is-rwa',
        title: 'Real World Assets (RWA Gold)',
        presenterSummary: [
          'Bridges digital tokens with physical Gold stored in Swiss vaults.',
          '50% is allocated to Gold with a 30% discount; 50% is traded for daily yield.',
          'Lets you earn passive income while keeping physical gold backing.'
        ],
        deepDive: `
### Gold Tokenization: RWA Gold
Real-World Assets (RWA) connect tangible physical assets (like gold bars) with the speed and flexibility of the digital blockchain. 

> **Analogy: The Smart Safe**
> Standard gold bars sit in a physical safety vault doing nothing but collecting dust. Aurum's RWA Gold model takes half of your capital and stores it safely as physical gold, while putting the other half to work in high-speed digital trading to generate "rent" (yield) for you every month.

#### The 50/50 RWA Split Model:
\`\`\`mermaid
flowchart TD
  Capital[100% Capital Deposit] --> Split{50/50 Allocation}
  Split --> Gold[50% Physical Gold Allocation]
  Split --> Trade[50% AI-Driven Yield Execution]
  Gold -->|30% Structural Discount| Vault[Secured Vault Gold / physical pickup after 12 mos]
  Trade -->|Trades XAUT/USDC Pair| Yield[7-10% Targeted Monthly Yield]
  classDef default fill:#14141f,stroke:#ffffff1a,color:#fff
  classDef gold fill:#fbbf241a,stroke:#fbbf24,color:#fff
  classDef blue fill:#60a5fa1a,stroke:#60a5fa,color:#fff
  class Gold,Vault,Yield gold
  class Trade blue
\`\`\`

**1. Discounted Gold Allocation (50%)**
Half of your money is used to buy physical gold. Aurum applies a **30% discount** compared to market rates due to wholesale contract structures. After 12 months, you can choose to receive physical gold bars or keep it in digital form.

**2. AI Yield Generation (50%)**
The other half is placed in a trading pool containing [XAUT](#tooltip:Tether%20Gold%20-%20a%20digital%20crypto%20token%20directly%20backed%20by%20physical%20gold%20stored%20in%20Swiss%20vaults) and [USDC](#tooltip:USD%20Coin%20-%20a%20stablecoin%201:1%20representing%20digital%20US%20Dollars). AI programs trade the price fluctuations, targeting a monthly interest of 7-10% for you.
        `,
        relatedTopics: [
          { label: 'Check the Glossary for RWA & XAUT', moduleId: 'reference' }
        ]
      }
    ]
  },
  {
    id: 'partner-program-module',
    title: 'Module 3: Partner Program',
    topics: [
      {
        id: 'partner-overview',
        title: 'Partner Program Overview & Benefits',
        presenterSummary: [
          'Earn overrides by sharing Aurum technology with others.',
          'Built on structural sales volumes with 15 ranking legacy tiers.',
          'Unlock executive benefits: leadership retreats, cruise rewards, and VIP networking.'
        ],
        deepDive: `
### Partnering with Aurum
The Aurum Partner Program rewards you for helping grow the ecosystem. You earn commission overrides when people you invite buy trading packages or earn profits.

> **Analogy: Real Estate Brokerage**
> As a lead real estate agent, you earn commissions when you sell a house yourself. But you also earn a small override on any sales made by junior agents whom you recruited and trained. The Partner Program operates similarly, rewarding you for educating others.

### Exclusive Lifestyle & Career Benefits
Unlike typical transactional referral links, Aurum provides a structured career track for professional partners:
- **Leadership Gatherings**: Connect directly with CEO Bryan Benson and the core team at annual regional events.
- **VIP Retreats**: Top performers qualify for fully funded luxury cruises, mastermind seminars, and private networking dinners.
- **Academic Support**: Access to Aurum Academy training modules to scale your marketing and structural organization strategies.

#### Commission Eligibility Matrix
Each Aurum product contributes differently to your partner program volume, direct sales, and profit-sharing overrides:

![Product Commission Contributions](/images/partner_product_benefits.png)
        `
      },
      {
        id: 'types-of-income',
        title: 'Types of Affiliate Income',
        presenterSummary: [
          'Direct Sales Commission payouts scale up to 18.5%.',
          'Direct and Team ProfitShare generate daily passive earnings up to 30%.',
          'Oracle level unlocks quarterly Shared Ownership Pool shares.'
        ],
        deepDive: `
### Six Structured Streams of Revenue
The partner structure divides payout opportunities into six specific channels, rewarding both personal sales and structural organization growth:

![6 Affiliate Revenue Streams](/images/partner_income_types.png)

**1. Direct Sales**
Earn up to **18.5%** instantly on any package purchased directly using your invite link (includes deposits, compound actions, and license purchases).

**2. Direct ProfitShare**
Receive a daily profit override of up to **30%** based on the daily trading gains earned by your direct clients.

**3. Team Sales (Rank Difference)**
Earn the percentage difference between your Legacy Level percent and the highest Legacy Level percent in your downline team. This applies endlessly deep across your entire structure.

**4. Team ProfitShare (Difference Bonus)**
Earn the difference in daily trading profit-sharing overrides between your rank and your downline teams' ranks, paid out daily, endlessly deep.

**5. Extra Bonus (Rank-Up)**
A one-time cash reward awarded each time you qualify for a new Legacy Level, ranging from 100 USDT to **3,000,000 USDT**.

**6. Global Shareholder Pool**
Oracle-ranked leaders and above receive quarterly payouts from the global Shareholder Pool, representing up to **3.125%** of global EX-AI Bot deposits.

![Global Shareholder Pool Breakdown](/images/partner_shareholder_bonus.png)

#### Shareholder Allocation:
- **Aurum Oracle**: 0.15% pool share
- **Aurum Prime**: 0.20% pool share
- **Aurum Elite**: 0.25% pool share
- **Aurum Magnat**: 0.275% pool share
- **Aurum Mythos**: 0.30% pool share
- **Aurum Legend**: 0.325% pool share
- **Aurum Dominion**: 0.35% pool share
- **Aurum Archon**: 0.375% pool share
- **Aurum Pantheon**: 0.40% pool share
- **Aurum Alpha**: 0.50% pool share
        `
      },
      {
        id: 'legacy-ranks',
        title: 'Legacy Ranks & Qualifications',
        presenterSummary: [
          'Structure consists of 15 ranks from Aurum Nova to Aurum Alpha.',
          'Legacy Volume (LV) represents 40% of sales made in your team.',
          'Requires maintaining personal bot capital and structural branch balance.'
        ],
        deepDive: `
### Legacy Level Structure
Your rank advances as your team accumulates sales volume. The calculation is measured in **Legacy Volume (LV)**. 

> **Important Rule**: Your Legacy Volume (LV) represents exactly **40%** of the gross sales volume generated by your structural team.

#### Ranks & Payout Parameters (First 8 Ranks)
Here is the specification and qualifications list for the first eight ranks:

| Rank Name | Required Volume (LV) | Personal Bot Deposit | Direct Profitshare % | Rank-Up Cash Bonus | Branch/Leg Requirements |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Aurum Nova** | - | - | 3.0% | - | No conditions |
| **Aurum Voyager** | 3,000 LV | 100 USDT | 5.0% | 100 USDT | No conditions |
| **Aurum Vanguard** | 10,000 LV | 300 USDT | 7.0% | 500 USDT | 2x "Voyager" in different branches |
| **Aurum Vanguard Pro**| 25,000 LV | 750 USDT | 9.0% | 1,000 USDT | 2x "Vanguard" in different branches |
| **Aurum Nexus** | 50,000 LV | 1,500 USDT | 10.5% | 2,000 USDT | 2x "Vanguard" in different branches |
| **Aurum Oracle** | 100,000 LV | 3,000 USDT | 12.0% | 5,000 USDT | 2x "Vanguard Pro" in different branches |
| **Aurum Prime** | 250,000 LV | 6,000 USDT | 13.5% | 10,000 USDT | 2x "Nexus" + 1x "Vanguard Pro" legs |
| **Aurum Elite** | 500,000 LV | 8,000 USDT | 14.5% | 20,000 USDT | 2x "Oracle" + 1x "Nexus" legs |

#### Ranks Difference override visual:
\`\`\`mermaid
flowchart TD
  You[You: Vanguard - Earns 7%] --> TeamA[Partner A: Voyager - Earns 5%]
  You --> TeamB[Partner B: Nova - Earns 3%]
  TeamA -->|Generates Sales| SalesA[You earn 2% Difference: 7% - 5%]
  TeamB -->|Generates Sales| SalesB[You earn 4% Difference: 7% - 3%]
  classDef default fill:#14141f,stroke:#ffffff1a,color:#fff
  classDef active fill:#8b5cf61a,stroke:#8b5cf6,color:#fff
  class You active
\`\`\`

### Full 15-Rank Profitshare Matrix
As you qualify for higher legacy ranks (up to Aurum Alpha), your direct and team profit overrides scale to a maximum of **30%**:

![15-Rank Profitshare Matrix](/images/partner_profitshare_table.png)
        `,
        relatedTopics: [
          { label: 'Review Module 2 Products', moduleId: 'trading-products' }
        ]
      }
    ]
  },
  {
    id: 'reference',
    title: 'Module 4: Reference',
    topics: [
      {
        id: 'glossary',
        title: 'Crypto & Aurum Glossary',
        presenterSummary: [
          'A quick reference for common terminology.',
          'Includes general crypto terms and Aurum-specific products.'
        ],
        deepDive: `
### Simplified Financial & Blockchain Glossary

Here is a comprehensive glossary of terms to help you navigate cryptocurrency, DeFi, and the Aurum platform.

1. **2FA (Two-Factor Authentication)**:
   *Definition:* A security process where a user provides two different verification factors to identify themselves, usually combining something they know (like a password) with something they have (like a temporary code generated by a mobile app).
   *Analogy:* Like a bank safe deposit box that requires both your physical key and the bank manager's master key to open—neither key can open the vault alone, ensuring double security.

2. **AMM (Automated Market Maker)**: 
   *Definition:* A type of decentralized protocol that lets users swap different cryptocurrencies instantly without needing a traditional buyer or seller on the other side.
   *Analogy:* Like a digital vending machine that lets you exchange apples for oranges instantly at a set price, rather than searching for an individual person who wants to trade.

3. **Arbitrage**: 
   *Definition:* The strategy of buying an asset in one market at a low price and immediately selling it in another market at a higher price.
   *Analogy:* Buying tickets for $10 at the local box office and instantly selling them to people outside for $12. This is the low-risk trading model used by the **EX-A1 Bot**.

4. **Blockchain**: 
   *Definition:* A secure, shared digital ledger that records transactions across a network of computers.
   *Analogy:* A shared Google Sheet that everyone in the world can see and verify, but no single person can change or delete history without everyone else's computer approving.

5. **BNB**:
   *Definition:* The native utility token of the BNB Chain ecosystem, used to pay for transaction fees (gas), participate in ecosystem governance, and power smart contracts.
   *Analogy:* The official currency of a digital theme park; you need to buy and spend BNB to use any of the rides or services in the park.

6. **Card & Neobank**: 
   *Definition:* Aurum's financial layer that allows you to link your digital assets with a physical card, permitting you to pay for real-world groceries or services.

7. **CBDC (Central Bank Digital Currency)**:
   *Definition:* A digital form of a country's government-issued sovereign currency, managed and controlled directly by its central bank.
   *Analogy:* A digital version of your local cash (like USD or EUR) issued directly by the federal government, unlike decentralized cryptocurrencies like Bitcoin.

8. **DeFi (Decentralized Finance)**: 
   *Definition:* A term for financial services (like lending, borrowing, or trading) built directly on the blockchain, eliminating traditional banks and middlemen.
   *Analogy:* A self-service financial market where agreements are handled by code rather than banks or bankers.

9. **EX-A1 Bot**: 
   *Definition:* Aurum's fully automated trading product that uses mathematical algorithms to execute arbitrage trades across multiple markets.

10. **Fiat**: 
    *Definition:* Government-issued paper currency, such as the US Dollar (USD), Euro (EUR), or British Pound (GBP), which is not backed by a physical commodity like gold.
    *Analogy:* Traditional money in your wallet or bank account that is accepted because the government declares it legal tender.

11. **Gas Fees**: 
    *Definition:* The processing fee paid to blockchain network operators to execute and record a transaction.
    *Analogy:* Like the toll paid to drive on a highway, or postage paid to send a letter.

12. **Keys (Private & Public Keys)**:
    *Definition:* A pair of cryptographic strings where the Public Key acts as your shareable address (like an email address) and the Private Key acts as your secret signature (like a password) to authorize transactions.
    *Analogy:* The public key is your mailbox address that anyone can drop mail into, while the private key is the unique physical key you use to open the mailbox and take the letters out.

13. **KYC (Know Your Customer)**: 
    *Definition:* A standard legal verification process where a customer provides identity documents (like a passport or driver's license) to prevent fraud.

14. **Ledger (Hardware Wallet)**:
    *Definition:* A popular brand of hardware cryptocurrency wallets designed to keep your private keys isolated offline (cold storage) to protect them from online hacks.
    *Analogy:* A secure physical safe with physical buttons that must be pressed to approve any transaction, preventing hackers from touching your money online.

15. **Liquidity Pool**: 
    *Definition:* A digital smart contract where users lock their assets to supply funds for trading, earning interest in return.
    *Analogy:* A shared digital vault where everyone deposits money so that traders can borrow or swap assets, with depositors earning a fee for providing the capital.

16. **Neyro AI Agent**: 
    *Definition:* Aurum's non-custodial trading software that operates directly from your personal wallet, removing emotion and executing trades 24/7.

17. **Non-Custodial**: 
    *Definition:* A setup where you retain complete custody and control over your own funds and private keys. 
    *Analogy:* Keeping your cash in a physical safe in your house. No bank can freeze your account or restrict your withdrawals because you hold the key.

18. **Oracle**: 
    *Definition:* A secure service that brings real-world data (such as current gold prices or stock quotes) onto the blockchain.
    *Analogy:* A digital news reporter that checks the price of gold in London and transmits that data to a smart contract so the system knows what it is worth.

19. **Perpetual Trading (Perps)**: 
    *Definition:* A type of trading contract that allows you to speculate on the future price of an asset (up or down) without any expiration date.

20. **RWA (Real World Assets)**: 
    *Definition:* Physical, real-world assets (like gold, real estate, or art) that are registered digitally on the blockchain.
    *Analogy:* Having a digital title deed to a real gold bar. The gold sits in a vault, but you can buy, sell, or trade the ownership paper in seconds on the internet.

21. **Seed Phrase**: 
    *Definition:* A backup phrase composed of 12 to 24 random words that acts as the master recovery key to restore your crypto wallet. 
    *Important:* Never share this with anyone! If someone gets your seed phrase, they can take all your money.

22. **Smart Contract**: 
    *Definition:* A digital agreement written in code that automatically executes itself when conditions are met.
    *Analogy:* A vending machine. You insert the money, the machine verifies it, and it immediately drops the drink. No shopkeeper is needed.

23. **Solana (SOL)**:
    *Definition:* A high-performance blockchain platform optimized for fast transaction speeds, low gas fees, and massive scalability.
    *Analogy:* A state-of-the-art superhighway that can process thousands of transactions per second with almost zero tolls compared to older, congested roads.

24. **Staking**:
    *Definition:* The process of locking up your cryptocurrency tokens in a blockchain protocol to support network security, validation, and operations in exchange for earning passive interest or rewards.
    *Analogy:* Depositing money in a high-yield savings account or a certificate of deposit (CD) at a bank to earn interest over time.

25. **Tokenization**: 
    *Definition:* The process of converting ownership of a physical asset into digital shares (tokens) on the blockchain.
    *Analogy:* Splitting a physical property into 1,000 digital shares so that small investors can buy 1/1000th of a building and receive their share of the rent.

26. **USDC (USD Coin)**:
    *Definition:* A fully-collateralized US Dollar stablecoin managed by Circle, widely used in DeFi and backed by cash and short-duration US Treasuries.
    *Analogy:* A highly regulated digital dollar alternative to USDT, ensuring each token is backed by equivalent physical dollars in bank accounts.

27. **USDT (Tether)**:
    *Definition:* The world's largest stablecoin, pegged 1:1 to the US Dollar and backed by reserves.
    *Analogy:* A digital dollar bill that stays stable at $1.00, allowing you to lock in gains without converting back to your physical bank account.

28. **VPN (Virtual Private Network)**:
    *Definition:* A service that encrypts your internet traffic and hides your online identity by routing your connection through a secure server.
    *Analogy:* Like mailing a letter in a double envelope with a fake return address so no one knows where the letter actually came from.

29. **Wallet**: 
    *Definition:* A digital software application or hardware device used to securely store the keys to access and manage your cryptocurrency.
    *Analogy:* A digital keyring. It doesn't hold physical coins; instead, it holds the keys that allow you to access your funds on the blockchain network.

30. **Web3 Wallet**:
    *Definition:* A decentralized wallet (like MetaMask or Trust Wallet) that allows users to interact with decentralized applications (dApps), hold digital assets, and sign smart contract transactions directly.
    *Analogy:* A master keycard that not only holds your funds but also lets you log into and interact with Web3 websites without needing a traditional username and password.

31. **XAUT (Tether Gold)**: 
    *Definition:* A stablecoin token where each token is backed by one fine troy ounce of gold stored in a secure Swiss vault.

32. **XRP**:
    *Definition:* A cryptocurrency designed for rapid, low-cost cross-border payments, serving as a bridge currency on the XRP Ledger.
    *Analogy:* A high-speed international train for money, allowing banks and payment companies to send payments across borders in seconds for a fraction of a cent.

33. **Yield**: 
    *Definition:* The passive interest or earnings generated on your deposited capital over time.
        `
      }
    ]
  }
];
