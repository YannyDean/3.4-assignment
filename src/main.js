import * as weatherlib from '@cicciosgamino/openweather-apis';
import Input from "input";
const key = '3aad45db1823692854e69062c76be1ad';

async function getClient(zipCode) {
  const client = await (new weatherlib.AsyncWeather());
  client.setLang('en');
  client.setApiKey(key);
  client.setZipCodeAndCountryCode(zipCode, 'US');
  return client;
}

const zipcode = await Input.text("What is your zipcode?")
const client = await getClient(zipcode);
const forecast = await client.getDescription();
console.log(lightrain);

