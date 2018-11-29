BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS `dsa_starter_weaponskilldistribution` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`character_id`	integer NOT NULL,
	`skill_id`	integer NOT NULL,
	`attack`	smallint NOT NULL,
	`parade`	smallint NOT NULL,
	FOREIGN KEY(`character_id`) REFERENCES `dsa_starter_character`(`id`),
	FOREIGN KEY(`skill_id`) REFERENCES `dsa_starter_skill`(`id`)
);
INSERT INTO `dsa_starter_weaponskilldistribution` (id,character_id,skill_id,attack,parade) VALUES (3,1,1,4,0);
CREATE TABLE IF NOT EXISTS `dsa_starter_weapon` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`name`	varchar ( 200 ) NOT NULL,
	`hit_dices`	smallint NOT NULL,
	`hit_add_points`	smallint NOT NULL,
	`skill_type_id`	integer NOT NULL,
	FOREIGN KEY(`skill_type_id`) REFERENCES `dsa_starter_skill`(`id`)
);
INSERT INTO `dsa_starter_weapon` (id,name,hit_dices,hit_add_points,skill_type_id) VALUES (1,'Langschwert',1,4,2),
 (2,'Dolch',1,1,1),
 (3,'Schwerer Dolch',1,2,1),
 (4,'Kurzschwert',1,3,2),
 (5,'Säbel',1,3,5),
 (6,'Magierstab',1,2,2),
 (7,'Langbogen',1,4,69);
CREATE TABLE IF NOT EXISTS `dsa_starter_skilltype` (
	`skill_group_id`	integer NOT NULL,
	`name`	varchar ( 50 ) NOT NULL,
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	FOREIGN KEY(`skill_group_id`) REFERENCES `dsa_starter_skillgroup`(`id`)
);
INSERT INTO `dsa_starter_skilltype` (skill_group_id,name,id) VALUES (5,'Kampftechniken',1),
 (3,'Körperliche Talente',2),
 (4,'Gesellschaftliche Talente',3),
 (4,'Naturtalente',4),
 (4,'Wissenstalente',5),
 (5,'Sprachen und Schriften',6),
 (4,'Handwerkliche Talente',7),
 (3,'Fernkampf',8);
CREATE TABLE IF NOT EXISTS `dsa_starter_skillgroup` (
	`name`	varchar ( 1 ) NOT NULL,
	`cost_per_increase`	smallint NOT NULL,
	`title`	varchar ( 50 ) NOT NULL,
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT
);
INSERT INTO `dsa_starter_skillgroup` (name,cost_per_increase,title,id) VALUES ('D',5,'Schwer zu erwerbende',3),
 ('B',5,'Leicht zu erwerbende',4),
 ('F',5,'Gaben',5);
CREATE TABLE IF NOT EXISTS `dsa_starter_skill` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`name`	varchar ( 200 ) NOT NULL,
	`type_id`	integer NOT NULL,
	`behinderung`	varchar ( 4 ) NOT NULL,
	`dice1`	varchar ( 2 ) NOT NULL,
	`dice2`	varchar ( 2 ) NOT NULL,
	`dice3`	varchar ( 2 ) NOT NULL,
	`basis`	bool NOT NULL,
	FOREIGN KEY(`type_id`) REFERENCES `dsa_starter_skilltype`(`id`)
);
INSERT INTO `dsa_starter_skill` (id,name,type_id,behinderung,dice1,dice2,dice3,basis) VALUES (1,'Dolche',1,'BE-1','','','',1),
 (2,'Hiebwaffen',1,'BE-4','','','',1),
 (3,'Raufen',1,'BE','','','',1),
 (4,'Ringen',1,'BE','','','',1),
 (5,'Säbel',1,'BE-2','','','',1),
 (6,'Wurfmesser',8,'BE-3','GE','GE','GE',1),
 (7,'Armbrust',8,'BE-2','GE','GE','GE',1),
 (8,'Zweihandwaffen',1,'BE-4','','','',1),
 (9,'Athletik',2,'BEx2','GE','KO','KK',1),
 (10,'Klettern',2,'BE*2','MU','GE','KK',1),
 (11,'Akrobatik',2,'BEx2','MU','GE','KK',1),
 (12,'Gaukeleien',2,'BEx2','MU','CH','FF',1),
 (13,'Körperbeherrschung',2,'BEx2','MU','IN','GE',1),
 (14,'Reiten',2,'BE-2','CH','GE','KK',1),
 (15,'Schleichen',2,'BE','MU','IN','GE',1),
 (16,'Schwimmen',2,'BEx2','GE','KO','KK',1),
 (17,'Selbstbeherrschung',2,'-','MU','KO','KK',1),
 (18,'Sich Verstecken',2,'BE-2','MU','IN','GE',1),
 (19,'Singen',2,'BE-3','IN','CH','KO',1),
 (20,'Sinnenschärfe',2,'situationsabhängig','KL','IN','IN',1),
 (21,'Stimmen Imitieren',2,'BE-4','KL','IN','CH',1),
 (22,'Tanze',2,'BEx2','CH','GE','GE',1),
 (23,'Taschendiebstahl',2,'BEx2','MU','IN','FF',1),
 (24,'Zechen',2,'-','IN','KO','KK',1),
 (25,'Betören',3,'BE-2','IN','CH','CH',1),
 (26,'Etikette',3,'BE-2','KL','IN','CH',1),
 (27,'Gassenwissen',3,'BE-4','KL','IN','CH',1),
 (28,'Lehren',3,'-','KL','IN','CH',1),
 (29,'Menschenkenntnis',3,'-','KL','IN','CH',1),
 (30,'Sich Verkleiden',3,'BEx2','MU','CH','GE',1),
 (31,'Überreden / Lügen',3,'-','MU','IN','CH',1),
 (32,'Überzeugen',3,'-','KL','IN','CH',1),
 (33,'Fährtensuchen',4,'-','KL','IN','IN',1),
 (34,'Fallenstellen',4,'-','KL','FF','KK',1),
 (35,'Fesseln/Entfesseln',4,'BE (beim entfesseln)','FF','GE','KK',1),
 (36,'Fischen/Angeln',4,'-','IN','FF','KK',1),
 (37,'Orientierung',4,'-','KL','IN','IN',1),
 (38,'Wettervorhersage',4,'-','KL','IN','IN',1),
 (39,'Wildnisleben',4,'je nach Situation','IN','GE','KO',1),
 (40,'Abrichten',5,'-','MU','IN','CH',1),
 (41,'Ackerbau',5,'-','IN','FF','KK',1),
 (42,'Alchimie',5,'-','MU','KL','FF',1),
 (43,'Bergbau',5,'-','IN','KO','KK',1),
 (44,'Bogenbau',5,'-','KL','IN','FF',1),
 (45,'Boote Fahren',5,'-','GE','KO','KK',1),
 (46,'Fahrzeug Lenken',5,'-','IN','CH','FF',1),
 (47,'Falschspiel',5,'-','MU','CH','FF',1),
 (48,'Feinmechanik',5,'-','KL','FF','FF',1),
 (49,'Fleischer',5,'-','KL','FF','KK',1),
 (50,'Gerber/Kürschner',5,'-','KL','FF','KO',1),
 (51,'Grobschmied',5,'-','FF','KK','KO',1),
 (52,'Heilkunde Gift',5,'-','MU','KL','IN',1),
 (53,'Heilkunde Krankheiten',5,'-','MU','KL','CH',1),
 (54,'Heilkunde Wunden',7,'-','KL','CH','FF',1),
 (55,'Holzbearbeitung',7,'-','KL','FF','KK',1),
 (56,'Kartographie',7,'-','KL','KL','FF',1),
 (57,'Kochen',7,'-','KL','IN','FF',1),
 (58,'Lederarbeiten',7,'-','KL','FF','FF',1),
 (59,'Malen/Zeichnen',7,'-','KL','IN','FF',1),
 (60,'Musizieren',7,'-','IN','CH','FF',1),
 (61,'Schlösser knacken',7,'-','IN','FF','FF',1),
 (62,'Schneidern',7,'-','KL','FF','FF',1),
 (63,'Seefahrt',7,'-','FF','GE','KK',1),
 (64,'Steinmetz',7,'-','FF','FF','KK',1),
 (65,'Steinschneider/Juwelier',7,'-','IN','FF','FF',1),
 (66,'Tätowieren',7,'-','IN','FF','FF',1),
 (67,'Zimmermann',7,'-','KL','FF','KK',1),
 (68,'Bogen',8,'BE-3','GE','GE','GE',1),
 (69,'Fernkampf',1,'BE-3','GE','GE','GE',1);
