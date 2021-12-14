import axios from "axios";

export const SimpleSearch=async(query)=>{
  return await axios.get(`https://api.coingecko.com/api/v3/coins/${query}?sparkline=true`)

}
export const TopSeven=async()=>{
  return await axios.get('https://api.coingecko.com/api/v3/search/trending')
}


export const GraphData=async(query)=>{
  	return await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=binancecoin&order=market_cap_desc&per_page=100&page=1&sparkline=true")
    }