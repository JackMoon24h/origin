enchant();

enchant.LoadingScene = enchant.Class.create(enchant.Scene, {
  initialize: function() {
      enchant.Scene.call(this);
      this.backgroundColor = '#000';

      var barWidth = this.width * 0.4 | 0;
      var barHeight = this.width * 0.05 | 0;
      var border = barWidth * 0.03 | 0;
      var bar = new enchant.Sprite(barWidth, barHeight);
      bar.disableCollection();
      bar.x = (this.width - barWidth) / 2;
      bar.y = (this.height - barHeight) / 2;
      var image = new enchant.Surface(barWidth, barHeight);
      image.context.fillStyle = '#fff';
      image.context.fillRect(0, 0, barWidth, barHeight);
      image.context.fillStyle = '#000';
      image.context.fillRect(border, border, barWidth - border * 2, barHeight - border * 2);
      bar.image = image;
      var progress = 0, _progress = 0;
      this.addEventListener('progress', function(e) {
          // avoid #167 https://github.com/wise9/enchant.js/issues/177
          progress = e.loaded / e.total * 1.0;
      });
      bar.addEventListener('enterframe', function() {
          _progress *= 0.9;
          _progress += progress * 0.1;
          image.context.fillStyle = '#fff';
          image.context.fillRect(border, 0, (barWidth - border * 2) * _progress, barHeight);
      });
      this.addChild(bar);
      this.addEventListener('load', function(e) {
          var core = enchant.Core.instance;
          core.removeScene(core.loadingScene);
          core.dispatchEvent(e);
      });
  }
});

