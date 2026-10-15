import { AnimatePresence, motion } from "motion/react";
import { fadeUp, viewport } from "./motionVariants";

import React, { useEffect, useState } from "react";
import {
    RefreshCw,
    Trophy,
    XCircle,
    ShieldAlert,
    Zap,
} from "lucide-react";

const WINNING_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
];

const checkWinner = (board) => {
    for (const [a, b, c] of WINNING_COMBINATIONS) {
        if (
            board[a] &&
            board[a] === board[b] &&
            board[b] === board[c]
        ) {
            return { winner: board[a], line: [a, b, c] };
        }
    }

    return {
        winner: board.every(Boolean) ? "draw" : null,
        line: [],
    };
};

// Unbeatable AI using minimax
const minimax = (board, isMaximizing, depth = 0) => {
    const result = checkWinner(board);

    if (result.winner === "O") return 10 - depth;
    if (result.winner === "X") return depth - 10;
    if (result.winner === "draw") return 0;

    let bestScore = isMaximizing ? -Infinity : Infinity;

    board.forEach((cell, index) => {
        if (cell !== null) return;

        board[index] = isMaximizing ? "O" : "X";

        const score = minimax(board, !isMaximizing, depth + 1);

        board[index] = null;

        bestScore = isMaximizing
            ? Math.max(bestScore, score)
            : Math.min(bestScore, score);
    });

    return bestScore;
};

