import axios from "axios";

export const SimpleSearch=async(query)=>{
  return await axios.get(`https://api.coingecko.com/api/v3/coins/${query}`)

}
export const TopSeven=async()=>{
  return await axios.get('https://api.coingecko.com/api/v3/search/trending')
}