window.onload = function(){
  var core = new Core(2000, 1200);
  core.fps = 30;
  core.keybind(88, "a");

// Preload image files

  var Image_Backgrounds = [
    "./Assets/Custom/Backgrounds/Background_1.png", // 0
    "./Assets/Custom/Backgrounds/Background_2.png", // 1
    "./Assets/Custom/Backgrounds/Background_Building_1_1.png", // 2
    "./Assets/Custom/Backgrounds/Background_Building_1_2.png", // 3
    "./Assets/Custom/Backgrounds/Background_Building_2_1.png", // 4
    "./Assets/Custom/Backgrounds/Background_Building_2_2.png", // 5
    "./Assets/Custom/Backgrounds/Background_Building_3_1.png", // 6
    "./Assets/Custom/Backgrounds/Background_Building_3_2.png", // 7
    "./Assets/Custom/Backgrounds/Background_Building_4_1.png", // 8
    "./Assets/Custom/Backgrounds/Background_Building_4_2.png", // 9
    "./Assets/Custom/Backgrounds/Background_Building_5_1.png", // 10
    "./Assets/Custom/Backgrounds/Background_Building_5_2.png", // 11
    "./Assets/Custom/Backgrounds/Background_Paralax_Town_1.png", // 12
    "./Assets/Custom/Backgrounds/Background_Paralax_Town_2.png", // 13
  ];

  var Image_Sky = [
    "./Assets/Custom/Props/Cloud1.png", // 0
    "./Assets/Custom/Props/Cloud2.png", // 1
    "./Assets/Custom/Props/Cloud3.png", // 2
    "./Assets/Custom/Props/Cloud4.png", // 3
    "./Assets/Custom/Props/Cloud5.png", // 4
    "./Assets/Custom/Props/Cloud6.png", // 5
    "./Assets/Custom/Props/Cloud7.png", // 6
    "./Assets/Custom/Props/Fog1.png", // 7
    "./Assets/Custom/Props/Fog2.png", // 8
    "./Assets/Custom/Props/Moon1.png", // 9
    "./Assets/Custom/Props/Moon2.png", // 10
  ];

  var Image_Props = [
    "./Assets/Custom/Props/Prop1.png", // 0
    "./Assets/Custom/Props/Prop2.png", // 1
    "./Assets/Custom/Props/Prop3.png", // 2
    "./Assets/Custom/Props/Prop4.png", // 3
    "./Assets/Custom/Props/Prop5.png", // 4
    "./Assets/Custom/Props/Prop6.png", // 5
    "./Assets/Custom/Props/Prop7.png", // 6
    "./Assets/Custom/Props/Prop8.png", // 7
    "./Assets/Custom/Props/Prop9.png", // 8
    "./Assets/Custom/Props/Prop10.png", // 9
    "./Assets/Custom/Props/Prop11.png", // 10
  ];

  var Image_Tiles = [
    "./Assets/Custom/Tiles/Fill_Texture_1.png", // 0
    "./Assets/Custom/Tiles/Parallax_Texture_1_1.png", // 1
    "./Assets/Custom/Tiles/Parallax_Texture_1.png", // 2
    "./Assets/Custom/Tiles/Parallax_Texture_2_2.png", // 3
    "./Assets/Custom/Tiles/Parallax_Texture_2.png", // 4
    "./Assets/Custom/Tiles/Tile_Textures_A.png", // 5
    "./Assets/Custom/Tiles/Tile_Textures_B.png", // 6
    "./Assets/Custom/Tiles/Tile_Texture_6.png", // 7
    "./Assets/Custom/Tiles/Tile_Texture_7.png", // 8
    "./Assets/Custom/Tiles/Tile_Texture_8.png", // 9
    "./Assets/Custom/Tiles/Tile_Texture_9.png", // 10
  ];

  var Image_Effect = [
    "./Assets/Custom/Characters/Common/Character_Shadow.png", // 0
    "./Assets/Custom/Effect/Effect1.png", // 1
    "./Assets/Custom/Effect/Effect2.png" // 2
  ];

  var Image_UI = [
    "./Assets/Sub_Assets/healthBack.png", // 0
    "./Assets/Sub_Assets/healthRed.png", // 1
    "./Assets/Sub_Assets/healthGreen.png", // 2
    "./Assets/Sub_Assets/mapui.png", // 3
  ];

  var Image_Character_H1_G1 = [
    "./Assets/Custom/Characters/Human1/Human1_Default.png", // 0
    "./Assets/Custom/Characters/Human1/Gun1/Human1_Gun1_Idle.png", // 1
    "./Assets/Custom/Characters/Human1/Gun1/Human1_Gun1_Dead1.png", // 2
    "./Assets/Custom/Characters/Human1/Gun1/Human1_Gun1_Dead2.png", // 3
    "./Assets/Custom/Characters/Human1/Gun1/Human1_Gun1_Hit1.png", // 4
    "./Assets/Custom/Characters/Human1/Gun1/Human1_Gun1_Hit2.png", // 5
    "./Assets/Custom/Characters/Human1/Gun1/Human1_Gun1_Jump.png", // 6
    "./Assets/Custom/Characters/Human1/Gun1/Human1_Gun1_Pick.png", // 7
    "./Assets/Custom/Characters/Human1/Gun1/Human1_Gun1_Punch.png", // 8
    "./Assets/Custom/Characters/Human1/Gun1/Human1_Gun1_Shooting.png", // 9
    "./Assets/Custom/Characters/Human1/Gun1/Human1_Gun1_Walk.png", // 10
    "./Assets/Custom/Characters/Human1/Gun1/Human1_Gun1_WalkShooting.png", // 11
  ];

  var Image_Character_H2_G3 = [
    "./Assets/Custom/Characters/Human2/Human2_Default.png", // 0
    "./Assets/Custom/Characters/Human2/Gun3/Human2_Gun3_Idle.png", // 1
    "./Assets/Custom/Characters/Human2/Gun3/Human2_Gun3_Dead1.png", // 2
    "./Assets/Custom/Characters/Human2/Gun3/Human2_Gun3_Dead2.png", // 3
    "./Assets/Custom/Characters/Human2/Gun3/Human2_Gun3_Hit1.png", // 4
    "./Assets/Custom/Characters/Human2/Gun3/Human2_Gun3_Hit2.png", // 5
    "./Assets/Custom/Characters/Human2/Gun3/Human2_Gun3_Jump.png", // 6
    "./Assets/Custom/Characters/Human2/Gun3/Human2_Gun3_Pick.png", // 7
    "./Assets/Custom/Characters/Human2/Gun3/Human2_Gun3_Punch.png", // 8
    "./Assets/Custom/Characters/Human2/Gun3/Human2_Gun3_Shooting.png", // 9
    "./Assets/Custom/Characters/Human2/Gun3/Human2_Gun3_Walk.png", // 10
    "./Assets/Custom/Characters/Human2/Gun3/Human2_Gun3_WalkShooting.png", // 11
  ];

  var Image_Character_H3_G4 = [
    "./Assets/Custom/Characters/Human3/Human3_Default.png", // 0
    "./Assets/Custom/Characters/Human3/Gun4/Human3_Gun4_Idle.png", // 1
    "./Assets/Custom/Characters/Human3/Gun4/Human3_Gun4_Dead1.png", // 2
    "./Assets/Custom/Characters/Human3/Gun4/Human3_Gun4_Dead2.png", // 3
    "./Assets/Custom/Characters/Human3/Gun4/Human3_Gun4_Hit1.png", // 4
    "./Assets/Custom/Characters/Human3/Gun4/Human3_Gun4_Hit2.png", // 5
    "./Assets/Custom/Characters/Human3/Gun4/Human3_Gun4_Jump.png", // 6
    "./Assets/Custom/Characters/Human3/Gun4/Human3_Gun4_Pick.png", // 7
    "./Assets/Custom/Characters/Human3/Gun4/Human3_Gun4_Punch.png", // 8
    "./Assets/Custom/Characters/Human3/Gun4/Human3_Gun4_Shooting.png", // 9
    "./Assets/Custom/Characters/Human3/Gun4/Human3_Gun4_Walk.png", // 10
    "./Assets/Custom/Characters/Human3/Gun4/Human3_Gun4_WalkShooting.png", // 11
  ];

  var Image_Character_H3_NoGun = [
    "./Assets/Custom/Characters/Human3/Human3_Default.png", // 0
    "./Assets/Custom/Characters/Human3/NoGun/Human3_NoGun_Idle.png", // 1
    "./Assets/Custom/Characters/Human3/NoGun/Human3_NoGun_Dead1.png", // 2
    "./Assets/Custom/Characters/Human3/NoGun/Human3_NoGun_Dead2.png", // 3
    "./Assets/Custom/Characters/Human3/NoGun/Human3_NoGun_Hit1.png", // 4
    "./Assets/Custom/Characters/Human3/NoGun/Human3_NoGun_Hit2.png", // 5
    "./Assets/Custom/Characters/Human3/NoGun/Human3_NoGun_Jump.png", // 6
    "./Assets/Custom/Characters/Human3/NoGun/Human3_NoGun_Pick.png", // 7
    "./Assets/Custom/Characters/Human3/NoGun/Human3_NoGun_Punch.png", // 8
    "./Assets/Custom/Characters/Human3/NoGun/Human3_NoGun_Walk.png", // 9
  ];

  core.preload(Image_Backgrounds);
  core.preload(Image_Sky);
  core.preload(Image_Props);
  core.preload(Image_Tiles);
  core.preload(Image_Effect);
  core.preload(Image_UI);
  core.preload(Image_Character_H1_G1);
  core.preload(Image_Character_H2_G3);
  core.preload(Image_Character_H3_G4);
  core.preload(Image_Character_H3_NoGun);

  var BG_MOVEMENT_SPEED = 6;

  var Utils = {
    rand: function(num){
      return Math.floor(Math.random() * num);
    },

    randBtw: function(min, max){
      var dif = max - min;
      var temp = Utils.rand(dif);
      return min + temp;
    }
  };



  // Class Definition
  var Stage = Class.create({
    initialize: function(scene, bgData){

    // Layer 1
      var bgLayer = new Group();

        var bg = new Sprite(2000, 1000);
        bg.image = core.assets[Image_Backgrounds[1]];
        bg.x = 0;
        bg.y = 0;
        bgLayer.addChild(bg);

        var light = new Sprite(538, 529);
        light.image = core.assets[Image_Sky[10]];
        light.x = 1000 - light.width / 2;
        light.y = 0;
        bgLayer.addChild(light);

      this.bgLayer = bgLayer;
      scene.addChild(bgLayer);

    // Layer 2
      var skyLayer = new Group();

        var cloud_small = new Map(246, 28);
        cloud_small.image = core.assets[Image_Sky[4]];
        cloud_small.x = Utils.rand(150);
        cloud_small.y = Utils.rand(75);
        cloud_small.loadData(bgData.cloudSmallData);
        skyLayer.addChild(cloud_small);

        var cloud_medium = new Map(473, 79);
        cloud_medium.image = core.assets[Image_Sky[5]];
        cloud_medium.x = Utils.rand(100);
        cloud_medium.y = Utils.rand(50);
        cloud_medium.loadData(bgData.cloudMediumData);
        skyLayer.addChild(cloud_medium);

        var bd_main_1 = new Sprite(2000, 987);
        bd_main_1.image = core.assets[Image_Backgrounds[12]];
        bd_main_1.x = 0;
        bd_main_1.y = 0;
        skyLayer.addChild(bd_main_1);

        var bd_main_2 = new Sprite(2000, 987);
        bd_main_2.image = core.assets[Image_Backgrounds[12]];
        bd_main_2.x = 2000;
        bd_main_2.y = 0;
        skyLayer.addChild(bd_main_2);

      this.skyLayer = skyLayer;
      scene.addChild(skyLayer);

    // Layer 3
      var buildingsLayer = new Group();

        var bd12_1 = new Sprite(636, 259);
        bd12_1.image = core.assets[Image_Backgrounds[3]];
        bd12_1.x = 2200;
        bd12_1.y = core.height - bd12_1.height - 600;
        buildingsLayer.addChild(bd12_1);

        var bd22_1 = new Sprite(237, 336);
        bd22_1.image = core.assets[Image_Backgrounds[5]];
        bd22_1.x = 200;
        bd22_1.y = core.height - bd22_1.height - 600;
        buildingsLayer.addChild(bd22_1);

        var bd32_1 = new Sprite(424, 324);
        bd32_1.image = core.assets[Image_Backgrounds[7]];
        bd32_1.x = 700;
        bd32_1.y = core.height - bd32_1.height - 600;
        buildingsLayer.addChild(bd32_1);

        var bd42_1 = new Sprite(283, 281);
        bd42_1.image = core.assets[Image_Backgrounds[9]];
        bd42_1.x = 1200;
        bd42_1.y = core.height - bd42_1.height - 600;
        buildingsLayer.addChild(bd42_1);

        var bd52_1 = new Sprite(360, 538);
        bd52_1.image = core.assets[Image_Backgrounds[11]];
        bd52_1.x = 3000;
        bd52_1.y = core.height - bd52_1.height - 600;
        buildingsLayer.addChild(bd52_1);

      this.buildingsLayer = buildingsLayer;
      scene.addChild(buildingsLayer);

    // Layer 4
      var groundLayer = new Group();

        var fence = new Map(526, 286);
        fence.image = core.assets[Image_Props[9]];
        fence.loadData(bgData.fenceData);
        fence.x = -20;
        fence.y = core.height - fence.height - 550;
        groundLayer.addChild(fence);

        var grass = new Map(500, 89);
        grass.image = core.assets[Image_Tiles[2]];
        grass.loadData(bgData.grassData);
        grass.x = 0;
        grass.y = core.height - grass.height - 570;
        groundLayer.addChild(grass);

        var road = new Map(500, 379);
        road.image = core.assets[Image_Tiles[5]];
        road.x = 0;
        road.y = 600;
        road.loadData(bgData.roadData);
        groundLayer.addChild(road);

        var wall_1 = new Sprite(484, 253);
        wall_1.image = core.assets[Image_Props[8]];
        wall_1.x = 450;
        wall_1.y = core.height - wall_1.height - 570;
        groundLayer.addChild(wall_1);

        var wall_2 = new Sprite(484, 253);
        wall_2.image = core.assets[Image_Props[8]];
        wall_2.x = 2900;
        wall_2.y = core.height - wall_2.height - 550;
        groundLayer.addChild(wall_2);

        var bench_1 = new Sprite(329, 165);
        bench_1.image = core.assets[Image_Props[6]];
        bench_1.x = 4700;
        bench_1.y = core.height - bench_1.height - 550;
        groundLayer.addChild(bench_1);

        var exit = new Sprite(383, 412);
        exit.image = core.assets[Image_Props[5]];
        exit.x = 50;
        exit.y = core.height - exit.height - 530;
        groundLayer.addChild(exit);

        var house1_1 = new Sprite(656, 784);
        house1_1.image = core.assets[Image_Props[0]];
        house1_1.x = 1500;
        house1_1.y = core.height - house1_1.height - 500;
        groundLayer.addChild(house1_1);

        var house3_1 = new Sprite(607, 564);
        house3_1.image = core.assets[Image_Props[3]];
        house3_1.x = 2050;
        house3_1.y = core.height - house3_1.height - 520;
        groundLayer.addChild(house3_1);

        // ******* This probably should be on the Objects Layer
        var house2_1 = new Sprite(687, 771);
        house2_1.image = core.assets[Image_Props[1]];
        house2_1.x = 5200;
        house2_1.y = core.height - house2_1.height - 500;
        groundLayer.addChild(house2_1);

        var streetlamp_1 = new Sprite(325, 777);
        streetlamp_1.image = core.assets[Image_Props[10]];
        streetlamp_1.x = 4500;
        streetlamp_1.y = core.height - streetlamp_1.height - 550;
        groundLayer.addChild(streetlamp_1);

      this.groundLayer = groundLayer;
      scene.addChild(groundLayer);

    // Layer 5 : Squad will be set on this layer
      var playLayer = new Group();

      this.playLayer = playLayer;
      scene.addChild(playLayer);

    // Special Layer
      var uiLayer = new Group();

      this.uiLayer = uiLayer;
      scene.addChild(uiLayer);

      var self = this;
      this.skyLayer.addEventListener("enterframe", function(e){
        if(core.input.right && self.skyLayer.x > -1000){
          self.skyLayer.x -= BG_MOVEMENT_SPEED / 4;
        } else if (core.input.left && self.skyLayer.x < 0){
          self.skyLayer.x += BG_MOVEMENT_SPEED / 8;
        }
      });

      this.buildingsLayer.addEventListener("enterframe", function(e){
        if(core.input.right && self.buildingsLayer.x > -2000){
          self.buildingsLayer.x -= BG_MOVEMENT_SPEED / 2;
        } else if (core.input.left && self.buildingsLayer.x < 0){
          self.buildingsLayer.x += BG_MOVEMENT_SPEED / 4;
        }
      });

      this.groundLayer.addEventListener("enterframe", function(e){
        if(core.input.right && self.groundLayer.x > -4000){
          self.groundLayer.x -= BG_MOVEMENT_SPEED;
        } else if (core.input.left && self.groundLayer.x < 0){
          self.groundLayer.x += BG_MOVEMENT_SPEED / 2;
        }
      });
    },

    setController: function(manager){
      this.controller = controller;
    },

    toLocalSpace: function(worldX, worldY){
      var localX = worldX - this.tiles.x;
      var localY = worldY - this.tiles.y;
      return {x: localX, y: localY};
    },

    toWorldSpace:function(localX, localY) {
        var worldX = localX +this.tiles.x;
        var worldY = localY +this.tiles.y;
        return {x:worldX, y:worldY};
    },

    getTileAtPosition: function(localX, localY){
      return {
        i: Math.floor(localX / 200),
        j: Math.floor(localY / 200)
      };
    },

    getCoordinateAtTile: function(i, j){
      return {
          localX: i * 200,
          localY: j * 200
      };
    },

    addChild: function(object){
      this.playLayer.addChild(object);
    },

    addObject: function(obj){
      obj.y = core.height - obj.height - 460;
      this.groundLayer.addChild(obj);
    },

    addWindow: function(scene){
      this.uiLayer.addChild(scene);
    },

    setActiveUnit: function(unit){
      unit.stage = this;
      this.activeUnit = unit;
      this.selectCommand();
    }

  });

  // Base mold for all units
  var BaseUnit = Class.create(Group, {
    initialize: function(id, stats, w, h){
      Group.call(this);

      var shadow = new Sprite(467, 87);
      shadow.scale(0.25, 0.25);
      shadow.image = core.assets[Image_Effect[0]];
      this.shadow = shadow;
      this.addChild(shadow);

      var body = new Sprite(w, h);
      body.touchEnabled = false;
      this.body = body;
      this.addChild(body);

      var collisionRange = new Sprite(150, 300);
      collisionRange.touchEnabled = true;
      collisionRange.backgroundColor = "rgb(228, 198, 0)";
      collisionRange.opacity = 0;
      this.collisionRange = collisionRange;
      this.addChild(collisionRange);

      var healthBackSprite = new Sprite(128, 12);
      this.healthBackSprite = healthBackSprite;
      healthBackSprite.image = core.assets[Image_UI[0]];
      this.addChild(healthBackSprite);

      var healthRedSprite = new Sprite(128, 12);
      this.healthRedSprite = healthRedSprite;
      healthRedSprite.originX = 0;
      healthRedSprite.image = core.assets[Image_UI[1]];
      this.addChild(healthRedSprite);

      var healthGreenSprite = new Sprite(128, 12);
      this.healthGreenSprite = healthGreenSprite;
      healthGreenSprite.originX = 0;
      healthGreenSprite.image = core.assets[Image_UI[2]];
      this.addChild(healthGreenSprite);

      this.stats = {
        id: id,
        lv: stats.lv,
        exp: stats.exp,
        job: stats.job,
        name: stats.name,
        damage: stats.damage,
        protest: stats.protest,
        critical: stats.critical,
        accuracy: stats.accuracy,
        dodge: stats.dodge,
        resistPoison: stats.resistPoison,
        resistBleed: stats.resistBleed,
        resistPull: stats.resistPull,
        resistStun: stats.resistStun,
        resistDebuff: stats.resistDebuff,
        resistDisease : stats.resistDisease,
        resistDeath: stats.resistDeath,
        virtue: stats.virtue,
        speed: stats.speed,
        hpMax: stats.hpMax,
        mpMax: stats.mpMax,
        scout: stats.scout,
        disposal: stats.disposal,
      };
      this.stats.hp = this.stats.hpMax;
      this.stats.mp = this.stats.mpMax;

      var self = this;
      collisionRange.addEventListener("touchend", function(e){
        self.ontouchend(e);
      });
    },

    getId: function(){
      return this.stats.id;
    },

    getDamage: function(){
      return this.stats.damage;
    },

    getProtest: function(){
      return this.stats.protest;
    },

    getCritical: function(){
      return this.stats.critical;
    },

    getAccuracy: function(){
      return this.stats.accuracy;
    },

    getDodge: function(){
      return this.stats.dodge;
    },

    getHPMax: function() {
        return this.stats.hpMax;
    },

    getHP: function() {
        return this.stats.hp;
    },

    getMPMax: function() {
        return this.stats.mpMax;
    },

    getMP: function() {
        return this.stats.mp;
    },

    updateHPBar: function(){
      var ratio = Math.max(this.stats.hp / this.stats.hpMax, 0);
      if(ratio > 0.5){
        this.healthGreenSprite.scaleX = ratio;
      } else {
        this.healthGreenSprite.scaleX = 0;
      }
      this.healthRedSprite.scaleX = ratio;
    },

    ontouchend: function(e){
      console.log(this.stats.name + " (" + this.stats.job + ")" + " " + this.stats.lv);
    }
  });


  var Survivor = Class.create(BaseUnit, {
    initialize: function(id, stats, animationData){
      BaseUnit.call(this, id, stats, 516, 427);

      // State
      this.isMoving = false;
      this.isMovingBack = false;
      this.isDead = false;
      this.isInfected = false;
      this.isVirtuous = false;
      this.isBleeding = false;
      this.isPoisoned = false;

      this.body.image = animationData.idleImage;
      this.body.frame = animationData.idleFrame;

      this.collisionRange.x = this.body.x + 145;
      this.collisionRange.y = this.body.y + 50;

      this.healthBackSprite.x = this.collisionRange.x + (this.collisionRange.width - this.healthBackSprite.width) / 2;
      this.healthBackSprite.y = this.collisionRange.y + this.collisionRange.height;

      this.healthRedSprite.x = this.collisionRange.x + (this.collisionRange.width - this.healthRedSprite.width) / 2;
      this.healthRedSprite.y = this.collisionRange.y + this.collisionRange.height;

      this.healthGreenSprite.x = this.collisionRange.x + (this.collisionRange.width - this.healthGreenSprite.width) / 2;
      this.healthGreenSprite.y = this.collisionRange.y + this.collisionRange.height;

      this.shadow.x = this.collisionRange.x + (this.collisionRange.width - this.shadow.width) / 2;
      this.shadow.y = this.healthBackSprite.y - 60;

      this.addEventListener("enterframe", function(){
        // In battle, moving cannot be performed.
        if(core.isBattle){

          return;

        } else {
          if(core.input.right){
            this.isMoving = true;
            this.body.image = animationData.moveImage;
            this.body.frame = animationData.moveFrame;
          } else if(core.input.left){
            this.isMovingBack = true;
            this.body.image = animationData.moveImage;
            this.body.frame = animationData.moveBackFrame;
          } else {
            this.isMovingBack = false;
            this.isMoving = false;
            this.body.image = animationData.idleImage;
            this.body.frame = animationData.idleFrame;
          }
        }

      }); // End of enterframe function of Survivor
    }
  });

  var Zombie = Class.create(BaseFune, {
    initialize: function(id, stats, animationData){
      BaseUnit.call(this, id, stats, 441, 418);

      
    }
  });


  // Squad is the game player
  var Squad = Class.create(Group, {
    initialize: function(survivor1, survivor2, survivor3, survivor4){
      Group.call(this);

      this.x = 30;
      this.y = 200;

      this.survivorList = [];
      this.survivorCountInitial = 0;

      var pos1 = new Group();
      pos1.addChild(survivor1);
      pos1.initialUnit = survivor1;
      pos1.unit = survivor1;
      this.pos1 = pos1;
      pos1.x = this.x + 165 * 3;
      pos1.y = this.y;
      this.addChild(pos1);

      var pos2 = new Group();
      pos2.addChild(survivor2);
      pos2.initialUnit = survivor2;
      pos2.unit = survivor2;
      this.pos2 = pos2;
      pos2.x = this.x + 165 * 2;
      pos2.y = this.y;
      this.addChild(pos2);

      var pos3 = new Group();
      pos3.addChild(survivor3);
      pos3.initialUnit = survivor3;
      pos3.unit = survivor3;
      this.pos3 = pos3;
      pos3.x = this.x + 165 * 1;
      pos3.y = this.y;
      this.addChild(pos3);

      var pos4 = new Group();
      pos4.addChild(survivor4);
      pos4.initialUnit = survivor4;
      pos4.unit = survivor4;
      this.pos4 = pos4;
      pos4.x = this.x + 165 * 0;
      pos4.y = this.y;
      this.addChild(pos4);


    },

    isActive: function(){
      return this.myTurn;
    },

    setActive: function(flag){
      this.myTurn = flag;
    },

    setController: function(controller){
      this.controller = controller;
    },

    addSurvivor: function(survivor){
      survivor.squad = this;
      this.survivorList.push(survivor);
      this.survivorCountInitial ++;
    },

    removeSurvivor: function(survivor){
      delete survivor.squad;

      var newList = [];
      for(var i = 0; i < this.getSurvivorCount(); i++){
        if(this.getSurvivor(i) != survivor){
          newList.push(this.getSurvivor(i));
        }
      }
      this.survivorList = newList;

      if(this.activeSurvivor == survivor){
        this.activeSurvivor = null;
      }
    },

    getSurvivor: function(index){
      return this.survivorList[index];
    },

    getSurvivorCount: function(){
      return this.survivorList.length;
    },

    getSurvivorCountInitial: function(){
      return this.survivorCountInitial;
    },

    getActiveSurvivor: function(){
      if(this.activeSurvivor){
        return this.activeSurvivor;
      } else {
        return this.survivorList[0];
      }
    },

    setActiveSurvivor: function(survivor){
      this.activeSurvivor = survivor;
      this.controller.updateTurn();
    }
  });

  var WindowGroup = Class.create(Group, {
    initialize: function(){
      Group.call(this);

      var uiWindow = new Sprite(2000, 200);
      uiWindow.x = 0;
      uiWindow.y = 800;
      this.uiWindow = uiWindow;
      uiWindow.visible = true;

      uiWindow.image = core.assets[Image_Tiles[0]];

      this.addChild(uiWindow);
    }
  });

  var Gang = Class.create(Survivor, {
    initialize: function(id, animationData){
      Survivor.call(this, id, {
        lv: 1,
        exp: 0,
        job: "Gang",
        name: "John",
        damage: 8,
        protest: 4,
        critical: 0.12,
        accuracy: 0.86,
        dodge: 0.21,
        resistPoison: 0.32,
        resistBleed: 0.14,
        resistPull: 0.45,
        resistStun: 0.15,
        resistDebuff: 0.06,
        resistDisease : 0.14,
        resistDeath: 0.1,
        virtue: 0.03,
        speed: 6,
        hpMax: 25,
        mpMax: 100,
        scout: 0.23,
        disposal: 0.46,
      }, animationData);

    }
  });

  var Police = Class.create(Survivor, {
    initialize: function(id, animationData){
      Survivor.call(this, id, {
        lv: 1,
        exp: 0,
        job: "Police",
        name: "Brad",
        damage: 14,
        protest: 8,
        critical: 0.16,
        accuracy: 0.92,
        dodge: 0.12,
        resistPoison: 0.15,
        resistBleed: 0.18,
        resistPull: 0.23,
        resistStun: 0.22,
        resistDebuff: 0.12,
        resistDisease : 0.10,
        resistDeath: 0.2,
        virtue: 0.05,
        speed: 4,
        hpMax: 30,
        mpMax: 100,
        scout: 0.12,
        disposal: 0.37,
      }, animationData);

    }
  });

  var CheerLeader = Class.create(Survivor, {
    initialize: function(id, animationData){
      Survivor.call(this, id, {
        lv: 1,
        exp: 0,
        job: "CheerLeader",
        name: "Hanna",
        damage: 5,
        protest: 10,
        critical: 0.04,
        accuracy: 0.78,
        dodge: 0.27,
        resistPoison: 0.37,
        resistBleed: 0.10,
        resistPull: 0.77,
        resistStun: 0.25,
        resistDebuff: 0.02,
        resistDisease : 0.18,
        resistDeath: 0.06,
        virtue: 0.02,
        speed: 4,
        hpMax: 22,
        mpMax: 100,
        scout: 0.14,
        disposal: 0.17,
      }, animationData);

    }
  });

  var Nurse = Class.create(Survivor, {
    initialize: function(id, animationData){
      Survivor.call(this, id, {
        lv: 1,
        exp: 0,
        job: "Nurse",
        name: "Jessy",
        damage: 6,
        protest: 2,
        critical: 0.03,
        accuracy: 0.81,
        dodge: 0.12,
        resistPoison: 0.42,
        resistBleed: 0.17,
        resistPull: 0.36,
        resistStun: 0.12,
        resistDebuff: 0.07,
        resistDisease : 0.26,
        resistDeath: 0.12,
        virtue: 0.03,
        speed: 4,
        hpMax: 21,
        mpMax: 100,
        scout: 0.11,
        disposal: 0.05,
      }, animationData);

    }
  });

  var EventTrigger = Class.create(Sprite, {
    initialize: function(posX, obj){
      Sprite.call(this, 100, 250);

      this.x = posX;

      this.backgroundColor = "rgb(236, 58, 19)";
      this.opacity = 0.5;

      var self = this;
      this.addEventListener("enterframe", function(){
        if(self.intersect(obj)){
          console.log("Shit");
        }
      });
    }
  });

  // Main program
  core.onload = function(){

    var bgData = {
      cloudSmallData: [
        [-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1],
        [-1, 0,-1,-1,-1, 0,-1,-1,-1,-1, 0,-1,-1,-1, 0,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1],
      ],

      cloudMediumData: [
        [-1,  -1,  -1,   0,  -1,  -1,  -1,  -1,   0,  -1],
        [ 0,  -1,  -1,  -1,  -1,   0,  -1,  -1,  -1,  -1],
        [-1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
      ],

      roadData: [
        [0, 1, 2, 2, 1, 1, 2, 1, 2, 0, 1, 2]
      ],

      fenceData: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ],

      grassData: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ]
    };

    var GangAnimationData = {
      idleImage: core.assets[Image_Character_H1_G1[1]],
      idleFrame: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],
      moveImage: core.assets[Image_Character_H1_G1[10]],
      moveFrame: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      moveBackFrame: [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]
    };

    var PoliceAnimationData = {
      idleImage: core.assets[Image_Character_H2_G3[1]],
      idleFrame: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],
      moveImage: core.assets[Image_Character_H2_G3[10]],
      moveFrame: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      moveBackFrame: [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]
    };

    var CLeaderAnimationData = {
      idleImage: core.assets[Image_Character_H3_NoGun[1]],
      idleFrame: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],
      moveImage: core.assets[Image_Character_H3_NoGun[9]],
      moveFrame: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      moveBackFrame: [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]
    };

    var NurseAnimationData = {
      idleImage: core.assets[Image_Character_H3_G4[1]],
      idleFrame: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],
      moveImage: core.assets[Image_Character_H3_G4[10]],
      moveFrame: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      moveBackFrame: [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]
    };

    var uiArea = new WindowGroup();

    var stage = new Stage(core.rootScene, bgData);
    stage.addWindow(uiArea);

    var gang = new Gang(1, GangAnimationData);
    var police = new Police(2, PoliceAnimationData);
    var cheerLeader = new CheerLeader(3, CLeaderAnimationData);
    var nurse = new Nurse(4, NurseAnimationData);

    var squad = new Squad(gang, cheerLeader, nurse, police);
    stage.addChild(squad);

    var trigger1 = new EventTrigger(1500, squad.pos1.unit.collisionRange);
    stage.addObject(trigger1);

  }; // End of core.onload

  core.start();
}; // End of window.onload
