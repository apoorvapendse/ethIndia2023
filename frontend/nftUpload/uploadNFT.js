import { NFTStorage } from 'nft.storage';

const NFT_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGZiNjBlQ0ExNzZiNWFEOTE5MUNlRTQxZDNFMkFjQ2YwQmEwNDUxOWIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTcwMjA5NzY5MTI2MiwibmFtZSI6ImV0aGluZGlhMjAyMyJ9.1VVlEqWtKT_mSvc5e8MfF0EAK1DwLw735qowWzpcEsE';

async function getImage(_imageURL) {
  const imageLink = _imageURL;
  const r = await fetch(imageLink);
  if (!r.ok) {
    throw new Error(`error fetching image: [${r.statusCode}]: ${r.status}`);
  }
  return await r.blob(); // Await the blob here
}

export default async function minNFT(
  _imageURL,
  nftName,
  nftDesc,
  _hackathonName,
  _hackathonID,
  _participantName,
  _participantID
) {
  const image = await getImage(_imageURL); // Await the image here
  const nft = {
    image,
    name: nftName,
    description: nftDesc,
    HackathonName: _hackathonName,
    HackathonID: _hackathonID,
    participantName: _participantName,
    participantID:_participantID
  };

  const client = new NFTStorage({
    token: NFT_STORAGE_TOKEN,
    retry: {
      retries: 5, // Adjust the number of retries as needed
      factor: 2,
      minTimeout: 1000,
      maxTimeout: 5000,
    },
  });
  

  const metadata = await client.store(nft);

  console.log('NFT data stored!');
  console.log('Metadata URI: ', metadata.url);
  return metadata.url;
}


