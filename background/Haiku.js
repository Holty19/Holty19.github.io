(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Haiku_atlas_1", frames: [[0,0,1681,1020]]},
		{name:"Haiku_atlas_2", frames: [[1188,0,539,777],[0,0,1186,1211],[0,1738,1444,99],[0,1213,983,523]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Haiku_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Haiku_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Haiku_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Haiku_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Haiku_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,269.5,388.5), null);


(lib.leaf = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// leaf
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006600").s().p("EglyAaSQg2g/gBhUQADhxBbhFQBchFBuAiQBrAiAoBpQAoBshABfQg/BfhxAHIgRAAQhmAAhFhQgEAgXAXKQg2g/gBhUQADhxBbhFQBchFBuAiQBrAiAoBpQAoBshABfQg/BfhxAHIgRAAQhmAAhFhQgARh1rQg2g/gBhTQADhyBbhEQBchFBuAiQBrAhAoBpQAoBshABgQg/BehxAHIgRABQhmAAhFhRg");
	this.shape.setTransform(-192.5152,-143.5351);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("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");
	this.shape_1.setTransform(-175.9917,-141.965);

	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-454,-427.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.instance}]},11).wait(16));

	// branch
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("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");
	this.shape_2.setTransform(-338.9638,-144.9612);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-884.8,-427.8,1091.7,605.5);


(lib.fvcxvcx = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-150.95,-310.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fvcxvcx, new cjs.Rectangle(-150.9,-310.9,840.5,510), null);


