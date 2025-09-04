// music
let titleMusic;
let level1Music;
let level2Music;
let level3Music;
let creditsMusic;

//sfx
let blood;
let creak;

//font
let amarante;

//screens (in order)
let titleScreen = true;
let tutorialScreen = false;
let level1Screen = false;	//level1 things
let level1GameScreen = false;
let level1DrawScreen = false;
let level2Screen = false;	//level2things
let level2GameScreen = false;
let level2DrawScreen = false;
let level3Screen = false;	//level3things
let level3GameScreen = false;
let level3DrawScreen = false;
let restartScreen = false;
let padlockScreen = false;
let winScreen = false; 

//backgrounds
let level1Background;
let level2Background;
let level3Background;
let restartBackground;
let level1GameBackground;
let level2GameBackground;
let level3GameBackground;
let winBackground;
let doorOpenBackground;
let creditsBackground;

//images
let titleImage;
let tutorialImage;
let level1Image;
let level2Image;
let level3Image;
//character images
let charFront;
let charBack;
let charLeft;
let charRight;
let charFallen;
let charPortrait;
//hearts 
let heart0;
let heart1;
let heart2;
let heart3;
let heart4;
let heart5;
//mobs
let slime;
let ghost;
let bigg;
let pow;
let bam;
//buttons
let instructionButton;
let instructionButtonPressed;
let restartButton;
let restartButtonPressed;
let startButton;
let startButtonPressed;
let notesButton;
//arrows
let up;
let upHover;
let down;
let downHover;
//cryptex
let cryptex;
//notebook
let notebook;
let star;
let swirl;
let triangle;
let triangleGlow;
let starGlow;
let swirlGlow;
let triangleNote;
let starNote;
let swirlNote;
let cryptriangle;
let crypsquare;
let crypswirl;
let crypcircle;
let cryphex;
let crypstar;

let drawn = [false, false, false];
let shapes = [0, 0, 0];
let shapeNote = 0;
let unlocked = false;
let lockBuffer = 0;

let shapeBuffer = 0;
let shapeDirection = false;
let timeBuffer = 0;
let cutSceneBuffer = 0;
let strokeSize = 1;
let creditsBuffer = -600;

let time = 0;
let buffer = 0;
let pressed = false;
let blink = false;
let drawing = false;

let level1Complete = false;
let level1EnemyTime = [0, -100, -150, -200, -250];
let level1EnemyType = [0, 0, 0, 1, 0];
let level1EnemyX = [];
let level1EnemyString = ["a", "j", "t", "m", "p"]

let lastHitX;
let lastHitY;
let bamPow = false;

let level2Complete = false;
let level2EnemyTime = [0, -90, -120, -200, -250, -300, -380];
let level2EnemyType = [1, 0, 1, 1, 0, 1, 0];
let level2EnemyX = [];
let level2EnemyString = ["mq", "e", "zi", "jp", "s", "vd", "l"]
let level2EnemyHits = [1, 0, 1, 1, 0, 1, 0];

let level3Complete = false;
let level3EnemyTime = [0, 0, -80, -160, -300, -420, -480, -520, -590, -850];
let level3EnemyType = [0, 1, 2, 1, 2, 1, 1, 2, 2, 0];
let level3EnemyX = [];
let level3EnemyString = ["l", "mw", "qky", "sj", "ate", "vr", "ox", "zbi", "dug", "h"]
let level3EnemyHits = [0, 1, 2, 1, 2, 1, 1, 2, 2, 0];

let charHearts = 5; //character health

function setup() {
	createCanvas(900, 600);
	background(220);
	stroke (255);
	fill (255);
	textFont(amarante);
	textSize (30);
	titleMusic.play();
	for (i = 0; i < 5; i++){
		level1EnemyX[i] = random (80, 800);
	}
	for (i=0; i <7; i++) { 
		level2EnemyX[i] = random (80, 800);
	}
	for (i=0; i <10; i++) {
		level3EnemyX[i] = random (80, 800);
	}
}

function preload() {
	titleImage = loadImage("Title_Page.png");
	tutorialImage = loadImage("tutorial.png");
	level1Image = loadImage("level_1.png");
	level2Image = loadImage("level_2.png")
	level3Image = loadImage("level_3.png")
	charRight = loadImage("Character_Right.png");
	charLeft = loadImage("Character_Left.png");
	charFront = loadImage("Character_Front.png");
	charBack = loadImage("Character_Back.png");
	charFallen = loadImage("Character_Fallen.png");
	charPortrait = loadImage("Character_Portrait.png");
	heart0 = loadImage("0_heart.png");
	heart1 = loadImage("1_heart.png");
	heart2 = loadImage("2_heart.png");
	heart3 = loadImage("3_heart.png");
	heart4 = loadImage("4_heart.png");
	heart5 = loadImage("5_heart.png");
	slime = loadImage("slime.png");
	ghost = loadImage("medium_ghost.png");
	bigg = loadImage("big_boi.png");
	pow = loadImage("pow.png");
	bam = loadImage("bam.png");
	instructionButton = loadImage('instruction.png');
	instructionButtonPressed = loadImage('instruction_press.png');
	restartButton = loadImage('restart.png');
	restartButtonPressed = loadImage('restart_press.png');
	restartBackground = loadImage ("restart_screen.png");
	startButton = loadImage('start.png');
	startButtonPressed = loadImage('start_press.png');
	notesButton = loadImage('notes.png');
	level1Background = loadImage('level_1.png');
	level2Background = loadImage('level_2.png');
	level3Background = loadImage('level_3.png');
	level1GameBackground = loadImage("lv1_Backdrop.png");
	level2GameBackground = loadImage("lvl2_Backdrop.png");
	level3GameBackground = loadImage("lvl3_Backdrop.png");
	winBackground = loadImage("all_clear.png");
	doorOpenBackground = loadImage ("door open.png");
	creditsBackground= loadImage ("ending credits.png")
	notebook = loadImage('notebook.png');
	star = loadImage('star.png');
	swirl = loadImage('swirl.png');
	triangle = loadImage('triangle_.png');
	triangleGlow = loadImage("triangleglow.png");
	starGlow = loadImage("starglow.png");
	swirlGlow = loadImage("swirlglow.png");
	triangleNote = loadImage("trianglenote.png");
	starNote = loadImage("starnote.png");
	swirlNote = loadImage("swirlnote.png")
	up = loadImage("arrow.png");
	upHover = loadImage("arrow_hover.png");
	down = loadImage("downArrow.png");
	downHover = loadImage("downArrow_hover.png");
	cryptex = loadImage("cryptex.png");
	crypcircle = loadImage("cryptex_circle.png");
	cryphex = loadImage("cryptex_hexagon.png");
	crypsquare = loadImage("cryptex_square.png");
	crypswirl = loadImage("cryptex_swirl.png");
	crypstar = loadImage("cryptex_star.png");
	cryptriangle = loadImage("cryptex_triangle.png");

	titleMusic = loadSound('title screen.mp3'); //[13]
	level1Music = loadSound('lvl 1.mp3'); //[10]
	level2Music = loadSound('lvl 2.mp3'); //[11]
	level3Music = loadSound('lvl 3.mp3'); //[12]
	creditsMusic = loadSound("credits.mp3"); //[9]
 
	blood = loadSound('blood splash.wav'); //[5]
	creak = loadSound("door-creaking-sound-effect-241381.mp3"); //[6]

	amarante = loadFont('Amarante-Regular.ttf');
}

