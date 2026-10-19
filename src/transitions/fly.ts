import type { TransitionAnimationPair, TransitionDirectionalAnimations } from 'astro';

interface FlyOptions {
	delay?: number;
	duration?: number;
}

// Svelte's `cubicOut` (t => --t * t * t + 1) as a CSS easing curve.
const cubicOut = 'cubic-bezier(0.215, 0.61, 0.355, 1)';

/**
 * Astro port of Svelte's `fly` transition.
 *
 * The old page flies out to an offset while fading out; once it has finished,
 * the new page flies in from an offset while fading in (the two never overlap,
 * so the total time is `2 * duration + delay`). Offsets are set separately via
 * `--fly-in-x`/`--fly-in-y` and `--fly-out-x`/`--fly-out-y` (see the
 * keyframes in Layout.astro).
 */
export function fly({ delay = 0, duration = 400 }: FlyOptions = {}): TransitionDirectionalAnimations {
	const animation: TransitionAnimationPair = {
		old: {
			name: 'fly-out',
			delay: '0ms',
			duration: `${duration}ms`,
			easing: cubicOut,
			fillMode: 'both',
		},
		new: {
			name: 'fly-in',
			// Wait for the old page to finish flying out before flying in.
			delay: `${duration + delay}ms`,
			duration: `${duration}ms`,
			easing: cubicOut,
			fillMode: 'both',
		},
	};
	// Svelte's fly has no notion of direction, so back/forward behave the same.
	return { forwards: animation, backwards: animation };
}
