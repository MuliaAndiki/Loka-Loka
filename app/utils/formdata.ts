export function objectToFormData(obj: Record<string, any>): FormData {
  const formData = new FormData();

  for (const key in obj) {
    if (obj[key] === undefined || obj[key] === null) continue;

    const value = obj[key];
    if (value instanceof File || value instanceof Blob) {
      formData.append(key, value);
    } else if (typeof value === 'object') {
      formData.append(key, JSON.stringify(value));
    } else {
      formData.append(key, String(value));
    }
  }

  return formData;
}
