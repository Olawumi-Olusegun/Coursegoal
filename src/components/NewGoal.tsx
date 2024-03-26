import { useRef, type FormEvent } from "react"


type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void;
}


export default function NewGoal({onAddGoal}: NewGoalProps) {

    const goalRef = useRef<HTMLInputElement | null>(null);
    const summaryRef = useRef<HTMLTextAreaElement | null>(null);

    function handleSubmitGoal(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // const formData = new FormData(event.currentTarget);

        const enterdGoal = goalRef.current!.value;
        const enterdSummary = summaryRef.current!.value;

        onAddGoal(enterdGoal, enterdSummary)

        event.currentTarget.reset();
    }

  return (
    <>
     <form onSubmit={handleSubmitGoal}>
        <p>
            <label htmlFor="goal">Enter goal:</label>
            <input type="text" ref={goalRef} name="goal" id="goal" placeholder="Enter goal" required />
        </p>
        <p>
            <label htmlFor="goal">Short Summary:</label>
            <textarea ref={summaryRef} name="summary" id="summary" placeholder="Enter Short Summary" required />
        </p>

        <p>
            <button>Add Goal</button>
        </p>
     </form>
    </>
  )
}