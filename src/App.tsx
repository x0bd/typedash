import React from "react";
import RestartButton from "./components/RestartButton";
import Results from "./components/Results";
import UserTypings from "./components/UserTypings";
import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercentage } from "./utils/helpers";

export default function App() {
	const { state, words, timeLeft, typed, errors, restart, totalTyped } =
		useEngine();

	return (
		<>
			<CountdownTimer timeLeft={timeLeft} />
			<WordsContainer>
				<GeneratedWords words={words} />
				<UserTypings
					className="absolute inset-0"
					words={words}
					userInput={typed}
				/>
			</WordsContainer>
			<RestartButton
				className={"mx-auto mt-10 text-white"}
				onRestart={restart}
			/>
			<Results
				state={state}
				className="mt-10"
				errors={errors}
				accuracyPercentage={calculateAccuracyPercentage(
					errors,
					totalTyped
				)}
				total={totalTyped}
			/>
		</>
	);
}

const WordsContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="relative text-3xl max-w-xl leading-relaxed break-all">
			{children}
		</div>
	);
};

const GeneratedWords = ({ words }: { words: string }) => {
	return <div className="text-green">{words}</div>;
};

const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
	return <h2 className="text-red font-medium">Time: {timeLeft}</h2>;
};
