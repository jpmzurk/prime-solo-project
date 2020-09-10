
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "songs" (
	"id" serial PRIMARY KEY,
	"user_id" iNT NOT NULL REFERENCES "user",
	"date" date DEFAULT CURRENT_DATE,
	"title" TEXT NOT NULL,
	"notes" TEXT DEFAULT 'no notes added',
	"lyrics" TEXT DEFAULT 'no lyrics added',
	"org_date" date NOT NULL,
	"org_title" varchar(150) NOT NULL,
	"org_notes" TEXT DEFAULT 'no notes provided', 
	"org_lyrics" TEXT DEFAULT 'no lyrics provided'
);

CREATE TABLE "recordings" (
	"id" serial PRIMARY KEY,
	"song_id" int NOT NULL REFERENCES "songs",
	"url_path" text NOT NULL
)

INSERT INTO "songs" ("user_id", "date", "title", "notes", "lyrics", "org_date", "org_title", "org_notes", "org_lyrics")
VALUES 
(1, '9/9/2020', 'Loose Connection', 'pedal steel in chorus', 'Go past some woods there old pine grove Thats just another memory Im gettin to know  Hear that loose connection  Its just the cords startin to go I seen a face somewhere Out on quarry road its just a reflection
of what I already know Thats just another memory Im gettin to know Those are just some trees there Look at em bow Aint much intention just lettin it blow Hear that loose connection Its just the cord startin to go Its just another memoryt hat I already know', '9/9/2020', 'Loose Connection', 'pedal steel in chorus?', 'Go past some woods there old pine grove  Thats just another memory Im gettin to know Hear that loose connection  Its just the cords startin to go I seen a face somewhere Out on quarry road its just a reflection of what I already know')

INSERT INTO "songs" ("user_id", "title", "notes", "lyrics", "org_date", "org_title", "org_lyrics")
VALUES  (1, 'To Survive', 'more concrete imagery', 
'its the end of era so why dont you even try
cause he had the things that you wanted to hold 
these at a time i would plead
what youd do to survive
what would you imply
but you dont then you leave
its the end of time my dear so why dont you just let it lie
these were the things that you often were so told 
these at a time i would plead
couldn’t you learn to take your time with me
these were the things that you often were so told',
'8/5/2019', 'to survive', 'what youd do to survive 
what would you imply
but you dont then you leave'
)

INSERT INTO "songs" ("user_id", "title", "lyrics", "org_date", "org_title")
VALUES 
(1, 'A Friend of Yours', 
'heard you two finally emptied that house
were all capable of dragging it out
oh my god your almond eyes
way to go on that great surprise
what you needed was a friend of yours', '10/2/2017', 'holy crowd')

INSERT INTO "songs" ("user_id", "title", "lyrics", "org_date", "org_title")
VALUES 
(1, 'How Many Times', 
'
How many times must I know
Before I have to go
how many times must I take
A road laid to waste
How many lines before I learn
That words dont have a cure
When its you im talkin
And you whos always new
how many times must I show
Almost good as gold
How many times must wade down
thru feelings of yesterday 
When its you im talkin
And you whos always new
How many times must I know
Before I have to go
How many lines before I learn
That words dont have a cure
When its you im talkin
And you whos always new
and its you im talking to'
, '2/27/2019', 'you im talking to')


INSERT INTO "recordings" ("song_id", "url_path")
VALUES 
(1, 'audioFiles/LooseConnection.mp3'),
(2, 'audioFiles/ToSurvive.mp3'),
(3, 'audioFiles/AFriendOfYours.mp3'),
(4, 'audioFiles/HowManyTimes.mp3')