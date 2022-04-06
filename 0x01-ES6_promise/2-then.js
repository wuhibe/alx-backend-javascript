export default function handleResponseFromAPI(promise) {
  promise
    .then(() => { console.log('Got a response from the API'); })
    .then({ status: 200, body: 'Success' })
    .catch(Error());
}
