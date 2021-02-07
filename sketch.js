var gameState = "start";
var fetching = "no";

function preload(){
  DiamondImg = loadAnimation("Diamond/tile000.png","Diamond/tile001.png",
  "Diamond/tile002.png","Diamond/tile003.png","Diamond/tile004.png");
  ChurchImg = loadImage("Church.png");
  FireStationImg = loadImage("Fire Station.png");
  GymImg = loadImage("Gym.png");
  HospitalImg = loadImage("Hospital.png");
  HotelImg = loadImage("Hotel.png");
  HouseImg = loadImage("House.png");
  MallImg = loadImage("Mall.png");
  ParkImg = loadImage("Park.png");
  PoliceImg = loadImage("Police.png");
  PostOfficeImg = loadImage("Post Office.png");
  BgImg = loadImage("Poster.jpg");
  SchoolImg = loadImage("School.png");
  ThiefImg = loadImage("Thief.png");
  PlayImg = loadImage("Play2.png");
  HowImg = loadImage("How.png");
}

function setup() {
  createCanvas(windowWidth-10,windowHeight-10);
  background(BgImg);

  //Input
  name_input = createInput("Enter Your Name");
  name_input.position(windowWidth/2-110,windowHeight/2);
  name_input.style("height","35px");
  name_input.style("width","160px");
  name_input.style("font-size","20px");
  name_input.style("background",rgb(29, 132, 1));
  name_input.style('color', rgb(250, 236, 95));

  //Buttons
  play_button = createButton("Play Now");
  play_button.position(windowWidth/2-60,windowHeight/2+60);
  play_button.style("height","30px");
  play_button.style("background",rgb(122, 255, 83));

  how_button = createButton("How To Play");
  how_button.position(windowWidth/2-68,windowHeight/2+120);
  how_button.style("height","30px");

  //Blocks Around The Diamond
  Block_2 = createSprite(windowWidth/2+5,windowHeight/2-5,100,100);
  Block_2.shapeColor = rgb(245, 48, 253);
  Block_2.visible = false;

  Block_1 = createSprite(windowWidth/2-5,windowHeight/2-5,100,100);
  Block_1.shapeColor = rgb(248, 150, 253);
  Block_1.visible = false;

  //Sprites
  Play = createSprite(windowWidth/2-100,windowHeight/2+100);
  Play.addImage(PlayImg);
  Play.scale = 0.25;

  How = createSprite(windowWidth/2-68,windowHeight/2+120);
  How.addImage(HowImg);
  How.scale = 0.35;

  Church = createSprite(windowWidth/2,windowHeight/2-225);
  Church.addImage(ChurchImg);
  Church.scale = 0.15;
  Church.visible = false;

  FireStation = createSprite(windowWidth/2+225,windowHeight/2-140);
  FireStation.addImage(FireStationImg);
  FireStation.scale = 0.2;
  FireStation.visible = false;

  Gym = createSprite(windowWidth/2,windowHeight/2+110);
  Gym.addImage(GymImg);
  Gym.scale = 0.3;
  Gym.visible = false;

  Diamond = createSprite(windowWidth/2,windowHeight/2);
  Diamond.addAnimation("diamond rotating",DiamondImg);
  Diamond.scale = 0.5;
  Diamond.visible = false;

  Hospital = createSprite(windowWidth/2-175,windowHeight/2-25);
  Hospital.addImage(HospitalImg);
  Hospital.scale = 0.15;
  Hospital.visible = false;

  Hotel = createSprite(windowWidth/2+250,windowHeight-100);
  Hotel.addImage(HotelImg);
  Hotel.scale = 0.31;
  Hotel.visible = false;

  House = createSprite(windowWidth/2-540,windowHeight/2);
  House.addImage(HouseImg);
  House.scale = 0.11;
  House.visible = false;

  Mall = createSprite(windowWidth/2-350,windowHeight-90);
  Mall.addImage(MallImg);
  Mall.scale = 0.11;
  Mall.visible = false;

  Park = createSprite(windowWidth/2+440,windowHeight/2-15);
  Park.addImage(ParkImg);
  Park.scale = 0.11;
  Park.visible = false;

  Police = createSprite(windowWidth-600,windowHeight-70);
  Police.addImage(PoliceImg);
  Police.scale = 0.5;
  Police.visible = false;
  Police.velocityX = -3;
  Police.velocityY = -3;

  PostOffice = createSprite(windowWidth/2-300,windowHeight/2-175);
  PostOffice.addImage(PostOfficeImg);
  PostOffice.scale = 0.15;
  PostOffice.visible = false;

  School = createSprite(windowWidth-120,windowHeight-540);
  School.addImage(SchoolImg);
  School.scale = 0.15;
  School.visible = false;

  Thief = createSprite(windowWidth/2-620,windowHeight/2-250);
  Thief.addImage(ThiefImg);
  Thief.scale = 0.12;
  Thief.visible = false;

  //Barrier
  Barrier_1 = createSprite(windowWidth/2-550,windowHeight/2-200,70,10);
  Barrier_1.rotation = -45;
  //Barrier_1.shapeColour("white");
  Barrier_1.visible = false;
  //Barrier_1.velocityX = -4;
  //Barrier_1.velocityY = 4;

  Edges = createEdgeSprites();

  Thief.debug = true;
  Thief.setCollider("rectangle",-30,0,475,830);

  Hospital.debug = true;
  Hospital.setCollider("rectangle",0,65,800,650);

  Gym.debug = true;
  Gym.setCollider("rectangle",0,0,375,250);

  Hotel.debug = true;
  Hotel.setCollider("rectangle",0,0,325,400);

  Police.debug = true;
  Police.setCollider("rectangle",0,0,100,225);

  Park.debug = true;
  Park.setCollider("rectangle",0,0,1200,1100);

  Church.debug = true;
  Church.setCollider("rectangle",0,0,800,800);

  Mall.debug = true;
  Mall.setCollider("rectangle",0,-75,1200,1000);

  House.debug = true;
  House.setCollider("rectangle",0,0,1100,1000);

  School.debug = true;
  School.setCollider("rectangle",0,50,1100,800);
  
  FireStation.debug = true;
  FireStation.setCollider("rectangle",0,0,500,600);

  PostOffice.debug = true;
  PostOffice.setCollider("rectangle",0,0,900,560);
}