CREATE TABLE IF NOT EXISTS `dsa_starter_race` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`name`	text NOT NULL
);
INSERT INTO `dsa_starter_race` (id,name) VALUES (1,'Mensch'),
 (2,'Zwerg');
CREATE TABLE IF NOT EXISTS `dsa_starter_points_spent` (
	`hero_id`	INTEGER NOT NULL,
	`points_spent`	INTEGER NOT NULL,
	`activity_json`	TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS `dsa_starter_nonplayercharacter` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`gender`	varchar ( 1 ) NOT NULL,
	`avatar`	varchar ( 100 ),
	`avatar_small`	varchar ( 100 ),
	`name`	varchar ( 200 ) NOT NULL,
	`iniitiative`	smallint NOT NULL,
	`attack`	smallint NOT NULL,
	`parade`	smallint NOT NULL,
	`hit_points`	varchar ( 6 ) NOT NULL,
	`race_id`	integer NOT NULL,
	`type_id`	integer NOT NULL,
	FOREIGN KEY(`type_id`) REFERENCES `dsa_starter_herotype`(`id`),
	FOREIGN KEY(`race_id`) REFERENCES `dsa_starter_race`(`id`)
);
CREATE TABLE IF NOT EXISTS `dsa_starter_herotype` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`name`	varchar ( 200 ) NOT NULL
);
INSERT INTO `dsa_starter_herotype` (id,name) VALUES (1,'Krieger'),
 (2,'Gaukler'),
 (3,'Jäger'),
 (4,'Zauberer');
CREATE TABLE IF NOT EXISTS `dsa_starter_fightcharacterparticipation` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`character_id`	integer NOT NULL,
	`fight_id`	integer NOT NULL,
	`position`	varchar ( 1 ) NOT NULL,
	FOREIGN KEY(`character_id`) REFERENCES `dsa_starter_character`(`id`),
	FOREIGN KEY(`fight_id`) REFERENCES `dsa_starter_fight`(`id`)
);
INSERT INTO `dsa_starter_fightcharacterparticipation` (id,character_id,fight_id,position) VALUES (4,1,1,'B'),
 (5,2,1,'B'),
 (6,3,1,'B'),
 (7,4,1,'B');
CREATE TABLE IF NOT EXISTS `dsa_starter_fight` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`name`	varchar ( 200 ) NOT NULL,
	`adventure_id`	integer NOT NULL,
	FOREIGN KEY(`adventure_id`) REFERENCES `dsa_starter_adventure`(`id`)
);
INSERT INTO `dsa_starter_fight` (id,name,adventure_id) VALUES (1,'Bar Brawl 1',1);
CREATE TABLE IF NOT EXISTS `dsa_starter_characterhasweapon` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`character_id`	integer NOT NULL,
	`weapon_id`	integer NOT NULL,
	FOREIGN KEY(`character_id`) REFERENCES `dsa_starter_character`(`id`),
	FOREIGN KEY(`weapon_id`) REFERENCES `dsa_starter_weapon`(`id`)
);
INSERT INTO `dsa_starter_characterhasweapon` (id,character_id,weapon_id) VALUES (1,1,1),
 (2,1,3),
 (3,2,2),
 (4,3,1),
 (5,4,2),
 (6,4,6),
 (7,3,7);
CREATE TABLE IF NOT EXISTS `dsa_starter_character` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`created_date`	datetime NOT NULL,
	`name`	varchar ( 200 ) NOT NULL,
	`type_id`	integer NOT NULL,
	`race_id`	integer NOT NULL,
	`experience`	smallint NOT NULL,
	`life`	smallint NOT NULL,
	`charisma`	smallint NOT NULL,
	`culture`	varchar ( 200 ) NOT NULL,
	`fingerfertigkeit`	smallint NOT NULL,
	`gender`	varchar ( 1 ) NOT NULL,
	`gewandheit`	smallint NOT NULL,
	`intuition`	smallint NOT NULL,
	`klugheit`	smallint NOT NULL,
	`koerperkraft`	smallint NOT NULL,
	`konstitution`	smallint NOT NULL,
	`mut`	smallint NOT NULL,
	`size`	smallint NOT NULL,
	`social_rank`	smallint NOT NULL,
	`experience_used`	smallint NOT NULL,
	`ini_basis`	smallint NOT NULL,
	`life_lost`	smallint NOT NULL,
	`avatar`	varchar ( 100 ),
	`avatar_small`	varchar ( 100 ),
	FOREIGN KEY(`type_id`) REFERENCES `dsa_starter_herotype`(`id`),
	FOREIGN KEY(`race_id`) REFERENCES `dsa_starter_race`(`id`)
);
INSERT INTO `dsa_starter_character` (id,created_date,name,type_id,race_id,experience,life,charisma,culture,fingerfertigkeit,gender,gewandheit,intuition,klugheit,koerperkraft,konstitution,mut,size,social_rank,experience_used,ini_basis,life_lost,avatar,avatar_small) VALUES (1,'2017-04-18 16:29:48','Torgal',1,1,0,30,9,'Irgendwas',10,'M',12,11,9,14,11,10,175,0,0,0,0,'torgal_avatar_large.png','torgal_avatar_small_g2VUiQF.png'),
 (2,'2017-04-18 19:18:07','Golini',2,1,1000,33,12,'Garethi',10,'F',10,10,10,12,10,10,175,0,0,0,8,'avatar_golini_large.png','golini_avatar_small_inIB8ij.png'),
 (3,'2017-04-26 21:50:21','Tore',3,1,0,30,0,'Garethi',0,'M',0,0,0,0,0,0,187,2,0,0,25,'tore_avatar_large.png','tore_avatar_small_NoPYBRv.png'),
 (4,'2018-06-06 19:00:18','Modred',4,1,0,30,0,'Andergaster',0,'M',0,0,0,0,0,0,175,0,0,0,0,'modred.jpg','modred_isqvmWp.jpg');
