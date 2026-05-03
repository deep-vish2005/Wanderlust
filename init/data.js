const sampleListings = [
  {
    title: "Luxury Beachfront Villa",
    description:
      "Wake up to ocean views in this stunning beachfront villa. Perfect for a relaxing getaway with private access to the beach.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        filename: "img1",
      },
      {
        url: "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
        filename: "img2",
      },
      {
        url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
        filename: "img3",
      },
      {
        url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
        filename: "img4",
      },
      {
        url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
        filename: "img5",
      },
    ],
    price: 2500,
    location: "Goa",
    country: "India",
    owner: "69ea5200aecdf9a1189d463c",
  },
  {
    title: "Modern City Apartment",
    description:
      "Stay in the heart of the city in this sleek modern apartment with skyline views and easy access to nightlife.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
        filename: "img1",
      },
      {
        url: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
        filename: "img2",
      },
      {
        url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
        filename: "img3",
      },
      {
        url: "https://images.unsplash.com/photo-1493666438817-866a91353ca9",
        filename: "img4",
      },
      {
        url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
        filename: "img5",
      },
    ],
    price: 1800,
    location: "Mumbai",
    country: "India",
    owner: "69ea5200aecdf9a1189d463c",
  },
  {
    title: "Mountain Cabin Retreat",
    description:
      "Escape to the mountains in this cozy wooden cabin surrounded by nature. Ideal for peace and relaxation.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        filename: "img1",
      },
      {
        url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
        filename: "img2",
      },
      {
        url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
        filename: "img3",
      },
      {
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        filename: "img4",
      },
      {
        url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
        filename: "img5",
      },
    ],
    price: 1200,
    location: "Manali",
    country: "India",
    owner: "69ea5200aecdf9a1189d463c",
  },
  {
    title: "Desert Luxury Camp",
    description:
      "Experience the desert like never before with this luxury camp featuring traditional decor and modern comfort.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
        filename: "img1",
      },
      {
        url: "https://images.unsplash.com/photo-1499696010181-3d5a68c8e0c4",
        filename: "img2",
      },
      {
        url: "https://images.unsplash.com/photo-1476610182048-b716b8518aae",
        filename: "img3",
      },
      {
        url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
        filename: "img4",
      },
      {
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        filename: "img5",
      },
    ],
    price: 2000,
    location: "Jaisalmer",
    country: "India",
    owner: "69ea5200aecdf9a1189d463c",
  },
  {
    title: "Lake View Cottage",
    description:
      "Enjoy serene lake views from this charming cottage, perfect for couples and nature lovers.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        filename: "img1",
      },
      {
        url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
        filename: "img2",
      },
      {
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        filename: "img3",
      },
      {
        url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
        filename: "img4",
      },
      {
        url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
        filename: "img5",
      },
    ],
    price: 1500,
    location: "Udaipur",
    country: "India",
    owner: "69ea5200aecdf9a1189d463c",
  },

  {
    title: "Cliffside Ocean Villa",
    description:
      "Perched on a dramatic cliff, this villa offers breathtaking ocean views and luxury interiors.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
        filename: "img1",
      },
      {
        url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
        filename: "img2",
      },
      {
        url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
        filename: "img3",
      },
      {
        url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
        filename: "img4",
      },
      {
        url: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
        filename: "img5",
      },
    ],
    price: 3200,
    location: "Bali",
    country: "Indonesia",
    owner: "69ea5200aecdf9a1189d463c",
  },
  {
    title: "Snowy Alpine Chalet",
    description:
      "A cozy wooden chalet surrounded by snow-covered mountains, perfect for winter escapes.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        filename: "img1",
      },
      {
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        filename: "img2",
      },
      {
        url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
        filename: "img3",
      },
      {
        url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
        filename: "img4",
      },
      {
        url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
        filename: "img5",
      },
    ],
    price: 2800,
    location: "Zurich",
    country: "Switzerland",
    owner: "69ea5200aecdf9a1189d463c",
  },
  {
    title: "Glass House in Forest",
    description:
      "A modern glass house nestled in the forest, offering a seamless connection with nature.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
        filename: "img1",
      },
      {
        url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
        filename: "img2",
      },
      {
        url: "https://images.unsplash.com/photo-1493666438817-866a91353ca9",
        filename: "img3",
      },
      {
        url: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
        filename: "img4",
      },
      {
        url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
        filename: "img5",
      },
    ],
    price: 2100,
    location: "Oregon",
    country: "USA",
    owner: "69ea5200aecdf9a1189d463c",
  },
  {
    title: "Luxury Desert Villa",
    description:
      "Experience luxury in the desert with infinity pools and stunning sunset views.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
        filename: "img1",
      },
      {
        url: "https://images.unsplash.com/photo-1476610182048-b716b8518aae",
        filename: "img2",
      },
      {
        url: "https://images.unsplash.com/photo-1499696010181-3d5a68c8e0c4",
        filename: "img3",
      },
      {
        url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
        filename: "img4",
      },
      {
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        filename: "img5",
      },
    ],
    price: 2600,
    location: "Dubai",
    country: "UAE",
    owner: "69ea5200aecdf9a1189d463c",
  },
  {
    title: "Countryside Farmhouse",
    description:
      "A peaceful farmhouse surrounded by greenery, perfect for a quiet retreat.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        filename: "img1",
      },
      {
        url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
        filename: "img2",
      },
      {
        url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
        filename: "img3",
      },
      {
        url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
        filename: "img4",
      },
      {
        url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
        filename: "img5",
      },
    ],
    price: 900,
    location: "Tuscany",
    country: "Italy",
    owner: "69ea5200aecdf9a1189d463c",
  },
  {
    title: "Skyline Penthouse Suite",
    description:
      "Enjoy stunning skyline views from this luxurious penthouse in the city center.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
        filename: "img1",
      },
      {
        url: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
        filename: "img2",
      },
      {
        url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
        filename: "img3",
      },
      {
        url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
        filename: "img4",
      },
      {
        url: "https://images.unsplash.com/photo-1493666438817-866a91353ca9",
        filename: "img5",
      },
    ],
    price: 3500,
    location: "New York",
    country: "USA",
    owner: "69ea5200aecdf9a1189d463c",
  },

  {
    title: "Beachside Bamboo Hut",
    description:
      "Stay in a rustic bamboo hut just steps from the beach. Perfect for a peaceful and eco-friendly getaway.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        filename: "img1",
      },
      {
        url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
        filename: "img2",
      },
      {
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        filename: "img3",
      },
      {
        url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
        filename: "img4",
      },
      {
        url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
        filename: "img5",
      },
    ],
    price: 700,
    location: "Gokarna",
    country: "India",
    owner: "69ea5200aecdf9a1189d463c",
  },
  {
    title: "Heritage Haveli Stay",
    description:
      "Experience royal living in this beautifully restored haveli with traditional architecture and modern comforts.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
        filename: "img1",
      },
      {
        url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
        filename: "img2",
      },
      {
        url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
        filename: "img3",
      },
      {
        url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
        filename: "img4",
      },
      {
        url: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
        filename: "img5",
      },
    ],
    price: 2200,
    location: "Jaipur",
    country: "India",
    owner: "69ea5200aecdf9a1189d463c",
  },
  {
    title: "Treehouse in the Jungle",
    description:
      "Sleep among the trees in this unique jungle treehouse surrounded by lush greenery and wildlife.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
        filename: "img1",
      },
      {
        url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
        filename: "img2",
      },
      {
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        filename: "img3",
      },
      {
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        filename: "img4",
      },
      {
        url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
        filename: "img5",
      },
    ],
    price: 1400,
    location: "Wayanad",
    country: "India",
    owner: "69ea5200aecdf9a1189d463c",
  },
  {
    title: "Minimalist Studio Apartment",
    description:
      "A clean and modern studio apartment with minimalist design, ideal for business travelers.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
        filename: "img1",
      },
      {
        url: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
        filename: "img2",
      },
      {
        url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
        filename: "img3",
      },
      {
        url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
        filename: "img4",
      },
      {
        url: "https://images.unsplash.com/photo-1493666438817-866a91353ca9",
        filename: "img5",
      },
    ],
    price: 1100,
    location: "Bangalore",
    country: "India",
    owner: "69ea5200aecdf9a1189d463c",
  },
  {
    title: "Luxury Island Resort Villa",
    description:
      "Private villa in a luxury island resort with infinity pool and breathtaking sea views.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        filename: "img1",
      },
      {
        url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
        filename: "img2",
      },
      {
        url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
        filename: "img3",
      },
      {
        url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
        filename: "img4",
      },
      {
        url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
        filename: "img5",
      },
    ],
    price: 5000,
    location: "Maldives",
    country: "Maldives",
    owner: "69ea5200aecdf9a1189d463c",
  },
  {
    title: "Rustic Lakeside Cabin",
    description:
      "A charming wooden cabin by the lake, perfect for fishing, kayaking, and relaxing evenings.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        filename: "img1",
      },
      {
        url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
        filename: "img2",
      },
      {
        url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
        filename: "img3",
      },
      {
        url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
        filename: "img4",
      },
      {
        url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
        filename: "img5",
      },
    ],
    price: 1300,
    location: "Nainital",
    country: "India",
    owner: "69ea5200aecdf9a1189d463c",
  },
];

module.exports = { data: sampleListings };
