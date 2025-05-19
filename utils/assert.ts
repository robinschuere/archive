const DEFAULT_MESSAGE = 'unknown assertion error'

export function assert (expression: unknown, message?: string): asserts expression is true {
  if (!expression) {
      throw new Error(message || DEFAULT_MESSAGE)
  }
}
