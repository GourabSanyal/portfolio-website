export const projects = [
  {
    title: 'Amazon Clone',
    description: "Using React, Node.js, Express & Firebase. This is a Full Stack Application. Where you can Sign-up, Log-in, add items to the basket, pay, and checkout. Payment gateway integrated with Stripe API, due to some Indian regulation laws I am still working on the payment gateway, and the deployment of this app",
    image: 'images/amazon.png',
    tags: ['Firebase', 'Express', 'React', 'Node'],
    visit: 'https://github.com/GourabSanyal/amazon-clone-react',
    id: 0,
  },
  {
    title: 'Birthday Reminder',
    description:"A dummy data is fetched and rendered at the front end, where each array of data contains an id, name, age, image. I have used a simple functionality with useState hook to render the raw data in a form of a list. As you clear the data and refresh the page, you will show those fetched data again",
    image: '/images/1.png',
    tags: ['React', 'JavaScript'],
    source: 'https://stoic-curran-7f33cb.netlify.app',
    visit: 'https://github.com/GourabSanyal/birthday-reminder-react',
    id: 1,
  },
  {
    title: 'Menu',
    description: "A dataset with different food items, each of them containing six parameters is being fetched, restructured, and set to different components. As you click on all you can see every food item which is available, also other options such as 'Breakfast', 'Lunch', 'Shakes' are there to differentiate varieties of food according to the time of the day and their types",
    image: '/images/3.png',
    tags: ['React', 'JavaScript'],
    source: 'https://jolly-nightingale-cb3d85.netlify.app',
    visit: 'https://github.com/GourabSanyal/menu-react',
    id: 2,
  },
  {
    title: 'Cart',
    description: "Made with useReducer, useContext. Fetched data is rendered on the web app. You can increase and decrease the number of items on the cart and at the same time delete all the items in the cart",
    image: '/images/cart.png',
    tags: ['React', 'JavaScript'],
    source: 'https://github.com/GourabSanyal/chat-app-react',
    visit: 'https://gracious-kepler-7650ba.netlify.app/',
    id: 4,
  },
  {
    title: 'Color Picker',
    description: "If you put a value of a certain color, this app will return you values of different shades of color of the input given. Built with useReducer and useContext hook from React.",
    image: '/images/5.png',
    tags: ['React', 'JavaScript'],
    source: 'https://friendly-varahamihira-319bc9.netlify.app/',
    visit: 'https://github.com/GourabSanyal/colour-generator-react',
    id: 5,
  },
];

export const TimeLineData = [
  { year: 2017, text: 'Started my journey', },
  { year: 2018, text: 'Worked as a freelance developer', },
  { year: 2019, text: 'Founded JavaScript Mastery', },
  { year: 2020, text: 'Shared my projects with the world', },
  { year: 2021, text: 'Started my own platform', },
];