import { faker } from "@faker-js/faker";
import RestartButton from "./components/RestartButton";
import Results from "./components/Results";
import UserTypings from "./components/UserTypings";
const words = faker.random.words(10);

export default function App() {
	return (
		<>
			<CountdownTimer timeLeft={30} />
			<div className="relative max-w-xl mt-3 text-3xl leading-relaxed break-all">
				<GeneratedWords words={words} />
				<UserTypings className="absolute inset-0" userInput={words} />
			</div>
			<RestartButton
				className={"mx-auto mt-10 text-slate-500"}
				onRestart={() => null}
			/>
			<Results
				className="mt-10"
				errors={10}
				accuracyPercentage={100}
				total={200}
			/>
		</>
	);
}

const GeneratedWords = ({ words }: { words: string }) => {
	return <div className="text-slate-500">{words}</div>;
};

const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
	return <h2 className="text-primary-400 font-medium">Time: {timeLeft}</h2>;
};
