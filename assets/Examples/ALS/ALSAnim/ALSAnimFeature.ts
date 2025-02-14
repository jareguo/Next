import { animation, Node, _decorator } from "cc";
import { ALSCharacterInfo } from "../ALSCharacterInfo";
import { UNIT_SCALE_ALS_TO_CC } from "../Utility/UnitConversion";

const { ccclass, property } = _decorator;

@ccclass('ALSAnimFeature')
export class ALSAnimFeature {
    @property({ visible: false })
    public enabled = true;

    @property({})
    public debug = false;

    public onStart() {
    }

    public onUpdate(deltaTime: number) {
    }

    public check() {
        return true;
    }

    public _init(node: Node, characterInfo: ALSCharacterInfo, animationController: animation.AnimationController) {
        this._node = node;
        this._characterInfo = characterInfo;
        this._animationController = animationController;
    }

    protected get node() {
        return this._node;
    }

    protected get characterInfo() {
        return this._characterInfo;
    }

    protected get animationController() {
        return this._animationController;
    }

    protected get shouldMove() {
        const { characterInfo } = this;
        return (characterInfo.isMoving && characterInfo.hasMovementInput) || characterInfo.speed > (150 * UNIT_SCALE_ALS_TO_CC);
    }

    private declare _node: Node;

    private declare _characterInfo: ALSCharacterInfo;

    private declare _animationController: animation.AnimationController;
}