CREATE TABLE IF NOT EXISTS `dsa_starter_adventureimage` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`caption`	varchar ( 200 ) NOT NULL,
	`adventure_id`	integer NOT NULL,
	`image`	varchar ( 100 ),
	FOREIGN KEY(`adventure_id`) REFERENCES `dsa_starter_adventure`(`id`)
);
INSERT INTO `dsa_starter_adventureimage` (id,caption,adventure_id,image) VALUES (1,'A deer, my friend',1,'Selection_003.png'),
 (2,'Many Deers',1,'Selection_004_fT1KkzV.png');
CREATE TABLE IF NOT EXISTS `dsa_starter_adventure` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`name`	varchar ( 200 ) NOT NULL,
	`isActive`	bool NOT NULL
);
INSERT INTO `dsa_starter_adventure` (id,name,isActive) VALUES (1,'Reise zum Horizont',0);
CREATE TABLE IF NOT EXISTS `dsa_starter_actualskill` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`value`	smallint NOT NULL,
	`skill_id`	integer NOT NULL,
	`character_id`	integer NOT NULL,
	FOREIGN KEY(`character_id`) REFERENCES `dsa_starter_character`(`id`),
	FOREIGN KEY(`skill_id`) REFERENCES `dsa_starter_skill`(`id`)
);
INSERT INTO `dsa_starter_actualskill` (id,value,skill_id,character_id) VALUES (1,4,1,1),
 (2,8,6,1),
 (3,8,2,1),
 (4,7,63,1),
 (5,4,19,1),
 (6,4,17,1),
 (7,3,5,1),
 (8,2,3,2),
 (9,8,11,2);
CREATE TABLE IF NOT EXISTS `dsa_starter_abenteuer_punkte` (
	`hero_id`	INTEGER NOT NULL,
	`abenteuer_punkte`	INTEGER NOT NULL DEFAULT (0)
);
CREATE TABLE IF NOT EXISTS `django_session` (
	`session_key`	varchar ( 40 ) NOT NULL,
	`session_data`	text NOT NULL,
	`expire_date`	datetime NOT NULL,
	PRIMARY KEY(`session_key`)
);
INSERT INTO `django_session` (session_key,session_data,expire_date) VALUES ('x0vs1rq3ch5eo0x1wyu3b13vlddhdf8e','ZDU4YTlmYzcxMDc3ZTAxZjAxNzdlZmE0MDJlZWUxMjI3Y2E3ODdkMTp7Il9hdXRoX3VzZXJfaGFzaCI6IjhlN2RlOTg0NjZmYmRkMWZjNjQxMTM5MjE4Yjc1M2MwNDg0MTY0MzgiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=','2017-05-02 10:28:45.262423'),
 ('l7u9kwgm8wbixw1p210ilej48z4ep666','ZjIxY2JlYTVjMjgxMmViNDQ3YTVkZGUyNDg1YzUyNTJlMWFmYzcyZDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI4ZTdkZTk4NDY2ZmJkZDFmYzY0MTEzOTIxOGI3NTNjMDQ4NDE2NDM4In0=','2017-05-10 21:39:12.364548'),
 ('bkce2fu0vt5p1qpra6wopre80qg1xjej','OWI0Zjk0ODJhM2MzNzg5NWM5YjMwMGUxMWI2NzhkMWJmMjJlYjE0Yjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9oYXNoIjoiOGU3ZGU5ODQ2NmZiZGQxZmM2NDExMzkyMThiNzUzYzA0ODQxNjQzOCIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIn0=','2017-05-19 15:18:25.907403'),
 ('4pl74l15tmuzid6yveeu4xw1of99z2kj','ZjIxY2JlYTVjMjgxMmViNDQ3YTVkZGUyNDg1YzUyNTJlMWFmYzcyZDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI4ZTdkZTk4NDY2ZmJkZDFmYzY0MTEzOTIxOGI3NTNjMDQ4NDE2NDM4In0=','2018-05-28 20:15:41.800071'),
 ('031gct0zqs5ouh1j5sepcw9sy84iay6z','ZjIxY2JlYTVjMjgxMmViNDQ3YTVkZGUyNDg1YzUyNTJlMWFmYzcyZDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI4ZTdkZTk4NDY2ZmJkZDFmYzY0MTEzOTIxOGI3NTNjMDQ4NDE2NDM4In0=','2018-06-02 11:18:15.545099'),
 ('p3ez97lcwqcyvnhgobyk5k1dsevaefl1','ZjIxY2JlYTVjMjgxMmViNDQ3YTVkZGUyNDg1YzUyNTJlMWFmYzcyZDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI4ZTdkZTk4NDY2ZmJkZDFmYzY0MTEzOTIxOGI3NTNjMDQ4NDE2NDM4In0=','2018-06-20 18:58:52.777355'),
 ('hf99su6d3ofoor4ntv9xy9j2cyeo0wp1','ZjIxY2JlYTVjMjgxMmViNDQ3YTVkZGUyNDg1YzUyNTJlMWFmYzcyZDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI4ZTdkZTk4NDY2ZmJkZDFmYzY0MTEzOTIxOGI3NTNjMDQ4NDE2NDM4In0=','2018-07-20 16:03:05.334418'),
 ('aybqbtyatyvx5vigmozqoydwab56iz8v','ZjIxY2JlYTVjMjgxMmViNDQ3YTVkZGUyNDg1YzUyNTJlMWFmYzcyZDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI4ZTdkZTk4NDY2ZmJkZDFmYzY0MTEzOTIxOGI3NTNjMDQ4NDE2NDM4In0=','2018-09-17 17:43:30.594062'),
 ('f3rle9lyy6hpt7qyz5p4mfyqi3di8i09','ZjIxY2JlYTVjMjgxMmViNDQ3YTVkZGUyNDg1YzUyNTJlMWFmYzcyZDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI4ZTdkZTk4NDY2ZmJkZDFmYzY0MTEzOTIxOGI3NTNjMDQ4NDE2NDM4In0=','2018-12-01 10:32:25.390374'),
 ('qcgfe77wssz97xn81b1vfwmr24s2vp2a','ZjIxY2JlYTVjMjgxMmViNDQ3YTVkZGUyNDg1YzUyNTJlMWFmYzcyZDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI4ZTdkZTk4NDY2ZmJkZDFmYzY0MTEzOTIxOGI3NTNjMDQ4NDE2NDM4In0=','2018-12-11 14:35:53.713348'),
 ('k8mfdeuejj28afwa6itu54qs69p2i00f','ZjIxY2JlYTVjMjgxMmViNDQ3YTVkZGUyNDg1YzUyNTJlMWFmYzcyZDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI4ZTdkZTk4NDY2ZmJkZDFmYzY0MTEzOTIxOGI3NTNjMDQ4NDE2NDM4In0=','2018-12-12 07:53:57.390652');
