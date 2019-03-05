// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var glb = require("glb");
var Chess = require("chess");
cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },

        //qi ge
        chessGrid: {
            default: null,
            type : [cc.Sprite],
        },

        chessNum:{
            default: 16,
        },

        chessMap:{
            default:null,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        this.chessMap = [this.chessNum];

        this.initChessMap();


    },

    initChessMap () {

        var temp = [];
        for (var i = 0; i < this.chessNum; i++) {
            temp.push(i);
        }

        for (var i = 0; i < this.chessNum; i++) {
            var a1 = Math.random() ;
            var a2 = (temp.length - 1);
            //var a = parseInt(Math.random() * temp.length);
            var a = parseInt(a1*a2);
            this.chessMap[i] = temp[a];
            temp.splice(a,1);
        }


    },

    putChessInMap () {
        for (const chess in chessMap) {

        }
    },

    start () {

    },

    // update (dt) {},
});
