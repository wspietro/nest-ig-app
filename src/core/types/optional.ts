/**
 * Make some property optional on type
 *
 * @example
 * ```typescript
 * type Post {
 *  id: string;
 *  name: string;
 *  email: string;
 * }
 *
 * Optional<Post, 'id' | 'email'>
 * ```
 * &: Represents the intersection of types.It combines the
 * properties from Pick<Partial<T>, K> (optional
 * properties) with the properties from Omit<T, K> (non-
 * optional properties).
 *
 **/

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>
