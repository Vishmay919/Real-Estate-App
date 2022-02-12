import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url)=>{
    const {data} = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '256b08720fmsh89802f170294d0dp11b777jsn4ab8591bcb3f'
          }
    })
    return data;
}

