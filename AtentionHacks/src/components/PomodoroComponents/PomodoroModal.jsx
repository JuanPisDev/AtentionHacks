import { useState, useEffect } from "react";
import styles from "../PomodoroComponents/styles/PomodoroModal.module.css";

function PomodoroModal({
    selectedPomodoro,
    usingPomodoro,
    setUsingPomodoro,
    onClose
}) {
    const [sessions, setSessions] = useState("");
    const [currentSession, setCurrentSession] = useState(1);
    const [currentPhase, setCurrentPhase] = useState("work");
    const [remainingTime, setRemainingTime] = useState(0);

    function handleStartPomodoro(ev) {
        ev.preventDefault();

        if (
            sessions === "" ||
            sessions < 1 ||
            !Number.isInteger(sessions)
        ) {
            return;
        }

        setUsingPomodoro("inUse");
        setCurrentPhase("work");
        setCurrentSession(1);
        setRemainingTime(selectedPomodoro.activeTime * 60);
    }

    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    useEffect(() => {
        if (usingPomodoro !== "inUse") {
            return;
        }

        if (remainingTime > 0) {
            const timeout = setTimeout(() => {
                setRemainingTime(time => time - 1);
            }, 1000);

            return () => clearTimeout(timeout);
        }

        if (currentPhase === "work") {
            if (currentSession < sessions) {
                setCurrentPhase("rest");
                setRemainingTime(selectedPomodoro.restTime * 60);
            } else {
                setUsingPomodoro("finished");
            }

            return;
        }

        if (currentPhase === "rest") {
            setCurrentSession(session => session + 1);
            setCurrentPhase("work");
            setRemainingTime(selectedPomodoro.activeTime * 60);
        }
    }, [
        usingPomodoro,
        remainingTime,
        currentPhase,
        currentSession,
        sessions,
        selectedPomodoro,
        setUsingPomodoro
    ]);

    return (
        <div className={styles.overlay}>
            <section
                className={styles.modal}
                role="dialog"
                aria-modal="true"
                aria-labelledby="pomodoro-modal-title"
            >
                {usingPomodoro === "setSessions" && (
                    <form
                        className={styles.setupForm}
                        onSubmit={handleStartPomodoro}
                    >
                        <h2
                            id="pomodoro-modal-title"
                            className={styles.modalTitle}
                        >
                            ¿Cuántas sesiones deseas?
                        </h2>

                        <div className={styles.sessionInfo}>
                            <div className={styles.infoItem}>
                                <p className={styles.infoLabel}>
                                    Trabajo
                                </p>
                                <p className={styles.infoValue}>
                                    {selectedPomodoro.activeTime} min
                                </p>
                            </div>

                            <div className={styles.infoItem}>
                                <p className={styles.infoLabel}>
                                    Descanso
                                </p>
                                <p className={styles.infoValue}>
                                    {selectedPomodoro.restTime} min
                                </p>
                            </div>
                        </div>

                        <label
                            className={styles.label}
                            htmlFor="sessions"
                        >
                            Cantidad de sesiones
                        </label>

                        <input
                            id="sessions"
                            className={styles.input}
                            type="number"
                            min="1"
                            step="1"
                            value={sessions}
                            onChange={(ev) => {
                                const value = ev.target.value;
                                setSessions(
                                    value === "" ? "" : Number(value)
                                );
                            }}
                            required
                        />

                        <div className={styles.actions}>
                            <button
                                className={`${styles.button} ${styles.primaryButton}`}
                                type="submit"
                            >
                                INICIAR
                            </button>

                            <button
                                className={`${styles.button} ${styles.secondaryButton}`}
                                type="button"
                                onClick={onClose}
                            >
                                CANCELAR
                            </button>
                        </div>
                    </form>
                )}

                {usingPomodoro === "inUse" && (
                    <div>
                        <h2
                            id="pomodoro-modal-title"
                            className={`${styles.modalTitle} ${
                                currentPhase === "work"
                                    ? styles.phaseWork
                                    : styles.phaseRest
                            }`}
                        >
                            {currentPhase === "work"
                                ? "¡Hora de concentrarse!"
                                : "Hora de descansar"}
                        </h2>

                        <p className={styles.sessionCount}>
                            Sesión {currentSession} de {sessions}
                        </p>

                        <h1 className={styles.timer} aria-live="off">
                            {String(minutes).padStart(2, "0")}:
                            {String(seconds).padStart(2, "0")}
                        </h1>

                        <div className={styles.actions}>
                            <button
                                className={`${styles.button} ${styles.secondaryButton}`}
                                type="button"
                                onClick={onClose}
                            >
                                SALIR
                            </button>
                        </div>
                    </div>
                )}

                {usingPomodoro === "finished" && (
                    <div>
                        <h2
                            id="pomodoro-modal-title"
                            className={styles.modalTitle}
                        >
                            ¡Pomodoro completado!
                        </h2>

                        <p className={styles.description}>
                            Has completado tus {sessions} sesiones.
                            ¡Buen trabajo!
                        </p>

                        <div className={styles.actions}>
                            <button
                                className={`${styles.button} ${styles.primaryButton}`}
                                type="button"
                                onClick={onClose}
                            >
                                CERRAR
                            </button>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
}

export default PomodoroModal;
