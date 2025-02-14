
export enum VarName {
    MovementState = 'MovementState',
    HasMovementInput = 'HasMovementInput',
    Speed = 'Speed',
    Gait = 'Gait',

    //#region Grounded
    ShouldMove = 'ShouldMove',
    WalkRunBlend = 'WalkRunBlend',
    StrideBlend = 'StrideBlend',
    VelocityBlendF = 'VelocityBlendF',
    VelocityBlendB = 'VelocityBlendB',
    VelocityBlendL = 'VelocityBlendL',
    VelocityBlendR = 'VelocityBlendR',
    MovementDirection = 'MovementDirection',
    //#endregion

    //#region In Air
    Jumped = 'Jumped',
    JumpPlayRate = 'JumpPlayRate',
    JumpWalkRunBlend = 'JumpWalkRunBlend',
    LandHeavyLightBlend = 'LandHeavyLightBlend',
    LandHeavyLightBlend_Movement = 'LandHeavyLightBlend_Movement',
    JumpLandBlend = 'JumpLandBlend',
    FallLoopBlend = 'FallLoopBlend',
    FlailBlend = 'FlailBlend',
    FallLandBlend = 'FallLandBlend',
    //#endregion

    PlayMantle1mLH = 'Play_Mantle_1m_LH',
    PlayMantle2m = 'Play_Mantle_2m',
    MantleStartPosition = 'MantleStartPosition',
    MantlePlayRate = 'MantlePlayRate',
}