const db = require('../config/connection');
const { User,Coin, Graph } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const { default: axios } = require('axios');

 const SimpleSearch=async(query)=>{
  return await axios.get(`https://api.coingecko.com/api/v3/coins/${query}?sparkline=true`)

}
 const TopSeven=async()=>{
  return await axios.get('https://api.coingecko.com/api/v3/search/trending')
}


const NewNews=async()=>{
    const baseURL=` https://api.thenewsapi.com/v1/news/all?api_token=y2BlCaWBZQtxhRfyalfZ5Y0gHAsOmPv0OoZ2dO4n&search=crypto|usd`
    return await axios.get(baseURL)
    // axios.get(baseURL).then((response) => {
      //const newNews=response.data
      //const cunt=newNews.data.data
    // const y=newNews.map((coin)=>({
    //   title:coin.title
    // }))
// console.log(newNews)
   //return newNews
      
   
//})
}
const Bigger=async()=>{
  try{
  const resData= await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h%2C7d`)
  //console.table(resData.data)
const {data}=resData
//console.log(data)
  }catch(err){
    console.table(err)
  }
}
Bigger()






db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Coin.deleteMany({});
    await Graph.deleteMany({});
    await User.create(profileSeeds);
    arr1=[]
    arr2=[]

    const topCoins=await TopSeven();
    const {data}=topCoins
    const {coins}=data
    //console.log(coins)
    const coinData = coins.map((coin) => ({
      name: coin.item.name,
      id: coin.item.id,
      image: coin.item.large,
      thumb:coin.item.thumb,
      market_rank: coin.item.market_cap_rank,
    }));


                                      
  ////////////////////////////////////////////////SEARCH BY ID//////////////////////////////
    for(let i=0; i < coinData.length; i++){
      const dataLength=coinData[i].id
      //console.log(dataLength)
      const response =await SimpleSearch(dataLength)
      const resData=response.data
      arr1.push(resData)
     // const coins=resData[0]
      //console.log(coins)
    }


    const descData = arr1.map((coin) => ({
      price: coin.market_data.current_price.usd,
      supply: coin.market_data.circulating_supply,
      coinId: coin.id,
      name:coin.name,
      images: coin.image.large,
      links: coin.links.homepage,
      description: coin.description.en,
      //graphData:coin.market_data.sparkline_7d,
      [Symbol.iterator]() {
        let values = Object.values(this);
        let index = 0;
        return {
          next() {
            if (index < values.length) {
              let val = values[index];
              index++;
              return { value: val, done: false };
            } else return { done: true };
          }
        };
      }
    }));
     //console.table(descData)
    await Coin.create(descData)

    const newsyBoy=await NewNews()
    const coocoo=newsyBoy.data.data
    //const cu=coocoo.title
    const newspoo=coocoo.map((art)=>({
      title:art.title,
      categories:art.categories,
      image:art.image_url,
      date:art.published_at,
      source:art.source,
      url:art.url,
      snip:art.snippet,
      desc:art.description || 'none provided'
    }))
    console.log(newspoo)
    await Graph.create(newspoo)

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
