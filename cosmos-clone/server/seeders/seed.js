const db = require('../config/connection');
const { User,Coin } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const axios=require( "axios");

 const SimpleSearch=async(query)=>{
  return await axios.get(`https://api.coingecko.com/api/v3/coins/${query}`)

}
 const TopSeven=async()=>{
  return await axios.get('https://api.coingecko.com/api/v3/search/trending')
}

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Coin.deleteMany({})
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
      market_rank: coin.item.market_cap_rank,
    }));
    for(let i=0; i < coinData.length; i++){
      const dataLength=coinData[i].id
      //console.log(dataLength)
      const response =await SimpleSearch(dataLength)
      const resData=response.data
      arr1.push(resData)
      //console.log(arr1)
    }
    const descData = arr1.map((coin) => ({
      price: coin.market_data.current_price.usd,
      supply: coin.market_data.circulating_supply,
      coinid: coin.id,
      name:coin.name,
      images: coin.image.large,
      links: coin.links.homepage,
      description: coin.description.en
    }));
     console.table(descData)
    await Coin.create(descData)


    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
