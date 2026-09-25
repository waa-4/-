export const TYPES=[
['walker','Walking Bug','walk',0x71cf62,3.0],['climber','Climbing Bug','climb',0xe3ac52,2.5],['flyer','Flying Bug','fly',0x7ab8ff,4.2],
['amphib','Walk + Swim','amphib',0x50d3c5,3.0],['swimmer','Swimming Bug','swim',0x4e8cff,3.4],['hopper','Hopper','hop',0xd8e968,3.2],
['burrower','Burrower','burrow',0xa67349,2.2],['glider','Glider','glide',0xce8cff,3.7],['crawler','Crawler','crawl',0xd77757,2.4],
['scavenger','Scavenger','walk',0xb5c0cb,3.0],['social','Social Bug','walk',0xff88ae,2.8],['predator','Predator Bug','walk',0xde4e4e,3.7],
['skater','Water Skater','surface',0xf4f4f4,3.8],['wallfly','Wall Flyer','climbfly',0x89efa4,3.4]
].map(x=>({id:x[0],name:x[1],move:x[2],color:x[3],speed:x[4]}));
export const TOOLNAMES=['spawn','select','build','transform','clone','mind','terrain','water','food','shelter','delete'];