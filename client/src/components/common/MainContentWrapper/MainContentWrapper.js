import styles from "./MainContentWrapper.module.scss"

export default function MainContentWrapper({children, dark=false}) {
	return (
		<div className={`${styles["main-content-wrapper"]} ${dark ? styles.dark : ''}`}>
			<div className={styles.content}>{children}</div>
		</div>
	)
}
