
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "songs" (
	"id" serial PRIMARY KEY,
	"user_id" iNT NOT NULL REFERENCES "user",
	"date" DATE DEFAULT CURRENT_DATE,
	"title" TEXT NOT NULL,
	"notes" TEXT DEFAULT 'no notes added',
	"lyrics" TEXT DEFAULT 'no lyrics added',
	"org_date" DATE DEFAULT CURRENT_DATE,
	"org_title" VARCHAR (150),
	"org_notes" TEXT DEFAULT 'no notes provided', 
	"org_lyrics" TEXT DEFAULT 'no lyrics provided',
	"org_audio" TEXT, 
	"preview_audio" TEXT
);

CREATE TABLE "recordings" (
	"id" serial PRIMARY KEY,
	"song_id" INT NOT NULL REFERENCES "songs",
	"url_path" TEXT NOT NULL
)