const getBestMove = (board) => {
    let bestScore = -Infinity;
    let bestMove = -1;

    board.forEach((cell, index) => {
        if (cell !== null) return;

        const nextBoard = [...board];
        nextBoard[index] = "O";

        const score = minimax(nextBoard, false);

        if (score > bestScore) {
            bestScore = score;
            bestMove = index;
        }
    });

    return bestMove;
};

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [thinking, setThinking] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [winningLine, setWinningLine] = useState([]);
    const [result, setResult] = useState(null);

    const [scores, setScores] = useState({
        player: 0,
        ai: 0,
        draws: 0,
    });

    // Cancel pending AI response when component unmounts
    useEffect(() => {
        return () => clearTimeout(window.ticTacToeTimer);
    }, []);

    const finishGame = (nextBoard) => {
        const outcome = checkWinner(nextBoard);

        if (!outcome.winner) return false;

        setGameOver(true);
        setThinking(false);
        setWinningLine(outcome.line);

        if (outcome.winner === "X") {
            setResult("win");
            setScores((prev) => ({
                ...prev,
                player: prev.player + 1,
            }));
        } else if (outcome.winner === "O") {
            setResult("lose");
            setScores((prev) => ({
                ...prev,
                ai: prev.ai + 1,
            }));
        } else {
            setResult("draw");
            setScores((prev) => ({
                ...prev,
                draws: prev.draws + 1,
            }));
        }

        return true;
    };

    const handleClick = (index) => {
        if (board[index] || thinking || gameOver) return;

        const playerBoard = [...board];
        playerBoard[index] = "X";
        setBoard(playerBoard);

        if (finishGame(playerBoard)) return;

        setThinking(true);

        window.ticTacToeTimer = setTimeout(() => {
            const move = getBestMove(playerBoard);

            if (move !== -1) {
                const aiBoard = [...playerBoard];
                aiBoard[move] = "O";
                setBoard(aiBoard);

                if (!finishGame(aiBoard)) {
                    setThinking(false);
                }
            } else {
                setThinking(false);
            }
        }, 1000);
    };

    const rematch = () => {
        clearTimeout(window.ticTacToeTimer);

        setBoard(Array(9).fill(null));
        setThinking(false);
        setGameOver(false);
        setWinningLine([]);
        setResult(null);
    };

    const resetScores = () => {
        rematch();
        setScores({ player: 0, ai: 0, draws: 0 });
    };

    const resultContent = {
        win: {
            title: "VICTORY!",
            description: "You defeated the system. Impressive!",
            icon: Trophy,
            color: "text-cyan-400",
            border: "border-cyan-400/50 rounded-xl",
            glow: "shadow-cyan-500/20",
            button: "border-cyan-400/50 rounded-xl bg-cyan-400/10 hover:bg-cyan-400/20",
        },
        lose: {
            title: "SYSTEM WINS",
            description: "The AI got you this time. Try again!",
            icon: XCircle,
            color: "text-red-400",
            border: "border-red-500/50 rounded-xl",
            glow: "shadow-red-500/20",
            button: "border-red-500/50 rounded-xl bg-red-500/10 hover:bg-red-500/20",
        },
        draw: {
            title: "DRAW DETECTED",
            description: "Neither side won. Ready for another round?",
            icon: ShieldAlert,
            color: "text-violet-400",
            border: "border-violet-400/50 rounded-xl",
            glow: "shadow-violet-500/20",
            button: "border-violet-400/50 rounded-xl bg-violet-400/10 hover:bg-violet-400/20",
        },
    };

    const modal = result ? resultContent[result] : null;
    const ResultIcon = modal?.icon;

    return (
        <section className="relative overflow-hidden bg-[#050812] px-4 py-20 text-white sm:px-6">
            {/* Cyber background */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.035)_1px,transparent_1px)] bg-[size:35px_35px]" />
            <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />
            <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-red-500/10 blur-[130px]" />

            <div className="relative mx-auto max-w-3xl">
                {/* Header */}


                {/* Game panel */}
                <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} className="mx-auto max-w-lg border border-cyan-400/25 bg-[#080D1A]/95 p-5 shadow-[0_0_45px_rgba(6,182,212,0.07)] sm:p-8">
                    {/* Scoreboard */}
                    <div className="mb-6 grid grid-cols-3 gap-2">
                        <div className="border rounded-xl border-cyan-400/30 bg-cyan-400/5 p-3 text-center">
                            <p className="text-[10px]  font-bold uppercase tracking-widest text-cyan-300 sm:text-xs">
                                YOU / X
                            </p>
                            <motion.p key={scores.player} initial={{ scale: 1.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 400, damping: 15 }} className="mt-2 text-2xl font-black text-cyan-400">
                                {scores.player}
                            </motion.p>
                        </div>

                        <div className="border rounded-xl border-white/10 bg-white/[0.02] p-3 text-center">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 sm:text-xs">
                                Draws
                            </p>
                            <motion.p key={scores.draws} initial={{ scale: 1.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 400, damping: 15 }} className="mt-2 text-2xl font-black text-white">
                                {scores.draws}
                            </motion.p>
                        </div>

                        <div className="border rounded-xl border-red-500/30 bg-red-500/5 p-3 text-center">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-red-400 sm:text-xs">
                                AYAN AI
                            </p>
                            <motion.p key={scores.ai} initial={{ scale: 1.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 400, damping: 15 }} className="mt-2 text-2xl font-black text-red-400">
                                {scores.ai}
                            </motion.p>
                        </div>
                    </div>

                    {/* Turn indicator */}
                    <div className="mb-5 flex min-h-10 items-center justify-center gap-2 border-y border-white/5 py-3">
                        <span
                            className={`h-2 w-2 rounded-full ${thinking
                                ? "animate-pulse bg-red-500"
                                : gameOver
                                    ? "bg-violet-400"
                                    : "bg-cyan-400"
                                }`}
                        />

                        <motion.p key={thinking ? "thinking" : gameOver ? "over" : "turn"} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
                            aria-live="polite"
                            className={`text-xs font-bold uppercase tracking-[0.18em] sm:text-sm ${thinking
                                ? "text-red-400"
                                : "text-cyan-300"
                                }`}
                        >
                            {thinking
                                ? "AYAN AI ANALYZING..."
                                : gameOver
                                    ? "ROUND COMPLETE"
                                    : "YOUR TURN // X"}
                        </motion.p>
                    </div>

                    {/* Board */}
                    <div
                        className="grid grid-cols-3 gap-2.5 sm:gap-6"
                        role="group"
                        aria-label="Tic Tac Toe board"
                    >
                        {board.map((cell, index) => {
                            const isWinning = winningLine.includes(index);
                            const canPlay = !cell && !thinking && !gameOver;

                            return (
                                <motion.button whileHover={canPlay ? { scale: 1.05 } : undefined} whileTap={canPlay ? { scale: 0.92 } : undefined} animate={isWinning ? { scale: [1, 1.1, 1] } : { scale: 1 }} transition={isWinning ? { duration: 0.8, repeat: Infinity, ease: "easeInOut" } : { type: "spring", stiffness: 400, damping: 25 }}
                                    key={index}
                                    type="button"
                                    onClick={() => handleClick(index)}
                                    disabled={Boolean(cell) || thinking || gameOver}
                                    aria-label={`Cell ${index + 1}${cell ? `: ${cell}` : ": empty"}`}
                                    className={`group/cell relative flex rounded-xl aspect-square items-center justify-center overflow-hidden border transition-colors duration-200 ${isWinning
                                        ? cell === "X"
                                            ? "border-cyan-300 rounded-xl bg-cyan-400/20 shadow-[0_0_25px_rgba(34,211,238,0.25)]"
                                            : "border-red-400 bg-red-500/20 shadow-[0_0_25px_rgba(239,68,68,0.25)]"
                                        : cell === "X"
                                            ? "border-cyan-400 bg-cyan-400/15 shadow-[inset_0_0_25px_rgba(34,211,238,0.08)]"
                                            : cell === "O"
                                                ? "border-red-500 bg-red-500/15 shadow-[inset_0_0_25px_rgba(239,68,68,0.08)]"
                                                : "border-slate-700/70 bg-[#0B1120] hover:border-cyan-400/70 hover:bg-cyan-400/5"
                                        } ${!cell && !gameOver && !thinking
                                            ? "cursor-pointer"
                                            : "cursor-default"
                                        }`}
                                >
                                    {!cell && !gameOver && !thinking && (
                                        <span className="absolute inset-0 opacity-0 transition-opacity group-hover/cell:opacity-100">
                                            <span className="absolute left-2 top-2 h-2 w-2 border-l border-t border-cyan-400/60" />
                                            <span className="absolute bottom-2 right-2 h-2 w-2 border-b border-r border-cyan-400/60" />
                                        </span>
                                    )}

                                    {cell && (
                                        <motion.span initial={{ scale: 0, rotate: -90, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 350, damping: 18 }}
                                            className={`text-5xl font-black sm:text-6xl ${cell === "X"
                                                ? "text-cyan-400 drop-shadow-[0_0_14px_rgba(34,211,238,0.8)]"
                                                : "text-red-500 drop-shadow-[0_0_14px_rgba(239,68,68,0.8)]"
                                                }`}
                                        >
                                            {cell}
                                        </motion.span>
                                    )}
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Actions */}
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}
                            type="button"
                            onClick={rematch}
                            className="flex flex-1 items-center justify-center gap-2 border border-cyan-400/40 bg-cyan-400/5 px-4 py-3 text-xs font-bold uppercase tracking-widest text-cyan-300 transition-colors hover:bg-cyan-400/15"
                        >
                            <RefreshCw size={15} />
                            Restart Round
                        </motion.button>

                        <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}
                            type="button"
                            onClick={resetScores}
                            className="border border-slate-700 px-4 py-3 text-xs font-bold uppercase tracking-widest text-slate-400 transition-colors hover:border-red-500/50 hover:text-red-400"
                        >
                            Reset Scores
                        </motion.button>
                    </div>

                    <p className="mt-5 text-center text-[10px] uppercase tracking-[0.2em] text-slate-600">
                        X: Blue System // O: Red AI
                    </p>
                </motion.div>
            </div>

            {/* Result Modal */}
            <AnimatePresence>
            {modal && (
                <motion.div key="result-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[#02040A]/85 p-4 backdrop-blur-md"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="result-title"
                >
                    <motion.div initial={{ opacity: 0, scale: 0.8, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}
                        className={`w-full max-w-sm border ${modal.border} bg-[#080D1A] p-7 text-center shadow-2xl ${modal.glow} sm:p-9`}
                    >
                        <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.15 }}
                            className={`mx-auto flex h-16 w-16 items-center justify-center border ${modal.border} bg-white/[0.03] ${modal.color}`}
                        >
                            <ResultIcon size={32} />
                        </motion.div>

                        <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
                            Mission Report
                        </p>

                        <h3
                            id="result-title"
                            className={`mt-2 text-3xl font-black tracking-wide ${modal.color}`}
                        >
                            {modal.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-400">
                            {modal.description}
                        </p>

                        <div className="my-6 border-y border-white/10 py-4">
                            <p className="text-xs uppercase tracking-widest text-slate-500">
                                Current Score
                            </p>
                            <p className="mt-2 font-bold">
                                <span className="text-cyan-400">
                                    {scores.player}
                                </span>
                                <span className="mx-3 text-slate-600">:</span>
                                <span className="text-red-400">
                                    {scores.ai}
                                </span>
                            </p>
                        </div>

                        <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}
                            type="button"
                            onClick={rematch}
                            className={`flex w-full items-center justify-center gap-2 border px-5 py-3.5 text-sm font-black uppercase tracking-widest transition-colors ${modal.button} ${modal.color}`}
                        >
                            <RefreshCw size={17} />
                            Rematch
                        </motion.button>
                    </motion.div>
                </motion.div>
            )}
            </AnimatePresence>
        </section>
    );
};

export default TicTacToe;