declare function confetti(options: {
    particleCount?: number;
    spread?: number;
    startVelocity?: number;
    gravity?: number;
    colors?: string[];
    shapes?: ('square' | 'circle' | 'star')[];
    scalar?: number;
}): void | Promise<void>;