function draw(){
	if (!level1DrawScreen&&!level2DrawScreen&&!level3DrawScreen) {
		background(220);
	}
	if (titleScreen){
		image (titleImage, 0 ,0);
		image (instructionButton, 350, 480, 235, 95); 
		if (pressed){
			buffer++;
			image (instructionButtonPressed, 350, 480, 235, 95); 
		}
		if (buffer>20){
			titleScreen = false;
			tutorialScreen = true;
			buffer = 0;
			pressed = false;
		}
	} else if (tutorialScreen) {
		fill (10, 10, 10);
		rect (0, 0 , 900, 600)
		image (tutorialImage, 0 ,0);
		image (startButton, 350, 500, 188, 76); 
		if (pressed){
			buffer++;
			image (startButtonPressed, 350, 500, 188, 76); 
		}
		if (buffer>20){
			tutorialScreen =false;
			level1Screen = true;
			titleMusic.stop();
			level1Music.play();
			buffer = 0;
			pressed = false;
		}
	} else if (level1Screen) {
		image (level1Image, 0, 0);
		fill (255);
		text ("level 1", 100, 100); 
		text ("press any key to continue", 100, 130);
		buffer ++;
		if (buffer > 25) {
			buffer = 0;
			blink = !blink;
		}
		if (blink) {
			image (charPortrait, 287, 220);
		} 
	} else if (level1GameScreen) {
		image (level1GameBackground, 0 , 0);		
		if (level1Complete){
			image (charBack, 400, 460);
			text ("yay level complete!", 100, 100); //status complete
			text ("press any key to continue", 100, 130);
			if (shapeDirection) {
				shapeBuffer+=0.2;
			} else {
				shapeBuffer-=0.2;
			}
			if (shapeBuffer > 15) {
				shapeDirection=false;
			} else if (shapeBuffer < 0){
				shapeDirection=true;
			}
			image (triangleGlow, 300, 150 -shapeBuffer);
		} else if (charHearts == 0 || charHearts < 0) {
			level1GameScreen = false;
			restartScreen = true; //check dead & change to restart screen
		} else {
			image (charBack, 400, 460);
			for (i = 0; i < 5; i++){ 
				//draw hit effect
				if (bamPow) {
					image (bam, lastHitX, lastHitY,  68, 75); //bam if true
				} else {
					image (pow, lastHitX, lastHitY, 68, 75); //pow if false
				}
				//enemy mob printing
				fill (255);
				noStroke;
				if (level1EnemyType[i] == 0){ //slime
					image (slime, level1EnemyX[i], level1EnemyTime[i], 60, 54);
					text (level1EnemyString[i], level1EnemyX[i]+20, level1EnemyTime[i]-20);
					level1EnemyTime[i]++;
					if (level1EnemyTime[i]>10&&level1EnemyX[i]>680) {
						level1EnemyX[i]-=0.5;
					} else if (level1EnemyTime[i]>10&&level1EnemyX[i]>450) {
						level1EnemyX[i]-=0.3;
					} else if (level1EnemyTime[i]>10&&level1EnemyX[i]<220) {
						level1EnemyX[i]+=0.5;
					}else if (level1EnemyTime[i]>10&&level1EnemyX[i]<400) {
						level1EnemyX[i]+=0.3;
					}
				} else if (level1EnemyType[i] == 1){ //ghost
					image (ghost, level1EnemyX[i], level1EnemyTime[i]);
					text (level1EnemyString[i], level1EnemyX[i]+20, level1EnemyTime[i]-20);
					level1EnemyTime[i]++;
					if (level1EnemyTime[i]>10&&level1EnemyX[i]>680) {
						level1EnemyX[i]-=0.5;
					} else if (level1EnemyTime[i]>10&&level1EnemyX[i]>450) {
						level1EnemyX[i]-=0.3;
					} else if (level1EnemyTime[i]>10&&level1EnemyX[i]<220) {
						level1EnemyX[i]+=0.5;
					}else if (level1EnemyTime[i]>10&&level1EnemyX[i]<400) {
						level1EnemyX[i]+=0.3;
					}
				} else {}
				//check hit
				if (level1EnemyType[i]==0&&level1EnemyTime[i] > 400){ //slime hit -1 hp
					level1EnemyType[i] = -1;
					charHearts --;
				} else if (level1EnemyType[i]==1&&level1EnemyTime[i] > 400){ //ghost hit -2hp
					level1EnemyType[i] = -1;
					charHearts -= 2;
				} else if (level1EnemyType[i]==2&&level1EnemyTime[i] > 400){ //big boi hit -3hp
					level1EnemyType[i] = -1;
					charHearts -= 3;
				}
			}
		}
		//check win
		if (charHearts>0&&level1EnemyType[0]==-1&&level1EnemyType[1]==-1&&level1EnemyType[2]==-1&&level1EnemyType[3]==-1&&level1EnemyType[4]==-1){
			level1Complete = true;
		}
		//hearts display
		if (charHearts == 5) { 		
			image (heart5, 700, 20);
		} else if (charHearts == 4) {
			image (heart4, 700, 20);
		} else if (charHearts == 3) {
			image (heart3, 700, 20);
		} else if (charHearts == 2) {
			image (heart2, 700, 20);
		} else if (charHearts == 1) {
			image (heart1, 700, 20);
		} else if (charHearts < 1) {
			image (heart0, 700, 20);
		}
	} else if (level1DrawScreen) {
		if (drawing==true) {
			stroke (70, 64, 43);
			fill (70, 64, 43);
			circle (mouseX, mouseY, 22);
		}
		if (drawn[0] == true) {
			fill (122, 78, 40);
			stroke (122, 78, 40)
			text ("press enter to continue", 520, 520);
		}
	} else if (restartScreen) {
		image (restartBackground, 0, 0);
		image (restartButton, 350, 480-200, 235, 95); 
		if (pressed){
			buffer++;
			image (restartButtonPressed, 350, 480-200, 235, 95); 
		}
		if (buffer>20){
			titleScreen = true;
			restartScreen = false;
			buffer = 0;
			pressed = false;
			reset ();
		}
	} else if (level2Screen) {
		image (level2Image, 0, 0);
		fill (255);
		text ("level 2", 100, 100); 
		text ("press any key to continue", 100, 130);
		buffer ++;
		if (buffer > 25) {
			buffer = 0;
			blink = !blink;
		}
		if (blink) {
			image (charPortrait, 287, 335);
		} 
	} else if (level2GameScreen) {
		image (level2GameBackground, 0 , 0);
		if (level2Complete){
			image (charBack, 400, 460);
			text ("yay level complete!", 100, 100); //status complete
			text ("press any key to continue", 100, 130);
			if (shapeDirection) {
				shapeBuffer+=0.2;
			} else {
				shapeBuffer-=0.2;
			}
			if (shapeBuffer > 15) {
				shapeDirection=false;
			} else if (shapeBuffer < 0){
				shapeDirection=true;
			}
			image (swirlGlow, 300, 150 -shapeBuffer);
		} else if (charHearts < 1) {
			level2GameScreen = false;
			restartScreen = true; //check dead & change to restart screen
		} else {
			image (charBack, 400, 460);
			for (i = 0; i < 7; i++){ 
				//enemy mob printing
				fill (255);
				noStroke;
				if (level2EnemyType[i] == 0){
					image (slime, level2EnemyX[i], level2EnemyTime[i], 60, 54); //slime
					text (level2EnemyString[i], level2EnemyX[i]+10, level2EnemyTime[i]-20);
					level2EnemyTime[i]+=1.3;
					if (level2EnemyTime[i]>10&&level2EnemyX[i]>680) {
						level2EnemyX[i]-=0.5;
					} else if (level2EnemyTime[i]>10&&level2EnemyX[i]>450) {
						level2EnemyX[i]-=0.3;
					} else if (level2EnemyTime[i]>10&&level2EnemyX[i]<220) {
						level2EnemyX[i]+=0.5;
					}else if (level2EnemyTime[i]>10&&level2EnemyX[i]<400) {
						level2EnemyX[i]+=0.3;
					}
				} else if (level2EnemyType[i] == 1){
					image (ghost, level2EnemyX[i], level2EnemyTime[i]); //ghost
					text (level2EnemyString[i], level2EnemyX[i]+10, level2EnemyTime[i]-20);
					level2EnemyTime[i]+=1.3;
					if (level2EnemyTime[i]>10&&level2EnemyX[i]>680) {
						level2EnemyX[i]-=0.5;
					} else if (level2EnemyTime[i]>10&&level2EnemyX[i]>450) {
						level2EnemyX[i]-=0.3;
					} else if (level2EnemyTime[i]>10&&level2EnemyX[i]<220) {
						level2EnemyX[i]+=0.5;
					}else if (level2EnemyTime[i]>10&&level2EnemyX[i]<400) {
						level2EnemyX[i]+=0.3;
					}
				} else {}

				//draw hit effect
				if (bamPow) {
					image (bam, lastHitX, lastHitY, 68, 75); //bam if true
				} else {
					image (pow, lastHitX, lastHitY, 68, 75); //pow if false
				}

				//check hit
				if (level2EnemyType[i]==0&&level2EnemyTime[i] > 400){ //slime hit -1 hp
					level2EnemyType[i] = -1;
					charHearts --;
				} else if (level2EnemyType[i]==1&&level2EnemyTime[i] > 400){ //ghost hit -2hp
					level2EnemyType[i] = -1;
					charHearts -= 2;
				} else if (level2EnemyType[i]==2&&level2EnemyTime[i] > 400){ //big boi hit -3hp
					level2EnemyType[i] = -1;
					charHearts -= 3;
				}
			}
		}
		//check win
		if (charHearts>0&&level2EnemyType[2]==-1&&level2EnemyType[3]==-1&&level2EnemyType[4]==-1&&level2EnemyType[5]==-1&&level2EnemyType[6]==-1){
			level2Complete = true;
		}
		//hearts display
		if (charHearts == 5) { 		
			image (heart5, 700, 20);
		} else if (charHearts == 4) {
			image (heart4, 700, 20);
		} else if (charHearts == 3) {
			image (heart3, 700, 20);
		} else if (charHearts == 2) {
			image (heart2, 700, 20);
		} else if (charHearts == 1) {
			image (heart1, 700, 20);
		} else if (charHearts < 1) {
			image (heart0, 700, 20);
		}
	} else if (level2DrawScreen) {
		if (drawing==true) {
			stroke (70, 64, 43);
			fill (70, 64, 43);
			circle (mouseX, mouseY, 22);
		}
		if (drawn[1] == true) {
			fill (122, 78, 40);
			stroke (122, 78, 40)
			text ("press enter to continue", 520, 520);
		}
	} else if (level3Screen) {
		image (level3Image, 0, 0);
		fill (255);
		text ("level 3", 100, 100); 
		text ("press any key to continue", 100, 130);
		buffer ++;
		if (buffer > 25) {
			buffer = 0;
			blink = !blink;
		}
		if (blink) {
			image (charPortrait, 540, 468);
		} 
	} else if (level3GameScreen) {
		image (level3GameBackground, 0 , 0);
		if (level3Complete){
			image (charBack, 400, 460);
			text ("yay level complete!", 100, 100); //status complete
			text ("press any key to continue", 100, 130); 
			if (shapeDirection) {
				shapeBuffer+=0.2;
			} else {
				shapeBuffer-=0.2;
			}
			if (shapeBuffer > 15) {
				shapeDirection=false;
			} else if (shapeBuffer < 0){
				shapeDirection=true;
			}
			image (starGlow, 300, 150 -shapeBuffer);
		} else if (charHearts < 1) {
			level3GameScreen = false;
			restartScreen = true; //check dead & change to restart screen
		} else {
			image (charBack, 400, 460);
			for (i = 0; i < 10; i++){ 
				//enemy mob printing
				fill (255);
				noStroke;
				if (level3EnemyType[i] == 0){
					image (slime, level3EnemyX[i], level3EnemyTime[i], 60, 54); //slime
					text (level3EnemyString[i], level3EnemyX[i]+20, level3EnemyTime[i]-20);
					level3EnemyTime[i]+=1.6;
					if (level3EnemyTime[i]>10&&level3EnemyX[i]>680) {
						level3EnemyX[i]-=0.5;
					} else if (level3EnemyTime[i]>10&&level3EnemyX[i]>450) {
						level3EnemyX[i]-=0.3;
					} else if (level3EnemyTime[i]>10&&level3EnemyX[i]<220) {
						level3EnemyX[i]+=0.5;
					}else if (level3EnemyTime[i]>10&&level3EnemyX[i]<400) {
						level3EnemyX[i]+=0.3;
					}
				} else if (level3EnemyType[i] == 1){
					image (ghost, level3EnemyX[i], level3EnemyTime[i]); //ghost
					text (level3EnemyString[i], level3EnemyX[i]+20, level3EnemyTime[i]-20);
					level3EnemyTime[i]+=1.6;
					if (level3EnemyTime[i]>10&&level3EnemyX[i]>680) {
						level3EnemyX[i]-=0.5;
					} else if (level3EnemyTime[i]>10&&level3EnemyX[i]>450) {
						level3EnemyX[i]-=0.3;
					} else if (level3EnemyTime[i]>10&&level3EnemyX[i]<220) {
						level3EnemyX[i]+=0.5;
					}else if (level3EnemyTime[i]>10&&level3EnemyX[i]<400) {
						level3EnemyX[i]+=0.3;
					}
				} else if (level3EnemyType[i] == 2) { 
					image (bigg, level3EnemyX[i], level3EnemyTime[i], 120, 180); //big boi
					text (level3EnemyString[i], level3EnemyX[i]+20, level3EnemyTime[i]-20);
					level3EnemyTime[i]+=1.6;
					if (level3EnemyTime[i]>10&&level3EnemyX[i]>680) {
						level3EnemyX[i]-=0.5;
					} else if (level3EnemyTime[i]>10&&level3EnemyX[i]>450) {
						level3EnemyX[i]-=0.3;
					} else if (level3EnemyTime[i]>10&&level3EnemyX[i]<220) {
						level3EnemyX[i]+=0.5;
					}else if (level3EnemyTime[i]>10&&level3EnemyX[i]<400) {
						level3EnemyX[i]+=0.3;
					}
				} else {}

				//draw hit effect
				if (bamPow) {
					image (bam, lastHitX, lastHitY, 68, 75); //bam if true
				} else {
					image (pow, lastHitX, lastHitY, 68, 75); //pow if false
				}

				//check hit
				if (level3EnemyType[i]==0&&level3EnemyTime[i] > 400){ //slime hit -1 hp
					level3EnemyType[i] = -1;
					charHearts --;
				} else if (level3EnemyType[i]==1&&level3EnemyTime[i] > 400){ //ghost hit -2hp
					level3EnemyType[i] = -1;
					charHearts -= 2;
				} else if (level3EnemyType[i]==2&&level3EnemyTime[i] > 400){ //big boi hit -3hp
					level3EnemyType[i] = -1;
					charHearts -= 3;
				}
			}
		}
		//check win
		if (charHearts>0&&level3EnemyType[5]==-1&&level3EnemyType[6]==-1&&level3EnemyType[7]==-1&&level3EnemyType[8]==-1&&level3EnemyType[9]==-1){
			level3Complete = true;
		}
		//hearts display
		if (charHearts == 5) { 		
			image (heart5, 700, 20);
		} else if (charHearts == 4) {
			image (heart4, 700, 20);
		} else if (charHearts == 3) {
			image (heart3, 700, 20);
		} else if (charHearts == 2) {
			image (heart2, 700, 20);
		} else if (charHearts == 1) {
			image (heart1, 700, 20);
		} else if (charHearts < 1) {
			image (heart0, 700, 20);
		}
	} else if (level3DrawScreen) {
		if (drawing==true) {
			stroke (70, 64, 43);
			fill (70, 64, 43);
			circle (mouseX, mouseY, 22);
		}
		if (drawn[2] == true) {
			fill (122, 78, 40);
			stroke (122, 78, 40)
			text ("press enter to continue", 520, 520);
		}
	} else if (padlockScreen) {
		background (8, 3, 32);
		image (cryptex, 0, 0);
		fill (255);
		stroke (255);
		if (unlocked) {
			text ("door unlocked!", 100, 60);
			text ("press enter to continue", 100, 90 );
		} else {
			text ("use your notes to enter the correct", 100, 60);
			text ("combination", 100, 90 );
			image (up, 235, 95); //up left
			image (up, 395, 95); //up middle
			image (up, 550, 95); //up right
			image (down, 235, 445); //down left
			image (down, 395, 445); //down middle
			image (down, 550, 445); //down right
			if (mouseX>235&&mouseX<235+100&&mouseY>95&&mouseY<165) {
				image (upHover, 235, 95); //up left hover
			} else if (mouseX>395&&mouseX<395+100&&mouseY>95&&mouseY<165) {
				image (upHover, 395, 95); // up middle hover
			} else if (mouseX>550&&mouseX<550+100&&mouseY>95&&mouseY<165) {
				image (upHover, 550, 95); // up right hover
			} else if (mouseX>235&&mouseX<235+100&&mouseY>445&&mouseY<515) {
				image (downHover, 235, 445); //down left hover
			} else if (mouseX>395&&mouseX<395+100&&mouseY>445&&mouseY<515) {
				image (downHover, 395, 445); // down middle hover
			} else if (mouseX>550&&mouseX<550+100&&mouseY>445&&mouseY<515) {
				image (downHover, 550, 445); //down right hover
			} 
			if (mouseX>750&&mouseY<150){
				if (shapeNote == 0) {
					image (triangleNote, 720, 0-10, 150, 150);
				} else if (shapeNote == 1) {
					image (swirlNote, 720, 0-10, 150, 150);
				} else if (shapeNote == 2) {
					image (starNote, 720, 0-10, 150, 150);
				}
			} else {
				if (shapeNote == 0) {
					image (triangleNote, 720, 0, 150, 150);
				} else if (shapeNote == 1) {
					image (swirlNote, 720, 0, 150, 150);
				} else if (shapeNote == 2) {
					image (starNote, 720, 0, 150, 150);
				}
			}
		}
		if (shapes[0]==0){ //left
			image (crypcircle, 220, 215);
		} else if (shapes[0]==1){ 
			image (cryptriangle, 230, 215);
		} else if (shapes[0]==2){
			image (crypswirl, 230, 215);
		} else if (shapes[0]==3){
			image (cryphex, 220, 215);
		} else if (shapes[0]==4){
			image (crypstar, 230, 215);
		} else if (shapes[0]==5){
			image (crypsquare, 220, 215);
		} 
		if (shapes[1]==0){ //middle
			image (crypcircle, 370, 215);
		} else if (shapes[1]==1){ 
			image (cryptriangle, 380, 215);
		} else if (shapes[1]==2){ 
			image (crypswirl, 380, 215);
		} else if (shapes[1]==3){ 
			image (cryphex, 370, 215);
		} else if (shapes[1]==4){
			image (crypstar, 380, 215);
		} else if (shapes[1]==5){
			image (crypsquare, 370, 215);
		} 
		if (shapes[2]==0){ //right
			image (crypcircle, 525, 215);
		} else if (shapes[2]==1){
			image (cryptriangle, 535, 215);
		} else if (shapes[2]==2){ 
			image (crypswirl, 535, 215);
		} else if (shapes[2]==3){
			image (cryphex, 525, 215);
		} else if (shapes[2]==4){
			image (crypstar, 535, 215);
		} else if (shapes[2]==5){
			image (crypsquare, 525, 215);
		} 
	} else if (winScreen) {
		cutSceneBuffer++;
		if (cutSceneBuffer<70) {
			image (winBackground, 0, 0);
		} else if (cutSceneBuffer <140) { // mio looking around
			image (doorOpenBackground, 0, 0);
			image (charFront, 300, 510, 43, 70);
		} else if (cutSceneBuffer < 160) {
			image (doorOpenBackground, 0, 0);
			image (charRight, 300, 510, 43, 70);
		} else if (cutSceneBuffer < 180) {
			image (doorOpenBackground, 0, 0);
			image (charLeft, 300, 510, 43, 70);
		} else if (cutSceneBuffer < 260) {
			image (doorOpenBackground, 0, 0);
			image (charRight, 300, 510, 43, 70);
		} else if (cutSceneBuffer < 450) {
			image (doorOpenBackground, 0, 0);
			image (charLeft, +300+((260-cutSceneBuffer)*3), 510, 43, 70);
		} else if (cutSceneBuffer < 600){	//circle wipe
			image (doorOpenBackground,0,0);
			strokeWeight(strokeSize);
			noFill ();
			stroke (0);
			circle (900/2, 600/2, 1000);
			strokeSize += 10;
		} else {
			background(0);
			if (creditsBuffer>979) { //roll credits
				image (creditsBackground, 0, -979, 900, 1579);
			} else {
				image (creditsBackground, 0, 0-creditsBuffer, 900, 1579);
				creditsBuffer++;
			}
		}
	}
}