CREATE TABLE IF NOT EXISTS `django_migrations` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`app`	varchar ( 255 ) NOT NULL,
	`name`	varchar ( 255 ) NOT NULL,
	`applied`	datetime NOT NULL
);
INSERT INTO `django_migrations` (id,app,name,applied) VALUES (1,'contenttypes','0001_initial','2017-04-17 14:00:23.054726'),
 (2,'auth','0001_initial','2017-04-17 14:00:23.081767'),
 (3,'admin','0001_initial','2017-04-17 14:00:23.096283'),
 (4,'admin','0002_logentry_remove_auto_add','2017-04-17 14:00:23.109792'),
 (5,'contenttypes','0002_remove_content_type_name','2017-04-17 14:00:23.131429'),
 (6,'auth','0002_alter_permission_name_max_length','2017-04-17 14:00:23.139907'),
 (7,'auth','0003_alter_user_email_max_length','2017-04-17 14:00:23.154064'),
 (8,'auth','0004_alter_user_username_opts','2017-04-17 14:00:23.166087'),
 (9,'auth','0005_alter_user_last_login_null','2017-04-17 14:00:23.178687'),
 (10,'auth','0006_require_contenttypes_0002','2017-04-17 14:00:23.180957'),
 (11,'auth','0007_alter_validators_add_error_messages','2017-04-17 14:00:23.203711'),
 (12,'auth','0008_alter_user_username_max_length','2017-04-17 14:00:23.214812'),
 (13,'sessions','0001_initial','2017-04-17 14:00:23.220506'),
 (14,'dsa_starter','0001_initial','2017-04-18 10:59:04.268772'),
 (15,'dsa_starter','0002_character_name','2017-04-18 11:32:06.542082'),
 (16,'dsa_starter','0003_auto_20170418_1538','2017-04-18 13:38:57.712119'),
 (17,'dsa_starter','0004_auto_20170418_1719','2017-04-18 15:19:13.348321'),
 (18,'dsa_starter','0005_auto_20170418_1730','2017-04-18 15:30:56.987269'),
 (19,'dsa_starter','0006_auto_20170418_1746','2017-04-18 15:46:25.284367'),
 (20,'dsa_starter','0007_auto_20170418_1750','2017-04-18 15:50:58.317478'),
 (21,'dsa_starter','0008_auto_20170418_1756','2017-04-18 15:56:43.811996'),
 (22,'dsa_starter','0009_auto_20170418_1809','2017-04-18 16:09:32.005429'),
 (23,'dsa_starter','0010_auto_20170418_1816','2017-04-18 16:16:44.492366'),
 (24,'dsa_starter','0011_remove_character_skills','2017-04-18 16:29:20.191927'),
 (25,'dsa_starter','0012_actualskill_character','2017-04-18 16:31:16.562814'),
 (26,'dsa_starter','0013_auto_20170424_2124','2017-04-24 19:24:50.940838'),
 (27,'dsa_starter','0014_auto_20170426_2332','2017-04-26 21:33:03.519590'),
 (28,'dsa_starter','0015_auto_20170427_0000','2017-04-26 22:00:12.728508'),
 (29,'dsa_starter','0016_character_life_lost','2017-04-26 22:10:33.511082'),
 (30,'dsa_starter','0017_character_avatar','2017-05-05 15:15:29.751146'),
 (31,'dsa_starter','0018_character_avatar_small','2017-05-05 16:13:11.932682'),
 (32,'dsa_starter','0019_skill_basis','2018-05-14 20:56:56.277215'),
 (33,'dsa_starter','0020_weaponskilldistribution','2018-05-19 11:12:57.929523'),
 (34,'dsa_starter','0021_auto_20180519_1319','2018-05-19 11:19:57.381103'),
 (35,'dsa_starter','0022_auto_20180606_2059','2018-06-06 19:00:13.187145'),
 (36,'dsa_starter','0023_fight_fightcharactparticipation','2018-09-03 17:43:11.497894'),
 (37,'dsa_starter','0024_nonplayercharacter','2018-09-03 18:06:03.587579'),
 (38,'dsa_starter','0025_auto_20180903_2007','2018-09-03 18:07:53.316983'),
 (39,'dsa_starter','0026_auto_20180903_2030','2018-09-03 18:30:51.837562'),
 (40,'dsa_starter','0027_auto_20181127_1549','2018-11-27 14:49:39.066807'),
 (41,'dsa_starter','0028_auto_20181127_1552','2018-11-27 14:53:04.972211'),
 (42,'dsa_starter','0029_characterhasweapon','2018-11-27 14:57:14.889398'),
 (43,'dsa_starter','0030_weapon_skill_type','2018-11-27 15:35:59.311459'),
 (44,'dsa_starter','0027_auto_20181126_1045','2018-11-28 07:51:11.216231'),
 (45,'dsa_starter','0028_auto_20181126_1048','2018-11-28 07:51:11.251927'),
 (46,'dsa_starter','0029_adventure_isactive','2018-11-28 07:51:11.269991'),
 (47,'dsa_starter','0030_auto_20181126_1203','2018-11-28 07:51:11.288779'),
 (48,'dsa_starter','0031_merge_20181128_0851','2018-11-28 07:51:11.295260'),
 (49,'dsa_starter','0032_auto_20181129_1033','2018-11-29 09:34:09.654846');
CREATE TABLE IF NOT EXISTS `django_content_type` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`app_label`	varchar ( 100 ) NOT NULL,
	`model`	varchar ( 100 ) NOT NULL
);
INSERT INTO `django_content_type` (id,app_label,model) VALUES (1,'admin','logentry'),
 (2,'auth','permission'),
 (3,'auth','user'),
 (4,'auth','group'),
 (5,'contenttypes','contenttype'),
 (6,'sessions','session'),
 (7,'dsa_starter','character'),
 (8,'dsa_starter','race'),
 (9,'dsa_starter','herotype'),
 (10,'dsa_starter','skilltype'),
 (11,'dsa_starter','skill'),
 (12,'dsa_starter','skillgroup'),
 (13,'dsa_starter','actualskill'),
 (14,'dsa_starter','weaponskilldistribution'),
 (15,'dsa_starter','fight'),
 (16,'dsa_starter','fightcharacterparticipation'),
 (17,'dsa_starter','nonplayercharacter'),
 (18,'dsa_starter','adventure'),
 (19,'dsa_starter','weapon'),
 (20,'dsa_starter','characterhasweapon'),
 (21,'dsa_starter','adventureimage');
