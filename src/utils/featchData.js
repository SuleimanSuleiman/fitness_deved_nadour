import axios from "axios";

export const fetchData = async (query) => {

const options = {
  method: 'GET',
  url: `https://youtube-search-and-download.p.rapidapi.com/search?${query}`,
  params: {
    query: 'rick roll',
    next: 'EogDEgVoZWxsbxr-AlNCU0NBUXRaVVVoeldFMW5iRU01UVlJQkMyMUlUMDVPWTFwaWQwUlpnZ0VMWW1VeE1rSkROWEJSVEVXQ0FRdFZNMEZUYWpGTU5sOXpXWUlCQzJaaGVrMVRRMXBuTFcxM2dnRUxaV3hrWldGSlFYWmZkMFdDQVExU1JGbFJTSE5ZVFdkc1F6bEJnZ0VMT0hwRVUybHJRMmc1Tm1PQ0FRc3pOMFU1VjNORWJVUmxaNElCQzJGaFNXcHpPRXN6YjFsdmdnRUxaMmRvUkZKS1ZuaEdlRldDQVF0clN6UXlURnB4VHpCM1FZSUJDME42VHpOaFNXVXdVbkJ6Z2dFTFNVNHdUMk5WZGtkaU5qQ0NBUXRSYTJWbGFGRTRSRjlXVFlJQkMyWk9NVU41Y2pCYVN6bE5nZ0VMZEZac1kwdHdNMkpYU0RpQ0FRdGZSQzFGT1Rsa01XSk1TWUlCQzJoQlUwNVRSSFZOY2pGUmdnRUxkREEzTVZkdE5EVnhWMDAlM0QYgeDoGCILc2VhcmNoLWZlZWQ%3D',
    hl: 'en',
    gl: 'US',
    upload_date: 't',
    type: 'v',
    duration: 's',
    features: 'li;hd',
    sort: 'v'
  },
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': '0b2c22432amshfcaddc4be76cf21p1124f7jsn0b78fe5a37e8',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


try {
    const response = await axios.request(options);
  console.log(response.data);
  return response.data;
  } catch (error) {
    console.error(error);
  }
}