import { Vec3 } from 'cc';
import { _decorator, Node } from 'cc';
import { UNIT_SCALE_ALS_TO_CC } from './Utility/UnitConversion';
const { ccclass, property } = _decorator;

@ccclass('CharacterControllerFallingSimulation')
export class CharacterControllerFallingSimulation {
    @property
    public mass = 1.0;

    @property
    public gravity = 9.18;

    get falling() {
        return this._falling;
    }

    get velocity() {
        return this._falling ? this._velocity : 0.0;
    }

    get potentialVelocity() {
        return this._velocity;
    }

    get acceleration() {
        return this._falling ? -this.gravity : 0.0;
    }

    public declare node: Node;

    start() {

    }

    update(deltaTime: number) {
        if (!this._falling) {
            this._velocity = 0.0;
        }
        this._velocity += -this.gravity * deltaTime;
    }

    public feedbackIsOnGrounded(v: boolean) {
        if (v) {
            this._velocity = 0.0;
            this._falling = false;
        } else {
            this._falling = true;
        }
    }

    public jump() {
        if (!this._falling) {
            this._jump();
        }
    }

    private _falling = false;
    private _velocity = 0.0;
    private _isGrounded = true;

    private _jump() {
        if (this._falling) {
            return;
        }

        this._falling = true;

        this._velocity = 600 * UNIT_SCALE_ALS_TO_CC;
    }
}


