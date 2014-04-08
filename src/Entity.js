 var	b2Vec2		= Box2D.Common.Math.b2Vec2,
                    b2BodyDef	= Box2D.Dynamics.b2BodyDef,
                    b2Body		= Box2D.Dynamics.b2Body,
                    b2FixtureDef	= Box2D.Dynamics.b2FixtureDef,
                    b2World		= Box2D.Dynamics.b2World,
                    b2PolygonShape	= Box2D.Collision.Shapes.b2PolygonShape,
                    b2CircleShape	= Box2D.Collision.Shapes.b2CircleShape;
 var b2Unit = 30;

var Entity = Class.create({
    health:1,
    _currX:0,
    _currY:0,
    scale:0.1,
    pSprite:null,
    _body:null,

    initialize: function() {
    },
    setPosition:function(x,y){
        this._currX = x;
        this._currY = y;
    },
    moveSprite:function(x,y)
    {
        if(this._body)
            this._body.SetLinearVelocity(new b2Vec2(x/b2Unit,y/b2Unit));
    },

    getScale:function()
    {
        return this.scale;
    },

    setNewScale:function(nScale)
    {
        this.scale = nScale;
    },

    getSprite:function(ctx)
    {
            return this.pSprite;
    },

    getHealth:function()
    {
        return this.health;
    },

    getX:function()
    {
        return this._currX;
    },

    getY:function()
    {
        return this._currY;
    },

    update:function()
    {
        this.redraw();
    },

    redraw:function(){
        var ctx = document.getElementById('gameCanvas').getContext('2d');
        ctx.drawImage(this.getSprite(),this._currX - this.pSprite.width/2, this._currY - this.pSprite.height/2, this.pSprite.width, this.pSprite.height);
    },

    onCollide:function(ent)
    {}

});