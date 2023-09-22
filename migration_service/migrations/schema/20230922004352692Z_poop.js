export const up = () => {
	return `
		CREATE TABLE poopoo (
			id INT NOT NULL,
			type VARCHAR(255),
			PRIMARY KEY(id)
		)
	`
}

export const down = () => {
	// return sql here
}