function keyPressed() {
	if (titleScreen) { 
	  titleScreen = false;
	  tutorialScreen = true; //any key pressed to change screen to tutorial screen
	} else if (tutorialScreen) {
		tutorialScreen = false;
		level1Screen = true; //any key pressed to change screen to level 1 screen
		titleMusic.stop();
		level1Music.play();
	} else if (level1Screen) {
		level1Screen = false;
		level1GameScreen = true; //any key pressed to change screen to level 1 gameplay
	} else if (level1GameScreen) {
		if (level1Complete) {
			level1GameScreen = false;
			level1DrawScreen = true;
			background (30);
			image (notebook,0,0);
			image (triangle, 300, 150)
			fill (122, 78, 40);
			stroke (122, 78, 40)
			text ("Trace down the shape so you don't forget!", 100, 135);
		}
		if (keyCode === 65) {
			level1EnemyType[0] = -1;
			lastHitX = level1EnemyX[0];
			lastHitY = level1EnemyTime[0];
			bamPow = !bamPow;
			blood.play();
		}; //a
		if (keyCode === 66);
		if (keyCode === 67);
		if (keyCode === 68);
		if (keyCode === 69);
		if (keyCode === 70);
		if (keyCode === 71);
		if (keyCode === 72);
		if (keyCode === 73);
		if (keyCode === 74) {
			level1EnemyType[1] = -1;
			lastHitX = level1EnemyX[1];
			lastHitY = level1EnemyTime[1];
			bamPow = !bamPow;
			blood.play();
		};
		if (keyCode === 75);
		if (keyCode === 76);
		if (keyCode === 77) {
			level1EnemyType[3] = -1;
			lastHitX = level1EnemyX[3];
			lastHitY = level1EnemyTime[3];
			bamPow = !bamPow;
			blood.play();
		};
		if (keyCode === 78);
		if (keyCode === 79);
		if (keyCode === 80) {
			level1EnemyType[4] = -1;
			lastHitX = level1EnemyX[4];
			lastHitY = level1EnemyTime[4];
			bamPow = !bamPow;
			blood.play();
		};
		if (keyCode === 81);
		if (keyCode === 82);
		if (keyCode === 83);
		if (keyCode === 84){
			level1EnemyType[2] = -1;
			lastHitX = level1EnemyX[2];
			lastHitY = level1EnemyTime[2];
			bamPow = !bamPow;
			blood.play();
		};
		if (keyCode === 85);
		if (keyCode === 86);
		if (keyCode === 87);
		if (keyCode === 88);
		if (keyCode === 89);
		if (keyCode === 90); //z
	} else if (restartScreen) {
		// restartScreen = false;
		// titleScreen = true;
	} else if (level1DrawScreen) {
		if (keyCode == 13) {
			level1DrawScreen = false;
			level2Screen = true;
			drawing = false;
			buffer = 0;
			level1Music.stop();
			level2Music.play();
			creak.play();
		}
	} else if (level2Screen) {
		level2Screen = false;
		level2GameScreen = true; //any key pressed to change screen to level 2 gameplay
		lastHitX = -100;
		lastHitY = -100; // sends last hit out of range to not display last hit from last level
	} else if (level2GameScreen) {
		if (level2Complete) {
			level2GameScreen = false;
			level2DrawScreen = true;
			background (30);
			image (notebook,0,0);
			image (swirl, 300, 150)
			fill (122, 78, 40);
			stroke (122, 78, 40)
			text ("Trace down the shape so you don't forget!", 100, 135);
		}
		if (keyCode === 65) {
			
		}; //a
		if (keyCode === 66);
		if (keyCode === 67);
		if (keyCode === 68) { //d
			if (level2EnemyHits[5]==0){
				level2EnemyType[5] = -1;
				lastHitX = level2EnemyX[5];
				lastHitY = level2EnemyTime[5];
				bamPow = !bamPow;
				blood.play();
			}
		};
		if (keyCode === 69) { //e
			level2EnemyType[1] = -1;
			lastHitX = level2EnemyX[1];
			lastHitY = level2EnemyTime[1];
			bamPow = !bamPow;
			blood.play();
		};
		if (keyCode === 70){
		};
		if (keyCode === 71);
		if (keyCode === 72);
		if (keyCode === 73) { //i
			if (level2EnemyHits[2]==0){
				level2EnemyType[2] = -1;
				lastHitX = level2EnemyX[2];
				lastHitY = level2EnemyTime[2];
				bamPow = !bamPow;
				blood.play();
			}
		};
		if (keyCode === 74) { //j
			if (level2EnemyHits[3]==1){
				level2EnemyHits[3]--;
				level2EnemyString[3] = "p";
			}
		};
		if (keyCode === 75);
		if (keyCode === 76) {
			level2EnemyType[6] = -1;
			lastHitX = level2EnemyX[6];
			lastHitY = level2EnemyTime[6];
			bamPow = !bamPow;
			blood.play();
		};
		if (keyCode === 77) { //m
			if (level2EnemyHits[0]==1){
				level2EnemyHits[0]--;
				level2EnemyString[0] = "q";
			}
		};
		if (keyCode === 78);
		if (keyCode === 79);
		if (keyCode === 80) { //p
			if (level2EnemyHits[3]==0){
				level2EnemyType[3] = -1;
				lastHitX = level2EnemyX[3];
				lastHitY = level2EnemyTime[3];
				bamPow = !bamPow;
				blood.play();
			}
		};
		if (keyCode === 81) { //q
			if (level2EnemyHits[0]==0){
				level2EnemyType[0] = -1;
				lastHitX = level2EnemyX[0];
				lastHitY = level2EnemyTime[0];
				bamPow = !bamPow;
				blood.play();
			}
		};
		if (keyCode === 82);
		if (keyCode === 83) {
			level2EnemyType[4] = -1;
			lastHitX = level2EnemyX[4];
			lastHitY = level2EnemyTime[4];
			bamPow = !bamPow;
			blood.play();
		};
		if (keyCode === 84);
		if (keyCode === 85);
		if (keyCode === 86) { //v
			if (level2EnemyHits[5]==1){
				level2EnemyHits[5]--;
				level2EnemyString[5] = "i";
			}
		};
		if (keyCode === 87);
		if (keyCode === 88);
		if (keyCode === 89);
		if (keyCode === 90) { //z
			if (level2EnemyHits[2]==1){
				level2EnemyHits[2]--;
				level2EnemyString[2] = "i";
			}
		}; //z
	} else if (level2DrawScreen) {
		if (keyCode == 13) {
			level2DrawScreen = false;
			level3Screen = true;
			drawing = false;
			buffer = 0;
			level2Music.stop();
			level3Music.play();
			creak.play();
		}
	} else if (level3Screen) {
		level3Screen = false;
		level3GameScreen = true; //any key pressed to change screen to level 3 gameplay
		lastHitX = -100;
		lastHitY = -100; // sends last hit out of range to not display last hit from last level
	} else if (level3GameScreen) {
		if (level3Complete) {
			level3GameScreen = false;
			level3DrawScreen = true;
			background (30);
			image (notebook,0,0);
			image (star, 300, 150)
			fill (122, 78, 40);
			stroke (122, 78, 40)
			text ("Trace down the shape so you don't forget!", 100, 135);
		}
		if (keyCode === 65) { //a
			if (level3EnemyHits[4]==2){ 
				level3EnemyHits[4]--;
				level3EnemyString[4] = "te";
			}
		}; //a
		if (keyCode === 66) { //b
			if (level3EnemyHits[7]==1){
				level3EnemyHits[7]--;
				level3EnemyString[7] = "i";
			}
		};
		if (keyCode === 67);
		if (keyCode === 68) { //d
			if (level3EnemyHits[8]==2){ 
				level3EnemyHits[8]--;
				level3EnemyString[8] = "ug";
			}
		};
		if (keyCode === 69) { //e
			if (level3EnemyHits[4]==0){
				level3EnemyType[4] = -1;
				lastHitX = level3EnemyX[4];
				lastHitY = level3EnemyTime[4];
				bamPow = !bamPow;
				blood.play();
			}
		}; 
		if (keyCode === 70);
		if (keyCode === 71) { //g
			if (level3EnemyHits[8]==0){
				level3EnemyType[8] = -1;
				lastHitX = level3EnemyX[8];
				lastHitY = level3EnemyTime[8];
				bamPow = !bamPow;
				blood.play();
			}
		};
		if (keyCode === 72) { //h
			level3EnemyType[9] = -1;
			lastHitX = level3EnemyX[9];
			lastHitY = level3EnemyTime[9];
			bamPow = !bamPow;
			blood.play();
		};
		if (keyCode === 73) { //i
			if (level3EnemyHits[7]==0){
				level3EnemyType[7] = -1;
				lastHitX = level3EnemyX[7];
				lastHitY = level3EnemyTime[7];
				bamPow = !bamPow;
				blood.play();
			}
		};
		if (keyCode === 74) { //j
			if (level3EnemyHits[3]==0){
				level3EnemyType[3] = -1;
				lastHitX = level3EnemyX[3];
				lastHitY = level3EnemyTime[3];
				bamPow = !bamPow;
				blood.play();
			}
		};
		if (keyCode === 75) {//k
			if (level3EnemyHits[2]==1){
				level3EnemyHits[2]--;
				level3EnemyString[2] = "y";
			}
		};
		if (keyCode === 76) { //l
			level3EnemyType[0] = -1;
			lastHitX = level3EnemyX[0];
			lastHitY = level3EnemyTime[0];
			bamPow = !bamPow;
			blood.play();
		};
		if (keyCode === 77) { //m
			if (level3EnemyHits[1]==1){
				level3EnemyHits[1]--;
				level3EnemyString[1] = "w";
			}
		};
		if (keyCode === 78);
		if (keyCode === 79) { //o
			if (level3EnemyHits[6]==1){
				level3EnemyHits[6]--;
				level3EnemyString[6] = "x";
			}
		};
		if (keyCode === 80) {
	
		};
		if (keyCode === 81) { //q
			if (level3EnemyHits[2]==2){ 
				level3EnemyHits[2]--;
				level3EnemyString[2] = "ky";
			}
		};
		if (keyCode === 82) { //r
			if (level3EnemyHits[5]==0){
				level3EnemyType[5] = -1;
				lastHitX = level3EnemyX[5];
				lastHitY = level3EnemyTime[5];
				bamPow = !bamPow;
				blood.play();
			}
		};
		if (keyCode === 83) { //s
			if (level3EnemyHits[3]==1){
				level3EnemyHits[3]--;
				level3EnemyString[3] = "j";
			}
		};
		if (keyCode === 84){ //t
			if (level3EnemyHits[4]==1){
				level3EnemyHits[4]--;
				level3EnemyString[4] = "e";
			}
		};
		if (keyCode === 85) { //u
			if (level3EnemyHits[8]==1){
				level3EnemyHits[8]--;
				level3EnemyString[8] = "g";
			}
		};
		if (keyCode === 86) { //v
			if (level3EnemyHits[5]==1){
				level3EnemyHits[5]--;
				level3EnemyString[5] = "r";
			}
		};
		if (keyCode === 87) { //w
			if (level3EnemyHits[1]==0){
				level3EnemyType[1] = -1;
				lastHitX = level3EnemyX[1];
				lastHitY = level3EnemyTime[1];
				bamPow = !bamPow;
				blood.play();
			}
		};
		if (keyCode === 88) { //x
			if (level3EnemyHits[6]==0){
				level3EnemyType[6] = -1;
				lastHitX = level3EnemyX[6];
				lastHitY = level3EnemyTime[6];
				bamPow = !bamPow;
				blood.play();
			}
		};
		if (keyCode === 89) { //y
			if (level3EnemyHits[2]==0){
				level3EnemyType[2] = -1;
				lastHitX = level3EnemyX[2];
				lastHitY = level3EnemyTime[2];
				bamPow = !bamPow;
				blood.play();
			}
		};
		if (keyCode === 90) {
			if (level3EnemyHits[7]==2){ 
				level3EnemyHits[7]--;
				level3EnemyString[7] = "bj";
			}
		}; //z
	} else if (level3DrawScreen) {
		if (keyCode == 13) {
			level3DrawScreen = false;
			padlockScreen = true;
			drawing = false;
			buffer = 0;
		}
	} else if (padlockScreen) {
		if (unlocked && keyCode == 13){
			padlockScreen=false;
			winScreen = true; //change to win screen
			level3Music.stop();
			creditsMusic.play ();
		}
	}
  } 
  
  function mousePressed() {
	if (titleScreen) { // player clicks start button 
		if (mouseX > 350 && mouseX < 350+235 && mouseY > 480 && mouseY < 480+95) { 
			pressed = true;
		}
	} else if (tutorialScreen) { // player clicks tutorial scereen to progress
		if (mouseX > 350 && mouseX < 350+235 && mouseY > 480 && mouseY < 480+95) { 
			pressed = true;
		}
	} else if (restartScreen) {
		if (mouseX > 350 && mouseX < 350+235 && mouseY > 480-200 && mouseY < 480+95-200) { 
			pressed = true;
		}
	} else if (level1DrawScreen) {
		drawing = true;
	}	else if (level2DrawScreen) {
		drawing = true;
	} else if (level3DrawScreen) {
		drawing = true;
	} else if (padlockScreen) {
		if (mouseX>235&&mouseX<235+100&&mouseY>95&&mouseY<165) {
			if (shapes[0]==5) {
				shapes[0] = 0; //up left hover
			} else {
				shapes[0]++;
			}
		} else if (mouseX>395&&mouseX<395+100&&mouseY>95&&mouseY<165) {
			if (shapes[1]==5) {
				shapes[1] = 0; // up middle hover
			} else {
				shapes[1]++;
			}
		} else if (mouseX>550&&mouseX<550+100&&mouseY>95&&mouseY<165) {
			if (shapes[2]==5) {
				shapes[2] = 0; // up right hover
			} else {
				shapes[2]++;
			}
		} else if (mouseX>235&&mouseX<235+100&&mouseY>445&&mouseY<515) {
			if (shapes[0]==0) {
				shapes[0] = 5; //down left hover
			} else {
				shapes[0]--;
			}
		} else if (mouseX>395&&mouseX<395+100&&mouseY>445&&mouseY<515) {
			if (shapes[1]==0) {
				shapes[1] = 5; //down middle hover
			} else {
				shapes[1]--;
			}
		} else if (mouseX>550&&mouseX<550+100&&mouseY>445&&mouseY<515) {
			if (shapes[2]==0) {
				shapes[2] = 5; //down right hover
			} else {
				shapes[2]--;
			}
		} 
		if (shapes[0]==1&&shapes[1]==2&&shapes[2]==4){
			unlocked = true;
		}
		if (mouseX>700&&mouseX<900&&mouseY<200) {
			if (shapeNote == 0) {
				shapeNote = 1;
			} else if (shapeNote == 1) {
				shapeNote = 2;
			} else if (shapeNote == 2) {
				shapeNote = 0;
			}
		}
	}
  }

  function mouseReleased () {
	if (level1DrawScreen) {
		drawing=false;
		drawn[0] = true;
	} else if (level2DrawScreen) {
		drawing=false;
		drawn[1] = true;
	}  else if (level3DrawScreen) {
		drawing = false;
		drawn[2] = true;
	}
  } 

  function reset () {
	//reset music
	titleMusic.play();
	level1Music.stop();
	level2Music.stop();
	level3Music.stop();
	creditsMusic.stop();

	// reset screens 
	titleScreen = true;
	tutorialScreen = false;
	level1Screen = false;	//level1 things
	level1GameScreen = false;
	level1DrawScreen = false;
	level2Screen = false;	//level2things
	level2GameScreen = false;
	level2DrawScreen = false;
	level3Screen = false;	//level3things
	level3GameScreen = false;
	level3DrawScreen = false;
	restartScreen = false;
	padlockScreen = false;
	winScreen = false; 

	//reset enemies
	level1Complete = false;	//level1 enemies
	level1EnemyTime = [0, -100, -150, -200, -250];
	level1EnemyType = [0, 0, 0, 1, 0];
	for (i = 0; i < 5; i++){
		level1EnemyX[i] = random (80, 800);
	}
	level1EnemyString = ["a", "j", "t", "m", "p"];
	level2Complete = false; //level2 enemies
 	level2EnemyTime = [0, -90, -120, -200, -250, -300, -380];
 	level2EnemyType = [1, 0, 1, 1, 0, 1, 0];
 	for (i=0; i <7; i++) {
		level2EnemyX[i] = random (80, 800);
	}
	level2EnemyString = ["mq", "e", "zi", "jp", "s", "vd", "l"]
	level2EnemyHits = [1, 0, 1, 1, 0, 1, 0];
	level3Complete = false;//level3 enemies
	level3EnemyTime = [0, 0, -80, -160, -300, -420, -480, -520, -590, -850];
 	level3EnemyType = [0, 1, 2, 1, 2, 1, 1, 2, 2, 0];
 	for (i=0; i <10; i++) {
		level3EnemyX[i] = random (80, 800);
	}
 	level3EnemyString = ["l", "mw", "qky", "sj", "ate", "vr", "ox", "zbi", "dug", "h"]
	level3EnemyHits = [0, 1, 2, 1, 2, 1, 1, 2, 2, 0];

	//reset last hit
	lastHitX = -100;
	lastHitY = -100;

	//reset health
	charHearts = 5;
	
	//other stuff
	timeBuffer = 0;
	cutSceneBuffer = 0;
	strokeSize = 1;
	drawn = [false, false, false];
	time = 0;
	buffer = 0;
	pressed = false;
	blink = false;
	drawing = false;
  }