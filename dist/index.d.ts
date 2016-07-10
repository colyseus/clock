declare class Clock {
    running: boolean;
    deltaTime: number;
    currentTime: number;
    elapsedTime: number;
    protected now: Function;
    constructor(autoStart?: boolean);
    start(): void;
    stop(): void;
    tick(newTime?: any): void;
}
export = Clock;