CREATE TABLE IF NOT EXISTS `django_admin_log` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`object_id`	text,
	`object_repr`	varchar ( 200 ) NOT NULL,
	`action_flag`	smallint unsigned NOT NULL,
	`change_message`	text NOT NULL,
	`content_type_id`	integer,
	`user_id`	integer NOT NULL,
	`action_time`	datetime NOT NULL,
	FOREIGN KEY(`content_type_id`) REFERENCES `django_content_type`(`id`),
	FOREIGN KEY(`user_id`) REFERENCES `auth_user`(`id`)
);
INSERT INTO `django_admin_log` (id,object_id,object_repr,action_flag,change_message,content_type_id,user_id,action_time) VALUES (1,'1','players',1,'[{"added": {}}]',4,1,'2017-04-18 10:37:20.725697'),
 (2,'1','player',2,'[{"changed": {"fields": ["name"]}}]',4,1,'2017-04-18 10:37:35.236632'),
 (3,'2','master',1,'[{"added": {}}]',4,1,'2017-04-18 10:38:11.143230'),
 (4,'2','jones',1,'[{"added": {}}]',3,1,'2017-04-18 10:39:01.663037'),
 (5,'2','jones',2,'[{"changed": {"fields": ["first_name", "last_name", "email"]}}]',3,1,'2017-04-18 10:39:34.763081'),
 (6,'2','jones',2,'[]',3,1,'2017-04-18 10:39:54.952069'),
 (7,'3','golo',1,'[{"added": {}}]',3,1,'2017-04-18 10:41:48.732504'),
 (8,'3','golo',2,'[{"changed": {"fields": ["first_name", "last_name", "email"]}}]',3,1,'2017-04-18 10:43:14.577973'),
 (9,'1','Balduin',1,'[{"added": {}}]',7,1,'2017-04-18 11:32:22.170143'),
 (10,'1','Balduin',3,'',7,1,'2017-04-18 11:32:39.181762'),
 (11,'1','Mensch',1,'[{"added": {}}]',8,1,'2017-04-18 13:40:37.606178'),
 (12,'2','Zwerg',1,'[{"added": {}}]',8,1,'2017-04-18 13:40:43.800989'),
 (13,'1','Krieger',1,'[{"added": {}}]',9,1,'2017-04-18 15:19:20.206000'),
 (14,'1','SkillGroup object',1,'[{"added": {}}]',12,1,'2017-04-18 15:48:56.891786'),
 (15,'1','SkillGroup object',2,'[]',12,1,'2017-04-18 15:49:10.635473'),
 (16,'2','SkillGroup object',1,'[{"added": {}}]',12,1,'2017-04-18 15:49:25.739788'),
 (17,'2','SkillGroup object',2,'[{"changed": {"fields": ["title"]}}]',12,1,'2017-04-18 15:51:20.749005'),
 (18,'2','SkillGroup object',3,'',12,1,'2017-04-18 15:51:30.892101'),
 (19,'1','SkillGroup object',3,'',12,1,'2017-04-18 15:51:30.895321'),
 (20,'3','SkillGroup object',1,'[{"added": {}}]',12,1,'2017-04-18 15:51:38.263515'),
 (21,'3','Is it so?',2,'[]',12,1,'2017-04-18 15:52:08.547120'),
 (22,'3','Schwer zu erwerbende',2,'[{"changed": {"fields": ["title"]}}]',12,1,'2017-04-18 15:52:38.090813'),
 (23,'4','Leicht zu erwerbende',1,'[{"added": {}}]',12,1,'2017-04-18 15:53:10.877769'),
 (24,'5','Gaben',1,'[{"added": {}}]',12,1,'2017-04-18 15:53:49.812603'),
 (25,'1','Kampftechniken',1,'[{"added": {}}]',10,1,'2017-04-18 15:56:49.598568'),
 (26,'2','Körperliche Talente',1,'[{"added": {}}]',10,1,'2017-04-18 16:00:24.576046'),
 (27,'2','Körperliche Talente',2,'[]',10,1,'2017-04-18 16:00:34.960097'),
 (28,'2','Körperliche Talente',2,'[]',10,1,'2017-04-18 16:00:37.094928'),
 (29,'3','Gesellschaftliche Talente',1,'[{"added": {}}]',10,1,'2017-04-18 16:00:55.600299'),
 (30,'4','Naturtalente',1,'[{"added": {}}]',10,1,'2017-04-18 16:01:10.226731'),
 (31,'5','Wissenstalente',1,'[{"added": {}}]',10,1,'2017-04-18 16:01:25.771029'),
 (32,'6','Sprachen und Schriften',1,'[{"added": {}}]',10,1,'2017-04-18 16:01:39.146131'),
 (33,'7','Handwerkliche Talente',1,'[{"added": {}}]',10,1,'2017-04-18 16:01:49.466522'),
 (34,'1','Dolche',1,'[{"added": {}}]',11,1,'2017-04-18 16:02:26.037091'),
 (35,'2','Hiebwaffen',1,'[{"added": {}}]',11,1,'2017-04-18 16:02:45.101705'),
 (36,'3','Raufen',1,'[{"added": {}}]',11,1,'2017-04-18 16:02:55.920782'),
 (37,'4','Ringen',1,'[{"added": {}}]',11,1,'2017-04-18 16:03:06.764895'),
 (38,'5','Säbel',1,'[{"added": {}}]',11,1,'2017-04-18 16:03:28.016240'),
 (39,'6','Wurfmesser',1,'[{"added": {}}]',11,1,'2017-04-18 16:03:41.082158'),
 (40,'7','Armbrust',1,'[{"added": {}}]',11,1,'2017-04-18 16:03:55.366238'),
 (41,'6','Wurfmesser',2,'[{"changed": {"fields": ["behinderung"]}}]',11,1,'2017-04-18 16:04:05.999129'),
 (42,'8','Zweihandwaffen',1,'[{"added": {}}]',11,1,'2017-04-18 16:04:27.660951'),
 (43,'9','Athletik',1,'[{"added": {}}]',11,1,'2017-04-18 16:04:51.619944'),
 (44,'10','Klettern',1,'[{"added": {}}]',11,1,'2017-04-18 16:05:07.546418'),
 (45,'10','Klettern',2,'[{"changed": {"fields": ["dice1", "dice2", "dice3"]}}]',11,1,'2017-04-18 16:10:28.756957'),
 (46,'10','Klettern',2,'[{"changed": {"fields": ["dice1", "dice2"]}}]',11,1,'2017-04-18 16:10:45.237634'),
 (47,'1','Gandalf',1,'[{"added": {}}]',7,1,'2017-04-18 16:30:08.695463'),
 (48,'1','ActualSkill object',1,'[{"added": {}}]',13,1,'2017-04-18 16:31:40.341678'),
 (49,'2','Gaukler',1,'[{"added": {}}]',9,1,'2017-04-18 19:18:33.534781'),
 (50,'2','Golini',1,'[{"added": {}}]',7,1,'2017-04-18 19:19:22.480585'),
 (51,'3','Jones',1,'[{"added": {}}]',7,1,'2017-04-26 21:51:02.743674'),
 (52,'3','Jones',2,'[{"changed": {"fields": ["avatar"]}}]',7,1,'2017-05-05 15:19:21.754011'),
 (53,'2','Golini',2,'[{"changed": {"fields": ["avatar"]}}]',7,1,'2017-05-05 15:26:29.212428'),
 (54,'1','Gandalf',2,'[]',7,1,'2017-05-05 15:26:34.111485'),
 (55,'1','Gandalf',2,'[{"changed": {"fields": ["avatar"]}}]',7,1,'2017-05-05 15:26:50.098638'),
 (56,'1','Torgal',2,'[{"changed": {"fields": ["name"]}}]',7,1,'2017-05-05 16:22:08.610384'),
 (57,'1','Torgal',2,'[{"changed": {"fields": ["avatar", "avatar_small"]}}]',7,1,'2017-05-05 16:22:38.321663'),
 (58,'2','Golini',2,'[{"changed": {"fields": ["avatar", "avatar_small"]}}]',7,1,'2017-05-05 16:24:16.704195'),
 (59,'3','Jones',2,'[{"changed": {"fields": ["avatar_small"]}}]',7,1,'2017-05-05 16:27:20.580378'),
 (60,'3','Jäger',1,'[{"added": {}}]',9,1,'2017-05-05 18:49:22.969460'),
 (61,'3','Tore',2,'[{"changed": {"fields": ["avatar", "name", "type"]}}]',7,1,'2017-05-05 18:49:26.099575'),
 (62,'3','Tore',2,'[{"changed": {"fields": ["avatar", "avatar_small"]}}]',7,1,'2017-05-05 18:50:47.826225'),
 (63,'1','Torgal',2,'[{"changed": {"fields": ["avatar_small"]}}]',7,1,'2017-05-05 20:41:29.331194'),
 (64,'1','Torgal',2,'[{"changed": {"fields": ["avatar_small"]}}]',7,1,'2017-05-05 20:42:33.605266'),
 (65,'3','Tore',2,'[{"changed": {"fields": ["avatar_small"]}}]',7,1,'2017-05-05 20:43:36.220836'),
 (66,'2','Golini',2,'[{"changed": {"fields": ["avatar_small"]}}]',7,1,'2017-05-05 22:14:55.156592'),
 (67,'54','Heilkunde Wunden',1,'[{"added": {}}]',11,1,'2018-05-14 20:38:49.086544'),
 (68,'55','Holzbearbeitung',1,'[{"added": {}}]',11,1,'2018-05-14 20:39:24.422310'),
 (69,'56','Kartographie',1,'[{"added": {}}]',11,1,'2018-05-14 20:39:42.859447'),
 (70,'57','Kochen',1,'[{"added": {}}]',11,1,'2018-05-14 20:40:05.911635'),
 (71,'58','Lederarbeiten',1,'[{"added": {}}]',11,1,'2018-05-14 20:40:43.124363'),
 (72,'59','Malen/Zeichnen',1,'[{"added": {}}]',11,1,'2018-05-14 20:40:59.531430'),
 (73,'60','Musizieren',1,'[{"added": {}}]',11,1,'2018-05-14 20:41:17.261591'),
 (74,'61','Schlösser knacken',1,'[{"added": {}}]',11,1,'2018-05-14 20:41:35.753302'),
 (75,'62','Schneidern',1,'[{"added": {}}]',11,1,'2018-05-14 20:42:01.837466'),
 (76,'63','Seefahrt',1,'[{"added": {}}]',11,1,'2018-05-14 20:42:39.510827'),
 (77,'64','Steinmetz',1,'[{"added": {}}]',11,1,'2018-05-14 20:42:54.994744'),
 (78,'65','Steinschneider/Juwelier',1,'[{"added": {}}]',11,1,'2018-05-14 20:43:13.880824'),
 (79,'66','Tätowieren',1,'[{"added": {}}]',11,1,'2018-05-14 20:43:27.583924'),
 (80,'67','Zimmermann',1,'[{"added": {}}]',11,1,'2018-05-14 20:43:43.251979'),
 (81,'2','Torgal - Wurfmesser',1,'[{"added": {}}]',13,1,'2018-05-14 21:50:23.245794'),
 (82,'3','Torgal - Hiebwaffen',1,'[{"added": {}}]',13,1,'2018-05-14 21:50:43.148358'),
 (83,'4','Torgal - Seefahrt',1,'[{"added": {}}]',13,1,'2018-05-14 21:51:20.292946'),
 (84,'5','Torgal - Singen',1,'[{"added": {}}]',13,1,'2018-05-14 21:51:29.036791'),
 (85,'6','Torgal - Selbstbeherrschung',1,'[{"added": {}}]',13,1,'2018-05-14 21:52:43.743489'),
 (86,'1','Torgal',2,'[{"changed": {"fields": ["mut", "klugheit", "intuition", "charisma", "fingerfertigkeit", "gewandheit", "konstitution", "koerperkraft"]}}]',7,1,'2018-05-19 12:29:21.598607'),
 (87,'1','WeaponSkillDistribution object',1,'[{"added": {}}]',14,1,'2018-05-21 13:09:58.981698'),
 (88,'2','WeaponSkillDistribution object',1,'[{"added": {}}]',14,1,'2018-05-21 13:10:26.078436'),
 (89,'68','Bogen',1,'[{"added": {}}]',11,1,'2018-05-22 15:50:55.588537'),
 (90,'8','Fernkampf',1,'[{"added": {}}]',10,1,'2018-05-22 15:52:50.100598'),
 (91,'68','Bogen',2,'[{"changed": {"fields": ["type"]}}]',11,1,'2018-05-22 15:53:03.829074'),
 (92,'6','Wurfmesser',2,'[{"changed": {"fields": ["type", "dice1", "dice2", "dice3"]}}]',11,1,'2018-05-22 15:53:16.943888'),
 (93,'7','Armbrust',2,'[{"changed": {"fields": ["type", "dice1", "dice2", "dice3"]}}]',11,1,'2018-05-22 15:53:33.968130'),
 (94,'7','Torgal - Säbel',1,'[{"added": {}}]',13,1,'2018-05-23 22:23:36.202409'),
 (95,'4','Zauberer',1,'[{"added": {}}]',9,1,'2018-06-06 18:59:13.650058'),
 (96,'4','Modred',1,'[{"added": {}}]',7,1,'2018-06-06 19:00:52.923657'),
 (97,'4','Modred',2,'[{"changed": {"fields": ["avatar", "avatar_small"]}}]',7,1,'2018-07-06 16:05:38.075362'),
 (98,'1','Fight object',1,'[{"added": {}}]',15,1,'2018-09-03 17:54:00.803546'),
 (99,'1','FightCharactParticipation object',1,'[{"added": {}}]',16,1,'2018-09-03 17:56:45.443127'),
 (100,'2','FightCharactParticipation object',1,'[{"added": {}}]',16,1,'2018-09-03 17:56:49.786000'),
 (101,'3','FightCharactParticipation object',1,'[{"added": {}}]',16,1,'2018-09-03 17:56:51.238619'),
 (102,'1','Bar Brawl 1',3,'',15,1,'2018-09-03 18:30:14.089494'),
 (103,'1','Adventure object',1,'[{"added": {}}]',18,1,'2018-09-03 18:32:17.405884'),
 (104,'1','Bar Brawl 1',1,'[{"added": {}}]',15,1,'2018-09-03 18:32:59.610081'),
 (105,'4','Bar Brawl 1 Torgal',1,'[{"added": {}}]',16,1,'2018-09-03 18:33:10.197975'),
 (106,'5','Bar Brawl 1 Golini',1,'[{"added": {}}]',16,1,'2018-09-03 18:33:12.548734'),
 (107,'6','Bar Brawl 1 Tore',1,'[{"added": {}}]',16,1,'2018-09-03 18:33:14.666659'),
 (108,'7','Bar Brawl 1 Modred',1,'[{"added": {}}]',16,1,'2018-09-03 18:33:16.822321'),
 (109,'2','WeaponSkillDistribution object',3,'',14,1,'2018-11-27 14:43:35.835316'),
 (110,'1','WeaponSkillDistribution object',3,'',14,1,'2018-11-27 14:43:35.850935'),
 (111,'3','WeaponSkillDistribution object',1,'[{"added": {}}]',14,1,'2018-11-27 14:44:18.281507'),
 (112,'1','Weapon object',1,'[{"added": {}}]',19,1,'2018-11-27 14:50:01.824189'),
 (113,'2','Weapon object',1,'[{"added": {}}]',19,1,'2018-11-27 14:50:12.009668'),
 (114,'3','Weapon object',1,'[{"added": {}}]',19,1,'2018-11-27 14:50:19.807841'),
 (115,'4','Weapon object',1,'[{"added": {}}]',19,1,'2018-11-27 14:50:28.758834'),
 (116,'5','Weapon object',1,'[{"added": {}}]',19,1,'2018-11-27 14:50:35.569727'),
 (117,'1','CharacterHasWeapon object',1,'[{"added": {}}]',20,1,'2018-11-27 14:57:36.715031'),
 (118,'2','CharacterHasWeapon object',1,'[{"added": {}}]',20,1,'2018-11-27 14:57:53.788958'),
 (119,'5','Säbel',2,'[{"changed": {"fields": ["skill_type"]}}]',19,1,'2018-11-27 15:37:41.378792'),
 (120,'4','Kurzschwert',2,'[{"changed": {"fields": ["skill_type"]}}]',19,1,'2018-11-27 15:38:19.218553'),
 (121,'5','Säbel',2,'[{"changed": {"fields": ["skill_type"]}}]',19,1,'2018-11-27 15:38:26.730870'),
 (122,'3','Schwerer Dolch',2,'[]',19,1,'2018-11-27 15:38:32.262340'),
 (123,'1','Langschwert',2,'[{"changed": {"fields": ["skill_type"]}}]',19,1,'2018-11-27 15:38:46.144849'),
 (124,'1','AdventureImage object',1,'[{"added": {}}]',21,1,'2018-11-28 07:54:41.293352'),
 (125,'1','AdventureImage object',2,'[]',21,1,'2018-11-29 08:57:09.828416'),
 (126,'2','AdventureImage object',1,'[{"added": {}}]',21,1,'2018-11-29 08:57:31.778520'),
 (127,'5','Deer',1,'[{"added": {}}]',7,1,'2018-11-29 08:58:52.466417'),
 (128,'1','AdventureImage object',2,'[{"changed": {"fields": ["url"]}}]',21,1,'2018-11-29 09:18:46.967412'),
 (129,'2','AdventureImage object',2,'[{"changed": {"fields": ["image"]}}]',21,1,'2018-11-29 09:35:34.064875'),
 (130,'1','AdventureImage object',2,'[{"changed": {"fields": ["image"]}}]',21,1,'2018-11-29 09:35:41.591294'),
 (131,'8','Golini - Raufen',1,'[{"added": {}}]',13,1,'2018-11-29 16:11:07.363614'),
 (132,'9','Golini - Akrobatik',1,'[{"added": {}}]',13,1,'2018-11-29 16:11:17.072656'),
 (133,'3','Golini / Dolch',1,'[{"added": {}}]',20,1,'2018-11-29 16:32:49.369251'),
 (134,'4','Tore / Langschwert',1,'[{"added": {}}]',20,1,'2018-11-29 16:36:00.941002'),
 (135,'5','Modred / Dolch',1,'[{"added": {}}]',20,1,'2018-11-29 16:36:06.924373'),
 (136,'6','Magierstab',1,'[{"added": {}}]',19,1,'2018-11-29 16:36:30.863325'),
 (137,'6','Modred / Magierstab',1,'[{"added": {}}]',20,1,'2018-11-29 16:36:37.544554'),
 (138,'4','Tore / Langschwert',2,'[]',20,1,'2018-11-29 16:38:26.124721'),
 (139,'69','Fernkampf',1,'[{"added": {}}]',11,1,'2018-11-29 18:02:39.499797'),
 (140,'7','Langbogen',1,'[{"added": {}}]',19,1,'2018-11-29 18:02:43.360038'),
 (141,'7','Tore / Langbogen',1,'[{"added": {}}]',20,1,'2018-11-29 18:02:46.142486'),
 (142,'5','Deer',3,'',7,1,'2018-11-29 18:03:33.147386');
