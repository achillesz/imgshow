/**
 * Created by wzy.wang on 2014/6/20.
 */
var ImgShow = function(obj){

	this.imgs = obj.imgs || []; // 图片列表
	this.alpha = obj.alphaID; // 遮罩层ID
    this.data = obj.data || {}; // 其它属性
    this.box = obj.boxID || 'showImgBox'; // 容器ID
    this.lBtn = obj.lBtnCLASS;      // 左按钮类名
    this.rBtn = obj.rBtnCLASS; // 右按钮类名
    this.index = obj.index || 0;// 当前显示图片索引
    this.oalpha = $('#'+ this.alpha);
    this.obox = $('#' + this.box);
    this.olBtn = this.obox.find('.' + this.lBtn); // 左按钮
    this.orBtn = this.obox.find('.' + this.rBtn); // 右按钮
    this.oTd = this.obox.find('td');
    this.img = null;
    this.loadingImg = 'http://source.qunar.com/piao/images/loading_camel.gif';
    this.init();
};
ImgShow.prototype = {
    init:function(){
        $.extend(this,this.data);
        this.attachEvent();
        this.doIt();
    },
    setProperty:function(att,val){
        this[att] = val;
    },
    attachEvent:function(){
        var me = this;
        this.olBtn.click(function(){
            me.index--;
            if(me.index === 0){

            }
        });

        this.orBtn.click(function(){
            me.index++;
        });
    },
    setPosition:function(){},
    doIt:function(){
        var img = this.img = new Image(),
            me = this;
        img.src = this.imgs[this.index];
        if(img.complete){
            me.status = 'loaded'
            me.oTd.html('').append(this.img);
        }

        img.onload = function(){
            me.status = 'loaded';
            me.oTd.html('').append(me.img);
        }
        img.onerror= function(){
            me.status == "error"

        }
        if(me.status !== ('loaded' || 'error')){
            var loading = $('<img>').attr('src',this.loadingImg);
            me.oTd.html('').append(loading);
        }

    }
};