(lib.eggbutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// over
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag+MJQgOgOAVgeQBNhuA3gzIA2gtQAjgcATgTQA8g8AIg/QhKg+hYgvQgqgWhWgmIjhhiQgogQABgYQACgMAPgSQD+kIENjzQhGg/iKhHQilhVgzgkQgRgLAAgLQABgIAGgFQAGgFAIAAQAKAAARAJIBTAsQDQBwB1BGQAgATAHAUQAKAigyArQkDDijnD3QAIAOARAJQAKAGAWAIQDmBVDQCEQAaAQAJAOQAMAVgFAiQgMBGhLBDIg/A1QgoAggWAWQgXAZgfAqIgwBFQgLANgNAGQgGADgGAAQgHAAgFgGg");
	this.shape.setTransform(378.8078,17.3235);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// up
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF99").s().p("AA3JDQhvgLhQgOQhngShUgcQjNhEh5iFQgtgxgSgvQgRguAAhSIAAgPQACg8AGg3QAJhSAXg0IAIgQQAeg2BHg4QA/gxBng7ICthiIA0ggQAegRAagJQA+gVBdAIQC4APCmBeQCmBdBtCWQBYB8gFBoQgCAjgPArQgJAbgVAwQgjBQgWAsQgiBEgkAyQhbB/h1ArQg/AYhRACIgVAAQg0AAhMgIg");
	this.shape_1.setTransform(356.8161,17.1589);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ADGJwQgsAAhGgHQh5gMhWgOQhwgThbgeQjfhIiBiQQgtgygTgsQgTgvgEg/QgBgWABghIADg8QAFhKAHgmQAHgrANgiQAGgQAIgOQAeg5A+g0QAoghBPgxIECidIA0geQAegPAagHQAmgLBQAAQBAABAcABQA0ADAnAKQBJARBuA8QBgA1BAAuQBTA7A5BBQBABLAgBWQAiBegMBZQgGAqgRAvQgNAjgYAzQgkBMgfA1QgpBDgsAzQhsB7iFAfQgwAMg7AAIgFAAgAiEo8QgZAJgeARIg1AgIisBiQhoA6g+AxQhHA4geA3IgIAQQgXAzgKBSQgGA3gBA9IgBAOQAABSARAvQATAvAsAxQB5CEDNBEQBUAcBoASQBPAOBvAMQBcAJA5gCQBSgCA/gXQB1gsBbh/QAjgyAihDQAWgsAjhQQAWgxAJgbQAOgrACgjQAGhnhZh8QhsiWimheQimhei5gPQgYgCgXAAQg+AAguAQg");
	this.shape_2.setTransform(356.6633,17.326);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AD6MkQg3AAhZgJQiZgPhsgTQiNgYhzgmQkZheiji5Qg4hBgYg4QgZg8gEhSQgCgcACgrIADhNQAHhgAIgxQAJg3ARgsQAHgVAKgSQAmhJBOhDQAygqBkhAIFFjKQAtgbAVgLQAmgUAhgJQAwgOBlAAQBQABAjACQBCAEAyAMQBbAWCLBOQB5BDBRA8QBpBMBHBUQBRBgAoBwQAsB5gQByQgIA2gVA9QgQAugeBBQgtBigoBEQgzBXg4BBQiICfioAoQg9APhLAAIgFAAgAimriQggAMgmAWIhCApIjaB+QiCBMhPA/QhaBIgmBGIgKAVQgdBCgMBqQgHBIgCBNIgBATQAABpAWA8QAXA9A4A/QCZCrECBXQBqAlCDAXQBkASCMAPQB0AMBIgDQBngCBPgfQCUg4ByijQAthBArhXQAcg4AshoQAbg+ALgjQATg3ACguQAHiFhvigQiJjBjSh5QjRh5jpgTQgegDgdAAQhOAAg6AUg");
	this.shape_3.setTransform(356.6776,17.3758);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF99").s().p("ABFLrQiMgPhkgSQiDgXhqglQkChXiZirQg4g/gXg9QgWg8AAhpIABgTQAChNAHhIQAMhqAdhCIAKgVQAmhGBahIQBPg/CChMIDah+IBCgpQAmgWAggMQBPgbB0AKQDpATDRB5QDSB5CJDBQBvCggHCFQgCAugTA3QgLAjgbA+QgsBogcA4QgrBXgtBBQhyCjiUA4QhPAfhnACIgaABQhCAAhggKg");
	this.shape_4.setTransform(356.8707,17.1632);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(260.1,-63,193.2,160.8);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.setTransform(245.1,364.95,1,1,0,0,0,134.7,194.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:194.2,x:247.95,y:376.3},0).wait(1).to({x:251.95,y:387.5},0).wait(1).to({x:256.55,y:398.4},0).wait(1).to({x:261.85,y:409},0).wait(1).to({x:268,y:419.15},0).wait(1).to({x:275.15,y:428.6},0).wait(1).to({x:283.85,y:436.6},0).wait(1).to({x:294.5,y:441.55},0).wait(1).to({x:306.35,y:441.6},0).wait(1).to({x:318.15,y:440.7},0).wait(1).to({x:330,y:439.65},0).wait(1).to({x:341.75,y:438.4},0).wait(1).to({x:353.5,y:436.8},0).wait(1).to({x:364.95,y:433.9},0).wait(1).to({x:374.65,y:427.1},0).wait(1).to({x:383.05,y:418.75},0).wait(1).to({x:390,y:409.2},0).wait(1).to({x:395.2,y:398.55},0).wait(1).to({x:399.4,y:387.45},0).wait(1).to({x:403.2,y:376.2},0).wait(1).to({x:406.85,y:364.9},0).wait(1).to({x:410.3,y:353.55},0).wait(1).to({x:413.6,y:342.2},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(110.4,148,438,487.9);


(lib.eggcrackbutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// up
	this.instance = new lib.eggbutton();
	this.instance.setTransform(-125.4,201.35);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-161.45,y:165.5},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,327.9,299.1);