CREATE TABLE IF NOT EXISTS `auth_user_user_permissions` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`user_id`	integer NOT NULL,
	`permission_id`	integer NOT NULL,
	FOREIGN KEY(`user_id`) REFERENCES `auth_user`(`id`),
	FOREIGN KEY(`permission_id`) REFERENCES `auth_permission`(`id`)
);
CREATE TABLE IF NOT EXISTS `auth_user_groups` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`user_id`	integer NOT NULL,
	`group_id`	integer NOT NULL,
	FOREIGN KEY(`user_id`) REFERENCES `auth_user`(`id`),
	FOREIGN KEY(`group_id`) REFERENCES `auth_group`(`id`)
);
INSERT INTO `auth_user_groups` (id,user_id,group_id) VALUES (1,2,1),
 (2,3,1);
CREATE TABLE IF NOT EXISTS `auth_user` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`password`	varchar ( 128 ) NOT NULL,
	`last_login`	datetime,
	`is_superuser`	bool NOT NULL,
	`first_name`	varchar ( 30 ) NOT NULL,
	`last_name`	varchar ( 30 ) NOT NULL,
	`email`	varchar ( 254 ) NOT NULL,
	`is_staff`	bool NOT NULL,
	`is_active`	bool NOT NULL,
	`date_joined`	datetime NOT NULL,
	`username`	varchar ( 150 ) NOT NULL UNIQUE
);
INSERT INTO `auth_user` (id,password,last_login,is_superuser,first_name,last_name,email,is_staff,is_active,date_joined,username) VALUES (1,'pbkdf2_sha256$36000$Nq39ZESgsmhr$J+/r3uVHVWsfqMbq3wD5NFmh4St9eiVXRwbAkqCGJgU=','2018-11-28 07:53:57.387976',1,'','','luther@lutherundwinter.de',1,1,'2017-04-18 10:28:33.983715','michel'),
 (2,'pbkdf2_sha256$36000$NTq1tE9Ubysv$TQaEIBUTrhjlK5/bk2kWZZVS3HgLhlJCc7zPV4006Us=',NULL,0,'Jonas','Kapteyn','michel@lutherundwinter.de',0,1,'2017-04-18 10:39:01','jones'),
 (3,'pbkdf2_sha256$36000$94uilYNRl0mG$7/WZOQSnPuueuxVXCfgIifL4SLY1iB61Vd6grBQFHS0=',NULL,0,'Golo','Grajewski','golo@lutherundwinter.de',0,1,'2017-04-18 10:41:48','golo');
