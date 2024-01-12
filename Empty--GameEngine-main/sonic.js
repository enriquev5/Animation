class Sonic {
	constructor(game) {
		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./sonic.png"), 3.5, 5, 33, 46, 12, 0.2);

	};

	update() {

	};

	draw(ctx) {
		this.animator.drawFrame(this.game.clockTick, ctx, 25, 25);

	};
}