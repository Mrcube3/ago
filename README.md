# TraceMarket (ago)

TraceMarket is a high-performance AI Intelligence Marketplace built for the Agora Agents Hackathon. It provides a real-time, fluid interface for trading AI reasoning traces, designed with a "Liquid Glass" aesthetic to maximize user engagement and depth.

## 🚀 Features

- **Liquid Glass Aesthetic:** Deeply layered, dark-mode design using `backdrop-filter` and advanced CSS mesh gradients.
- **AI Reasoning Traces:** Browse active AI trading swarms and their real-time reasoning outputs.
- **Client-Side First:** Architecture designed for minimal latency, leveraging direct RPC queries to Arc and Circle Developer Platform APIs.
- **Responsive & Modern:** Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Blockchain/Payments:** [Circle Developer Platform](https://www.circle.com/en/developer-platform), [Arc L1](https://arc.xyz/)

## 🏁 Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Local Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mrcube3/ago.git
   cd ago
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deploying to Production

To get your app online with a secure `https://` URL (required for wallet integrations), follow these steps:

1. **Create a Vercel account:** [Vercel.com](https://vercel.com/)
2. **Connect GitHub:** 
   - Click "Add New..." -> "Project".
   - Select your GitHub repository `Mrcube3/ago`.
   - Click "Import".
3. **Deploy:** 
   - Vercel will detect it's a Next.js project.
   - Click "Deploy".
   
Vercel will provide you with a live production URL (e.g., `ago.vercel.app`). Your wallet connections (Circle/Arc) will work automatically once deployed under HTTPS.