CREATE TABLE IF NOT EXISTS `auth_permission` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`content_type_id`	integer NOT NULL,
	`codename`	varchar ( 100 ) NOT NULL,
	`name`	varchar ( 255 ) NOT NULL,
	FOREIGN KEY(`content_type_id`) REFERENCES `django_content_type`(`id`)
);
INSERT INTO `auth_permission` (id,content_type_id,codename,name) VALUES (1,1,'add_logentry','Can add log entry'),
 (2,1,'change_logentry','Can change log entry'),
 (3,1,'delete_logentry','Can delete log entry'),
 (4,2,'add_permission','Can add permission'),
 (5,2,'change_permission','Can change permission'),
 (6,2,'delete_permission','Can delete permission'),
 (7,3,'add_user','Can add user'),
 (8,3,'change_user','Can change user'),
 (9,3,'delete_user','Can delete user'),
 (10,4,'add_group','Can add group'),
 (11,4,'change_group','Can change group'),
 (12,4,'delete_group','Can delete group'),
 (13,5,'add_contenttype','Can add content type'),
 (14,5,'change_contenttype','Can change content type'),
 (15,5,'delete_contenttype','Can delete content type'),
 (16,6,'add_session','Can add session'),
 (17,6,'change_session','Can change session'),
 (18,6,'delete_session','Can delete session'),
 (19,7,'add_character','Can add character'),
 (20,7,'change_character','Can change character'),
 (21,7,'delete_character','Can delete character'),
 (22,8,'add_race','Can add race'),
 (23,8,'change_race','Can change race'),
 (24,8,'delete_race','Can delete race'),
 (25,9,'add_herotype','Can add hero type'),
 (26,9,'change_herotype','Can change hero type'),
 (27,9,'delete_herotype','Can delete hero type'),
 (28,10,'add_skilltype','Can add skill type'),
 (29,10,'change_skilltype','Can change skill type'),
 (30,10,'delete_skilltype','Can delete skill type'),
 (31,11,'add_skills','Can add skills'),
 (32,11,'change_skills','Can change skills'),
 (33,11,'delete_skills','Can delete skills'),
 (34,12,'add_skillgroup','Can add skill group'),
 (35,12,'change_skillgroup','Can change skill group'),
 (36,12,'delete_skillgroup','Can delete skill group'),
 (37,11,'add_skill','Can add skill'),
 (38,11,'change_skill','Can change skill'),
 (39,11,'delete_skill','Can delete skill'),
 (40,13,'add_actualskill','Can add actual skill'),
 (41,13,'change_actualskill','Can change actual skill'),
 (42,13,'delete_actualskill','Can delete actual skill'),
 (43,14,'add_weaponskilldistribution','Can add weapon skill distribution'),
 (44,14,'change_weaponskilldistribution','Can change weapon skill distribution'),
 (45,14,'delete_weaponskilldistribution','Can delete weapon skill distribution');
