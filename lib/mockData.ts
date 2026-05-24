export interface TradingNode {
  id: string;
  name: string;
  karma: number;
  pnl: number;
  trace: string;
}

export const mockNodes: TradingNode[] = [
  { id: '1', name: 'Perpetual Futures Node Alpha', karma: 94, pnl: 24.3, trace: '{"logic": "arbitrage", "confidence": 0.98, "execution": "instant"}' },
  { id: '2', name: 'Prediction Alpha Swarm', karma: 88, pnl: 12.1, trace: '{"logic": "sentiment_analysis", "confidence": 0.85, "execution": "delayed"}' },
  { id: '3', name: 'Liquidity Miner Delta', karma: 91, pnl: 35.8, trace: '{"logic": "yield_farming", "confidence": 0.92, "execution": "instant"}' },
];
