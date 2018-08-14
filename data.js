//important! Data must be encased in backticks, not quotation marks
//data must be only comma separated- particularly the time information and colors

const data = `

00;00;00;00,Start,x,#000000,#FFFFFF,
00;00;03;11,Center-Surround,x,#000000,#FFFFFF,
00;00;08;22,y,x,#000000,#FFFFFF,
00;00;09;25,(circle),x,#000000,#FFFFFF,
00;00;14;08,bow,x,#000000,#FFFFFF,
00;00;17;01,set,x,#000000,#FFFFFF,1
00;00;24;29,X-ray,1948-04-14,#FF8C00,#FFFFFF,
00;00;27;08,Yoke,1948-04-30,#9932CC,#FF00FF,
00;00;30;08,Zebra,1948-05-14,#779ECB,#FFFFFF,
00;00;32;13,Yannigan-White - 3,1970-02-26,#03C03C,#FF00FF,
00;00;34;01,Yannigan-Red - 1,1970-02-26,#966FD6,#FFFFFF,
00;00;36;29,Yannigan-Blue - 2,1970-02-26,#C23B22,#FF00FF,
00;00;39;20,Tun - 4,1969-12-10,#E75480,#FFFFFF,
00;00;45;02,Tun - 3,1969-12-10,#003399,#FF00FF,
00;00;48;06,Tun - 2,1969-12-10,#4F3A3C,#FFFFFF,
00;00;51;03,Tun - 1,1969-12-10,#301934,#FFFFFF,
00;00;54;05,Terrine-Yellow - 2,1969-12-18,#872657,#FFFFFF,
00;00;56;29,Terrine-White - 1,1969-12-18,#8B0000,#FFFFFF,
00;00;59;24,Spider - 2,1969-08-14,#E9967A,#FFFFFF,
00;01;03;13,1 (Joe 1),1949-08-29,#560319,#FFFFFF,
00;01;06;26,Snubber,1970-04-21,#8FBC8F,#FFFFFF,
00;01;09;22,Shaper,1970-03-23,#3C1414,#FFFFFF,
00;01;12;03,Seaweed B,1969-10-16,#71706E,#FFFFFF,5
00;01;13;19,Seaweed - 3,1969-10-01,#8CBED6,#FFFFFF,
00;01;16;13,Seaweed - 2,1969-10-01,#483D8B,#FFFFFF,
00;01;20;27,Seaweed - 1,1969-10-01,#2F4F4F,#FFFFFF,
00;01;23;03,Scuttle,1969-11-13,#177245,#FFFFFF,
00;01;25;15,Rulison,1969-09-10,#918151,#FFFFFF,
00;01;29;06,Pod - 4,1969-10-29,#FFA812,#FFFFFF,
00;01;34;00,Pod - 3,1969-10-29,#483C32,#FFFFFF,
00;01;39;22,Pod - 2,1969-10-29,#CC4E5C,#FFFFFF,
00;01;42;26,Pod - 1,1969-10-29,#00CED1,#FFFFFF,
00;01;50;00,Pliers,1969-08-27,#D1BEA8,#FFFFFF,
00;01;54;04,Planer,1969-11-21,#9400D3,#FFFFFF,
00;01;56;02,Piton C,1970-05-28,#9B870C,#FFFFFF,
00;02;01;18,Piton - 2,1970-05-28,#00703C,#FFFFFF,
00;02;04;25,Piton - 1,1970-05-28,#555555,#FFFFFF,
00;02;08;23,Pipkin,1969-10-08,#D70A53,#FFFFFF,
00;02;10;16,Piccalilli,1969-11-21,#9C8AA4,#FFFFFF,
00;02;13;05,Morrones,1970-05-21,#40826D,#FFFFFF,
00;02;21;26,Minute Steak,1969-09-12,#A9203E,#FFFFFF,
00;02;25;15,Mint Leaf,1970-05-05,#EF3038,#FFFFFF,
00;02;28;04,Milrow,1969-10-02,#E9692C,#FFFFFF,
00;02;32;03,Manzanas,1970-05-21,#DA3287,#FFFFFF,
00;02;34;21,Lovage,1969-12-17,#FAD6A5,#FFFFFF,
00;02;38;25,Labis,1970-02-05,#B94E48,#FFFFFF,
00;02;41;08,Kyack - 2,1969-09-20,#704241,#FFFFFF,
00;02;44;00,Kyack - 1,1969-09-20,#9B351B,#FFFFFF,
00;02;45;24,Jorum,1969-09-16,#C154C1,#FFFFFF,
00;02;50;22,Jal,1970-03-19,#056608,#FFFFFF,
00;02;54;04,Ildrim,1969-07-16,#0E7C61,#FFFFFF,
00;03;00;20,Hutch,1969-07-16,#004B49,#FFFFFF,
00;03;03;22,Hudson Moon,1970-05-26,#333366,#FFFFFF,
00;03;09;22,Spider - 1,1969-08-14,#F5C71A,#FFFFFF,
00;03;13;11,Hod-C (Blue) - 3,1970-05-01,#9955BB,#FFFFFF,
00;03;17;13,Hod-B (Red) - 2,1970-05-01,#CC00CC,#FFFFFF,
00;03;20;09,Hod-A (Green) - 1,1970-05-01,#820000,#FFFFFF,
00;03;23;15,Handley,1970-03-26,#D473D4,#FFFFFF,
00;03;27;16,Grape B,1970-02-04,#355E3B,#FFFFFF,
00;03;31;13,Grape A,1969-12-17,#FFCBA4,#FFFFFF,
00;03;36;13,Fob-Red - 2,1970-01-23,#FF1493,#FFFFFF,
00;03;40;19,Fob-Green- 1,1970-01-23,#A95C68,#FFFFFF,
00;03;44;09,Fob-Blue - 3,1970-01-23,#850101,#FFFFFF,
00;03;48;06,Flask-Yellow - 2,1970-05-26,#FF8C00,#FFFFFF,
00;03;52;18,Flask-Red - 3,1970-05-26,#9932CC,#FFFFFF,
00;03;55;26,Flask-Green - 1,1970-05-26,#779ECB,#FFFFFF,
00;04;01;02,Diesel Train,1969-12-05,#03C03C,#FFFFFF,
00;04;04;05,Diana Mist,1970-02-11,#966FD6,#FFFFFF,
00;04;07;02,Diamond Dust,1970-05-12,#C23B22,#FFFFFF,
00;04;08;24,Cyathus,1970-03-06,#E75480,#FFFFFF,
00;04;12;16,Cumarin,1970-02-25,#003399,#FFFFFF,
00;04;17;05,Culantro - 2,1969-12-10,#4F3A3C,#FFFFFF,
00;04;20;28,Culantro - 1,1969-12-10,#301934,#FFFFFF,
00;04;24;10,Cruet,1969-10-29,#872657,#FFFFFF,
00;04;29;14,Cornice-Yellow - 1,1970-05-15,#8B0000,#FFFFFF,
00;04;34;14,Cornice-Green - 2,1970-05-15,#E9967A,#FFFFFF,
00;04;38;05,Can-Red - 2,1970-04-21,#560319,#FFFFFF,
00;04;40;11,Can-Green- 1,1970-04-21,#8FBC8F,#FFFFFF,
00;04;44;23,Calabash,1969-10-29,#3C1414,#FFFFFF,
00;04;49;14,Belen,1970-02-04,#71706E,#FFFFFF,
00;04;54;16,Beebalm,1970-05-01,#8CBED6,#FFFFFF,
00;04;59;18,Arnica-Yellow - 1,1970-06-26,#483D8B,#FFFFFF,
00;05;06;29,Arnica-Violet - 2,1970-06-26,#2F4F4F,#FFFFFF,
00;05;10;00,Arabis-Red- 1,1970-03-06,#177245,#FFFFFF,
00;05;12;12,Arabis-Green - 2,1970-03-06,#918151,#FFFFFF,
00;05;14;08,Arabis-Blue - 3,1970-03-06,#FFA812,#FFFFFF,
00;05;16;08,Ajo,1970-01-30,#483C32,#FFFFFF,
00;05;19;00,Belmont,1986-10-16,#CC4E5C,#FFFFFF,
00;05;21;20,Horehound,1969-08-27,#00CED1,#FFFFFF,
00;05;23;27,Bodie,1986-12-13,#D1BEA8,#FFFFFF,
00;05;26;21,Hazebrook-Apricot (Orange) - 3,1987-02-03,#9400D3,#FFFFFF,
00;05;28;02,Hazebrook-Checkerberry (Red) - 2,1987-02-03,#9B870C,#FFFFFF,
00;05;31;09,Hazebrook-Emerald (Green) - 1,1987-02-03,#00703C,#FFFFFF,
00;05;34;20,Tornero,1987-02-11,#555555,#FFFFFF,
00;05;37;15,Middle Note,1987-03-18,#D70A53,#FFFFFF,
00;05;39;09,Delamar,1987-04-18,#9C8AA4,#FFFFFF,
00;05;42;04,Presidio,1987-04-22,#40826D,#FFFFFF,
00;05;45;27,Hardin,1987-04-30,#A9203E,#FFFFFF,
00;05;48;25,Brie,1987-06-18,#EF3038,#FFFFFF,
00;05;52;05,316 - 3,1970-01-29,#E9692C,#FFFFFF,
00;05;54;19,Panchuela,1987-06-30,#DA3287,#FFFFFF,
00;05;56;18,Tahoka,1987-08-13,#FAD6A5,#FFFFFF,
00;05;59;12,Lockney,1987-09-24,#B94E48,#FFFFFF,
00;06;04;02,Galatée,1986-05-30,#704241,#FFFFFF,
00;06;07;17,2 (Joe 2),1951-09-24,#9B351B,#FFFFFF,
00;06;14;21,3 (Joe 3),1951-10-18,#C154C1,#FFFFFF,
00;06;17;28,316 - 1,1970-01-29,#056608,#FFFFFF,
00;06;22;26,316 - 2,1970-01-29,#0E7C61,#FFFFFF,
00;06;26;00,Gascon,1986-11-14,#004B49,#FFFFFF,
00;06;29;26,317,1970-02-18,#333366,#FFFFFF,
00;11;51;02,318,1970-03-27,#F5C71A,#FFFFFF,
00;24;57;09,319,1970-05-27,#9955BB,#FFFFFF,
00;06;30;00,,,,,


`;