CREATE TABLE IF NOT EXISTS `auth_group_permissions` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`group_id`	integer NOT NULL,
	`permission_id`	integer NOT NULL,
	FOREIGN KEY(`group_id`) REFERENCES `auth_group`(`id`),
	FOREIGN KEY(`permission_id`) REFERENCES `auth_permission`(`id`)
);
INSERT INTO `auth_group_permissions` (id,group_id,permission_id) VALUES (1,1,16),
 (2,1,17),
 (3,1,18),
 (4,2,16),
 (5,2,17),
 (6,2,18);
CREATE TABLE IF NOT EXISTS `auth_group` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`name`	varchar ( 80 ) NOT NULL UNIQUE
);
INSERT INTO `auth_group` (id,name) VALUES (1,'player'),
 (2,'master');
CREATE INDEX IF NOT EXISTS `dsa_starter_weaponskilldistribution_skill_id_56deed96` ON `dsa_starter_weaponskilldistribution` (
	`skill_id`
);
CREATE INDEX IF NOT EXISTS `dsa_starter_weaponskilldistribution_character_id_7c9805d8` ON `dsa_starter_weaponskilldistribution` (
	`character_id`
);
CREATE INDEX IF NOT EXISTS `dsa_starter_weapon_skill_type_id_9dd16daf` ON `dsa_starter_weapon` (
	`skill_type_id`
);
CREATE INDEX IF NOT EXISTS `dsa_starter_skilltype_skill_group_id_1350aec5` ON `dsa_starter_skilltype` (
	`skill_group_id`
);
CREATE INDEX IF NOT EXISTS `dsa_starter_skill_type_id_74925c72` ON `dsa_starter_skill` (
	`type_id`
);
CREATE INDEX IF NOT EXISTS `dsa_starter_nonplayercharacter_type_id_2278620c` ON `dsa_starter_nonplayercharacter` (
	`type_id`
);
CREATE INDEX IF NOT EXISTS `dsa_starter_nonplayercharacter_race_id_637bf91a` ON `dsa_starter_nonplayercharacter` (
	`race_id`
);
CREATE INDEX IF NOT EXISTS `dsa_starter_fightcharacterparticipation_fight_id_c9546867` ON `dsa_starter_fightcharacterparticipation` (
	`fight_id`
);
CREATE INDEX IF NOT EXISTS `dsa_starter_fightcharacterparticipation_character_id_83dc0019` ON `dsa_starter_fightcharacterparticipation` (
	`character_id`
);
CREATE INDEX IF NOT EXISTS `dsa_starter_fight_adventure_id_bbb4ca1d` ON `dsa_starter_fight` (
	`adventure_id`
);
CREATE INDEX IF NOT EXISTS `dsa_starter_characterhasweapon_weapon_id_aca88a0e` ON `dsa_starter_characterhasweapon` (
	`weapon_id`
);
CREATE INDEX IF NOT EXISTS `dsa_starter_characterhasweapon_character_id_f735db08` ON `dsa_starter_characterhasweapon` (
	`character_id`
);
CREATE INDEX IF NOT EXISTS `dsa_starter_character_type_id_9d42a2dd` ON `dsa_starter_character` (
	`type_id`
);
CREATE INDEX IF NOT EXISTS `dsa_starter_character_race_id_277cda59` ON `dsa_starter_character` (
	`race_id`
);
CREATE INDEX IF NOT EXISTS `dsa_starter_adventureimage_adventure_id_63563f68` ON `dsa_starter_adventureimage` (
	`adventure_id`
);
CREATE INDEX IF NOT EXISTS `dsa_starter_actualskill_skill_id_4d77e734` ON `dsa_starter_actualskill` (
	`skill_id`
);
CREATE INDEX IF NOT EXISTS `dsa_starter_actualskill_character_id_3a41a09d` ON `dsa_starter_actualskill` (
	`character_id`
);
CREATE INDEX IF NOT EXISTS `django_session_expire_date_a5c62663` ON `django_session` (
	`expire_date`
);
CREATE UNIQUE INDEX IF NOT EXISTS `django_content_type_app_label_model_76bd3d3b_uniq` ON `django_content_type` (
	`app_label`,
	`model`
);
CREATE INDEX IF NOT EXISTS `django_admin_log_user_id_c564eba6` ON `django_admin_log` (
	`user_id`
);
CREATE INDEX IF NOT EXISTS `django_admin_log_content_type_id_c4bce8eb` ON `django_admin_log` (
	`content_type_id`
);
CREATE UNIQUE INDEX IF NOT EXISTS `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` ON `auth_user_user_permissions` (
	`user_id`,
	`permission_id`
);
CREATE INDEX IF NOT EXISTS `auth_user_user_permissions_user_id_a95ead1b` ON `auth_user_user_permissions` (
	`user_id`
);
CREATE INDEX IF NOT EXISTS `auth_user_user_permissions_permission_id_1fbb5f2c` ON `auth_user_user_permissions` (
	`permission_id`
);
CREATE UNIQUE INDEX IF NOT EXISTS `auth_user_groups_user_id_group_id_94350c0c_uniq` ON `auth_user_groups` (
	`user_id`,
	`group_id`
);
CREATE INDEX IF NOT EXISTS `auth_user_groups_user_id_6a12ed8b` ON `auth_user_groups` (
	`user_id`
);
CREATE INDEX IF NOT EXISTS `auth_user_groups_group_id_97559544` ON `auth_user_groups` (
	`group_id`
);
CREATE UNIQUE INDEX IF NOT EXISTS `auth_permission_content_type_id_codename_01ab375a_uniq` ON `auth_permission` (
	`content_type_id`,
	`codename`
);
CREATE INDEX IF NOT EXISTS `auth_permission_content_type_id_2f476e4b` ON `auth_permission` (
	`content_type_id`
);
CREATE INDEX IF NOT EXISTS `auth_group_permissions_permission_id_84c5c92e` ON `auth_group_permissions` (
	`permission_id`
);
CREATE UNIQUE INDEX IF NOT EXISTS `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` ON `auth_group_permissions` (
	`group_id`,
	`permission_id`
);
CREATE INDEX IF NOT EXISTS `auth_group_permissions_group_id_b120cbf9` ON `auth_group_permissions` (
	`group_id`
);
COMMIT;
