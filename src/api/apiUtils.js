export async function handleResponse(response) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    //so the server-side validation error has occured
    //server side validation return string error message so convert it as test instead of json
    const error = await response.error.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok");
}

export async function handleError(error) {
  console.error("API call failed." + error);
  throw error;
}
