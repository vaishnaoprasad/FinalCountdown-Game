import { forwardRef } from "react";
import { useRef } from "react";
import { useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import './GameOver.css';

export default forwardRef(function GameOver(
  { remainingTime, targetTime, onReset },
  ref
) {
  const dialog = useRef();

  const playerLost = remainingTime <= 0;

  const formattedRemainingTime = (remainingTime / 100).toFixed(2);
  
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result">
      {playerLost && <h2>You Lost</h2>}
      {!playerLost && <h2> Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong> {formattedRemainingTime} seconds left.</strong>
      </p>

      <form method="dialog" onSubmit={onReset}>
        <button type="submit">Close</button>
      </form>
    </dialog>,

    document.getElementById('modal')
  );
});
