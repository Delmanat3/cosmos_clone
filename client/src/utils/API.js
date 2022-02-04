import axios from "axios";

export const SimpleSearch=async(query)=>{
  return await axios.get(`https://api.coingecko.com/api/v3/coins/${query}?sparkline=true`)

}
export const Times=async(query)=>{
  return await axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=crypto&api-key=ALH55qxTz4oYfouvhFQ6TKWpoUcZOpvI')
}
export const TopSeven=async()=>{
  return await axios.get('https://api.coingecko.com/api/v3/search/trending')
}

export const CuckCuck=async()=>{
  return await axios.get(`https://api.marketaux.com/v1/news/all?symbols=TSLA%2CAMZN%2CMSFT&filter_entities=true&language=en&api_token=PmEilmL1uYjduOn8qKZvY3fIDy9jpUXvb1Ecnj5f`)
}

export const GraphData=async(query)=>{
  	return await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=binancecoin&order=market_cap_desc&per_page=100&page=1&sparkline=true")
    }