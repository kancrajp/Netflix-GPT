# Netflix GPT

- Launch project using create-react-app
- Configure Tailwind CSS
- Build Header
- Routing
- Create Login Page
- Create Sign Up Page
  - Form Validation (useRef Hook)
- Firebase for authentication
  - Firebase setup
  - deploy app in production
- Create Sign up user account

- Implement Sign In user API
- Created Redux Store with user slice
- Implement Sign Out
- Updated Profile API
- Build Movies - fetch movies from TMDB

# Bug fix

- Sign up dosplay name and profile photo
- if the user is not logged In then redirect to login page and vice versa

- unsubscribe to the unAuthstatechange callback
- add hard coded values to the constant files

- register for TMDB website and craete an & get access token
- get data from the get now playing movies list API
- Created Custom Hooks from now playing movies
- created movie slice
- update the store with movie data
- created main and seondary container
- fetch data for trailer video
- update the store with trailer video data and embebed you tube data video
  and make it autoplay
- Tailwind CSS to style the containers
- Build secondary component

  - Build movie card
  - Build movie list

- TMDB image CDN
- Tailwind CSS to style the secondary containers
- Build custom hooks for different movies list

- GPT search feature
  - GPT search page
  - GPT search bar
  - Multi-lingual feature for GPT search
  - Integrate GPT API
    - Get OpenAI key

# Browse Page

- Main container

  - video playing in the background
  - video name , title, description

- other container
  - movies \* n
  - cards \* n

# Features

user will go to the browse page only after authentication
if user is not logged In, then Login/Sign up page will be display

- when user will Sign In/Sign Up, then will add the user data in redux store and
  nevigate the user to the browse page

* Login/SignUp

  - Sign In and Sign up page
  - post login, will redirect to the browse page

* Browse Page

  - Header
  - Main Movie
    - Trailer playing in the background
    - Title and Description
    - Movie Suggestions
      - Movie list \* N

* Netflix GPT
  - Search bar
  - Movie suggestions
