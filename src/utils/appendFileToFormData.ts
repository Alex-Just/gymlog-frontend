export type FileData = {
  uri: string;
  type: string;
  name: string;
};

/**
 * Appends a file to the FormData object with type safety.
 * @param formData - The FormData object.
 * @param name - The name of the form field.
 * @param file - The file data object containing uri, type, and name.
 */
export function appendFileToFormData(
  formData: FormData,
  name: string,
  file: FileData,
) {
  if (file.uri) {
    formData.append(name, {
      uri: file.uri,
      type: file.type,
      name: file.name,
    } as unknown as Blob);
  }
}