function draw() {
    Thief.collide(House);
    Thief.collide(FireStation);
    Thief.collide(School);
    Thief.collide(PostOffice);
    Thief.collide(Mall);
    Thief.collide(Hotel);
    Thief.collide(Hospital);
    Thief.collide(Gym);
    Thief.collide(Church);
    Thief.collide(Park);
    Thief.collide(Edges);
    Police.bounceOff(House);
    Police.bounceOff(FireStation);
    Police.bounceOff(School);
    Police.bounceOff(PostOffice);
    Police.bounceOff(Mall);
    Police.bounceOff(Hotel);
    Police.bounceOff(Hospital);
    Police.bounceOff(Gym);
    Police.bounceOff(Church);
    Police.bounceOff(Park);
    Police.bounceOff(Edges);
    Barrier_1.bounceOff(Edges);
    
    play_button.mousePressed(()=>{
    //background(99, 255, 85);
    name_input.hide();
    play_button.hide();
    how_button.hide();
    Church.visible = true;
    FireStation.visible = true;
    Gym.visible = true;
    Thief.visible = true;
    Diamond.visible = true;
    Hospital.visible = true;
    Park.visible = true;
    School.visible = true;
    PostOffice.visible = true;
    Mall.visible = true;
    Police.visible = true;
    Hotel.visible = true;
    House.visible = true;
    Block_1.visible = true;
    Block_2.visible = true;
    Barrier_1.visible = true;
    gameState = "play"
  })

  if(gameState === "play"){
    //background(99, 255, 85);
    background("black");
    Thief.velocityX = 0;
    Thief.velocityY = 0;
    if(keyDown("RIGHT_ARROW")){
      Thief.velocityX = 5;
    }
    if(keyDown("LEFT_ARROW")){
      Thief.velocityX = -5;
    }
    if(keyDown("DOWN_ARROW")){
      Thief.velocityY = 5;
    }
    if(keyDown("UP_ARROW")){
      Thief.velocityY = -5;
    }
    if(Thief.isTouching(Diamond)){
      Diamond.destroy();
      Block_1.destroy();
      Block_2.destroy();
      fetching = "yes";
    }
    if(fetching === "yes"){
      text("Vanshika",windowWidth/2,windowHeight/2);
    }
  }
  drawSprites();
}