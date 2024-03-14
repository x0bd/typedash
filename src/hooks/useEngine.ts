import { useState } from "react";
import useWords from "./useWords";
import useCountDownTimer from "./useCountDownTimer";
import useTypings from "./useTypings";

export type State = "start" | "run" | "finish";

const NUM_WORDS = 12;
const COUNTDOWN_SECONDS = 30;

const useEngine = () => {
	const [state, setState] = useState<State>("start");
	const { words, updateWords } = useWords(NUM_WORDS);
	const { timeLeft, startCountDown, resetCountDown } =
		useCountDownTimer(COUNTDOWN_SECONDS);
	const { typed, cursor, clearTyped, resetTotalTyped, totalTyped } =
		useTypings(state !== "finish");

	return { state, words, timeLeft, typed };
};

export default useEngine;
