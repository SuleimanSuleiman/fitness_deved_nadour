import axios from "axios";


export const fetchData = (base_url) => {

  return axios.request({
    url: `https://exercisedb.p.rapidapi.com/${base_url}`,
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0b2c22432amshfcaddc4be76cf21p1124f7jsn0b78fe5a37e8',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  })
}