import * as createjs from 'createjs-module';
import { FlowItemData } from './graph';

export class FlowItem {
  x: any;
  y: any;
  color: string;
  background: string;
  alpha: number;
  radius: any;
  text: any;
  link: string;
  font: string;
  fontSize: string;
  strokeWidth: number;
  circle: any;
  textShape: any;
  listener: any;
  originalColor: any;
  loadingAnimation: any;
  data: FlowItemData;
  id: string;

  constructor(x, y, data, radius, listener) {
    this.x = x;
    this.y = y;

    this.color = "black";
    this.background = "blue";
    this.alpha = 1;
    this.radius = radius || 40;
    this.text = data.name || data.id || "Hello";
    this.id = data.id;
    this.link = "#";
    this.font = "Arial";
    this.fontSize = "16px";
    this.strokeWidth = 2;

    this.circle = new createjs.Shape();
    this.textShape = new createjs.Text();

    if (data.data) {
      this.data = data.data;
    }

    this.listener = listener || function () {/*override this function*/ };

    // Todo allow parametrization on the styles

    var that = this;
    var onclick = function () {
      console.log("click");
      // TODO add an handler
    };
/*
    var onmouseover = function () {
      that.originalColor = that.color;
      that.color = "green";
      that.updateShape();
    };

    var onmouseout = function () {
      that.color = that.originalColor || "black";
      that.updateShape();
    };
*/
    this.circle.addEventListener("click", onclick);
    this.textShape.addEventListener("click", onclick);
    this.circle.addEventListener("mouseout", onmouseout);
    this.textShape.addEventListener("mouseout", onmouseout);
    this.circle.addEventListener("mouseover", onmouseover);
    this.textShape.addEventListener("mouseover", onmouseover);

  }

  refresh() {
    this.circle.graphics.clear();
    this.circle.graphics.setStrokeStyle(this.strokeWidth).beginStroke(this.color).beginFill(this.background).drawCircle(0, 0, this.radius);
    this.circle.x = this.getLocation().x;
    this.circle.y = this.getLocation().y;
    this.circle.alpha = this.alpha;

    this.textShape.text = this.text;
    this.textShape.color = this.color;
    this.textShape.font = this.fontSize + " " + this.font;

    var textWidth = this.textShape.getBounds().width;
    this.textShape.x = this.x + this.radius - (textWidth / 2);
    this.textShape.y = this.y + (this.radius * 2.2);
    this.textShape.alpha = this.alpha;

    this.loadingAnimation = this.loadingAnimation || this._getLoadingAnimation();
  };

  getLocation() {
    return { x: this.getX(), y: this.getY() };
  };

  getX() {
    return this.x + this.radius;
  };

  getY() {
    return this.y + this.radius;
  };

  setX(x) {
    this.x = x - this.radius;
  };

  setY(y) {
    this.y = y - this.radius;
  };

  updateShape() {
    this.refresh();
    this.listener();
  };

  getDrawableItems() {
    return [this.circle, this.textShape];
  };

  toggleFlashing() {
    var isPaused = this.loadingAnimation._paused;
    this.loadingAnimation.setPaused(!isPaused);
  };

  _getLoadingAnimation() {
    var y = this.getLocation().y;
    var distance = this.radius / 2;

    var anim = createjs.Tween.get(this.circle, { loop: true, paused: true })
      // .to({ y: y}, 100,           createjs.Ease.getPowIn(2.2))
      .to({ y: y - distance }, 300, createjs.Ease.getPowIn(2))
      .to({ y: y + distance }, 300, createjs.Ease.getPowIn(2))
      .to({ y: y }, 100);
    // .wait(100);
    anim.setPaused(true);
    return anim;
  }
}