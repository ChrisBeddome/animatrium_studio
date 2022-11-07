import styles from "./Hamburger.module.scss"

export default function Hamburger() {
  return (
    <div>
      <button className={styles["hamburger-button"]}>
        <span className="material-symbols-outlined">menu</span>
      </button>
    </div>
  )
}
