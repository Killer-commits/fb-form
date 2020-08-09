import sqlite3 

createTable = '''
CREATE TABLE `fb_form` (
	`name`	TEXT NOT NULL,
	`mobile`	TEXT NOT NULL UNIQUE,
	`email`	TEXT NOT NULL UNIQUE,
	`duration`	TEXT NOT NULL,
	`project`	TEXT NOT NULL,
	`classDuration`	TEXT NOT NULL,
	`prepDuration`	TEXT NOT NULL,
	`bondDuration`	TEXT NOT NULL,
	`rating1`	TEXT NOT NULL,
	`rating2`	TEXT NOT NULL,
	`rating3`	TEXT NOT NULL,
	`rating4`	TEXT NOT NULL,
	`rating5`	TEXT NOT NULL,
	`rating6`	TEXT NOT NULL,
	`rating7`	TEXT NOT NULL,
	`rating8`	TEXT NOT NULL,
	`induction`	TEXT NOT NULL,
	`projectFlow`	TEXT NOT NULL,
	`experience`	TEXT NOT NULL,
	`skillsAcquired`	TEXT NOT NULL,
	`suggestions`	TEXT NOT NULL,
	`feedback`	TEXT NOT NULL
);'''
conn = sqlite3.connect("./fbform.db")
cur = conn.cursor()
data = cur.execute(createTable)
print(data)