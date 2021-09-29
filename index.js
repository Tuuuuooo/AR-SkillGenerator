var file = document.getElementById('file');
var canvas = document.getElementById('canvas');
var canvasWidth = 640;
var canvasHeight = 400;
var uploadImgSrc;
const skill_name = document.forms.parts.skill_name;
const timing = document.forms.parts.timing;
const judgement = document.forms.parts.judgement;
const target = document.forms.parts.target;
const range = document.forms.parts.range;
const cost = document.forms.parts.cost;
const sl_limit = document.forms.parts.sl_limit;
const terms_of_use = document.forms.parts.terms_of_use;
const effect = document.forms.parts.effect;
var tmp_skill_name = "";
var tmp_timing = "";
var tmp_judgement = "";
var tmp_target = "";
var tmp_range = "";
var tmp_cost = "";
var tmp_sl_limit = "";
var tmp_terms_of_use = "";
var tmp_effect = "";


// Canvasの準備
canvas.width = canvasWidth;
canvas.height = canvasHeight;
var ctx = canvas.getContext('2d');

// Canvas上に背景画像を表示
var img = new Image();
img.src = 'img/protyping_img2.png';
img.crossOrigin = 'Anonymous';
img.onload = function() {
    ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
}

function loadLocalImage(e) {
	//ファイル情報を取得
	var fileData = e.target.files[0];
	
	//画像ファイル以外は処理を止める
	if(!fileData.type.match('image.*')) {
		alert('画像を選択してください');
		return;
	}
	
	//FileReaderオブジェクトを使ってファイル読み込み
	var reader = new FileReader();
	//ファイル読み込みに成功した時の処理
	reader.onload = function() {
	    //Canvas上に表示する
	    uploadImgSrc = reader.result;
	    canvasDraw();
	}
	//ファイル読み込みを実行
	reader.readAsDataURL(fileData);
}

//ファイルが指定された時にloadLocalImage()を実行
file.addEventListener('change', loadLocalImage, false);

// Canvas上に画像を表示する
function canvasDraw(){
	// canvas内の要素をクリアする
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);

	// Canvas上に画像を表示
	var img = new Image();
	img.src = uploadImgSrc;
	img.onload = function(){
		ctx.drawImage(img, 0, 0, canvasWidth, this.height * (canvasWidth / this.width));
	
	// Canvas上にテキストを表示
        addText();
	
	// canvasを画像に変換
        var data = canvas.toDataURL();

        // 画像として出力
        var outputImg = document.createElement('img');
        outputImg.src = data;
        document.getElementById('result').appendChild(outputImg);
    
	}
}

// Canvas上にテキストを表示する(スキル名専用)
function addText_Skill_name(src, x, y, maxwd) {
	console.log("スキルadd");
    ctx.font = "bold 40px 'MS Pゴシック'";
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#002B69';
    ctx.fillText(src, x, y, maxwd);
	DLConvas();
}

// Canvas上のテキストを削除する(スキル名専用)
function delText_skill_name(src, x ,y, maxwd){
	ctx.save();
	ctx.globalCompositeOperation = 'copy';
	ctx.font = "bold 40px 'MS Pゴシック'";
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#002B69';
    ctx.fillText(src, x, y, maxwd);
	ctx.restore();
	ctx.save();
	ctx.globalCompositeOperation = 'destination-over';
	ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
	ctx.restore();
	DLConvas();
}

// Canvas上にテキストを表示する(汎用)
function addText(src, x, y, maxwd) {
	console.log("汎用add");
    ctx.font = "bold 20px 'MS Pゴシック'";
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#002B69';
    ctx.fillText(src, x, y, maxwd);
	DLConvas();
}

// Canvas上のテキストを削除する(汎用)
function delText(src, x ,y, maxwd){
	console.log("汎用del");
	ctx.save();
	ctx.globalCompositeOperation = 'copy';
	ctx.font = "bold 20px 'MS Pゴシック'";
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#002B69';
    ctx.fillText(src, x, y, maxwd);
	ctx.restore();
	ctx.save();
	ctx.globalCompositeOperation = 'destination-over';
	ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
	ctx.restore();
	DLConvas();
}

skill_name.addEventListener('change',()=>{
	var src = skill_name.value;
	var x = 170;
	var y = 50;
	var maxwd = 1000;
	if(src.length > tmp_skill_name.length){
		tmp_skill_name = src;
		addText_Skill_name(src, x, y, maxwd);
	}else{
		delText_skill_name(src, x, y, maxwd);
		tmp_skill_name = src;
	}
});

timing.addEventListener('change',()=>{
	var src = timing.value;
	var x = 270;
	var y = 105;
	var maxwd = 1000;
	if(src.length > tmp_timing.length){
		tmp_timing = src;
		addText(src, x, y, maxwd);
	}else{
		delText(src, x, y, maxwd);
		tmp_timing = src;
	}
});

judgement.addEventListener('change',()=>{
	var src = judgement.value;
	var x = 225;
	var y = 143;
	var maxwd = 1000;
	if(src.length > tmp_judgement.length){
		tmp_judgement = src;
		addText(src, x, y, maxwd);
	}else{
		delText(src, x, y, maxwd);
		tmp_judgement = src;
	}
});

target.addEventListener('change',()=>{
	var src = target.value;
	var x = 400;
	var y = 145;
	var maxwd = 1000;
	if(src.length > tmp_target.length){
		tmp_target = src;
		addText(src, x, y, maxwd);
	}else{
		delText(src, x, y, maxwd);
		tmp_target = src;
	}
});

range.addEventListener('change',()=>{
	var src = range.value;
	var x = 225;
	var y = 173;
	var maxwd = 1000;
	if(src.length > tmp_range.length){
		tmp_range = src;
		addText(src, x, y, maxwd);
	}else{
		delText(src, x, y, maxwd);
		tmp_range = src;
	}
});

cost.addEventListener('change',()=>{
	var src = cost.value;
	var x = 410;
	var y = 177;
	var maxwd = 1000;
	if(src.length > tmp_cost.length){
		tmp_cost = src;
		addText(src, x, y, maxwd);
	}else{
		delText(src, x, y, maxwd);
		tmp_cost = src;
	}
});

sl_limit.addEventListener('change',()=>{
	var src = sl_limit.value;
	var x = 250;
	var y = 205;
	var maxwd = 1000;
	if(src.length > tmp_sl_limit.length){
		tmp_sl_limit = src;
		addText(src, x, y, maxwd);
	}else{
		delText(src, x, y, maxwd);
		tmp_sl_limit = src;
	}
});

terms_of_use.addEventListener('change',()=>{
	var src = terms_of_use.value;
	var x = 260;
	var y = 235;
	var maxwd = 1000;
	if(src.length > tmp_terms_of_use.length){
		tmp_terms_of_use = src;
		addText(src, x, y, maxwd);
	}else{
		delText(src, x, y, maxwd);
		tmp_terms_of_use = src;
	}
});

effect.addEventListener('change',()=>{
	var src = effect.value;
	var x = 220;
	var y = 260;
	var maxwd = 1000;
	if(src.length > tmp_effect.length){
		tmp_effect = src;
		addText(src, x, y, maxwd);
	}else{
		delText(src, x, y, maxwd);
		tmp_effect = src;
	}
});

function DLConvas(){
	 // canvasを画像に変換
	var data = canvas.toDataURL();

	// DLリンクを表示
	$('#result').attr("href", data);
	$("#result").attr("download", "test.png");
	$('#result').text("画像をダウンロード");
}