// const [saveCoins,{error,loading}] = useMutation(ADD_DATA);

// import { TopSeven } from "../utils/API";

// const [coinDesc, setCoinDesc] = useState([]);

// useEffect(() => {
//     window.addEventListener("load", handleLoad);
//     return () => window.removeEventListener("load", handleLoad);
//   });
//   useEffect(() => {
//     window.addEventListener("load", handleLoad);
//     return () => window.removeEventListener("load", handleLoad);
//   });

// const handleLoad = async () => {
//     const handleTop = await TopSeven();
//     const coinArray = [];
//     const arr1=[];
//     const { data } = handleTop;

//     const { coins } = data;
//     //console.log(data);
//     const x = coins;
//     //coinArray.push(x)
//     // console.log(x);
//     // console.log(coinArray);
//     const coinData = x.map((coin) => ({
//       name: coin.item.name,
//       id: coin.item.id,
//       image: coin.item.large,
//       graphData: coin.item.market_cap_rank,
//     }));
//     console.log(coinData);
//     setSearchedBooks(coinData);
  
//     const coinsId=coinData
//     //console.log(coinsId)
//     // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\START 2ND API FROM IDS IN TOPSEVEN
//     for(let i=0; i < coinsId.length; i++){
//       const dataLength=coinsId[i].id
//       //console.log(dataLength)
//       const response =await SimpleSearch(dataLength)
//       const resData=response.data
//       arr1.push(resData)
//       console.log(arr1)
//     }
//     const descData = arr1.map((coin) => ({
//       price: coin.market_data.current_price,
//       supply: coin.market_data.circulating_supply,
//       coinid: coin.id,
//       name:coin.name,
//       image: coin.image,
//       links: coin.links,
//       description: coin?.description ||'no description'
//     }));
//     setCoinDesc(descData)
//     const fucker=await saveCoins({
//       variables: { newCoin: { ...descData} },
//     })
//     console.log(descData)
      // const handleSaveBook = async (id) => {
  //   // find the book in `searchedBooks` state by the matching id
  //   const bookToSave = searchedCoins.find((book) => book.id === id);
  //   // get token
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }
  //   try {
  //     const data = await saveBook({
  //       variables: { savedBook: { ...bookToSave } },
  //     });
  //     if (loading) return "loading...";
  //     //const response = await saveBook(bookToSave, token);
  //     if (error) return `error ${error.message}`;

  //     // if book successfully saves to user's account, save book id to state
  //     setSavedBookIds([...savedBookIds, bookToSave.bookId]);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
//     // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\END 2ND API CALL\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//   };