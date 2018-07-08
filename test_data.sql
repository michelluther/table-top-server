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
INSERT INTO `dsa_starter_weaponskilldistribution` VALUES (1,1,1,2,2);
INSERT INTO `dsa_starter_weaponskilldistribution` VALUES (2,1,1,0,12);
CREATE TABLE IF NOT EXISTS `dsa_starter_skilltype` (
	`skill_group_id`	integer NOT NULL,
	`name`	varchar ( 50 ) NOT NULL,
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	FOREIGN KEY(`skill_group_id`) REFERENCES `dsa_starter_skillgroup`(`id`)
);
INSERT INTO `dsa_starter_skilltype` VALUES (5,'Kampftechniken',1);
INSERT INTO `dsa_starter_skilltype` VALUES (3,'Körperliche Talente',2);
INSERT INTO `dsa_starter_skilltype` VALUES (4,'Gesellschaftliche Talente',3);
INSERT INTO `dsa_starter_skilltype` VALUES (4,'Naturtalente',4);
INSERT INTO `dsa_starter_skilltype` VALUES (4,'Wissenstalente',5);
INSERT INTO `dsa_starter_skilltype` VALUES (5,'Sprachen und Schriften',6);
INSERT INTO `dsa_starter_skilltype` VALUES (4,'Handwerkliche Talente',7);
INSERT INTO `dsa_starter_skilltype` VALUES (3,'Fernkampf',8);
CREATE TABLE IF NOT EXISTS `dsa_starter_skillgroup` (
	`name`	varchar ( 1 ) NOT NULL,
	`cost_per_increase`	smallint NOT NULL,
	`title`	varchar ( 50 ) NOT NULL,
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT
);
INSERT INTO `dsa_starter_skillgroup` VALUES ('D',5,'Schwer zu erwerbende',3);
INSERT INTO `dsa_starter_skillgroup` VALUES ('B',5,'Leicht zu erwerbende',4);
INSERT INTO `dsa_starter_skillgroup` VALUES ('F',5,'Gaben',5);
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
INSERT INTO `dsa_starter_skill` VALUES (1,'Dolche',1,'BE-1','','','',1);
INSERT INTO `dsa_starter_skill` VALUES (2,'Hiebwaffen',1,'BE-4','','','',1);
INSERT INTO `dsa_starter_skill` VALUES (3,'Raufen',1,'BE','','','',1);
INSERT INTO `dsa_starter_skill` VALUES (4,'Ringen',1,'BE','','','',1);
INSERT INTO `dsa_starter_skill` VALUES (5,'Säbel',1,'BE-2','','','',1);
INSERT INTO `dsa_starter_skill` VALUES (6,'Wurfmesser',8,'BE-3','GE','GE','GE',1);
INSERT INTO `dsa_starter_skill` VALUES (7,'Armbrust',8,'BE-2','GE','GE','GE',1);
INSERT INTO `dsa_starter_skill` VALUES (8,'Zweihandwaffen',1,'BE-4','','','',1);
INSERT INTO `dsa_starter_skill` VALUES (9,'Athletik',2,'BEx2','GE','KO','KK',1);
INSERT INTO `dsa_starter_skill` VALUES (10,'Klettern',2,'BE*2','MU','GE','KK',1);
INSERT INTO `dsa_starter_skill` VALUES (11,'Akrobatik',2,'BEx2','MU','GE','KK',1);
INSERT INTO `dsa_starter_skill` VALUES (12,'Gaukeleien',2,'BEx2','MU','CH','FF',1);
INSERT INTO `dsa_starter_skill` VALUES (13,'Körperbeherrschung',2,'BEx2','MU','IN','GE',1);
INSERT INTO `dsa_starter_skill` VALUES (14,'Reiten',2,'BE-2','CH','GE','KK',1);
INSERT INTO `dsa_starter_skill` VALUES (15,'Schleichen',2,'BE','MU','IN','GE',1);
INSERT INTO `dsa_starter_skill` VALUES (16,'Schwimmen',2,'BEx2','GE','KO','KK',1);
INSERT INTO `dsa_starter_skill` VALUES (17,'Selbstbeherrschung',2,'-','MU','KO','KK',1);
INSERT INTO `dsa_starter_skill` VALUES (18,'Sich Verstecken',2,'BE-2','MU','IN','GE',1);
INSERT INTO `dsa_starter_skill` VALUES (19,'Singen',2,'BE-3','IN','CH','KO',1);
INSERT INTO `dsa_starter_skill` VALUES (20,'Sinnenschärfe',2,'situationsabhängig','KL','IN','IN',1);
INSERT INTO `dsa_starter_skill` VALUES (21,'Stimmen Imitieren',2,'BE-4','KL','IN','CH',1);
INSERT INTO `dsa_starter_skill` VALUES (22,'Tanze',2,'BEx2','CH','GE','GE',1);
INSERT INTO `dsa_starter_skill` VALUES (23,'Taschendiebstahl',2,'BEx2','MU','IN','FF',1);
INSERT INTO `dsa_starter_skill` VALUES (24,'Zechen',2,'-','IN','KO','KK',1);
INSERT INTO `dsa_starter_skill` VALUES (25,'Betören',3,'BE-2','IN','CH','CH',1);
INSERT INTO `dsa_starter_skill` VALUES (26,'Etikette',3,'BE-2','KL','IN','CH',1);
INSERT INTO `dsa_starter_skill` VALUES (27,'Gassenwissen',3,'BE-4','KL','IN','CH',1);
INSERT INTO `dsa_starter_skill` VALUES (28,'Lehren',3,'-','KL','IN','CH',1);
INSERT INTO `dsa_starter_skill` VALUES (29,'Menschenkenntnis',3,'-','KL','IN','CH',1);
INSERT INTO `dsa_starter_skill` VALUES (30,'Sich Verkleiden',3,'BEx2','MU','CH','GE',1);
INSERT INTO `dsa_starter_skill` VALUES (31,'Überreden / Lügen',3,'-','MU','IN','CH',1);
INSERT INTO `dsa_starter_skill` VALUES (32,'Überzeugen',3,'-','KL','IN','CH',1);
INSERT INTO `dsa_starter_skill` VALUES (33,'Fährtensuchen',4,'-','KL','IN','IN',1);
INSERT INTO `dsa_starter_skill` VALUES (34,'Fallenstellen',4,'-','KL','FF','KK',1);
INSERT INTO `dsa_starter_skill` VALUES (35,'Fesseln/Entfesseln',4,'BE (beim entfesseln)','FF','GE','KK',1);
INSERT INTO `dsa_starter_skill` VALUES (36,'Fischen/Angeln',4,'-','IN','FF','KK',1);
INSERT INTO `dsa_starter_skill` VALUES (37,'Orientierung',4,'-','KL','IN','IN',1);
INSERT INTO `dsa_starter_skill` VALUES (38,'Wettervorhersage',4,'-','KL','IN','IN',1);
INSERT INTO `dsa_starter_skill` VALUES (39,'Wildnisleben',4,'je nach Situation','IN','GE','KO',1);
INSERT INTO `dsa_starter_skill` VALUES (40,'Abrichten',5,'-','MU','IN','CH',1);
INSERT INTO `dsa_starter_skill` VALUES (41,'Ackerbau',5,'-','IN','FF','KK',1);
INSERT INTO `dsa_starter_skill` VALUES (42,'Alchimie',5,'-','MU','KL','FF',1);
INSERT INTO `dsa_starter_skill` VALUES (43,'Bergbau',5,'-','IN','KO','KK',1);
INSERT INTO `dsa_starter_skill` VALUES (44,'Bogenbau',5,'-','KL','IN','FF',1);
INSERT INTO `dsa_starter_skill` VALUES (45,'Boote Fahren',5,'-','GE','KO','KK',1);
INSERT INTO `dsa_starter_skill` VALUES (46,'Fahrzeug Lenken',5,'-','IN','CH','FF',1);
INSERT INTO `dsa_starter_skill` VALUES (47,'Falschspiel',5,'-','MU','CH','FF',1);
INSERT INTO `dsa_starter_skill` VALUES (48,'Feinmechanik',5,'-','KL','FF','FF',1);
INSERT INTO `dsa_starter_skill` VALUES (49,'Fleischer',5,'-','KL','FF','KK',1);
INSERT INTO `dsa_starter_skill` VALUES (50,'Gerber/Kürschner',5,'-','KL','FF','KO',1);
INSERT INTO `dsa_starter_skill` VALUES (51,'Grobschmied',5,'-','FF','KK','KO',1);
INSERT INTO `dsa_starter_skill` VALUES (52,'Heilkunde Gift',5,'-','MU','KL','IN',1);
INSERT INTO `dsa_starter_skill` VALUES (53,'Heilkunde Krankheiten',5,'-','MU','KL','CH',1);
INSERT INTO `dsa_starter_skill` VALUES (54,'Heilkunde Wunden',7,'-','KL','CH','FF',1);
INSERT INTO `dsa_starter_skill` VALUES (55,'Holzbearbeitung',7,'-','KL','FF','KK',1);
INSERT INTO `dsa_starter_skill` VALUES (56,'Kartographie',7,'-','KL','KL','FF',1);
INSERT INTO `dsa_starter_skill` VALUES (57,'Kochen',7,'-','KL','IN','FF',1);
INSERT INTO `dsa_starter_skill` VALUES (58,'Lederarbeiten',7,'-','KL','FF','FF',1);
INSERT INTO `dsa_starter_skill` VALUES (59,'Malen/Zeichnen',7,'-','KL','IN','FF',1);
INSERT INTO `dsa_starter_skill` VALUES (60,'Musizieren',7,'-','IN','CH','FF',1);
INSERT INTO `dsa_starter_skill` VALUES (61,'Schlösser knacken',7,'-','IN','FF','FF',1);
INSERT INTO `dsa_starter_skill` VALUES (62,'Schneidern',7,'-','KL','FF','FF',1);
INSERT INTO `dsa_starter_skill` VALUES (63,'Seefahrt',7,'-','FF','GE','KK',1);
INSERT INTO `dsa_starter_skill` VALUES (64,'Steinmetz',7,'-','FF','FF','KK',1);
INSERT INTO `dsa_starter_skill` VALUES (65,'Steinschneider/Juwelier',7,'-','IN','FF','FF',1);
INSERT INTO `dsa_starter_skill` VALUES (66,'Tätowieren',7,'-','IN','FF','FF',1);
INSERT INTO `dsa_starter_skill` VALUES (67,'Zimmermann',7,'-','KL','FF','KK',1);
INSERT INTO `dsa_starter_skill` VALUES (68,'Bogen',8,'BE-3','GE','GE','GE',1);
CREATE TABLE IF NOT EXISTS `dsa_starter_race` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`name`	text NOT NULL
);
INSERT INTO `dsa_starter_race` VALUES (1,'Mensch');
INSERT INTO `dsa_starter_race` VALUES (2,'Zwerg');
CREATE TABLE IF NOT EXISTS `dsa_starter_points_spent` (
	`hero_id`	INTEGER NOT NULL,
	`points_spent`	INTEGER NOT NULL,
	`activity_json`	TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS `dsa_starter_herotype` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`name`	varchar ( 200 ) NOT NULL
);
INSERT INTO `dsa_starter_herotype` VALUES (1,'Krieger');
INSERT INTO `dsa_starter_herotype` VALUES (2,'Gaukler');
INSERT INTO `dsa_starter_herotype` VALUES (3,'Jäger');
INSERT INTO `dsa_starter_herotype` VALUES (4,'Zauberer');
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
INSERT INTO `dsa_starter_character` VALUES (1,'2017-04-18 16:29:48','Torgal',1,1,0,30,9,'Irgendwas',10,'M',12,11,9,14,11,10,175,0,0,0,5,'my_fav_path/torgal_avatar_large.png','my_fav_path/torgal_avatar_small_g2VUiQF.png');
INSERT INTO `dsa_starter_character` VALUES (2,'2017-04-18 19:18:07','Golini',2,1,1000,33,12,'Garethi',10,'F',10,10,10,12,10,10,175,0,0,0,8,'my_fav_path/avatar_golini_large.png','my_fav_path/golini_avatar_small_inIB8ij.png');
INSERT INTO `dsa_starter_character` VALUES (3,'2017-04-26 21:50:21','Tore',3,1,0,30,0,'Garethi',0,'M',0,0,0,0,0,0,187,2,0,0,10,'my_fav_path/tore_avatar_large.png','my_fav_path/tore_avatar_small_NoPYBRv.png');
INSERT INTO `dsa_starter_character` VALUES (4,'2018-06-06 19:00:18','Modred',4,1,0,30,0,'Andergaster',0,'M',0,0,0,0,0,0,175,0,0,0,30,'my_fav_path/modred.jpg','my_fav_path/modred_isqvmWp.jpg');
CREATE TABLE IF NOT EXISTS `dsa_starter_actualskill` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`value`	smallint NOT NULL,
	`skill_id`	integer NOT NULL,
	`character_id`	integer NOT NULL,
	FOREIGN KEY(`character_id`) REFERENCES `dsa_starter_character`(`id`),
	FOREIGN KEY(`skill_id`) REFERENCES `dsa_starter_skill`(`id`)
);
INSERT INTO `dsa_starter_actualskill` VALUES (1,4,1,1);
INSERT INTO `dsa_starter_actualskill` VALUES (2,8,6,1);
INSERT INTO `dsa_starter_actualskill` VALUES (3,8,2,1);
INSERT INTO `dsa_starter_actualskill` VALUES (4,7,63,1);
INSERT INTO `dsa_starter_actualskill` VALUES (5,4,19,1);
INSERT INTO `dsa_starter_actualskill` VALUES (6,4,17,1);
INSERT INTO `dsa_starter_actualskill` VALUES (7,3,5,1);
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
INSERT INTO `django_session` VALUES ('x0vs1rq3ch5eo0x1wyu3b13vlddhdf8e','ZDU4YTlmYzcxMDc3ZTAxZjAxNzdlZmE0MDJlZWUxMjI3Y2E3ODdkMTp7Il9hdXRoX3VzZXJfaGFzaCI6IjhlN2RlOTg0NjZmYmRkMWZjNjQxMTM5MjE4Yjc1M2MwNDg0MTY0MzgiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=','2017-05-02 10:28:45.262423');
INSERT INTO `django_session` VALUES ('l7u9kwgm8wbixw1p210ilej48z4ep666','ZjIxY2JlYTVjMjgxMmViNDQ3YTVkZGUyNDg1YzUyNTJlMWFmYzcyZDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI4ZTdkZTk4NDY2ZmJkZDFmYzY0MTEzOTIxOGI3NTNjMDQ4NDE2NDM4In0=','2017-05-10 21:39:12.364548');
INSERT INTO `django_session` VALUES ('bkce2fu0vt5p1qpra6wopre80qg1xjej','OWI0Zjk0ODJhM2MzNzg5NWM5YjMwMGUxMWI2NzhkMWJmMjJlYjE0Yjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9oYXNoIjoiOGU3ZGU5ODQ2NmZiZGQxZmM2NDExMzkyMThiNzUzYzA0ODQxNjQzOCIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIn0=','2017-05-19 15:18:25.907403');
INSERT INTO `django_session` VALUES ('4pl74l15tmuzid6yveeu4xw1of99z2kj','ZjIxY2JlYTVjMjgxMmViNDQ3YTVkZGUyNDg1YzUyNTJlMWFmYzcyZDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI4ZTdkZTk4NDY2ZmJkZDFmYzY0MTEzOTIxOGI3NTNjMDQ4NDE2NDM4In0=','2018-05-28 20:15:41.800071');
INSERT INTO `django_session` VALUES ('031gct0zqs5ouh1j5sepcw9sy84iay6z','ZjIxY2JlYTVjMjgxMmViNDQ3YTVkZGUyNDg1YzUyNTJlMWFmYzcyZDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI4ZTdkZTk4NDY2ZmJkZDFmYzY0MTEzOTIxOGI3NTNjMDQ4NDE2NDM4In0=','2018-06-02 11:18:15.545099');
INSERT INTO `django_session` VALUES ('p3ez97lcwqcyvnhgobyk5k1dsevaefl1','ZjIxY2JlYTVjMjgxMmViNDQ3YTVkZGUyNDg1YzUyNTJlMWFmYzcyZDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI4ZTdkZTk4NDY2ZmJkZDFmYzY0MTEzOTIxOGI3NTNjMDQ4NDE2NDM4In0=','2018-06-20 18:58:52.777355');
INSERT INTO `django_session` VALUES ('hf99su6d3ofoor4ntv9xy9j2cyeo0wp1','ZjIxY2JlYTVjMjgxMmViNDQ3YTVkZGUyNDg1YzUyNTJlMWFmYzcyZDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI4ZTdkZTk4NDY2ZmJkZDFmYzY0MTEzOTIxOGI3NTNjMDQ4NDE2NDM4In0=','2018-07-20 16:03:05.334418');
CREATE TABLE IF NOT EXISTS `django_migrations` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`app`	varchar ( 255 ) NOT NULL,
	`name`	varchar ( 255 ) NOT NULL,
	`applied`	datetime NOT NULL
);
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2017-04-17 14:00:23.054726');
INSERT INTO `django_migrations` VALUES (2,'auth','0001_initial','2017-04-17 14:00:23.081767');
INSERT INTO `django_migrations` VALUES (3,'admin','0001_initial','2017-04-17 14:00:23.096283');
INSERT INTO `django_migrations` VALUES (4,'admin','0002_logentry_remove_auto_add','2017-04-17 14:00:23.109792');
INSERT INTO `django_migrations` VALUES (5,'contenttypes','0002_remove_content_type_name','2017-04-17 14:00:23.131429');
INSERT INTO `django_migrations` VALUES (6,'auth','0002_alter_permission_name_max_length','2017-04-17 14:00:23.139907');
INSERT INTO `django_migrations` VALUES (7,'auth','0003_alter_user_email_max_length','2017-04-17 14:00:23.154064');
INSERT INTO `django_migrations` VALUES (8,'auth','0004_alter_user_username_opts','2017-04-17 14:00:23.166087');
INSERT INTO `django_migrations` VALUES (9,'auth','0005_alter_user_last_login_null','2017-04-17 14:00:23.178687');
INSERT INTO `django_migrations` VALUES (10,'auth','0006_require_contenttypes_0002','2017-04-17 14:00:23.180957');
INSERT INTO `django_migrations` VALUES (11,'auth','0007_alter_validators_add_error_messages','2017-04-17 14:00:23.203711');
INSERT INTO `django_migrations` VALUES (12,'auth','0008_alter_user_username_max_length','2017-04-17 14:00:23.214812');
INSERT INTO `django_migrations` VALUES (13,'sessions','0001_initial','2017-04-17 14:00:23.220506');
INSERT INTO `django_migrations` VALUES (14,'dsa_starter','0001_initial','2017-04-18 10:59:04.268772');
INSERT INTO `django_migrations` VALUES (15,'dsa_starter','0002_character_name','2017-04-18 11:32:06.542082');
INSERT INTO `django_migrations` VALUES (16,'dsa_starter','0003_auto_20170418_1538','2017-04-18 13:38:57.712119');
INSERT INTO `django_migrations` VALUES (17,'dsa_starter','0004_auto_20170418_1719','2017-04-18 15:19:13.348321');
INSERT INTO `django_migrations` VALUES (18,'dsa_starter','0005_auto_20170418_1730','2017-04-18 15:30:56.987269');
INSERT INTO `django_migrations` VALUES (19,'dsa_starter','0006_auto_20170418_1746','2017-04-18 15:46:25.284367');
INSERT INTO `django_migrations` VALUES (20,'dsa_starter','0007_auto_20170418_1750','2017-04-18 15:50:58.317478');
INSERT INTO `django_migrations` VALUES (21,'dsa_starter','0008_auto_20170418_1756','2017-04-18 15:56:43.811996');
INSERT INTO `django_migrations` VALUES (22,'dsa_starter','0009_auto_20170418_1809','2017-04-18 16:09:32.005429');
INSERT INTO `django_migrations` VALUES (23,'dsa_starter','0010_auto_20170418_1816','2017-04-18 16:16:44.492366');
INSERT INTO `django_migrations` VALUES (24,'dsa_starter','0011_remove_character_skills','2017-04-18 16:29:20.191927');
INSERT INTO `django_migrations` VALUES (25,'dsa_starter','0012_actualskill_character','2017-04-18 16:31:16.562814');
INSERT INTO `django_migrations` VALUES (26,'dsa_starter','0013_auto_20170424_2124','2017-04-24 19:24:50.940838');
INSERT INTO `django_migrations` VALUES (27,'dsa_starter','0014_auto_20170426_2332','2017-04-26 21:33:03.519590');
INSERT INTO `django_migrations` VALUES (28,'dsa_starter','0015_auto_20170427_0000','2017-04-26 22:00:12.728508');
INSERT INTO `django_migrations` VALUES (29,'dsa_starter','0016_character_life_lost','2017-04-26 22:10:33.511082');
INSERT INTO `django_migrations` VALUES (30,'dsa_starter','0017_character_avatar','2017-05-05 15:15:29.751146');
INSERT INTO `django_migrations` VALUES (31,'dsa_starter','0018_character_avatar_small','2017-05-05 16:13:11.932682');
INSERT INTO `django_migrations` VALUES (32,'dsa_starter','0019_skill_basis','2018-05-14 20:56:56.277215');
INSERT INTO `django_migrations` VALUES (33,'dsa_starter','0020_weaponskilldistribution','2018-05-19 11:12:57.929523');
INSERT INTO `django_migrations` VALUES (34,'dsa_starter','0021_auto_20180519_1319','2018-05-19 11:19:57.381103');
INSERT INTO `django_migrations` VALUES (35,'dsa_starter','0022_auto_20180606_2059','2018-06-06 19:00:13.187145');
CREATE TABLE IF NOT EXISTS `django_content_type` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`app_label`	varchar ( 100 ) NOT NULL,
	`model`	varchar ( 100 ) NOT NULL
);
INSERT INTO `django_content_type` VALUES (1,'admin','logentry');
INSERT INTO `django_content_type` VALUES (2,'auth','permission');
INSERT INTO `django_content_type` VALUES (3,'auth','user');
INSERT INTO `django_content_type` VALUES (4,'auth','group');
INSERT INTO `django_content_type` VALUES (5,'contenttypes','contenttype');
INSERT INTO `django_content_type` VALUES (6,'sessions','session');
INSERT INTO `django_content_type` VALUES (7,'dsa_starter','character');
INSERT INTO `django_content_type` VALUES (8,'dsa_starter','race');
INSERT INTO `django_content_type` VALUES (9,'dsa_starter','herotype');
INSERT INTO `django_content_type` VALUES (10,'dsa_starter','skilltype');
INSERT INTO `django_content_type` VALUES (11,'dsa_starter','skill');
INSERT INTO `django_content_type` VALUES (12,'dsa_starter','skillgroup');
INSERT INTO `django_content_type` VALUES (13,'dsa_starter','actualskill');
INSERT INTO `django_content_type` VALUES (14,'dsa_starter','weaponskilldistribution');
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
INSERT INTO `django_admin_log` VALUES (1,'1','players',1,'[{"added": {}}]',4,1,'2017-04-18 10:37:20.725697');
INSERT INTO `django_admin_log` VALUES (2,'1','player',2,'[{"changed": {"fields": ["name"]}}]',4,1,'2017-04-18 10:37:35.236632');
INSERT INTO `django_admin_log` VALUES (3,'2','master',1,'[{"added": {}}]',4,1,'2017-04-18 10:38:11.143230');
INSERT INTO `django_admin_log` VALUES (4,'2','jones',1,'[{"added": {}}]',3,1,'2017-04-18 10:39:01.663037');
INSERT INTO `django_admin_log` VALUES (5,'2','jones',2,'[{"changed": {"fields": ["first_name", "last_name", "email"]}}]',3,1,'2017-04-18 10:39:34.763081');
INSERT INTO `django_admin_log` VALUES (6,'2','jones',2,'[]',3,1,'2017-04-18 10:39:54.952069');
INSERT INTO `django_admin_log` VALUES (7,'3','golo',1,'[{"added": {}}]',3,1,'2017-04-18 10:41:48.732504');
INSERT INTO `django_admin_log` VALUES (8,'3','golo',2,'[{"changed": {"fields": ["first_name", "last_name", "email"]}}]',3,1,'2017-04-18 10:43:14.577973');
INSERT INTO `django_admin_log` VALUES (9,'1','Balduin',1,'[{"added": {}}]',7,1,'2017-04-18 11:32:22.170143');
INSERT INTO `django_admin_log` VALUES (10,'1','Balduin',3,'',7,1,'2017-04-18 11:32:39.181762');
INSERT INTO `django_admin_log` VALUES (11,'1','Mensch',1,'[{"added": {}}]',8,1,'2017-04-18 13:40:37.606178');
INSERT INTO `django_admin_log` VALUES (12,'2','Zwerg',1,'[{"added": {}}]',8,1,'2017-04-18 13:40:43.800989');
INSERT INTO `django_admin_log` VALUES (13,'1','Krieger',1,'[{"added": {}}]',9,1,'2017-04-18 15:19:20.206000');
INSERT INTO `django_admin_log` VALUES (14,'1','SkillGroup object',1,'[{"added": {}}]',12,1,'2017-04-18 15:48:56.891786');
INSERT INTO `django_admin_log` VALUES (15,'1','SkillGroup object',2,'[]',12,1,'2017-04-18 15:49:10.635473');
INSERT INTO `django_admin_log` VALUES (16,'2','SkillGroup object',1,'[{"added": {}}]',12,1,'2017-04-18 15:49:25.739788');
INSERT INTO `django_admin_log` VALUES (17,'2','SkillGroup object',2,'[{"changed": {"fields": ["title"]}}]',12,1,'2017-04-18 15:51:20.749005');
INSERT INTO `django_admin_log` VALUES (18,'2','SkillGroup object',3,'',12,1,'2017-04-18 15:51:30.892101');
INSERT INTO `django_admin_log` VALUES (19,'1','SkillGroup object',3,'',12,1,'2017-04-18 15:51:30.895321');
INSERT INTO `django_admin_log` VALUES (20,'3','SkillGroup object',1,'[{"added": {}}]',12,1,'2017-04-18 15:51:38.263515');
INSERT INTO `django_admin_log` VALUES (21,'3','Is it so?',2,'[]',12,1,'2017-04-18 15:52:08.547120');
INSERT INTO `django_admin_log` VALUES (22,'3','Schwer zu erwerbende',2,'[{"changed": {"fields": ["title"]}}]',12,1,'2017-04-18 15:52:38.090813');
INSERT INTO `django_admin_log` VALUES (23,'4','Leicht zu erwerbende',1,'[{"added": {}}]',12,1,'2017-04-18 15:53:10.877769');
INSERT INTO `django_admin_log` VALUES (24,'5','Gaben',1,'[{"added": {}}]',12,1,'2017-04-18 15:53:49.812603');
INSERT INTO `django_admin_log` VALUES (25,'1','Kampftechniken',1,'[{"added": {}}]',10,1,'2017-04-18 15:56:49.598568');
INSERT INTO `django_admin_log` VALUES (26,'2','Körperliche Talente',1,'[{"added": {}}]',10,1,'2017-04-18 16:00:24.576046');
INSERT INTO `django_admin_log` VALUES (27,'2','Körperliche Talente',2,'[]',10,1,'2017-04-18 16:00:34.960097');
INSERT INTO `django_admin_log` VALUES (28,'2','Körperliche Talente',2,'[]',10,1,'2017-04-18 16:00:37.094928');
INSERT INTO `django_admin_log` VALUES (29,'3','Gesellschaftliche Talente',1,'[{"added": {}}]',10,1,'2017-04-18 16:00:55.600299');
INSERT INTO `django_admin_log` VALUES (30,'4','Naturtalente',1,'[{"added": {}}]',10,1,'2017-04-18 16:01:10.226731');
INSERT INTO `django_admin_log` VALUES (31,'5','Wissenstalente',1,'[{"added": {}}]',10,1,'2017-04-18 16:01:25.771029');
INSERT INTO `django_admin_log` VALUES (32,'6','Sprachen und Schriften',1,'[{"added": {}}]',10,1,'2017-04-18 16:01:39.146131');
INSERT INTO `django_admin_log` VALUES (33,'7','Handwerkliche Talente',1,'[{"added": {}}]',10,1,'2017-04-18 16:01:49.466522');
INSERT INTO `django_admin_log` VALUES (34,'1','Dolche',1,'[{"added": {}}]',11,1,'2017-04-18 16:02:26.037091');
INSERT INTO `django_admin_log` VALUES (35,'2','Hiebwaffen',1,'[{"added": {}}]',11,1,'2017-04-18 16:02:45.101705');
INSERT INTO `django_admin_log` VALUES (36,'3','Raufen',1,'[{"added": {}}]',11,1,'2017-04-18 16:02:55.920782');
INSERT INTO `django_admin_log` VALUES (37,'4','Ringen',1,'[{"added": {}}]',11,1,'2017-04-18 16:03:06.764895');
INSERT INTO `django_admin_log` VALUES (38,'5','Säbel',1,'[{"added": {}}]',11,1,'2017-04-18 16:03:28.016240');
INSERT INTO `django_admin_log` VALUES (39,'6','Wurfmesser',1,'[{"added": {}}]',11,1,'2017-04-18 16:03:41.082158');
INSERT INTO `django_admin_log` VALUES (40,'7','Armbrust',1,'[{"added": {}}]',11,1,'2017-04-18 16:03:55.366238');
INSERT INTO `django_admin_log` VALUES (41,'6','Wurfmesser',2,'[{"changed": {"fields": ["behinderung"]}}]',11,1,'2017-04-18 16:04:05.999129');
INSERT INTO `django_admin_log` VALUES (42,'8','Zweihandwaffen',1,'[{"added": {}}]',11,1,'2017-04-18 16:04:27.660951');
INSERT INTO `django_admin_log` VALUES (43,'9','Athletik',1,'[{"added": {}}]',11,1,'2017-04-18 16:04:51.619944');
INSERT INTO `django_admin_log` VALUES (44,'10','Klettern',1,'[{"added": {}}]',11,1,'2017-04-18 16:05:07.546418');
INSERT INTO `django_admin_log` VALUES (45,'10','Klettern',2,'[{"changed": {"fields": ["dice1", "dice2", "dice3"]}}]',11,1,'2017-04-18 16:10:28.756957');
INSERT INTO `django_admin_log` VALUES (46,'10','Klettern',2,'[{"changed": {"fields": ["dice1", "dice2"]}}]',11,1,'2017-04-18 16:10:45.237634');
INSERT INTO `django_admin_log` VALUES (47,'1','Gandalf',1,'[{"added": {}}]',7,1,'2017-04-18 16:30:08.695463');
INSERT INTO `django_admin_log` VALUES (48,'1','ActualSkill object',1,'[{"added": {}}]',13,1,'2017-04-18 16:31:40.341678');
INSERT INTO `django_admin_log` VALUES (49,'2','Gaukler',1,'[{"added": {}}]',9,1,'2017-04-18 19:18:33.534781');
INSERT INTO `django_admin_log` VALUES (50,'2','Golini',1,'[{"added": {}}]',7,1,'2017-04-18 19:19:22.480585');
INSERT INTO `django_admin_log` VALUES (51,'3','Jones',1,'[{"added": {}}]',7,1,'2017-04-26 21:51:02.743674');
INSERT INTO `django_admin_log` VALUES (52,'3','Jones',2,'[{"changed": {"fields": ["avatar"]}}]',7,1,'2017-05-05 15:19:21.754011');
INSERT INTO `django_admin_log` VALUES (53,'2','Golini',2,'[{"changed": {"fields": ["avatar"]}}]',7,1,'2017-05-05 15:26:29.212428');
INSERT INTO `django_admin_log` VALUES (54,'1','Gandalf',2,'[]',7,1,'2017-05-05 15:26:34.111485');
INSERT INTO `django_admin_log` VALUES (55,'1','Gandalf',2,'[{"changed": {"fields": ["avatar"]}}]',7,1,'2017-05-05 15:26:50.098638');
INSERT INTO `django_admin_log` VALUES (56,'1','Torgal',2,'[{"changed": {"fields": ["name"]}}]',7,1,'2017-05-05 16:22:08.610384');
INSERT INTO `django_admin_log` VALUES (57,'1','Torgal',2,'[{"changed": {"fields": ["avatar", "avatar_small"]}}]',7,1,'2017-05-05 16:22:38.321663');
INSERT INTO `django_admin_log` VALUES (58,'2','Golini',2,'[{"changed": {"fields": ["avatar", "avatar_small"]}}]',7,1,'2017-05-05 16:24:16.704195');
INSERT INTO `django_admin_log` VALUES (59,'3','Jones',2,'[{"changed": {"fields": ["avatar_small"]}}]',7,1,'2017-05-05 16:27:20.580378');
INSERT INTO `django_admin_log` VALUES (60,'3','Jäger',1,'[{"added": {}}]',9,1,'2017-05-05 18:49:22.969460');
INSERT INTO `django_admin_log` VALUES (61,'3','Tore',2,'[{"changed": {"fields": ["avatar", "name", "type"]}}]',7,1,'2017-05-05 18:49:26.099575');
INSERT INTO `django_admin_log` VALUES (62,'3','Tore',2,'[{"changed": {"fields": ["avatar", "avatar_small"]}}]',7,1,'2017-05-05 18:50:47.826225');
INSERT INTO `django_admin_log` VALUES (63,'1','Torgal',2,'[{"changed": {"fields": ["avatar_small"]}}]',7,1,'2017-05-05 20:41:29.331194');
INSERT INTO `django_admin_log` VALUES (64,'1','Torgal',2,'[{"changed": {"fields": ["avatar_small"]}}]',7,1,'2017-05-05 20:42:33.605266');
INSERT INTO `django_admin_log` VALUES (65,'3','Tore',2,'[{"changed": {"fields": ["avatar_small"]}}]',7,1,'2017-05-05 20:43:36.220836');
INSERT INTO `django_admin_log` VALUES (66,'2','Golini',2,'[{"changed": {"fields": ["avatar_small"]}}]',7,1,'2017-05-05 22:14:55.156592');
INSERT INTO `django_admin_log` VALUES (67,'54','Heilkunde Wunden',1,'[{"added": {}}]',11,1,'2018-05-14 20:38:49.086544');
INSERT INTO `django_admin_log` VALUES (68,'55','Holzbearbeitung',1,'[{"added": {}}]',11,1,'2018-05-14 20:39:24.422310');
INSERT INTO `django_admin_log` VALUES (69,'56','Kartographie',1,'[{"added": {}}]',11,1,'2018-05-14 20:39:42.859447');
INSERT INTO `django_admin_log` VALUES (70,'57','Kochen',1,'[{"added": {}}]',11,1,'2018-05-14 20:40:05.911635');
INSERT INTO `django_admin_log` VALUES (71,'58','Lederarbeiten',1,'[{"added": {}}]',11,1,'2018-05-14 20:40:43.124363');
INSERT INTO `django_admin_log` VALUES (72,'59','Malen/Zeichnen',1,'[{"added": {}}]',11,1,'2018-05-14 20:40:59.531430');
INSERT INTO `django_admin_log` VALUES (73,'60','Musizieren',1,'[{"added": {}}]',11,1,'2018-05-14 20:41:17.261591');
INSERT INTO `django_admin_log` VALUES (74,'61','Schlösser knacken',1,'[{"added": {}}]',11,1,'2018-05-14 20:41:35.753302');
INSERT INTO `django_admin_log` VALUES (75,'62','Schneidern',1,'[{"added": {}}]',11,1,'2018-05-14 20:42:01.837466');
INSERT INTO `django_admin_log` VALUES (76,'63','Seefahrt',1,'[{"added": {}}]',11,1,'2018-05-14 20:42:39.510827');
INSERT INTO `django_admin_log` VALUES (77,'64','Steinmetz',1,'[{"added": {}}]',11,1,'2018-05-14 20:42:54.994744');
INSERT INTO `django_admin_log` VALUES (78,'65','Steinschneider/Juwelier',1,'[{"added": {}}]',11,1,'2018-05-14 20:43:13.880824');
INSERT INTO `django_admin_log` VALUES (79,'66','Tätowieren',1,'[{"added": {}}]',11,1,'2018-05-14 20:43:27.583924');
INSERT INTO `django_admin_log` VALUES (80,'67','Zimmermann',1,'[{"added": {}}]',11,1,'2018-05-14 20:43:43.251979');
INSERT INTO `django_admin_log` VALUES (81,'2','Torgal - Wurfmesser',1,'[{"added": {}}]',13,1,'2018-05-14 21:50:23.245794');
INSERT INTO `django_admin_log` VALUES (82,'3','Torgal - Hiebwaffen',1,'[{"added": {}}]',13,1,'2018-05-14 21:50:43.148358');
INSERT INTO `django_admin_log` VALUES (83,'4','Torgal - Seefahrt',1,'[{"added": {}}]',13,1,'2018-05-14 21:51:20.292946');
INSERT INTO `django_admin_log` VALUES (84,'5','Torgal - Singen',1,'[{"added": {}}]',13,1,'2018-05-14 21:51:29.036791');
INSERT INTO `django_admin_log` VALUES (85,'6','Torgal - Selbstbeherrschung',1,'[{"added": {}}]',13,1,'2018-05-14 21:52:43.743489');
INSERT INTO `django_admin_log` VALUES (86,'1','Torgal',2,'[{"changed": {"fields": ["mut", "klugheit", "intuition", "charisma", "fingerfertigkeit", "gewandheit", "konstitution", "koerperkraft"]}}]',7,1,'2018-05-19 12:29:21.598607');
INSERT INTO `django_admin_log` VALUES (87,'1','WeaponSkillDistribution object',1,'[{"added": {}}]',14,1,'2018-05-21 13:09:58.981698');
INSERT INTO `django_admin_log` VALUES (88,'2','WeaponSkillDistribution object',1,'[{"added": {}}]',14,1,'2018-05-21 13:10:26.078436');
INSERT INTO `django_admin_log` VALUES (89,'68','Bogen',1,'[{"added": {}}]',11,1,'2018-05-22 15:50:55.588537');
INSERT INTO `django_admin_log` VALUES (90,'8','Fernkampf',1,'[{"added": {}}]',10,1,'2018-05-22 15:52:50.100598');
INSERT INTO `django_admin_log` VALUES (91,'68','Bogen',2,'[{"changed": {"fields": ["type"]}}]',11,1,'2018-05-22 15:53:03.829074');
INSERT INTO `django_admin_log` VALUES (92,'6','Wurfmesser',2,'[{"changed": {"fields": ["type", "dice1", "dice2", "dice3"]}}]',11,1,'2018-05-22 15:53:16.943888');
INSERT INTO `django_admin_log` VALUES (93,'7','Armbrust',2,'[{"changed": {"fields": ["type", "dice1", "dice2", "dice3"]}}]',11,1,'2018-05-22 15:53:33.968130');
INSERT INTO `django_admin_log` VALUES (94,'7','Torgal - Säbel',1,'[{"added": {}}]',13,1,'2018-05-23 22:23:36.202409');
INSERT INTO `django_admin_log` VALUES (95,'4','Zauberer',1,'[{"added": {}}]',9,1,'2018-06-06 18:59:13.650058');
INSERT INTO `django_admin_log` VALUES (96,'4','Modred',1,'[{"added": {}}]',7,1,'2018-06-06 19:00:52.923657');
INSERT INTO `django_admin_log` VALUES (97,'4','Modred',2,'[{"changed": {"fields": ["avatar", "avatar_small"]}}]',7,1,'2018-07-06 16:05:38.075362');
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
INSERT INTO `auth_user_groups` VALUES (1,2,1);
INSERT INTO `auth_user_groups` VALUES (2,3,1);
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
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$36000$Nq39ZESgsmhr$J+/r3uVHVWsfqMbq3wD5NFmh4St9eiVXRwbAkqCGJgU=','2018-07-06 16:03:05.307522',1,'','','luther@lutherundwinter.de',1,1,'2017-04-18 10:28:33.983715','michel');
INSERT INTO `auth_user` VALUES (2,'pbkdf2_sha256$36000$NTq1tE9Ubysv$TQaEIBUTrhjlK5/bk2kWZZVS3HgLhlJCc7zPV4006Us=',NULL,0,'Jonas','Kapteyn','michel@lutherundwinter.de',0,1,'2017-04-18 10:39:01','jones');
INSERT INTO `auth_user` VALUES (3,'pbkdf2_sha256$36000$94uilYNRl0mG$7/WZOQSnPuueuxVXCfgIifL4SLY1iB61Vd6grBQFHS0=',NULL,0,'Golo','Grajewski','golo@lutherundwinter.de',0,1,'2017-04-18 10:41:48','golo');
CREATE TABLE IF NOT EXISTS `auth_permission` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`content_type_id`	integer NOT NULL,
	`codename`	varchar ( 100 ) NOT NULL,
	`name`	varchar ( 255 ) NOT NULL,
	FOREIGN KEY(`content_type_id`) REFERENCES `django_content_type`(`id`)
);
INSERT INTO `auth_permission` VALUES (1,1,'add_logentry','Can add log entry');
INSERT INTO `auth_permission` VALUES (2,1,'change_logentry','Can change log entry');
INSERT INTO `auth_permission` VALUES (3,1,'delete_logentry','Can delete log entry');
INSERT INTO `auth_permission` VALUES (4,2,'add_permission','Can add permission');
INSERT INTO `auth_permission` VALUES (5,2,'change_permission','Can change permission');
INSERT INTO `auth_permission` VALUES (6,2,'delete_permission','Can delete permission');
INSERT INTO `auth_permission` VALUES (7,3,'add_user','Can add user');
INSERT INTO `auth_permission` VALUES (8,3,'change_user','Can change user');
INSERT INTO `auth_permission` VALUES (9,3,'delete_user','Can delete user');
INSERT INTO `auth_permission` VALUES (10,4,'add_group','Can add group');
INSERT INTO `auth_permission` VALUES (11,4,'change_group','Can change group');
INSERT INTO `auth_permission` VALUES (12,4,'delete_group','Can delete group');
INSERT INTO `auth_permission` VALUES (13,5,'add_contenttype','Can add content type');
INSERT INTO `auth_permission` VALUES (14,5,'change_contenttype','Can change content type');
INSERT INTO `auth_permission` VALUES (15,5,'delete_contenttype','Can delete content type');
INSERT INTO `auth_permission` VALUES (16,6,'add_session','Can add session');
INSERT INTO `auth_permission` VALUES (17,6,'change_session','Can change session');
INSERT INTO `auth_permission` VALUES (18,6,'delete_session','Can delete session');
INSERT INTO `auth_permission` VALUES (19,7,'add_character','Can add character');
INSERT INTO `auth_permission` VALUES (20,7,'change_character','Can change character');
INSERT INTO `auth_permission` VALUES (21,7,'delete_character','Can delete character');
INSERT INTO `auth_permission` VALUES (22,8,'add_race','Can add race');
INSERT INTO `auth_permission` VALUES (23,8,'change_race','Can change race');
INSERT INTO `auth_permission` VALUES (24,8,'delete_race','Can delete race');
INSERT INTO `auth_permission` VALUES (25,9,'add_herotype','Can add hero type');
INSERT INTO `auth_permission` VALUES (26,9,'change_herotype','Can change hero type');
INSERT INTO `auth_permission` VALUES (27,9,'delete_herotype','Can delete hero type');
INSERT INTO `auth_permission` VALUES (28,10,'add_skilltype','Can add skill type');
INSERT INTO `auth_permission` VALUES (29,10,'change_skilltype','Can change skill type');
INSERT INTO `auth_permission` VALUES (30,10,'delete_skilltype','Can delete skill type');
INSERT INTO `auth_permission` VALUES (31,11,'add_skills','Can add skills');
INSERT INTO `auth_permission` VALUES (32,11,'change_skills','Can change skills');
INSERT INTO `auth_permission` VALUES (33,11,'delete_skills','Can delete skills');
INSERT INTO `auth_permission` VALUES (34,12,'add_skillgroup','Can add skill group');
INSERT INTO `auth_permission` VALUES (35,12,'change_skillgroup','Can change skill group');
INSERT INTO `auth_permission` VALUES (36,12,'delete_skillgroup','Can delete skill group');
INSERT INTO `auth_permission` VALUES (37,11,'add_skill','Can add skill');
INSERT INTO `auth_permission` VALUES (38,11,'change_skill','Can change skill');
INSERT INTO `auth_permission` VALUES (39,11,'delete_skill','Can delete skill');
INSERT INTO `auth_permission` VALUES (40,13,'add_actualskill','Can add actual skill');
INSERT INTO `auth_permission` VALUES (41,13,'change_actualskill','Can change actual skill');
INSERT INTO `auth_permission` VALUES (42,13,'delete_actualskill','Can delete actual skill');
INSERT INTO `auth_permission` VALUES (43,14,'add_weaponskilldistribution','Can add weapon skill distribution');
INSERT INTO `auth_permission` VALUES (44,14,'change_weaponskilldistribution','Can change weapon skill distribution');
INSERT INTO `auth_permission` VALUES (45,14,'delete_weaponskilldistribution','Can delete weapon skill distribution');
CREATE TABLE IF NOT EXISTS `auth_group_permissions` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`group_id`	integer NOT NULL,
	`permission_id`	integer NOT NULL,
	FOREIGN KEY(`group_id`) REFERENCES `auth_group`(`id`),
	FOREIGN KEY(`permission_id`) REFERENCES `auth_permission`(`id`)
);
INSERT INTO `auth_group_permissions` VALUES (1,1,16);
INSERT INTO `auth_group_permissions` VALUES (2,1,17);
INSERT INTO `auth_group_permissions` VALUES (3,1,18);
INSERT INTO `auth_group_permissions` VALUES (4,2,16);
INSERT INTO `auth_group_permissions` VALUES (5,2,17);
INSERT INTO `auth_group_permissions` VALUES (6,2,18);
CREATE TABLE IF NOT EXISTS `auth_group` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`name`	varchar ( 80 ) NOT NULL UNIQUE
);
INSERT INTO `auth_group` VALUES (1,'player');
INSERT INTO `auth_group` VALUES (2,'master');
CREATE INDEX IF NOT EXISTS `dsa_starter_weaponskilldistribution_skill_id_56deed96` ON `dsa_starter_weaponskilldistribution` (
	`skill_id`
);
CREATE INDEX IF NOT EXISTS `dsa_starter_weaponskilldistribution_character_id_7c9805d8` ON `dsa_starter_weaponskilldistribution` (
	`character_id`
);
CREATE INDEX IF NOT EXISTS `dsa_starter_skilltype_skill_group_id_1350aec5` ON `dsa_starter_skilltype` (
	`skill_group_id`
);
CREATE INDEX IF NOT EXISTS `dsa_starter_skill_type_id_74925c72` ON `dsa_starter_skill` (
	`type_id`
);
CREATE INDEX IF NOT EXISTS `dsa_starter_character_type_id_9d42a2dd` ON `dsa_starter_character` (
	`type_id`
);
CREATE INDEX IF NOT EXISTS `dsa_starter_character_race_id_277cda59` ON `dsa_starter_character` (
	`race_id`
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
