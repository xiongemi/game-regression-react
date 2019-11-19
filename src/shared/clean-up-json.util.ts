/**
 * Clean up json by removing key with null or undefined value
 * @param json {Record<string, any>} json with only 1 level key/value
 */
export function cleanUpJson(json: Record<string, any>) {
  for (const propName in json) {
    if (json[propName] === null || json[propName] === undefined) {
      delete json[propName];
    }
  }
}