// stage content:
(lib.Haiku = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {words:0,artwork:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var root = this;
		
		this.toFrame02_btn.addEventListener("click", toFrame02);
		
		function toFrame02(){
		
		    console.log("go to artwork");
		
		    root.gotoAndStop("artwork");
		
		}
		
		var root = this;
		stage.enableMouseOver();
		
		this.line01_txt.addEventListener("click",changeLine01);
		
		function changeLine01(){
			console.log("will change line 1")
			root.line01_txt.text = line01;
		}
		var line01 = "Dangling From a Branch"
		
		var root = this;
		stage.enableMouseOver();
		
		this.line02_txt.addEventListener("click",changeLine02);
		
		function changeLine02(){
			console.log("will change line 2")
			root.line02_txt.text = line02;
		}
		
		var line02 = "Wings Emerge From The Cocoon"
		
		var root = this;
		stage.enableMouseOver();
		
		this.line03_txt.addEventListener("click",changeLine03);
		
		function changeLine03(){
			console.log("will change line 3")
			root.line03_txt.text = line03;
		}
		
		var line03 = "Metamorphosis"
	}
	this.frame_1 = function() {
		this.stop();
		
		var root = this;
		
		this.toFrame01_btn.addEventListener("click", toFrame01);
		
		function toFrame01(){
		
		    console.log("go to words");
		
		    root.gotoAndStop("words");
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// buttons
	this.toFrame02_btn = new lib.eggbutton();
	this.toFrame02_btn.name = "toFrame02_btn";
	this.toFrame02_btn.setTransform(134.35,483.7);
	new cjs.ButtonHelper(this.toFrame02_btn, 0, 1, 1);

	this.toFrame01_btn = new lib.eggcrackbutton();
	this.toFrame01_btn.name = "toFrame01_btn";
	this.toFrame01_btn.setTransform(318.85,448.3,0.6098,0.6128);
	new cjs.ButtonHelper(this.toFrame01_btn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.toFrame02_btn}]}).to({state:[{t:this.toFrame01_btn}]},1).wait(1));

	// branch
	this.instance = new lib.leaf();
	this.instance.setTransform(384.95,218.05,0.7049,0.774,0,0,0,-338.8,-144.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// coocon
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(430.05,271.9,0.3019,0.3002,0,0,0,245.1,365.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// moth
	this.instance_2 = new lib.fvcxvcx();
	this.instance_2.setTransform(320.05,142.55,0.3124,0.2783,0,0,0,269.4,-56.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgvA+QgegXgBgnQACgtAogXQAogWAoAaQAnAagEAtQgEAugrATQgRAHgPAAQgYAAgXgRg");
	this.shape.setTransform(1223.8686,562.9831);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#00B82B","#FFFFFF"],[0,1],765.8,175.3,765.8,175.3).s().p("AFpF+QgagBgYgKQgYgKgSgTIgFgHIgFgGIgFgGIgGgFIgFgFIgGgFIgDgEIgEgEIh0hVIhjhIQgzglg3giQg0ggg0geQg1gegzghIhOgxQgmgDgfgWQgZgRgQgaQgQgbgDgfQgEgfALgdQAKgcAVgWQAVgWAbgLQAegMAgABQAfACAfAGIAIADIAIAEIAHADIAIAEIAIAEIAHADQA+AmA9AoQAyAiA0AcQA4AeA1AlIBlBFQAwAgAuAiQAsAgArAiIANAIIAMAIIANAIIAMAJIAFAFIAFAEIAFAFIAFAGIAFAHIAEADIAFAFIAGAGIAFAGIAFAGIAJANIAFAGIAEAGIAFAGQATAhAAAmQAAAfgOAdQgMAZgVATQgUASgbAKQgWAIgXAAIgIgBgAl/hqIAAAAIgBAAg");
	this.shape_1.setTransform(765.8084,175.3024);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_2}]},1).wait(1));

	// text
	this.instance_3 = new lib.CachedBmp_2();
	this.instance_3.setTransform(116.45,31.35,0.5,0.5);

	this.line03_txt = new cjs.Text("Line Three", "bold 46px 'Arial'");
	this.line03_txt.name = "line03_txt";
	this.line03_txt.textAlign = "center";
	this.line03_txt.lineHeight = 53;
	this.line03_txt.lineWidth = 437;
	this.line03_txt.parent = this;
	this.line03_txt.setTransform(484.9,317.25,2.1618,1.1075);

	this.line02_txt = new cjs.Text("Line Two", "bold 45px 'Arial'");
	this.line02_txt.name = "line02_txt";
	this.line02_txt.textAlign = "center";
	this.line02_txt.lineHeight = 52;
	this.line02_txt.lineWidth = 436;
	this.line02_txt.parent = this;
	this.line02_txt.setTransform(473,185.7907,2.1782,0.8589);

	this.line01_txt = new cjs.Text("Line One", "bold 26px 'Arial'");
	this.line01_txt.name = "line01_txt";
	this.line01_txt.textAlign = "center";
	this.line01_txt.lineHeight = 31;
	this.line01_txt.lineWidth = 475;
	this.line01_txt.parent = this;
	this.line01_txt.setTransform(476.45,88.2,1.9908,2.1023);

	this.instance_4 = new lib.CachedBmp_1();
	this.instance_4.setTransform(251.8,348.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.line01_txt},{t:this.line02_txt},{t:this.line03_txt},{t:this.instance_3}]}).to({state:[]},1).wait(1));

	// background
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#00A3DE","#FFFFFF"],[0,1],-1294.6,-296.6,343.8,-296.6).s().p("EBHsBbSQgrgDgsgFQgqgEgrgIQgrgHgqgKQgpgLgqgNQgpgMgpgPQgogPgogSQhfgehcgnQhbgohWguQhYgvhYgwQhbgyhbgvQhegyhcg1Qhbg0hag5IithoQhSgxhUgvQhTgthSgwIijhiQhZg2hcgxQhZgwhYg0Qhcg2hcg4QhPgvhQgvIgTAYIgUAZIgTAZQhBBChJA4QhIA5hOAuQhOAvhUAjQhUAmhYAcQhdAfhgAPQhjAQhlACQhfAChfgKQhjgKhjgMQhXgKhVgPQhWgOhTgZQhlgfhjglIjLhLQhngnhlgpIiwhJIjMhUIjohjIjphkIjihjQhVglhUgmQgxBXg8BPQg8BPhGBGQhBBBhJA5QhIA4hPAvQhQAvhUAlQhUAlhYAbQhZAahaAOQhbAPhcACQhEADhDgGQhFgFhFgJQhHgJhHgMQg9gLg6gXQhjgkhfgsQg3gZg2gbQgtgfgsgiIidh5QhOg9hIhEQhDg/g9hEQgRgTgSgRQhHhEg8hNIiGirIiFirQhDhXg/hYIhniSQgzhIgwhKQg5hWgyhaQgig8gkg8Qg1hXgvhaQgphQgmhTQgshfgohgQgvhvgshwQgshwgWh2QgVh1gFh3QgFhmAEhlQADhjAOhiQAOhgAfhdQAdhXAlhVQAkhTAvhOQAuhOA4hJQA5hIBBhBQA5g5A+gzQA9gxBCgqQBCgqBGgkQBHgiBKgcQAygTAzgPIAJgbIAJgZIAKgbIALgaIALgbIALgaIAMgaIANgaIANgaIAOgaIAOgaQhZhBhZhAQhahAhag/Ii2h+QhYg7hVhAIimh5QhYg/hag+Ii4h+Ii3h+IidhtQhMg1hLg2IitiBQhYhDhWhEQhWhEhUhGQhHg5hBhAQhNhLhIhPQhLhThJhVQg4hAg2hDQg/hPg5hSQg1hMgvhNIgZgoIgYg4IgZg4IgYg5IgYg5IgYg4IgXg5IgLgdIgOg7QgHgegEgeIgJg9IgHg8IgGg9IgGg+IgGg9IgBgNIAGg/IAHg+IAHg/IAJg+IAJg/IAKg+IAGgeQAZhaAjhWQAlhVAuhSQAuhRA4hLQA3hLBAhCQBChFBJg6QBMg8BTg0QBTgyBZgoQBXgnBcgYQBMgUBMgRQAxgKAzgHQApgGAqAAIBqACQBPABBOALQBXALBWAOIB4AUIgCAAIgIAAIgQgDQBfARBfAQQBrASBrAQQBrAPBrATQBrASBqAWQBqAVBqAYIDUAuQBpAXBnAaIDNA0ICCAgQAThcAghZQAfhWAphSQAohRAzhMQAzhMA8hEQA9hHBFg+QBEg9BLg0QBLg1BQgqQBRgqBWggQA+gXBAgTIA9gIIA9gIIA+gIIA9gIIA+gIIA9gJIAfgEQBtAMBtAOQBpAPBoAVQA3ALAzAYQBeAsBfAqQBZAnBUAvQBYAzBWA2QBUA1BRA7ICkB7QBWBCBVBEQBHA4BGA6QBOBBBNBDQAqAlAnAoQBrACBqAAQBqABBpAGQBqAFBpAJQBpAIBoAFQBoAEBoAHQBsAHBsAMQBtANBtAOQBtAPBtARIC6AcIC7AcQBtAQBsAVQBnAVBnAXQBmAWBnAWQBZASBYAYQBpAeBoAhIDiBMIBwAmQBFg+BLg1QBLg0BRgqQBRgrBWghQBbgiBggWQBogYBqgIQBpgJBqAGQBpAHBpAWQBfATBdAfQBLAYBIAkQBJAjBGAsQBQAyBJA8QBHA4A+BCQBDBFA4BPQAzBHA1BEIB9CiQBDBaA5BhQA1BcAzBeQAzBgApBlQAjBVAiBXIASAsIATAXIAnAtIAoAsIApAqIAmAnIAnAlIATATQBRAuBJA7QBKA7A/BFQA/BFA3BJQA3BJAtBPQAtBPAjBUQAjBWAZBYQAbBhANBkQANBkgBBkQAABWgLBVQgKBVgUBUQgXBhglBdIAyB2IAxB1IAwB2IAwB3IAvB2IAvB2QBOBGBPBEQBPBDBIBLICWCbQBGBKBDBMQBEBNBABPICECgQBCBRBABRICECoIBvCNQA4BGA0BJQAjAzAbA3IAOAUIAZA7IAYA6IAZA7IAZA6IAZA7IAYA6IAHAOQAZBhAPBjQAQBpgBBpQAABqgPBoQgPBpgeBlQgaBZglBUQgkBUguBOQgvBOg4BIQg5BJhBBBQg4A4g9AxIgVARQgBBTgMBRQgOBYgXBXQgXBWggBTQgeBOgoBJQgoBKgvBEQgxBJg6BCQg5BBhBA7QhAA7hIAyQg0Amg3AfIg6AaIg7AYIg6AYIg7AaIg7AYIg6AZIgdAHIgeAHIg7AMIg6AKIg7AHIg6AGIgeABQgfBkgtBeQgqBXg1BRQgwBJg3BCQg4BCg/A8Qg/A7hFAzQhFAzhLArQhLAshPAiQhQAihTAZIgYAGIg8AIIg9AJIg8AIIg8AIIg8AIIg8AIIgeAEQgtAAgsgDgEBLkg7bIADAGIAEAEIAEAFIADAEIAEAFIABACIgDgGIgEgEIgEgGIgEgEIgEgFIAAgBg");
	this.shape_2.setTransform(416.4508,284.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999966").s().p("EhKhBPmQhggKhggJQhngKhmgPQhjgPhggdQhggdhdgkQhbgkhYgsQhYgshSgzQhUg0hNg8QhPg9hIhEQhKhGhBhOQg+hLg5hOQg8hVg2hZQg2hYgshdQgthfgahlQgZhogQhqIgejEQgPhigEhjQgFhhAHhhQAIhoAShmQAQhcAXhaQAPg8ATg7QiNAAiMgUIg2gJQhTgOhSgVQhtgchogoQhcgjhXgsQhYgshTg0IgKgGQhOgyhJg4QhOg8hIhEQhHhEhBhKQhThghGhpQg+hegzhjQg0hjgohpQgohpgchsQggh6gQh9QgOhwgChxQgBhVAGhUQAGhUANhUQAQhgAYhfQAZheAihcQAchPAkhMQAphZAyhUQAxhVA6hPQA6hQBBhJQBChKBJhDQBIhCBPg7QBNg7BUgyQBTgzBXgqQBYgqBbghQBbgiBegZQBegYBggQQBhgQBigGQA4gEA4AAIDlgbQBWgJBVgRICJgaICKgaIAigGQhihqhRh3QhBhfg2hlQg2hlgqhrQgkhdgbhhQgchggRhjQgShkgHhkQgHhlADhkQAChjANhiQAQh9Agh6QAPg8ATg6QAQgwASgvQAohpAzhjQA0hjA+heQBGhpBShgQBKhVBUhNQA+g5BDgzQBCg0BHgtQBSg1BYgtQBXgtBagkQBOgfBRgZQBdgcBggUQBhgTBigKQBigKBjACQBIABBIALQByASBzAJQBsAJBuAFQB3AGB4ADIDtAFQB6ACB5AAID0gBID0AAID0AAIDwAAIDuABQB1AAB0AEIDqAGID1AFID1ADID0ABIDyAAIDwACQB3ABB4AEQB4ADB3AGQB4AHB5AFQBYAEBZACIA8ABIDkAEQBxABByAAIDsAAIDPAAIAmABQB6AAB6ADID0AGQB5AEB6ADID0AEIDQAEIDLACIDHACQB0ABB0AFQBzAEB1ADIDvAFQB5ACB5ABQB1AAB1ACIDnAHQB1AFB2AGQB2AFB2ADQB1ACB0AFIDqAKIDyALQB2AGB2AJQByAIByAKQB5AKB4AOQB4AOB4AQIDxAgQBuAPBnApIB3AuQA6AWA5AYIB9A1IBxAyIBPAjIAUAJIgCgBIgGgCIgHgEIAUALIATALIATANQBfAwBXA/QBUA9BOBFQBaBRBTBYQBABCA2BJQAzBFArBJQAqBIAjBMQAlBOAgBRQAiBXAhBYIAUA2QAsCjARCpQAOCFgFCFQgECGgXCDQgUB0gbBzQgZBngnBiQgnBgg3BYIhwCtQg4BVhABPQhTBkheBYQhUBPhdBEIgvAiIASARIATARIATARIBoCHIBUBsIA+BRIA/BRQBMCEA5COQAsBvAfB0QAeBzAQB3QAOBqAEBqQADBtgIBtQgJBugVBsQgVBsggBpQggBpgrBlIgaA5QBUB7BBCHQAzBrAmBxQAnBxAZB0QAWBnALBoQALBoAABpQAABjgKBjQgKBhgTBhQgTBggdBeQgkB4g0BzQgtBmg5BhQg5BghDBaQhEBahNBSIgnApIiHBoIhsBTIhRA/IhRA+QiEBNiOA4QhvAth0AeQh0Aeh3ARQhqAOhqADQhyAEhxgIQhzgIhzgSQhzgShxgXQhygXhxgZQiGgeiJgLQiDgKiDgDIgsgBIjegDQiHgCiHABIkyAAIkRACIjMACIjOAEQh4ADh4AFIjwAMIjOAMQh4AHh4AKQh3AKh2ALIjsAYIjuAYIjvAZIjvAYIjvAYIjvAZIjvAaIjvAaIjsAcQhzANhzAQIh5ARIhzASIjsAkIjsAmIjsAnIjsAoIjrAqIjhAoIieAbIhGAMQh1AUh2ASQh2ARh3AQIjsAfIjtAcQh1ANh2AKQh2ALh2AHQh3AHh2ADQh2AEh3ABQh3ABh2gBQh4gBh3AJQhvAIhwADQhqAEhqgBQhpAAhqABIgQAAQgzAAgzgGgEhpIgZfIABAAIABAAIgCAAg");
	this.shape_3.setTransform(418.5491,304.1469);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#00B82B","#FFFFFF"],[0,1],71.5,365.6,71.5,365.6).s().p("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");
	this.shape_4.setTransform(121.5489,365.5528);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-220.1,20.1,1512.8999999999999,910);
// library properties:
lib.properties = {
	id: 'B04F47D4BE93D7419CC89770E7D86C61',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Haiku_atlas_1.png?1773611892370", id:"Haiku_atlas_1"},
		{src:"images/Haiku_atlas_2.png?1773611892371", id:"Haiku_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B04F47D4BE93D7419CC89770E7D86C61'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;