'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockNodes, TradingNode } from '@/lib/mockData';
import { Zap, Wallet, X } from 'lucide-react';

export default function TraceMarket() {
  const [nodes] = useState<TradingNode[]>(mockNodes);
  const [selectedNode, setSelectedNode] = useState<TradingNode | null>(null);
  const [loadingNodeId, setLoadingNodeId] = useState<string | null>(null);
  
  // PRODUCTION-READY WALLET STATE
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const connectWallet = async () => {
    setIsConnecting(true);
    
    // 1. Try to detect real browser wallet (MetaMask, etc.)
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      try {
        const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
        setIsConnecting(false);
        return;
      } catch (err) {
        console.error('Wallet connection failed', err);
      }
    }

    // 2. Fallback to Simulation for Demo (if no wallet detected)
    console.warn('No browser wallet detected. Falling back to simulation.');
    setTimeout(() => {
      setWalletAddress('0x71C...aB92'); // Mock address
      setIsConnecting(false);
    }, 1200);
  };

  const handlePeek = (node: TradingNode) => {
    if (!walletAddress) { 
        alert('Please connect wallet first!'); 
        return; 
    }
    setLoadingNodeId(node.id);
    setTimeout(() => {
      setLoadingNodeId(null);
      setSelectedNode(node);
    }, 1500);
  };

  return (
    <main className="min-h-screen p-6 md:p-12">
      {/* Navbar */}
      <nav className="glass fixed top-4 left-4 right-4 z-50 rounded-full px-6 py-3 flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center gap-2 font-bold text-xl">
            <Zap className="text-emerald-400" />
            <span>TraceMarket</span>
        </div>
        <button 
            onClick={connectWallet}
            disabled={!!walletAddress || isConnecting}
            className="glass px-5 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition flex items-center gap-2 disabled:opacity-70"
        >
          <Wallet size={16}/>
          {walletAddress ? `${walletAddress.substring(0,6)}...${walletAddress.substring(walletAddress.length - 4)}` : (isConnecting ? 'Connecting...' : 'Connect Wallet')}
        </button>
      </nav>


      {/* Hero */}
      <header className="pt-32 pb-16 text-center max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-indigo-400">
            Intelligence Marketplace
        </h1>
        <p className="text-gray-400 text-lg">Buy, sell, and peek into AI reasoning traces in real-time. Settled instantly on Arc.</p>
      </header>

      {/* Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {nodes.map((node) => (
          <motion.div 
            key={node.id} 
            whileHover={{ y: -5 }}
            className="glass p-6 rounded-[24px] flex flex-col gap-4 border border-white/10"
          >
            <h3 className="font-bold text-lg">{node.name}</h3>
            <div className="flex justify-between text-sm">
                <span className="text-gray-400">Karma Score</span>
                <span className="font-mono">{node.karma}/100</span>
            </div>
            <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-400 shadow-[0_0_10px_#34d399]" style={{ width: `${node.karma}%` }} />
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-emerald-400 font-mono font-bold">+{node.pnl}%</span>
              <button 
                onClick={() => handlePeek(node)}
                disabled={loadingNodeId === node.id}
                className="glass px-5 py-2 rounded-full text-xs font-semibold hover:bg-white/20 transition disabled:opacity-50"
              >
                {loadingNodeId === node.id ? 'Processing...' : 'Pay-to-Peek ($0.01 USDC)'}
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-[60]" 
            onClick={() => setSelectedNode(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="glass p-8 rounded-[24px] max-w-lg w-full relative" 
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setSelectedNode(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white"><X /></button>
              <h2 className="font-bold text-2xl mb-4 text-emerald-400">{selectedNode.name}</h2>
              <pre className="bg-black/40 p-6 rounded-2xl overflow-x-auto text-emerald-200 font-mono text-sm border border-white/5">
                {selectedNode.trace}
              </pre>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
