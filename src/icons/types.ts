/**
 * Props shared by all icon components.
 */
export interface IconProps {
  /**
   * Stroke color of the icon. Accepts any valid CSS color value.
   * @default "currentColor"
   */
  color?: string;
  /**
   * Width and height of the icon in pixels.
   * @default 24
   */
  size?: number;
  /**
   * Thickness of the icon strokes.
   * @default 2
   */
  strokeWidth?: number;
  /**
   * Whether to play the icon's entrance animation.
   * @default false
   */
  animate?: boolean;
  /**
   * Additional CSS classes to apply to the root `<svg>` element.
   */
  class?: string;
}
